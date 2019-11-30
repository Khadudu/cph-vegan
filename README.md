# cph-vegan
The CPH-Vegan app will allow users to sign up and join cooking courses, and a chat functionality will be added to allows users chat and share tips and recipes within the app.
This app is build with Nodejs, Express, EJS and mongodb database using Mongoose. 
So far the app has three get routes: "/" for home, "/subscribe" and "subscribers".It also has post request "/subscribe".
The post request allows users to sign up via a form using their name, email address and postal code. Once the form is filled and submitted, the data is send via http to the database.The get "subscribers" returns all the users signed up in the database.

# How to run the app

Clown the code: Install all the dependencies as cited in the package.json file. 
