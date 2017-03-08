'''
Import Flask to allow us to create our app.

Global variable __name__ tells Flask whether
or not we are running the file directly, or 
importing it as a module.

The "@" symbol designates a "decorator" which attaches the following
function to the '/' route. This means that whenever we send a request to
localhost:5000/ we will run the following "hello_world" function.

Return 'Hello World!' to the response.
Run the app in debug mode.
'''

from flask import Flask, render_template

app = Flask(__name__)

# home page
@app.route('/')

def hello_world():
  return render_template("index.html", name="Mark")
app.run(debug=True)


# success page
@app.route('/success')

def success():
  return render_template('success.html')

