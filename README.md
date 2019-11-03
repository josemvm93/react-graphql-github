## React + Graphql + Github Client
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Features

* React with create-react-app
* Hooks
* Responsive
* React Router
* Apollo with GitHub GraphQL API
  * Queries
  * Hooks
  * Pagination
  
## Overview

* src/Conexion
    * ApolloClient: Conexion with Github GraphQL
* src/Common
    * Common components for the entire project
    * constants
        * Access to the routes
* src/App
    * Each module contains its own components, queries and fragments. Example:
        * Home
        * User
        * Repository
 
## Installation

* `git clone git@github.com:josemvm93/react-graphql-github.git` or
`git clone https://github.com/josemvm93/react-graphql-github.git`
 * `cd react-graphql-github`
* add your own [GitHub personal access token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) in a .env file in your root folder
  * scopes/permissions you need to check: admin:org, repo, user
  * REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN=xxxXXX
* npm install
* npm start
* visit `http://localhost:3000`
## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
