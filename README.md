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

* **Deployment:**
    * [Vercel](https://vercel.com/)
    * [GitHub](https://github.com/) - Version control and hosting the repository.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* [Python 3.x](https://www.python.org/downloads/) installed on your system.
* [Git](https://git-scm.com/downloads) installed.

### Installation and Local Setup

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/RissMorisson/GitHubFollowerComparator.git](https://github.com/RissMorisson/GitHubFollowerComparator.git)
    cd GitHubFollowerComparator
    ```

2.  **Create a Virtual Environment (Recommended):**
    ```bash
    python -m venv venv
    # Activate the virtual environment:
    # On Windows:
    # venv\Scripts\activate
    # On macOS/Linux:
    # source venv/bin/activate
    ```

3.  **Install Dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

4.  **Configure Environment Variables:**
    This application requires a GitHub Personal Access Token to fetch data from the GitHub API.

    * Create a new file named `.env` in the root directory of your project.
    * Obtain your GitHub Personal Access Token. Ensure the token has at least the `read:user` scope to access public user data. You can generate one from your [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens).
    * Add the following line to your `.env` file, replacing `YOUR_GITHUB_TOKEN` with your actual token:
        ```dotenv
        GITHUB_TOKEN=YOUR_GITHUB_TOKEN
        ```
    *Note: The `.env` file is already listed in your `.gitignore` and will not be committed to your public repository.*

5.  **Run the Flask Application:**
    You can run the application using Flask's development server:
    ```bash
    flask run
    ```
    Or, for a more robust local setup (closer to production), use Gunicorn:
    ```bash
    gunicorn app:app
    ```

6.  **Access the Application:**
    Open your web browser and navigate to `http://127.0.0.1:5000` (or the port indicated by Flask).

## Project Structure

To maintain a clean and organized codebase, the project follows this structure:

```bash
GitHubFollowerComparator/
├── .env
├── .gitignore
├── app.py
├── Procfile
├── requirements.txt
├── static/
│   ├── styles.css
│   ├── script.js
│   └── assets/
│       └── screenshot-comparator.png
└── templates/
└── index.html
```

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

Distributed under the MIT License. See [LICENSE](https://github.com/RissMorisson/GithubCompareWeb/blob/main/LICENSE) for more information.

## Contact

[RissMorisson](https://github.com/RissMorisson)

---
