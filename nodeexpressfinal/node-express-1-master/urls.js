
//1.
const fs = require("fs")
const process = require("process")
// function shopping(path){
//     fs.readFile(path,'utf8',(err,data)=>{
//         if(err){
//             console.log("Error", err)
//             process.exit(1)
//         }
//         console.log(data)
//     });

// }
// shopping(process.argv[2])

// //2. 
// let readline = require('readline');
// let fileCounter = 0;

// const file = "urls.txt";
// readline.createInterface({
//     input: fs.createReadStream(file),
//     terminal: false
// }).on('line', function(line) {
//    let writable = fs.createWriteStream('data/part'+ fileCounter + '.txt', {flags:'w'});
//    writable.write(line);
//    fileCounter++
// //    let url = require('url');
// //    const path = 'data/part';
// //    console.log(url.pathToFileURL(path))
   
// });
const axios = require('axios');
/** read the contents of file, save each line to individual plain text file as hostname of that URL*/
//3.
function processFile(path){
    fs.readFile(path,'utf8',async function(err,data){
        if(err){
            console.error(`Can read file:${err}`)
            process.exit(1);
        }
        console.log(data)
        let urls = data.split('\n').filter(u => u!="")
        console.log(urls)
        for(let url of urls){
            // let res= await axios.get(url)
            // console.log(res)
            let res;
            try{
                res = await axios.get(url);
            }catch{
                console.error(`Cant download ${url}`);
                continue;

            }
            let fileName = new URL(url).hostname;
            fs.writeFile(fileName,res.data,'utf8',function(err){
                if(err){
                    console.error(`Can't write : ${fileName}`);
                }
                console.log(`Complete write:${fileName} `)
            })
        }
        

    })
}
processFile(process.argv[2])