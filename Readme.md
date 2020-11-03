## Step 3

We install Webpack and use it!

```
$ npm i
$ npx webpack
```

Look in dist for `main.js`. Check at the size of our application.

It's so large because we've imported the entire lodash library in `index.js`. We're only using `_.join`.

Let's try a destructuring import to see if that makes `main.js` smaller.

swap:
```
import _ from 'lodash';
with:
import { join } from 'lodash-es';
```
and:
```
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  with:
  element.innerHTML = join(['Hello', 'webpack'], ' ');
```

and then:
```
$ npx webpack
```

Did it help the size of the application?

We can use Webpack to slim down all our bundled assets in a variety of ways. Tree shaking, the LodashPlugin, and using a package specifically for bundling only what we need. We're going to do that because it's very easy demonstrate.