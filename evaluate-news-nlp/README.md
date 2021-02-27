# Project Aim
The aim of this project is to render a single page web application which uses principles of NLP to analyze a written text (e.g. a news article).

# Required skills

The project was built with the use of:
- Node for setting up the webserver
- Express for routing
- Build tool: Webpack, webpack loaders and plugins for bundling project files
- Sass for styling
- Service workers for offline content
- APIs offered by meaning cloud
- Url in input field is validated with regex
- Jest is used for testing javascript

The starter code of the project was provided by Udacity and can be found in this repo: https://github.com/udacity/fend/tree/refresh-2019 (Projects--->evaluate-news-nlp)

# Steps followed

## Start and Webpack configuration  
Fork and download starter code. Correct set up npm in the project folder. Set up Webpack following the configuration used through Udacity's Nanodegree lecture on the topic.

## API configuration
Register on meaningcloud. Save API_KEY and encrypt it before using it. API request set up on server side and client side. Set up URL for fetch request following the documentation on meaningcloud

## Jest framework for testing
Set up Jest to test the javascript on the client side

## Service Workers
Project uses service workers to make webpage available offline.

## Deploying
The next step will be that of deploying the project wiht [Heroku](https://www.heroku.com/)
