import json
import csv
import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB

class RecommendationModel:
    def __init__(self, wordwhiz_file, game_file="wildHacks.csv"):
        self.game_df = pd.read_csv(game_file)
        self.wordwhiz_file = wordwhiz_file

    def recommend_games(self, incorrect_answer):
        # Extract related games and area of question features
        features = self.game_df[['related_games', 'area_of_question_distraction', 'area_of_question_listening comprehension',
                   'area_of_question_listing comprehension', 'area_of_question_memory', 'area_of_question_organization',
                   'area_of_question_reading fluency', 'area_of_question_spelling']].values.tolist()
    
        # Convert features to string format
        features = [' '.join(map(str, feature)) for feature in features]
    
        # Apply TF-IDF vectorization to the features
        vectorizer = TfidfVectorizer()
        feature_vectors = vectorizer.fit_transform(features)
    
        # Calculate cosine similarity between feature vectors and user's incorrect answer
        user_answer = [incorrect_answer] + ['0']*7
        user_vector = vectorizer.transform([' '.join(user_answer)])
        similarities = cosine_similarity(feature_vectors, user_vector)
    
        # Get indices of top 5 similar games
        indices = similarities.flatten().argsort()[:-6:-1]
    
        # Get the related games for the top 5 indices
        recommended_games = self.game_df.loc[indices, 'related_games'].tolist()
    
        return recommended_games

    def json_to_csv(self, json_file, csv_file):
        with open(json_file, 'r') as f:
            data = json.load(f)

        with open(csv_file, 'w', newline='') as f:
            writer = csv.writer(f)
            writer.writerow(['word', 'user_answer', 'correct'])
            for i in range(len(data['words'])):
                writer.writerow([data['words'][i], data['user_answers'][i], data['correct'][i]])

    def recommend_similar_words(self, json_file, similar_words_file):
        self.json_to_csv(json_file, "user_data.csv")

        # Load data
        data = pd.read_csv("user_data.csv")

        # Create bag-of-words features from user and correct answers
        vectorizer = CountVectorizer(analyzer='char')
        X = vectorizer.fit_transform(data['user_answer'] + str(data['correct']))
        y = data['correct'].values

        # Train a naive Bayes classifier on the bag-of-words features
        clf = MultinomialNB()
        clf.fit(X, y)

        # Use the trained classifier to recommend words with similar patterns
        similar_words = pd.read_csv(similar_words_file)
        similar_words_X = vectorizer.transform(similar_words['word'])
        similar_words_pred = clf.predict(similar_words_X)
        similar_words_recommendation = similar_words[similar_words_pred == 0]['word']

        output = {"words": similar_words_recommendation.tolist()}

        json_output = json.dumps(output)

        return json_output
