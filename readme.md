# lEarn-Preact

Laying hands on Preact to understand what it provides

## Setup

    Following /setup.md will help you in getting up and running from scratch

At the time of development following was the version of dependencies:

"preact": "^10.26.9"
"@babel/core": "^7.28.0",
"@babel/preset-env": "^7.28.0",
"@babel/preset-react": "^7.27.1",
"@prefresh/webpack": "^4.0.3",
"babel-loader": "^10.0.0",
"html-webpack-plugin": "^5.6.3",
"webpack": "^5.100.2",
"webpack-cli": "^6.0.1",
"webpack-dev-server": "^5.2.2"

## first step with preact

Open src/index.js
clean all content and import h, render and Component from preact

create an App class with render expecting prop greetingsTo and utilize it to return an html element with hello to greetingsTo.

finally call render with params App with prop greetingsTo and document.body or any root where it is to be added.

## Next

Type of components
