## Description

This project is my attempt at tackling a full-stack application (however it's still incomplete). I decided that for the frontend I wanted to learn the component library MaterialUI (still in the process of understanding how it works), but maybe in the future I might (once again for studying purposes) switch it up and use a library like "styled components" or "Tailwind CSS". I attempted to create a design in Figma, for the first time, for the website in order to use as a reference while implementing the design, but that is still a work in progress. My backend is written in Koa, to change it up from using the Express library, and I have an SQLite database to store my data, however the structure of my individual SQL tables is incomplete and I will need to add more tables in the future to accomodate new features I would like to add, like an authentication system. It was fun to learn how to create separate layers in the frontend codebase so that I can create a separation of concerns, my code in the API layer only deals with calling my backend API endpoints and receiving the data, then my Hooks layer would grab that data and pass it on to whatever presentational component would like to get it and display it. I'm excited to figure out what new challenges this project has in store and i'm excited to do my best to try and solve them.

## Available Scripts

In the project, you can run:

### `npm start` in the <ins>root directory</ins> of the project

This will run the frontend codebase of the project

### `npm start` in `book-vault/server` directory of the project

This will run the NodeJS backend server with SQLite database

