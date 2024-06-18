from flask import Flask, render_template
from dotenv import load_dotenv
import os

load_dotenv() 

app = Flask(__name__)

@app.route('/')
def index():
    config = {
        "apiKey": os.getenv('FIREBASE_API_KEY'),
        "authDomain": os.getenv('FIREBASE_AUTH_DOMAIN'),
        "projectId": os.getenv('FIREBASE_PROJECT_ID'),
        "storageBucket": os.getenv('FIREBASE_STORAGE_BUCKET'),
        "messagingSenderId": os.getenv('FIREBASE_MESSAGING_SENDER_ID'),
        "appId": os.getenv('FIREBASE_APP_ID'),
        "measurementId": os.getenv('FIREBASE_MEASUREMENT_ID')
    }
    
    return render_template('signIn.html', config=config)

@app.route('/register')
def signup():
    config = {
        "apiKey": os.getenv('FIREBASE_API_KEY'),
        "authDomain": os.getenv('FIREBASE_AUTH_DOMAIN'),
        "projectId": os.getenv('FIREBASE_PROJECT_ID'),
        "storageBucket": os.getenv('FIREBASE_STORAGE_BUCKET'),
        "messagingSenderId": os.getenv('FIREBASE_MESSAGING_SENDER_ID'),
        "appId": os.getenv('FIREBASE_APP_ID'),
        "measurementId": os.getenv('FIREBASE_MEASUREMENT_ID')
    }
    return render_template('register.html', config=config)

@app.route('/welcomePage')
def welcome():
    config = {
        "apiKey": os.getenv('FIREBASE_API_KEY'),
        "authDomain": os.getenv('FIREBASE_AUTH_DOMAIN'),
        "projectId": os.getenv('FIREBASE_PROJECT_ID'),
        "storageBucket": os.getenv('FIREBASE_STORAGE_BUCKET'),
        "messagingSenderId": os.getenv('FIREBASE_MESSAGING_SENDER_ID'),
        "appId": os.getenv('FIREBASE_APP_ID'),
        "measurementId": os.getenv('FIREBASE_MEASUREMENT_ID')
    }
    return render_template('welcomePage.html', config=config)


if __name__ == '__main__':
    app.run(debug=True)
