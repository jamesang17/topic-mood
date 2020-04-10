# topic-mood
Simple UI where a user can input and visualize sentiment around a certain topic from tweets on twitter.

This app works in conjunction with the [Airflow-App](https://github.com/jamesang17/airflow-app) project.

### Tech Stack
[Express](https://expressjs.com/), [Axios](https://github.com/axios/axios), [React](https://reactjs.org/), [Re-Charts](https://recharts.org/en-US/), [Material-UI](https://material-ui.com/), [AWS API Gateway](https://aws.amazon.com/api-gateway/), [AWS Lambda](https://aws.amazon.com/lambda/)

### Description
The app uses Express as the backend to handle api calls to airflow's REST API via the request handler axios.
Axios is also used to send requests to AWS API Gateway to interact with DynamoDB.
Data gets pulled from both DynamoDB and Airflow MySQL database and is rendered on the UI.

### Functionality
The user can
- trigger dags on Airflow from the UI
- view past airflow runs
- view sentiment data results
- view a specific topic's sentiment results
