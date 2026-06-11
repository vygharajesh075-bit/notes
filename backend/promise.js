// import fs from ".fs/miiii"
// let a=await fs.readFile("harry.txt")
// let b= await fs.writeFile("harry.txt","\n\n this si amazing")
// console.log(a.toString())
const fs = require("fs/promises");

async function main() {
    await fs.writeFile("test.txt", "Hello World");
    console.log("File created");
}

main();