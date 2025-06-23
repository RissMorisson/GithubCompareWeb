from flask import Flask, render_template, request, flash
import requests
import os
from dotenv import load_dotenv

app = Flask(__name__)
app.secret_key = "super_secret_key"

load_dotenv()
GITHUB_TOKEN = os.getenv("GITHUB_TOKEN") or "your_personal_access_token"
headers = {
    "Authorization": f"token {GITHUB_TOKEN}",
    "Accept": "application/vnd.github.v3+json"
}

def fetch_followers(username):
    followers = []
    page = 1
    while True:
        url = f"https://api.github.com/users/{username}/followers?page={page}&per_page=100"
        response = requests.get(url, headers=headers)
        if response.status_code == 404:
            return None
        if response.status_code != 200:
            return False
        data = response.json()
        if not data:
            break
        followers.extend([user["login"] for user in data])
        page += 1
    return sorted(followers)

def fetch_following(username):
    following = []
    page = 1
    while True:
        url = f"https://api.github.com/users/{username}/following?page={page}&per_page=100"
        response = requests.get(url, headers=headers)
        if response.status_code == 404:
            return None
        if response.status_code != 200:
            return False
        data = response.json()
        if not data:
            break
        following.extend([user["login"] for user in data])
        page += 1
    return sorted(following)

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        username = request.form.get("username").strip()
        if not username:
            flash("Please enter a GitHub username.", "error")
            return render_template("index.html")

        followers = fetch_followers(username)
        if followers is None:
            flash(f"User '{username}' not found.", "error")
            return render_template("index.html")
        if followers is False:
            flash("Error fetching followers. Please try again later.", "error")
            return render_template("index.html")

        following = fetch_following(username)
        if following is False:
            flash("Error fetching following. Please try again later.", "error")
            return render_template("index.html")

        not_following_back = [user for user in following if user not in followers]
        not_followed_back = [user for user in followers if user not in following]

        return render_template(
            "index.html",
            username=username,
            followers=followers,
            following=following,
            not_following_back=not_following_back,
            not_followed_back=not_followed_back,
            follower_count=len(followers),
            following_count=len(following),
            not_following_back_count=len(not_following_back),
            not_followed_back_count=len(not_followed_back)
        )

    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)
