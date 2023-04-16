from flask import Flask, request, jsonify
from RecommendationModel import recommend_similar_words
import json

app = Flask(__name__)

@app.route('/recommend_similar_words', methods=['POST'])
def run_recommendation_model():
    input_json = request.get_json()
    output_json = recommend_similar_words(input_json, "similar_words_list.csv")
    return jsonify(output_json)

if __name__ == '__main__':
    app.run(port=8080, debug=True)
