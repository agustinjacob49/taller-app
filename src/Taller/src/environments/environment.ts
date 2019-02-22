// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBm4VFFbpUhLdsUQsJ9vj5nA2BTItKUgGE",
    authDomain: "firechat-cc4cc.firebaseapp.com",
    databaseURL: "https://firechat-cc4cc.firebaseio.com",
    projectId: "firechat-cc4cc",
    storageBucket: "firechat-cc4cc.appspot.com",
    messagingSenderId: "182930280185"
  }
};
