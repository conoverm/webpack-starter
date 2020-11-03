### Step 8

Let's get that CSS compiling in SFCs so we can wrap up.

```
$ npm ci
```

Let's check on a package that is not explicitly listed in `package.json`.
```
$ npm ls vue-style-loader
webpack-starter@1.0.0 /Users/matthew/webpack-intro/webpack-starter
└─┬ vue-loader@15.9.5
  └── vue-style-loader@4.1.2
```

`vue-style-laoder` is part of the `vue-loader` package, we don't have to explicitly list it in our project. It's the Vue team's fork of `style-loader`.

```
$ npm i -D css-loader
$ npx webpack
```

This should have succeeded. Finally, let's look at `/dist/index.html`. Do we see the HelloWorld Vue component?

Nope. Why? Does the reason have to do with Webpack?
