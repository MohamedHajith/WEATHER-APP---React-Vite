# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- Step-by-Step Procedure to Retrieve Weather Data using OpenWeatherMap API


- 1. Sign Up for an API Key:

Before proceeding, ensure you have signed up for an account on the OpenWeatherMap website (https://openweathermap.org/). If you haven't already done so, create an account and log in.

Once logged in, navigate to the API Keys section of your account dashboard. Here, you'll be able to generate a new API key. Click on the "Generate" or "Create API Key" button to obtain your unique API key. Ensure you keep this key secure as it will be used to authenticate your requests.

- 2. Construct the API Request URL:

After obtaining your API key, create a file named .env in the root directory of your project. This file will store sensitive information like your API key.

Inside the .env file, define a variable to hold your API key. For example:

- API_KEY=your_api_key_here

In your code, you can access this API key by using environment variables, depending on the programming language or framework you are using.

