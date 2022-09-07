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
let dataModule = new DataModule();
let renderer = new Renderer();
$(".gen-butm").on('click', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield dataModule.generatAll();
        // console.log(dataModule)
        renderer.RenderAll(dataModule);
    });
});
$(".save-butm").on('click', function () {
    if (localStorage.length === 0) {
        localStorage.setItem('userArry', JSON.stringify([dataModule]));
        console.log(localStorage);
    }
    else {
        const userArry = JSON.parse(localStorage.userArry);
        // console.log(userArry)
        userArry.push(dataModule);
        localStorage.clear();
        localStorage.setItem('userArry', JSON.stringify(userArry));
        // console.log(localStorage)
    }
});
$('.load-butm').on('click', function () {
    if (localStorage.length > 0) {
        const localStorageObject = JSON.parse(localStorage.userArry);
        const userLoaded = new DataModule();
        userLoaded.person = localStorageObject[0].person;
        userLoaded.pokemon = localStorageObject[0].pokemon;
        userLoaded.quote = localStorageObject[0].quote;
        userLoaded.meatText = localStorageObject[0].meatText;
        console.log(userLoaded);
        renderer.RenderAll(userLoaded);
    }
});
//# sourceMappingURL=main.js.map