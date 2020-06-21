const { response } = require("express")

console.log("Client side")




fetch('/weather?address=boston').then((response)=>{
    response.json().then((data) =>{
        console.log(data.location)
    })

}
)

const weatherform = document.querySelectorO('form')
const search = document.querySelectorO('input')
weatherform.addEventListener('submit',(e)=>{

    e.preventDefault()
    console.log('Testing')
    const location = search.value
    console.log(location)
}
)