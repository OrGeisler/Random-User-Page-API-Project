class Renderer{

    userRender(person:Person){
        console.log("hello")
        $('.user-container').append($(`<div>${person.firstName}</div>`))

    }

}