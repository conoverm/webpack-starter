## Step 2

We have not installed anything related to Webpack yet. We've just changed our directory structure a little, adding `/src` and `/dist`. Those directories are standard for Webpack. When bundling by default, Webpack will look in `/src/` and output to `/dist`. You can see when deploying our application we may *only* deploy `/dist` and have our server *only* server from `/dist`.

We installed lodash to our project.