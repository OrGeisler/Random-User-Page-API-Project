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
        this.loadedUser = {};
    }
    personGenerator() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield $.get("https://randomuser.me/api/?results=7");
            const usersList = response.results;
            const friendsList = usersList.map((value) => {
                return `${value.name.first} ${value.name.last}`;
            });
            const friendObject = {
                friendsList: friendsList.map((value) => {
                    return { name: value };
                }),
            };
            let person = new Person(usersList[0].name.first, usersList[0].name.last, usersList[0].picture.thumbnail, usersList[0].location.city, usersList[0].location.state, friendObject);
            return person;
        });
    }
    quoteGenerator() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield $.get("https://api.kanye.rest");
            let quote = new Quote(response.quote);
            return quote;
        });
    }
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
    properCase(text) {
        return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
    }
    pokemonGenerator() {
        return __awaiter(this, void 0, void 0, function* () {
            const num = this.getRandomInt(0, 905);
            const response = yield $.get(`https://pokeapi.co/api/v2/pokemon/${num}/`);
            const pokemon = new Pokemon(this.properCase(response.forms[0].name), response.sprites.front_default);
            return pokemon;
        });
    }
    randomMeatText() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield $.get("https://baconipsum.com/api/?type=all-meat");
            let text = new MeatText(response[0]);
            return text;
        });
    }
    generatAll() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.personGenerator().then((value) => {
                this.person = value;
            });
            yield this.pokemonGenerator().then((value) => {
                this.pokemon = value;
            });
            yield this.quoteGenerator().then((value) => {
                this.quote = value;
            });
            yield this.randomMeatText().then((value) => {
                this.meatText = value;
            });
        });
    }
    saveToLocalStorage(dataModule) {
        if (localStorage.length === 0) {
            localStorage.setItem("userArry", JSON.stringify([dataModule]));
        }
        else {
            const userArry = JSON.parse(localStorage.userArry);
            userArry.push(dataModule);
            localStorage.clear();
            localStorage.setItem("userArry", JSON.stringify(userArry));
        }
    }
    loadFromLocalStorage() {
        if (localStorage.length > 0) {
            const localStorageObject = JSON.parse(localStorage.userArry);
            const userLoaded = new DataModule();
            userLoaded.person = localStorageObject[0].person;
            userLoaded.pokemon = localStorageObject[0].pokemon;
            userLoaded.quote = localStorageObject[0].quote;
            userLoaded.meatText = localStorageObject[0].meatText;
            this.loadedUser = userLoaded;
        }
    }
}
//# sourceMappingURL=data-module.js.map