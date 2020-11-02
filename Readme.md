### Step 6

Now we use a loader. Let's look at Vue-Loader. It's both very complicated as far as loaders go, but it also shows just how powerful Webpack can be. Vue-Loader enables Single File Components. If Webpack didn't have Loaders then single file components either wouldn't exist, or the Vue developers would go need to figure out how to compile JS, HTML, and CSS from SFCs.

```
$ npm i -D vue-loader vue-template-compiler
$ npx webpack
```

Did everything work?
