"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
require("./App.css");
const react_1 = __importDefault(require("react"));
const HeaderMenu_1 = require("./Components/HeaderMenu/HeaderMenu");
const App = () => {
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement(HeaderMenu_1.HeaderMenu, null)));
};
exports.App = App;
