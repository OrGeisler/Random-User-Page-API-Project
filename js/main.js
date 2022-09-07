"use strict";
let dataModule = new DataModule();
let renderer = new Renderer();
// באיבנט ליסינר לשים את הפונקציה אסינכרונית
dataModule.personGenerator().then(value => {
    dataModule.person = value;
    renderer.userRender(dataModule.person);
    console.log(dataModule.person);
});
dataModule.pokemonGenerator().then(value => {
    dataModule.pokemon = value;
    console.log(dataModule.pokemon);
});
dataModule.quoteGenerator().then(value => {
    dataModule.quote = value;
    console.log(dataModule.quote);
});
dataModule.randomMeatText().then(value => {
    dataModule.meatText = value;
    console.log(dataModule.meatText);
});
//# sourceMappingURL=main.js.map