from flask import Flask
from flask import request, escape, render_template

app = Flask(__name__, template_folder="templates")

@app.route("/")
def index():
    return render_template("home.html")

def findPatient():
    name = str(escape(request.args.get("patientName", "")))
    print(name)

@app.route("/<int:findpatient>")
def patientDataFrom(name):
    """Gets patient data."""
    data = 1
    return str(data)






if __name__ == "__main__":
    app.run(debug=True)

