const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});
// app.get('/blog/l',(req,res)=>{
//     res.send('Hello mongo')
// })
app.get('/blog/:slug/:second',(req,res)=>{
    res.send('hello ${req.params.slug} ${req.params.second} ')
})
app.get('/abou/:slug',(req,res)=>{
  res.send(`${req.params.slug}`)
})
app.post('/index',(req,res)=>{
    res.send( "Hello Worls")
})
app.put('/blog/i',(req,res)=>{
  res.send('Heyy')
})
app.get('/ind',(req,res)=>{
    res.sendFile( 'template/ind.html',(root__dirname))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// mm


// It gives you:

// Ability to run JS on server
// File system access
// Networking (HTTP, TCP)
// Core modules like fs, http, path

// 👉 But it is very low-level.
// If you want a web server, you must write a lot of manual code.

// Example (Node HTTP server):

// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end("Hello from Node");
// });

// server.listen(3000);
// 🚀 Express.js (the framework on top)

// Express.js is a web framework built on Node.js that makes building web apps and APIs much easier.

// It gives you:

// Routing (GET, POST, etc.)
// Middleware system
// Cleaner request/response handling
// Built-in structure for APIs

// Example (same server in Express):

// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello from Express");
// });

// app.listen(3000);

// Notice how much cleaner that is.
// These are part of the URL path itself.

// Example:
// /users/42

// Here:

// 42 is a route parameter
// In Express.js (Node.js framework) 🌿

// Express.js

// app.get("/users/:id", (req, res) => {
//   console.log(req.params.id); // 42
// });
// Think of it like:

// “Give me the specific thing”

// /users/42 → user with id 42
// /products/10 → product 10
// Key traits:
// Required in the route
// Defines identity of resource
// Used for “which item?”
// 🔎 2. Query Parameters (Query Strings)

// These come after ? in the URL.

// Example:
// /users?role=admin&active=true
// In Express.js:
// app.get("/users", (req, res) => {
//   console.log(req.query.role);   // admin
//   console.log(req.query.active); // true
// });
// Think of it like:

// “Filter or adjust what I want”

// Sorting
// Filtering
// Searching
// Pagination
// Common patterns:
// /products?category=phone
// /products?sort=price&order=asc
// /users?page=2&limit=10
// ⚖️ 3. Core Difference
// Feature	Route Params	Query Params
// Location	/users/1	/users?x=1
// Purpose	Identify resource	Filter / modify results
// Required?	Usually yes	Optional
// Structure	Clean path	Key-value pairs
// Express access	req.params	req.query