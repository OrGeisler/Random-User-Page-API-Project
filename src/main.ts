let dataModule = new DataModule()
let renderer: Renderer = new Renderer()

$(".gen-butm").on('click', async function () {
    await dataModule.generatAll()
    // console.log(dataModule)
    renderer.RenderAll(dataModule)
})

$(".save-butm").on('click',function () {
    if (localStorage.length === 0) {
        localStorage.setItem('userArry', JSON.stringify([dataModule]))
        console.log(localStorage)
    }
    else{
        const userArry = JSON.parse(localStorage.userArry)
        // console.log(userArry)
        userArry.push(dataModule)
        localStorage.clear()
        localStorage.setItem('userArry', JSON.stringify(userArry))
        // console.log(localStorage)
    }
})

$('.load-butm').on('click',function() {
    if (localStorage.length>0) {
        const localStorageObject = JSON.parse(localStorage.userArry)
        const userLoaded = new DataModule()
        userLoaded.person = localStorageObject[0].person
        userLoaded.pokemon = localStorageObject[0].pokemon 
        userLoaded.quote = localStorageObject[0].quote 
        userLoaded.meatText = localStorageObject[0].meatText
        console.log(userLoaded)
        renderer.RenderAll(userLoaded)
            }

    })
