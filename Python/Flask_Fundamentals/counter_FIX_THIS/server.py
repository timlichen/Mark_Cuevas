from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = 'MySecretKey'


@app.route('/')
def index():
  count = 0
  return render_template("index.html")
  count += 1
  print count

app.run(debug=True)