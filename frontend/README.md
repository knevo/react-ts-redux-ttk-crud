# CRUD - React TS RTK 
A small sedric clone made with CRA TS template.
Store is setup with redux and redux-observable as an async actions middleware.
Using google firebase sevices like firestore, hosting, authentication.

## Project directory structure <a id="directory-structure"></a>

```
.
+-- assets        // images, icons, audio etc.
+-- cmps          // internal components (anything other than page component)
+-- hooks         // Common reusable hooks
+-- pages         // page components
+-- types        // interface types used in app
+-- mocks         // json data mocks for entities
+-- styles        // style consts 
+-- services      // REST API, storage, entity services, etc.
+-- store         // Redux store
|   +-- actions   // action creators used by the app
|   +-- reducers  // redux reducers
|   index.ts      // store configuration entry point
|   types.ts      // store related types
+-- App.tsx       // main component
+-- index.tsx     // Entry point for the whole app
+-- index.css     // main css file 
+-- route.const.ts    // Routes and router middleware

```
---


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

### `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
