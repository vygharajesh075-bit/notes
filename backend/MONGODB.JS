// 🧠 What is MongoDB?

// MongoDB is a database used to store data.

// But unlike traditional databases (tables, rows, columns), MongoDB stores data as:

// 👉 Documents (JSON-like format)

// 🆚 SQL vs MongoDB (quick clarity)
// SQL (MySQL) 🧱	MongoDB 📦
// Tables	Collections
// Rows	Documents
// Columns	Fields
// Fixed schema	Flexible schema
// 📦 Example Data
// SQL:
// id | name | age
// 1  | Vygha | 18
// MongoDB:
// {
//   "name": "Vygha",
//   "age": 18,
//   "skills": ["C++", "JS"]
// }

// 👉 You can even add new fields anytime:

// {
//   "name": "Vygha",
//   "age": 18,
//   "hobby": "coding"
// }

// No strict structure needed 🔥

// 🧩 Core Concepts (VERY IMPORTANT)
// 1️⃣ Database

// Container of collections
// 👉 Example: collegeDB

// 2️⃣ Collection

// Group of documents
// 👉 Example: students

// 3️⃣ Document

// Actual data (JSON object)

// {
//   "name": "Rahul",
//   "age": 20
// }
// ⚙️ How MongoDB Works
// App → MongoDB → Data stored as documents

// You send queries → MongoDB returns matching data

// 🔍 CRUD Operations (Core of everything)
// 🟢 Create
// db.students.insertOne({ name: "Vygha", age: 18 })
// 🔵 Read
// db.students.find()
// 🟡 Update
// db.students.updateOne(
//   { name: "Vygha" },
//   { $set: { age: 19 } }
// )
// 🔴 Delete
// db.students.deleteOne({ name: "Vygha" })
// 🌍 What is MongoDB Compass?

// MongoDB Compass is a GUI (Graphical User Interface) for MongoDB.

// 👉 Instead of typing commands, you can:

// See databases visually 👀
// Add/edit/delete data with clicks 🖱️
// Run queries easily
// 🎨 Think like this

// MongoDB = Engine 🚗
// Compass = Dashboard + Steering wheel 🎛️

// 📸 What you see in Compass
// 1️⃣ Databases list

// All your databases

// 2️⃣ Collections

// Inside each database

// 3️⃣ Documents view

// Shows JSON data

// 4️⃣ Query bar

// Filter data like:

// { "age": 18 }
// 🚀 How to Use MongoDB + Compass (Step-by-step)
// 1️⃣ Install MongoDB

// Download from:

// MongoDB official site

// 2️⃣ Install Compass

// Download:

// MongoDB Compass download

// 3️⃣ Open Compass

// Connection string:

// mongodb://localhost:27017

// Click Connect

// 4️⃣ Create Database
// Click Create Database
// Name: myDB
// Collection: users
// MongoDB isn’t just a fancy storage box. It’s the memory of your app 🧠
// Without it, your backend is like a goldfish: it forgets everything the moment a request ends.

// Let’s anchor this clearly.

// 🧠 What is the use of MongoDB?

// MongoDB is used to store, manage, and retrieve data permanently.

// 👉 In simple words:
// It keeps your app’s data safe so it can be used later.

// 🎯 Why do we need it?

// Imagine your app without a database:

// let users = [];
// User signs up → stored in array
// Server restarts → 💀 data gone

// 👉 That’s useless for real apps.

// 💾 With MongoDB
// db.users.insertOne({ name: "Vygha", age: 18 });
// Data stored on disk ✅
// Server restarts → data still there ✅
// Multiple users → all saved ✅

// 👉 Now your app has memory 🔥

// 📦 Real-life uses
// 1️⃣ User accounts 👤
// username
// password
// email
// 2️⃣ Login systems 🔐

// Check if user exists:

// User.find({ email: "abc@gmail.com" })
// 3️⃣ Social apps 📱
// posts
// comments
// likes
// 4️⃣ E-commerce 🛒
// products
// orders
// payments
// 5️⃣ Any app with data 😄

// If your app stores something → you need a databa
// “Playground” in MongoDB is like a practice arena where your queries come to life ⚡
// No clicking buttons, no guesswork, just you and your code talking directly to the database.

// Let’s unpack it properly.

// 🧠 What is MongoDB Playground?

// In MongoDB, a Playground is a place where you can:

// 👉 Write JavaScript-style queries
// 👉 Run them instantly
// 👉 See results immediately

// It’s available inside tools like MongoDB Compass and also in VS Code extension.

// 🎯 Why Playground exists

// Instead of:

// clicking buttons ❌
// manually inserting documents ❌

// You can:

// write code once ✅
// run multiple operations ✅
// test logic quickly ✅
// ⚙️ What does a Playground look like?

// A file like this:

// use("myDB");

// // insert data
// db.users.insertOne({
//   name: "Vygha",
//   age: 18
// });

// // read data
// db.users.find();

// // update
// db.users.updateOne(
//   { name: "Vygha" },
//   { $set: { age: 19 } }
// );

// 👉 You click Run ▶️ and everything executes.

// 🔥 Key Features
// 1️⃣ Multiple operations in one file

// You can:

// insert
// read
// update
// delete

// All together.

// 2️⃣ JavaScript-like syntax
// const name = "Vygha";

// db.users.insertOne({ name });

// 👉 feels like coding, not commands

// 3️⃣ Instant output

// After running:

// db.users.find();

// 👉 You see results immediately below

// 4️⃣ Safe testing environment

// You can experiment without breaking your main app

// 🧪 Real Example (Important)
// use("collegeDB");

// // insert many students
// db.students.insertMany([
//   { name: "A", age: 20 },
//   { name: "B", age: 21 }
// ]);

// // find students above 20
// db.students.find({ age: { $gt: 20 } });

// // update one
// db.students.updateOne(
//   { name: "A" },
//   { $set: { age: 22 } }
// );

// // delete one
// db.students.deleteOne({ name: "B" });

// 👉 This is like a mini script for database operations

// 🧠 Playground vs Compass UI
// Feature	Playground ⚡	Compass UI 🖱️
// Style	Code	Click
// Speed	Fast	Slower
// Flexibility	High	Limited
// Best for	Developers	Beginners
// ⚡ Playground vs Mongo Shell
// Playground	Mongo Shell
// GUI-based	Terminal
// easier to read	more raw
// saved scripts	temporary
// 🧩 Where you’ll use it
// testing queries
// debugging data
// learning MongoDB
// writing quick scripts
// 🧠 Simple analogy

// Playground = coding notebook 📓 for your database

// try ideas
// run experiments
// see results instantly
// ⚠️ Important note

// Playground is NOT required to run MongoDB
// 👉 It’s just a tool to make your life easier