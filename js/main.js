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
// באיבנט ליסינר לשים את הפונקציה אסינכרונית
$(".gen-butm").on('click', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield dataModule.generatAll();
        renderer.userRender(dataModule.person);
        renderer.quoteRender(dataModule.quote);
        renderer.pokemonRender(dataModule.pokemon);
        renderer.meatTextRender(dataModule.meatText);
        renderer.friendsRender(dataModule.person);
    });
});
//# sourceMappingURL=main.js.map