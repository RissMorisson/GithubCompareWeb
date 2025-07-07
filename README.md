# GitHub Follower Comparator

A simple web application designed to help you compare followers and following lists of any GitHub user. By entering a GitHub username, you can easily identify who among the people you follow aren't following you back, and who among your followers you haven't followed back.

## Live Demo

You can access the deployed application here:

[![Live Demo](https://img.shields.io/badge/Live_Demo-00C7B7?logo=netlify)](https://github-compare-web.vercel.app/)
[![GitHub Stars](https://img.shields.io/github/stars/RissMorisson/GithubCompareWeb?style=social)](https://github.com/RissMorisson/GithubCompareWeb/stargazers)

## Features

* **GitHub User Search:** Enter any GitHub username to get an instant analysis of their followers and following.
* **Identify Non-Followers Back:** Clearly see a list of users you follow who do not follow you in return.
* **Identify Non-Following Back:** Discover users who follow you but you do not follow back.
* **Interactive Filtering & Search:** Filter user lists by username length or alphabetical range for easier navigation.
* **Responsive UI:** A user-friendly interface with real-time search functionality and a dark/light theme toggle.
* **Comprehensive Statistics:** Get quick counts of total followers, total following, non-followers back, and non-following back.

## Technologies Used

* **Backend:**
    * [Python](https://www.python.org/)
    * [Flask](https://flask.palletsprojects.com/) - Web framework for Python.
    * [Requests](https://requests.readthedocs.io/en/latest/) - For making HTTP requests to the GitHub API.
    * [python-dotenv](https://pypi.org/project/python-dotenv/) - For loading environment variables from a `.env` file.
    * [Gunicorn](https://gunicorn.org/) - A production-ready WSGI HTTP Server for Unix.

* **Frontend:**
    * [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML)
    * [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) (with [Tailwind CSS](https://tailwindcss.com/)) - For utility-first styling.
    * [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - For interactive UI elements and client-side logic.
    * [Font Awesome](https://fontawesome.com/) - For icons.
