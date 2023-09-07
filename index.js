// const os = require("os");
// console.log(os.type());
// console.log(os.platform());

// Node learning

//  const interval = setInterval(()=>{
//     console.log("Running");
//  },1000)

// setTimeout(function(){
//         clearInterval(interval)
// },5000)


// let name1 = "my name is \"anand\""

// console.log(name1);

// console.log(__filename);
// console.log(__dirname);


// const path = require("Path");
// console.log(path);
// const path = require("path");

// console.log(path.parse(__filename).ext);


// const greet = (name)=>{
//     console.log(`Hey  there ${name}`);
// }
// greet("anand")
// greet('thousiff')

// console.log(global);
// global.setTimeout(() => {
//     console.log('in the timeout');
//     clearInterval(test);
// },3000);
// const test = setInterval(()=>{
//     console.log("Hiiii :) "); 
// },1000)

// const people = ['anand','deechu','jyoo','harii'];
// const ages = [1,2,3,4,5,6];
// console.log(people);

// module.exports = {
//     people,ages,
// }







//file sysytem

//reading files

const fs = require('fs')

// fs.readFile('./blogs/blog.txt',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });


//writing files
// fs.writeFile('./blogs/blog.txt',"blahhh bhu hahahah",()=>{
//     console.log('file was written');
// })
// console.log("time check");

//directories

if(!fs.existsSync('./assets')){
fs.mkdir('./assets',(err)=>{
    if(err){
        console.log(err);
    }
    console.log("folder created");
})
 }
 else{
    fs.rmdir('./assets',(err)=>{
        if(err){
            console.log(err);
        }
        console.log("folder deleted");
    })
}

//Deleting files 

// if(fs.existsSync('./blogs/deleteme.txt')){
//     fs.unlink('./blogs/deleteme.txt',(err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log("File deleted");
//     })
// }


//Stream and buffer

// const fs = require('fs')

// const readStream = fs.createReadStream('./blogs/blogs1.txt',{encoding: "utf8"});
// const writeStream = fs.createWriteStream('./blogs/incomingfile.txt')
// readStream.on('data',(chunk)=>{
//     console.log("-----NEW CHUNK-----");
//     console.log(chunk);
//     // writeStream.write('\n----NEW CHUNK-----\n');
//     writeStream.write(chunk);
// });

 //piping
 
// readStream.pipe(writeStream);