from flask import Flask, jsonify, request
import os, json, random
import webbrowser

from flask_cors import CORS


app = Flask(__name__)
CORS(app)

@app.route("/quote")
def get_quote():
    quote_id = request.args.get("id")
    
    SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
    json_url = os.path.join(SITE_ROOT, "app.json") 
    with open(json_url) as f:
        data = json.load(f)

    if quote_id:
        quote_id = int(quote_id)
        for q in data:
            if q["id"] == quote_id:
                return jsonify(q)
    
    return jsonify(data) 

if __name__ == "__main__":
    url = "http://localhost:5000/quote"
    webbrowser.open(url)  # opens default browser
    app.run(debug=True, use_reloader=False)
