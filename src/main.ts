let dataModule = new DataModule()
let renderer: Renderer = new Renderer()

// באיבנט ליסינר לשים את הפונקציה אסינכרונית

$(".gen-butm").on('click', async function () {
    await dataModule.generatAll()
    renderer.userRender(dataModule.person)
    renderer.quoteRender(dataModule.quote)
    renderer.pokemonRender(dataModule.pokemon)
    renderer.meatTextRender(dataModule.meatText)
    renderer.friendsRender(dataModule.person)
})