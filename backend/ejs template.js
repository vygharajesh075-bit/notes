// 🧠 What is EJS?

// EJS = Embedded JavaScript Templates

// In EJS, you write HTML + JavaScript together.

// 👉 Example idea:

// <h1>Hello <%= name %></h1>

// Server sends name, EJS injects it into HTML.

// 🎯 Why use EJS?
// Dynamic pages (data changes)
// Clean separation (HTML + logic)
// Easy loops, conditions
// Used with Express.js
// ⚙️ Step 1: Setup Project
// npm init -y
// npm install express ejs
// 📁 Project Structure
// project/
// │
// ├── server.js
// └── views/
//     ├── index.ejs
//     ├── about.ejs
//     └── partials/
//         ├── header.ejs
//         └── footer.ejs

// 👉 views/ is where EJS files live

// 🚀 Step 2: server.js (FULL CODE)
// import express from "express";

// const app = express();

// // set view engine
// app.set("view engine", "ejs");

// // route
// app.get("/", (req, res) => {
//     const user = "Vygha";
//     const fruits = ["Apple", "Mango", "Banana"];

//     res.render("index", { user, fruits });
// });

// // another route
// app.get("/about", (req, res) => {
//     res.render("about");
// });

// app.listen(3000, () => {
//     console.log("Server running on http://localhost:3000");
// });
// 🧾 Step 3: index.ejs
// <!DOCTYPE html>
// <html>
// <head>
//     <title>Home</title>
// </head>
// <body>

//     <h1>Hello <%= user %> 👋</h1>

//     <h2>Fruits List:</h2>

//     <ul>
//         <% fruits.forEach(fruit => { %>
//             <li><%= fruit %></li>
//         <% }) %>
//     </ul>

// </body>
// </html>
// 🧾 Step 4: about.ejs
// <h1>About Page</h1>
// <p>This is about page</p>
// 🔥 EJS Syntax (VERY IMPORTANT)
// 1️⃣ Output value
// <%= user %>

// 👉 prints value

// 2️⃣ JavaScript logic
// <% if (user) { %>
//    <h1>Hello</h1>
// <% } %>

// 👉 runs JS but doesn’t print

// 3️⃣ Raw HTML (dangerous ⚠️)
// <%- htmlContent %>

// 👉 prints HTML without escaping

// 🔁 Loop Example
// <% for(let i=0; i<fruits.length; i++) { %>
//     <li><%= fruits[i] %></li>
// <% } %>
// 🔀 Condition Example
// <% if (user === "Vygha") { %>
//     <h2>Welcome Admin</h2>
// <% } else { %>
//     <h2>Welcome Guest</h2>
// <% } %>
// 🧩 Partials (Reusable Components)
// header.ejs
// <header>
//     <h1>My Website</h1>
// </header>
// footer.ejs
// <footer>
//     <p>Footer here</p>
// </footer>
// Use in index.ejs
// <%- include("partials/header") %>

// <h2>Main Content</h2>

// <%- include("partials/footer") %>

// 👉 This avoids repeating code 🔥

// 🎨 Passing Data

// From server:

// res.render("index", {
//     user: "Vygha",
//     age: 18
// });

// In EJS:

// <p>Age: <%= age %></p>
// 📂 Static Files (CSS, Images)

// Add this in server.js:

// app.use(express.static("public"));

// Structure:

// public/
//    style.css

// Use in EJS:

// <link rel="stylesheet" href="/style.css">
// ⚠️ Common Errors
// ❌ Cannot find view

// 👉 Make sure:

// folder name is views
// file name is correct
// ❌ Undefined variable

// 👉 You forgot to pass data:

// res.render("index", { user: "Vygha" });
// ❌ Mixing syntax
// {/* <%= if(user) %> ❌ wrong */}