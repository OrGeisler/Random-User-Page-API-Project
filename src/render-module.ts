class Renderer{

    userRender(person:Person){
        const userEle = $('.user-container')
        var scource = $('#user-template').html()
        var template = Handlebars.compile(scource)
        var newHTML = template({firstName: person.firstName , lastName: person.lastName
                       , city:person.city , state:person.state , image:person.picture });
        userEle.empty().append(newHTML)
    }

    quoteRender(quote:Quote){
        const quoteEle = $('.quote-container')
        var scource = $('#quote-template').html()
        var template = Handlebars.compile(scource)
        var newHTML = template({quote:quote.quote});
        quoteEle.empty().append(newHTML)
    }

    pokemonRender(pokemon:Pokemon){
        const pokemonEle = $('.pokemon-container')
        var scource = $('#pokemon-template').html()
        var template = Handlebars.compile(scource)
        var newHTML = template({image:pokemon.image,pokemon:pokemon.name});
        pokemonEle.empty().append(newHTML)
    }

    meatTextRender(text:MeatText){
        const meatEle = $('.meat-container')
        var scource = $('#meat-template').html()
        var template = Handlebars.compile(scource)
        var newHTML = template({text:text.text});
        meatEle.empty().append(newHTML)
    }

    friendsRender(person:Person){
        const friendsEle = $('.friends-container')
        var scource = $('#friends-template').html()
        var template = Handlebars.compile(scource)
        var newHTML = template(person.friends);
        friendsEle.empty().append(newHTML)
    }

}