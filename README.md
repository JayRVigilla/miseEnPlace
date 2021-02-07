# Mise en place: *everything* in it's place
Well, probably not really everything, but the things I use often. I'm creating a boilerplate for React projects. I've grabbed components from [React Boilerplate](https://github.com/react-boilerplate/react-boilerplate) and components created in other projects that I use often. This will grow as my projects change. This is set up for Personal/Business webpages.



This project was initially bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Features

### @MISE@
Search for `@MISE@` throughout this project to see all the places tagged for personal/project-specific values. Some are obvious, like the title and icon in `index.html`, but there are other values too.
### EmailJS
[EmailJS](https://www.emailjs.com/) sends mail from JavaScript without a server!
### Surge
[Surge](https://surge.sh/) let's you deploy front-end projects for free! You can create a `.sh` address, use a domain you own, or use the random one they would otherwise generate for you. You need to get an account and set up your computer with Surge. Available for use as scripts in package.json.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run demo`
Runs `npm run build` and deploys demo on Surge. You need to create values for demo URL in package.json.

### `npm run deploy`
Runs `npm run build` and deploys via Surge. You need to create values for client URL in package.json.