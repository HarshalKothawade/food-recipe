from flask import Flask, jsonify, request
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

API_KEY = "da7daf5af015463c831fa834d3ecff0c"

@app.route("/")
def home():
    return "Flask API Running 🚀"

@app.route("/api/recipes")
def get_recipes():
    query = request.args.get("query")

    url = f"https://api.spoonacular.com/recipes/complexSearch?apiKey={API_KEY}&query={query}"

    response = requests.get(url)

    return jsonify(response.json())

@app.route("/api/recipe/<int:recipe_id>")
def recipe_info(recipe_id):

    url = f"https://api.spoonacular.com/recipes/{recipe_id}/information?apiKey={API_KEY}"

    response = requests.get(url)

    return jsonify(response.json())

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)