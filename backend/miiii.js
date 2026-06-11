const fs=require("fs")
// console.log(fs)
// fs.writeFileSync("harry.txt","Harry is a good boy")

fs.writeFile("harry2.txt","Harry is a good boy",()=>{
    console.log("Helllo")
    fs.readFile("harry2.txt",(error,data)=>{
        console.log(error,data.toString)
    })
})
fs.appendFile("harry2.txt","harrryrobo",(e,d)=>{
    console.log(d)
    console.log(e) 
    
})
console.log("ending")

