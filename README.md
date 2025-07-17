# 💻 Programming Languages Blog App

A simple blog-style web application built using **Express.js**, **EJS**, and **UUID** where users can:

- 🧠 View a list of programming languages
- ✍️ Create new posts
- 🔍 View detailed post descriptions
- 🗑️ Delete posts

This project is for educational purposes and does not persist data (in-memory only).

---

## 📦 Tech Stack

- **Backend**: Node.js, Express.js
- **Templating**: EJS
- **Unique IDs**: UUID
- **Method Override**: For DELETE functionality
- **Styling**: Custom CSS in `public/style.css`

---

## 📁 Project Structure

project-folder/
├── views/
│ ├── index.ejs # List of all posts
│ ├── new.ejs # Form to add a new post
│ └── show.ejs # View details of one post
│
├── public/
│ └── style.css # Your styling file
│
├── index.js # Main server file
├── package.json
└── README.md # You're here!


---

## 🚀 Installation & Setup

1. **Clone the project or download files**

2. **Navigate to the project directory**:
   ```bash
   cd project-folder

# Initialize npm (if needed)
npm init -y

# Install project dependencies
npm install express ejs uuid method-override

# (Optional) Install nodemon
npm install --save-dev nodemon

# Start the server
node index.js

# OR using nodemon
npx nodemon index.js


| Method | Route                       | Description               |
| ------ | --------------------------- | ------------------------- |
| GET    | /posts                      | Show all posts            |
| GET    | /posts/new                  | Form to create a new post |
| POST   | /posts                      | Create a post             |
| GET    | /posts/\:id                 | View detailed post        |
| DELETE | /posts/\:id?\_method=DELETE | Delete a post using form  |


