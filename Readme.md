### Step 5

Not going to go into depth here on "development" mode, but let's just turn it on and see what happens.

In `/webpack.config.js` we set Webpack to do it's business in dev mode. We could use:
```
$ npx webpack --mode=development
```
but this way we get our first Webpack config file.

Run `npx webpack` and then inspect `/dist`.

Here's further reading on dev mode. It's how you, as an application developer, will spend the majority of your time so it's good to be well-acquainted with it.
https://v4.webpack.js.org/guides/development/