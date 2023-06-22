# DragonLearn (2023 Northwestern Wildhacks)

A Web App to make learning fun for those with Dyslexia.

WildHacks Project Link - https://dashboard.wildhacks.net/project/#OUBC

<img src="https://github.com/Aducj1910/learnability/assets/62986699/8e83e249-1816-45a0-b047-576aa9f06f7c" width="500" alt="348300968_1408209569976819_7256586170634223898_n">

Project Demo - https://youtu.be/d4f05AS1Cig

# Languages and Frameworks:
- ReactJS
- TailwindCSS
- Python
- Flask
- Cosine Similarity
- Naive Bayes Classifier

## Gamemodes:
Currently, our site contains of 3 targeted mini-games: WordWhiz, SwipeSight, SpellSafari. 
Each game targets a specific skill set or struggle that dyslexic kids commonly face in an interactive, fun way -- a way that allows them to feel normal 
while fighting the condition.

- WordWhiz displays a word for a certain amount of time and prompts the user to enter the word after it vanishes. As the user continues to play, our machine learning model, which utilizes the naive Bayes classification model, finds words that they have difficulty spelling or missing and suggests words that could contain similar patterns. This game targets reading, writing, and spelling difficulties, a major struggle of dyslexia.

- SwipeSight helps dyslexic children with memory retention by showing them three images and then presenting ten images, asking them to identify which ones were present in the original set of three. The user swipes right for new pictures and swipes left for familiar ones. This game primarily targets memory, which is one of the biggest issues for victims of dyslexia.

- SpellSafari is an adventure mini-game that targets language and phonological processing issues. Prompted with similar words, the user receives points if they choose the correct word and will continue to be prompted by such words as they advance levels and the words get harder to distinguish in a time constrain.

## Features:
To motivate kids to keep fighting these struggles, we implemented a collectible feature where kids can collect Dragon Cards, which help them unlock new levels and characters. To reward improving performance and consistent practice, each game rewards you more coins that allow them to purchase collectibles from the Shop.

## How it Works:
When the user first enters the app, they are prompted with a form to create a personalized plan to tackle their specific issues with dyslexia. Such a form was built using React.JS and Tailwind CSS for the styling. Additionally, the form stores user data in the form of a CSV to be processed by the game recommendation model.

The game recommendation model takes the mistakes that the user made, finds specific patterns in the user's mistakes, and recommends our specific mini-games that target those issues. This model was created using a content-based filtering recommendation system derived by cosine similarity. The model works by comparing the user's response to the features of the mini games in the dataset. It uses cosine similarity to determine how closely the user's response matches the features of each mini game. The mini games with the highest cosine similarity scores are recommended to the user. Our model measured at a 90% accuracy on larger datasets using the Mean Squared Error (MSE) measurements. Such a model was implemented using SciKit Learn's feature extraction libraries in Python.

The word recommendation model for the WordWhiz game takes in a JSON file of the words that the user is tested on, the user responses, and whether or not they got it correct. With these words and responses, we preprocess the data and pass it through a naive Bayes classifier through SciKit Learn in Python. Naive Bayes classifier takes the words and the user responses together, identifying patterns in the words that the user is getting wrong. Once the naive Bayes classifier is trained based on the user responses, it is used on a list of hundreds of words that are difficult for dyslexic kids to read to find which words match the most common missed patterns of the user. Those words are returned in a JSON file and passed back into the frontend to continue the game with more similar words to ensure they are getting personalized practice.

All 3 of our mini games are created in React.JS and designed by Tailwind CSS. Additionally, for the WordWhiz game, we required communication between the machine learning for recommending similar words in the backend and the words being passed in at the front end. We deployed a Flask API that passes the backend an input JSON file with the user answers, words in question, and correctness, runs the machine learning model on the data from the JSON file. 

## Contact
Email us at:

* amitav554@gmail.com

* ysguta@wisc.edu

* nst@wisc.edu

* acjin@wisc.edu
