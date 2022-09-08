let dataModule = new DataModule()
let renderer: Renderer = new Renderer()

$(".gen-butm").on('click', async function () {
    await dataModule.generatAll()
    renderer.RenderAll(dataModule)
})

$(".save-butm").on('click',function () {
    dataModule.saveToLocalStorage(dataModule)
})

$('.load-butm').on('click',function() {
        dataModule.loadFromLocalStorage()
        renderer.RenderAll(dataModule.loadedUser)
    })
