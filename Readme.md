## Step 4

Hey, `main.js` was big. Even though we imported join using destructuring we got all of the lodash library anyway. That seriously bloated the application.

Here, we'll swap lodash from lodash-es, which means "Lodash using ES Modules", then rebuild the application.

```
$ npm i
$ npx webpack
```

Look at the size of `/dist/main.js` now.