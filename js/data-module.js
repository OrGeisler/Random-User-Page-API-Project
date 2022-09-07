"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class DataModule {
    constructor() {
        this.person = {};
        this.pokemon = {};
        this.quote = {};
        this.meatText = {};
    }
    personGenerator() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield $.get('https://randomuser.me/api/?results=7');
            const usersList = response.results;
            let person = new Person(usersList[0].name.first, usersList[0].name.last, usersList[0].picture.thumbnail, usersList[0].location.city, usersList[0].location.state, usersList.map(value => {
                return `${value.name.first} ${value.name.last}`;
            }));
            return person;
        });
    }
    quoteGenerator() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield $.get('https://api.kanye.rest');
            let quote = new Quote(response.quote);
            return quote;
        });
    }
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
    pokemonGenerator() {
        return __awaiter(this, void 0, void 0, function* () {
            const num = this.getRandomInt(0, 949);
            const response = yield $.get(`https://pokeapi.co/api/v2/pokemon/${num}/`);
            const pokemon = new Pokemon(response.forms[0].name, response.sprites.front_default);
            return pokemon;
        });
    }
    randomMeatText() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield $.get('https://baconipsum.com/api/?type=all-meat');
            let text = new MeatText(response[0]);
            return text;
        });
    }
    generatAll() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.personGenerator().then(value => {
                this.person = value;
            });
        });
    }
}
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
//# sourceMappingURL=data-module.js.map