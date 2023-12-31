# Watch Score

Watch Score is a web application designed to allow movie enthusiasts to engage with a community of users by sharing their thoughts, reviews, and comments on various movies. It provides a platform for users to create, discover, and discuss movies within an interactive environment.
More than just a review platform, the app celebrates diverse perspectives and opinions on movies. It encourages users to express their unique viewpoints, acknowledging that each movie resonates differently with every viewer.

# Technologies Used:
## FrontEnd
- **React** was used for building the front end of the project. 

- **Tailwind CSS** was used for stuling and UI design. Tailwind CSS is a utility-first CSS framework that allows for rapid UI development by composing utility classes.

- **React Hot Toast** employed for displaying toast notifications, React Hot Toast provides a user-friendly way to show error messages, success notifications, and other alerts to users.
## BackEnd:
- **SoftUni Practice Server** The backend of the application is powered by SoftUni Practice Server.
## Form Handling and Validation:
- **Formik** Used for managing form state in React applications, Formik simplifies form building and validation by handling form submission, validation, and error handling.
- **Yup** Integrated with Formik, Yup is a JavaScript schema builder for value parsing and validation.
## Hosting
- **Firebase** was used for hosting the project.

# How It Works
## Account Creation and Authentication:
- Users register to create personalized accounts, gaining access to the app's features.
- Authentication ensures a secure space for users to interact within the app.
## Creating Movie Posts:
- Authenticated users contribute by creating detailed movie posts, including essential movie information such as title, year, genre, and an image URL.
- They also share their personal reviews and thoughts on the movie.
# Post Managment:
- Users can revisit and edit their posts to update information or refine their reviews.
- Users have the option to remove their posts if necessary.
# Interacting with Posts:
- Authenticated users engage with the community by leaving comments on other users' movie posts.
- Comments serve as a platform for discussions, diverse perspectives, and interactions among users.
  
# Starting The Project
## Prerequisites:
- Node.js intalled on your machine
## Clone Repository
```bash
git clone https://github.com/mishoZaykov/react-project.git
```
## Navigate to the Client Directory
```bash
cd client
```
### Install Dependecies
```bash
npm install
```
### Start the Development Server
```bash
npm run dev
```
Once the server has started, access the application by visiting http://localhost:5173 in your web browser.

**Or you can click the link https://watchscore-ac915.web.app/ to get to the site, but you still need to start the server!**

## Navigate to the Server Directory
```bash
cd server
```
### Install Dependecies
```bash
npm install
```
### Start the Server
```bash
node /server.js
```
Ensure that the server is running without any errors. It should be accessible at the specified endpoints for handling backend operations at http://localhost:3030/

You can also check out the repository for the server: 
- https://github.com/softuni-practice-server/softuni-practice-server
