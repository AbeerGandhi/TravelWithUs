import pandas as pd
from flask import Flask, render_template, request, jsonify
from sklearn.neighbors import NearestNeighbors
from sklearn.preprocessing import OneHotEncoder
from geopy.distance import geodesic
from geopy.geocoders import Nominatim
import warnings
from flask_cors import CORS  # Import CORS

app = Flask(__name__)
CORS(app)
warnings.filterwarnings("ignore")

# Initialize Flask app

@app.route('/')
def home():
    return render_template('index.html')
# Dataset with coordinates (latitude, longitude)
data_places = {
    "Name": [
        "Goa", "Manali", "Rishikesh", "Agra", "Jaipur",
        "Shimla", "Darjeeling", "Alleppey", "Varanasi", "Amritsar",
        "Mysore", "Ooty", "Andaman and Nicobar Islands", "Lakshadweep",
        "Jaisalmer", "Leh", "Pondicherry", "Kanyakumari", "Shillong", "Coorg",
        "Mumbai", "Bengaluru", "Chennai", "Kolkata", "Hyderabad",
        "Nashik", "Ajmer", "Kodaikanal", "Mahabaleshwar", "Khajuraho",
        "Udaipur"
    ],
    "State": [
        "Goa", "Himachal Pradesh", "Uttarakhand", "Uttar Pradesh", "Rajasthan",
        "Himachal Pradesh", "West Bengal", "Kerala", "Uttar Pradesh", "Punjab",
        "Karnataka", "Tamil Nadu", "Andaman and Nicobar Islands", "Lakshadweep",
        "Rajasthan", "Jammu and Kashmir", "Puducherry", "Tamil Nadu", "Meghalaya", "Karnataka",
        "Maharashtra", "Karnataka", "Tamil Nadu", "West Bengal", "Telangana",
        "Maharashtra", "Rajasthan", "Tamil Nadu", "Maharashtra", "Madhya Pradesh",
        "Rajasthan"
    ],
    "Type": [
        "Beach", "Mountain", "Place of God", "Historical", "Historical",
        "Mountain", "Mountain", "Beach", "Religious", "Historical",
        "Cultural", "Mountain", "Beach", "Beach",
        "Desert", "Mountain", "Beach", "Place of God", "Mountain", "Mountain",
        "City Life", "City Life", "City Life", "City Life", "City Life",
        "Historical", "Religious", "Mountain", "Hill Station", "Historical",
        "Historical"
    ],
    "Climatic Condition": [
        "Tropical", "Cold", "Tropical", "Temperate", "Temperate",
        "Cold", "Cold", "Tropical", "Tropical", "Temperate",
        "Tropical", "Tropical", "Tropical", "Tropical",
        "Desert", "Cold", "Tropical", "Tropical", "Cold", "Tropical",
        "Tropical", "Tropical", "Tropical", "Tropical", "Tropical",
        "Tropical", "Tropical", "Cold", "Cold", "Temperate",
        "Temperate"
    ],
    "Latitude": [
        15.2993, 32.2432, 30.0869, 27.1767, 26.9124,
        31.1048, 27.0360, 9.4981, 25.3176, 31.6340,
        12.2958, 11.4064, 12.7411, 10.3280,
        26.9157, 34.1526, 11.9416, 8.0883, 25.5788, 12.3375,
        19.0760, 12.9716, 13.0827, 22.5726, 17.3850,
        19.9975, 26.4499, 10.2381, 17.9282, 24.8318,
        24.5854
    ],
    "Longitude": [
        74.1240, 77.1887, 78.2676, 78.0081, 75.7873,
        77.1734, 88.2627, 76.3388, 82.9739, 74.8723,
        76.6394, 76.6950, 92.6586, 72.7846,
        70.9168, 77.5771, 79.8083, 77.5385, 91.8933, 75.8066,
        72.8777, 77.5946, 80.2707, 88.3639, 78.4867,
        73.7898, 74.6399, 77.4892, 73.6550, 79.9199,
        73.7125
    ]
}

# Create DataFrame
df_places = pd.DataFrame(data_places)

# One-Hot Encoding for categorical features
encoder = OneHotEncoder(sparse_output=False)
encoded_features = encoder.fit_transform(df_places[['Type', 'Climatic Condition']])

# Create a DataFrame for the encoded features
encoded_df = pd.DataFrame(encoded_features, columns=encoder.get_feature_names_out())

# Add location data (latitude, longitude) to encoded features
encoded_df['Latitude'] = df_places['Latitude']
encoded_df['Longitude'] = df_places['Longitude']

# Prepare feature matrix (excluding latitude and longitude)
X = encoded_df.drop(columns=['Latitude', 'Longitude'])

# Create a k-NN model
knn = NearestNeighbors(n_neighbors=5, metric='euclidean')
knn.fit(X)

# Helper function to calculate the geographic distance between two locations
def calculate_distance(loc1, loc2):
    return geodesic(loc1, loc2).kilometers

# Define budget based on distance
def determine_budget(distance):
    if distance < 500:
        return {"Budget": "Low (By Road)", "Cost Range (INR)": "(2,000 - 5,000)"}
    elif 500 <= distance < 1500:
        return {"Budget": "Medium (By Train)", "Cost Range (INR)": "(5,000 - 15,000)"}
    else:
        return {"Budget": "High (By Flight)", "Cost Range (INR)": "(15,000 - 30,000)"}

# Function to convert location name to latitude and longitude
def get_lat_lon(location_name):
    geolocator = Nominatim(user_agent="location_converter")
    location = geolocator.geocode(location_name)
    if location:
        return (location.latitude, location.longitude)
    else:
        raise ValueError(f"Location '{location_name}' not found.")

@app.route('/recommend', methods=['POST'])
def recommend():
    # Retrieve the JSON data from the request
    user_preferences = request.json
    user_location_name = user_preferences['location']  # Use 'location' instead of 'user_location'

    try:
        user_location = get_lat_lon(user_location_name)

        user_input = pd.DataFrame({
            'Type': [user_preferences['type_of_place']],
            'Climatic Condition': [user_preferences['climatic_condition']]
        })

        user_encoded = encoder.transform(user_input)

        distances, indices = knn.kneighbors(user_encoded)
        recommended_places = df_places.iloc[indices[0]].copy()

        for index, row in recommended_places.iterrows():
            distance = calculate_distance(user_location, (row['Latitude'], row['Longitude']))
            budget_info = determine_budget(distance)
            recommended_places.at[index, 'Budget'] = budget_info['Budget']
            recommended_places.at[index, 'Cost Range (INR)'] = budget_info['Cost Range (INR)']

        filtered_recommendations = recommended_places[
            (recommended_places['Type'] == user_preferences['type_of_place']) &
            (recommended_places['Climatic Condition'] == user_preferences['climatic_condition'])
        ]

        if not filtered_recommendations.empty:
            return jsonify({"recommendations": filtered_recommendations.to_dict(orient='records')})

        return jsonify({"message": "No recommendations found."})

    except ValueError as e:
        return jsonify({"message": str(e)}), 400


if __name__ == '__main__':
    app.run(debug=True)
