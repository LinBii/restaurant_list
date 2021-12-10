# Restaurant List

Restaurant List is a website built with Node.js and Express for users to look for the restaurants they want.

![snapshot_index](./public/snapshots/snapshot_index.png)
![snapshot_view](./public/snapshots/snapshot_view.png)
![snapshot_create](./public/snapshots/snapshot_create.png)

[中文README](README.zh_TW.md)

## Features

* See all the restaurants in the list at a glance
* Show detail information of a restaurant
* Edit detail information of a restaurant
* Add restaurant to the list
* Delete a restaurant from the list
* Gain access to the restaurant through Google map
* Search for specific restaurants by category or name

## Installation and Execution

1. Install Node.js and npm
2. Clone the repository to your local machine
3. Open the repository in your local machine through the Terminal, and run

   ```bash
   npm install
   ```

4. After the installation, run

   ```bash
   npm run start
   ```

5. If you see the message below, it means that Restaurant List works correctly.

   ```bash
   Express is listening on http://localhost:3000
   mongodb connected!
   ```

6. Press ctrl + C to stop the execution


## Technologies

* Node.js 14.16.0
* Express 4.17.1
* Express-Handlebars 4.0.2
* MongoDB
* Mongoose 6.0.14
* Bootstrap 4.2.1
* Font-awesome Latest 5.x