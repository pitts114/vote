# vote
A place to post polls and vote on them! A freeCodeCamp project.
https://vote-jp.herokuapp.com/

## Setup
1. Clone
1. `cd <clone directory>`
1. Create a file named `.env`, paste/replace the following:
```
PORT=<port>
MONGO_URI=mongodb://localhost:27017/<database name>
SESSION_SECRET=<youe secret>
GITHUB_KEY=<your github app key>
GITHUB_SECRET=<your github app secret key>
APP_URL=<your app url (or localhost for development)>
```
1. `npm install`
1. `cd client && npm install && npm run build`
1. `cd .. && npm start`
1. Navigate to `http://localhost:<port>` in your web browser.
