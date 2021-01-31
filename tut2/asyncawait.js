function Clown(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("msg")
        },2000)
    })
}

async function msg(){
    const msg = await Clown()
    console.log("Message :",msg)
}

msg()