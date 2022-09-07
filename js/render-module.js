"use strict";
class Renderer {
    userRender(person) {
        console.log("hello");
        $('.user-container').append($(`<div>${person.firstName}</div>`));
    }
}
//# sourceMappingURL=render-module.js.map