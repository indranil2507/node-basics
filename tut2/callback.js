function getMessage(msg,callback){
    setTimeout(()=>{
        console.log(msg);
        callback();

    },1000)
}
function displayMessage(){
    console.log("message");
}

getMessage("message-1",displayMessage)