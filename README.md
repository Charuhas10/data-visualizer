# Data Visualizer

###

This project is a Feedback Analytics Dashboard built with React.js. It allows users to submit feedback data via a form or an Excel file and visualize the analysis results using bar charts.

## Features

- Submit feedback data (reservation ID and rating) through a form or an Excel file
- Perform analysis on the feedback data
- Visualize the feedback data using bar charts
- Display average rating, minimum rating, and maximum rating in the charts

## How to Use

1. After running the project, you will see the following page:

2. First option will lead you to the following page where you can submit feedback data through a form:

3. Second option will lead you to the following page where you can submit feedback data through an Excel file of the following format:

4. After submitting the feedback data, you can press the "Analyse" button to perform analysis on the feedback data and visualize the results using bar charts:

## API Endpoints

- `POST /api/form` - Submit feedback data through a form
- `POST /api/excel` - Submit feedback data through an Excel file
- `GET /api/analytics` - Perform analysis on the feedback data and return the results
- `GET /api/getData` - Return all feedback data

## Technologies Used

- React.js
- Chart.js
- Axios
- MongoDB (backend)
- Flask (backend API)
