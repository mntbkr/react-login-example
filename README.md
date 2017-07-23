This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Instructions to run

This app assumes use of [yarn](https://yarnpkg.com/), npm should also work fine.  However dependencies are only locked with yarn, and npm may cause inconsistent results from newer dependencies being used then this app was tested with.

After cloning this repository to your local computer, install dependencies by running:

### `yarn`
or
### `npm install`

once dependencies have been installed you can run the app with the following command:

### `yarn start`
or
### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `yarn build`
or
### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

## Instructions to login

Logins are faked against a json file found in `src -> Store -> Models -> Login -> credentials.js`

Any user/pass found in that file will work for a login, for a quick test you can try:

## User: test
## Pass: 1234