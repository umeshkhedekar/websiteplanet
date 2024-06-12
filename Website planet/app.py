
from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Dummy data for example purposes
users = {"user1": "password123"}

@app.route('/')
def index():
    return render_template('par.html')

@app.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']
    
    if username in users and users[username] == password:
        return "Login successful"
    else:
        return "Login failed", 401

if __name__ == '__main__':
    app.run(debug=True)
