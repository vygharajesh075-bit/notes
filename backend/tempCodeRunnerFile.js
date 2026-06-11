// app.listen(3000, () => {
//     console.log("Server running on port 3000");
// }); 
// In Express.js, middleware lets you separate common logic from your main code.

// Instead of repeating the same checks in every route, you plug them into a reusable pipeline.

// 🎯 Why we actually use middleware
// 1️⃣ To avoid repeating code (BIGGEST reason)

// Without middleware:

// app.get('/profile', (req, res) => {
//     console.log("Request received");
//     // auth check
//     // validation
//     res.send("Profile");
// });

// app.get('/dashboard', (req, res) => {
//     console.log("Request received");
//     // auth check again 😩
//     res.send("Dashboard");
// });

// 👉 Same logic repeated everywhere = messy

// With middleware:

// app.use((req, res, next) => {
//     console.log("Request received");
//     next();
// });

// Now it runs for ALL routes automatically ✨

// 2️⃣ To handle authentication 🔐

// Instead of writing login checks in every route:

// const auth = (req, res, next) => {
//     if (req.headers.token === "valid") {
//         next();
//     } else {
//         res.send("Unauthorized");
//     }
// };

// app.get('/dashboard', auth, (req, res) => {
//     res.send("Welcome");
// });

// 👉 Clean. Reusable. Powerful.

// 3️⃣ To process data before it reaches your logic

// Example: JSON parsing

// app.use(express.json());

// Without this, req.body is undefined 😶

// Middleware prepares the data before your route even sees it.

// 4️⃣ To control flow like a pipeline 🚰

// Middleware creates a chain:

// Request → Logger → Auth → Validation → Route → Response

// Each layer has one job.
// This keeps code organized instead of one giant messy function.

// 5️⃣ For logging & debugging 🧾
// app.use((req, res, next) => {
//     console.log(req.method, req.url);
//     next();
// });

// 👉 Helps you track what's happening in your server

// 6️⃣ For error handling 💥
// app.use((err, req, res, next) => {
//     res.status(500).send("Error occurred");
// });

// 👉 One place to handle all errors instead of everywhere

// 7️⃣ For scalability (this is what companies care about)

// Imagine a big app:

// 100+ routes
// login system
// admin checks
// APIs

// Without middleware → chaos 🧨
// With middleware → structured system 🧩

// 🧠 Simple Analogy (stick this in your brain)

// Middleware = filters in Instagram 📸

// Raw image = request
// Filters = middleware (auth, logging, validation)
// Final image = response

// You don’t edit the photo in one giant step.
// You apply layers.

// ⚡ When NOT to use middleware

// Don’t overuse it for:

// very small one-time logic
// route-specific tiny operations

// Otherwise your app becomes a maze 🌀