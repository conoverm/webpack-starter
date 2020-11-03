### Step 9

No, it really didn't have anything to do with Webpack. We need to instantiate our Vue application and we're done.

In `/src/index.js` we add:
```
new Vue({
  render: h => h(HelloWorld),
}).$mount(`#vue`);
```

In `/dist/index.html` right after `<body>` we add:
```
    <div id="vue"></div>
```

then:
```
$ npx webpack
```
Open `/dist/index.html` in a browser and you should see the original tiny "component" we started with and the new Vue application.


