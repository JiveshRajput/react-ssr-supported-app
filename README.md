# Server Side Rendering in React
Server Sider Rendering React: You will get complete package of React app served from Server Side. All images, css, js, font files are serving properly.

It is SEO friendly as you can change Titles, Descriptions, and other SEO tags.

### Changes for index.html
Add <headertags></headertags> in head tag. So that the server will automatically change the title and meta tags for final serve.


### For Development
1. Open server/index.js
2. Change: const app = require("./app2").default; (app2.js file is used for development phase)
3. Then create build package. Run command: npm run build
4. Then Start CRA client: Run Command: npm run start
5. Then Start CRA server: Run Command: npx cra-universal start

Then open http://localhost:8080 in your browser. 
(Default port set to 8080, you can change it in server/index.js)

### For Production run on local system:
1. Open server/index.js
2. Change: const app = require("./app").default; (app.js file is used for production/deployment phase) Don't make changes if Line 1 is same as given.
3. Then create build package. Run command: npx cra-universal build. This command will build both client and server and put them into `./dist`
4. Now run commands: cd dist then npm install --force
5. Now run command: node server/bundle.js

Now your server is started on the port provided in the server/index.js (Default port is 8080);

### For Deployment:
1. First, follow the Production guide mentioned above.
2. ince the bundle used Webpack Node Externals, you need to run npm install --production on the copied /dist, but this time you don't need to install its devDependencies
3. Use process manager like PM2 to run your server, your run target is ./dist/server/bundle.js


For more Reference go to: https://www.npmjs.com/package/cra-universal