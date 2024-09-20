from flask import Flask, request, render_template, make_response, jsonify
import markupsafe
from dietplan import dietRecommend

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/process-data/', methods=["GET", "POST"])
def process_data():
    inputs = request.form.to_dict()
    age = (int)(inputs.get('age'))
    gender = inputs.get('gender')
    weight = (int)(inputs.get('weight'))
    height = (int)(inputs.get('height'))
    lifestyle = inputs.get('lifestyle')
    need = inputs.get('need')

    res = {
        "diet_plan": dietRecommend(age, gender, weight, height, lifestyle, need)
    }
    print(res)
    res = make_response(jsonify(markupsafe.Markup(res)), 200)
    return res

if __name__ == '__main__':
    app.run(port=9090)
