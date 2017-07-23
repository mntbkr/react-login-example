## Instructions to run

This app assumes use of [yarn](https://yarnpkg.com/), npm should also work fine.  However dependencies are only locked with yarn, and npm may cause inconsistent results from newer dependencies being used then this app was tested with.

First clone this repo to your local computer:

### `git clone https://github.com/mntbkr/react-login-example.git`

After cloning this repository to your local computer, move into the newly created directory:

### `cd react-login-example`

Install dependencies by running:

### `yarn`

Once dependencies have been installed you can run the app with the following command:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Instructions to login

Logins are faked against a json file found in `src -> Store -> Models -> Login -> credentials.js` [link](https://github.com/mntbkr/react-login-example/blob/master/src/Store/Models/Login/credentials.js)

Any user/pass found in that file will work for a login, for a quick test you can try:

## `User: test`
## `Pass: 1234`

<hr>

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).