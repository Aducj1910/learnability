import json
from flask import Flask, request, jsonify
from recommendation_model import RecommendationModel
from flask_cors import CORS, cross_origin

app = Flask(__name__)
model = RecommendationModel(wordwhiz_file='wordwhiz.json', game_file='wildHacks.csv',)

CORS(app)



@app.route('/', methods=['POST'])
def recommend_similar_words():
    input_json = request.json

    data = {
        "words": input_json['words'],
        "user_answers": input_json['user_answers'],
        "correct": input_json['correct']
    }

    with open('input.json', 'w') as f:
        json.dump(data, f)
    
    recommended_words = model.recommend_similar_words(json_file = 'input.json', similar_words_file='similar_words_list.csv')
    return jsonify(recommended_words)

if __name__ == '__main__':
    app.run(port=8080, debug=True)
