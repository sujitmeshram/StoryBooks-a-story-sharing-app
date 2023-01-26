# StoryBooks

> Create public and private stories from your life

This app uses Node.js and Express.js for backend and MongoDB for database with Google OAuth for authentication. (Login with google)

## Usage

Add your mongoDB URI and Google OAuth credentials to the config.env file

for Google OAuth Follow all steps carefully:

1.  Go to [Google Cloud Console] (https://console.cloud.google.com/) 
2.  API's and Services ( Google + API) 
3.  then go to ->Credentials
4.  Create Credentials and then Select OAuth Client ID
6.  Fill required information and use Google Client ID and Google Client Secret

```
# Install dependencies
npm install

# Run in development
npm run dev

# Run in production
npm start
```
