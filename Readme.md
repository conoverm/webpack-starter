### Step 7

No! Nothing worked! We ran `npx webpack` and nothing happened. What's the deal, we added Vue-Loader to Webpack config, why didn't the SFC compile into `main.js`?

Well, we added Vue-Loader, and the Vue component, but we never told Webpack to specifically look for that asset to bundle.

The question here is: We didn't? How's that? The new Vue component is sitting in `/src` and Webpack looks in `/src` for stuff to compile right?

Yes and no. By default, Webpack looks for `/src/index.js` as the "entrypoint" for the application. Everything Webpack is going to compile needs to be referenced by `index.js` or by all nodes of `index.js`. That would be the "dependency graph".

The other option would be to specifically list `/src/HelloWorld.vue` as an entrypoint. In Webpack config that would look like:
```
  entry: [
    './src/index.js',
    './src/HelloWorld.vue'
  ],
```

In most applications you naturally build a dependency graph. It looks like this in `/src/index.js`:
```
import { join } from 'lodash-es';
import HelloWorld from './HelloWorld.vue';
```

And then:
```
$ npx webpack
```

Oh, no a new error. It's just not working! You probably got output like this:
```
$ npx webpack
[webpack-cli] Compilation finished
assets by status 1.14 KiB [cached] 1 asset
orphan modules 836 KiB [orphan] 646 modules
cacheable modules 5.97 KiB
  ./src/index.js + 8 modules 5.93 KiB [built] [code generated]
  ./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/HelloWorld.vue?vue&type=style&index=0&lang=css& 44 bytes [built] [code generated] [1 error]

ERROR in ./src/HelloWorld.vue?vue&type=style&index=0&lang=css& (./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/HelloWorld.vue?vue&type=style&index=0&lang=css&) 18:0
Module parse failed: Unexpected token (18:0)
File was processed with these loaders:
 * ./node_modules/vue-loader/lib/index.js
You may need an additional loader to handle the result of these loaders.
|
|
> .example {
|   color: red;
| }
 @ ./src/HelloWorld.vue?vue&type=style&index=0&lang=css& 1:0-130 1:146-149 1:151-278 1:151-278
 @ ./src/HelloWorld.vue 4:0-70
 @ ./src/index.js 2:0-42

webpack 5.1.3 compiled with 1 error in 2060 ms
```

Well, we have to deal with this otherwise our application just isn't going to compile.

On a hunch, let's look at `/dist/main.js` really quick. Near the end of the pretty printed file we see:
```
    }({
      data: () => ({
        msg: "Hello world!"
      })
    }, e);
    r.options.__file = "src/HelloWorld.vue", r.exports
```

That's Vue stuff! It did compile! It just failed with the CSS block in the SFC. We need to tell Webpack there's going to be CSS whenever it's dealing with SFCs.
