const janji = new Promise((resolve, reject) => {
    const isPay = false

    if(isPay){
        return resolve("wes bayar")
    }else{
        reject("dereng bayar")
    }
})

// janji
// .then((value) => console.log(value))
// .catch((error) => console.log(error))
async function asywait(){
    try{
        const response = await janji
        console.log(response)
    }catch(error){
        console.log(error)
    }
}
asywait()