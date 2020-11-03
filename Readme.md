### Step 8

Let's get that CSS compiling in SFCs so we can wrap up.

```
$ npm ci
$ npm ls vue-style-loader
```

`vue-style-laoder` is part of the `vue-loader` package, we don't have to explicitly list it in our project.

```
$ npm i -D css-loader
$ npx webpack
```

This should have succeeded. Finally, let's look at `/dist/index.html`. Do we see the HelloWorld Vue component?

Nope. Why? Does the reason have to do with Webpack?
