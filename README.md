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


![1](https://github.com/Charuhas10/data-visualizer/assets/72398218/bc5b24c2-9a88-4de0-8449-af22e7c1f556)

2. First option will lead you to the following page where you can submit feedback data through a form:


![2](https://github.com/Charuhas10/data-visualizer/assets/72398218/3378257d-918a-4233-b272-9e703b83e80f)

3. Second option will lead you to the following page where you can submit feedback data through an Excel file of the following format:


![3](https://github.com/Charuhas10/data-visualizer/assets/72398218/70ced70d-bc6c-4dc9-97c7-099528910c6a)


![4](https://github.com/Charuhas10/data-visualizer/assets/72398218/186514c4-ada0-492a-8199-89af03984a29)

4. After submitting the feedback data, you can press the "Analyse" button to perform analysis on the feedback data and visualize the results using bar charts:


![5](https://github.com/Charuhas10/data-visualizer/assets/72398218/771b54e0-27e9-422b-85de-00065b496814)


![6](https://github.com/Charuhas10/data-visualizer/assets/72398218/aabc48d0-e318-4b8b-ac74-3a93187f8c11)

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
