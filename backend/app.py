from flask import Flask, jsonify
import os, json, random
import webbrowser


app = Flask(__name__)

@app.route("/quote")
def get_quote():
    SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
    json_url = os.path.join(SITE_ROOT, "app.json") 
    with open(json_url) as f:
        data = json.load(f)
    return jsonify(data)  

if __name__ == "__main__":
    url = "http://localhost:5000/quote"
    webbrowser.open(url)  # opens default browser
    app.run(debug=True, use_reloader=False)
