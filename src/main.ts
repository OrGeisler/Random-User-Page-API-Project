let dataModule = new DataModule()
let renderer: Renderer = new Renderer()

$(".gen-butm").on('click', async function () {
    await dataModule.generatAll()
    renderer.RenderAll(dataModule)
})

$(".save-butm").on('click',function () {
    localStorage.setItem(`${dataModule.person.firstName}`, JSON.stringify(dataModule))
    console.log(localStorage)
})