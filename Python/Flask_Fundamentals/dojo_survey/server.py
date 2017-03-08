from flask import Flask, render_template, request, redirect, url_for
app = Flask(__name__)

# our index route will handle rendering our form
@app.route('/')
def index():
    return render_template("index.html");
  
# the form selection goes here
@app.route('/users', methods=['POST'])
def create_user():
   
    name = request.form['name']
    location = request.form['location']
    language = request.form['language']
    comment = request.form['comment']

    print name
    print location
    print language
    print comment

    return render_template("users.html", name = name, location = location, language = language, comment = comment)

app.run(debug=True) # run our server