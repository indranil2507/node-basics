const fs = require('fs')
fs.mkdir('folder_example',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Folder created successfully");
        fs.writeFile('./folder_example/example','123',(err)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log("file created successfully");
                
            }
        })
    }
})