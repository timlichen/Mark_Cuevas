from flask import Flask, render_template

app = Flask(__name__)

# /
@app.route('/')
def greeting():
  return render_template("index.html")


# /ninjas
@app.route('/ninjas')
def ninjas():
  return render_template("ninjas.html")


# /dojos/new
@app.route('/dojos/new')
def dojos():
  return render_template("dojos.html")


# We run this once, at the end
app.run(debug=True)