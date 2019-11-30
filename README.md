# cph-vegan
The CPH-Vegan app will allow users to sign up and join cooking courses, and a chat functionality will be added to allows users chat and share tips and recipes within the app.
This app is build with Nodejs, Express, EJS and mongodb database using Mongoose. 
So far the app has three get routes: "/" for home, "/subscribe" and "subscribers".It also has post request "/subscribe".
The post request allows users to sign up via a form using their name, email address and postal code. Once the form is filled and submitted, the data is send via http to the database.The get "subscribers" returns all the users signed up in the database.

## How to run the app

Clown the code: Install all the dependencies as cited in the package.json file. To test the communication between the app and the mongodb, install a local mongodb community version, create a database and replace the line "mongodb://localhost:27017/recipe_db" in the main.js file with the created db in your local database. Send requests from the browser to test the various get and post requests:

<ul>
  <li>http://localhost:3000/  -  returns the static home page with information about the cph-vegan app</li>
  <li>http://localhost:3000/contact  -  returns the form that users can sign up with; with name, address and zipcode</li>
  <li>http://localhost:3000/subscribers  -  returns the entire users in the database</li>
</ul>

The app still lacks user authentification, further APIs and chat functionality which will be added in the next week.


