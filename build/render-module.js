"use strict";
class Renderer {
    userRender(person) {
        const userEle = $(".user-container");
        var scource = $("#user-template").html();
        var template = Handlebars.compile(scource);
        var newHTML = template({
            firstName: person.firstName,
            lastName: person.lastName,
            city: person.city,
            state: person.state,
            image: person.picture,
        });
        userEle.empty().append(newHTML);
    }
    quoteRender(quote) {
        const quoteEle = $(".quote-container");
        var scource = $("#quote-template").html();
        var template = Handlebars.compile(scource);
        var newHTML = template({ quote: quote.quote });
        quoteEle.empty().append(newHTML);
    }
    pokemonRender(pokemon) {
        const pokemonEle = $(".pokemon-container");
        var scource = $("#pokemon-template").html();
        var template = Handlebars.compile(scource);
        var newHTML = template({ image: pokemon.image, pokemon: pokemon.name });
        pokemonEle.empty().append(newHTML);
    }
    meatTextRender(text) {
        const meatEle = $(".meat-container");
        var scource = $("#meat-template").html();
        var template = Handlebars.compile(scource);
        var newHTML = template({ text: text.text });
        meatEle.empty().append(newHTML);
    }
    friendsRender(person) {
        const friendsEle = $(".friends-container");
        var scource = $("#friends-template").html();
        var template = Handlebars.compile(scource);
        var newHTML = template(person.friends);
        friendsEle.empty().append(newHTML);
    }
    RenderAll(user) {
        this.userRender(user.person);
        this.friendsRender(user.person);
        this.meatTextRender(user.meatText);
        this.pokemonRender(user.pokemon);
        this.quoteRender(user.quote);
    }
}
//# sourceMappingURL=render-module.js.map