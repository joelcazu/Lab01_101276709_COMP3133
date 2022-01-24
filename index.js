// const csv = require('csv-parser');
const fs = require('fs');

var readStream = fs.createReadStream('input_countries.csv')
var msg = ''

//Data Event
readStream.on('data', (rawDat) => {
    console.log(`Data Event called:  ${rawDat.toString()}`) 
    msg += rawDat.toString()
})

//Error Event
readStream.on('error', (err) => {
    console.log(`Error: ${err}`)
})

//End Event
readStream.on('end', () =>{
    console.log(`Message : ${msg}`)
    console.log("Read Stream End")
})

// fs.writeFileSync('input_countries.csv', title)
// fs.appendFileSync('input_countries.csv', '\n Canada,1985,23456778')
// fs.appendFileSync('input_countries.csv', '\n United States')



fs.readFile('input_countries.csv', (err, data) => {
    console.log(data.toString())
})


console.log("-----START - 1 --- ")

//Read  File Async
fs.readFile("input_countries.csv", (err, data) =>{
    if(err){ 
        console.log(err)
        return
    }
    console.log(data.toString())
})

console.log("---- END - 1 --- ")

//Read Sync 
console.log("-----START - 2 --- ")
var data = fs.readFileSync("input_countries.csv")
console.log(data.toString())

console.log("---- END - 2 --- ")


//Write Data Async
var str = "canada,1985,23456778"
fs.writeFile('canada.txt', str, (err)=>{
    confirm.log("Data written succesfully")
})

var str = "usa,1977,2357543236"
fs.writeFile('usa.txt', str, (err)=>{
    confirm.log("Data written succesfully")
})



//Write Data Sync
//fs.writeFileSync()

//Append data to file Async
str = "\ncanada,1986,23457589"
fs.appendFile('canada.txt', str, ()=>{
    console.log("Data appended written successfully...")
})