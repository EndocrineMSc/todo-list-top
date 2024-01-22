"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Roboto-Regular.ttf */ "./src/fonts/Roboto-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: "Roboto";
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("truetype");
}

:root {
    --background-color: #eaf4ff;
    --view-container-color: #d9eaff;
    --sidebar-color: #bad7ff;
    --button-filter: invert(20%) sepia(96%) saturate(6722%) hue-rotate(239deg) brightness(102%) contrast(101%);
    --fonts: "Roboto",'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    --sidebar-padding: 30px;
    --active-color: #ffd988;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--background-color);
    margin: 0;
    width: 100vw;
    height: 100vh;
    font-family: var(--fonts);
    position: relative;
    z-index: 1;
}

#landing-view-container {
    display: grid;
    grid-template-columns: 2fr 7fr;
    grid-template-rows: 1fr;
    width: min(1200px, 90vw);
    height: 70vh;
    background-color: var(--view-container-color);
    border-radius: 15px;
}

#projects-sidebar {
    background-color: var(--sidebar-color);
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    padding-left: 20px;
    padding-right: 20px;
}

#projects-sidebar, #task-view-container {
    display: flex;
    flex-direction: column;
    padding-top: 30px;
    gap: 12px;
}

#projects-sidebar>div:first-child, #task-view-container>div:first-child {
    font-weight: 600;
    font-size: 1.6rem;
    margin-bottom: 1.8rem;
    padding-left: calc(var(--sidebar-padding) - 10px);
}

#add-projects-container, #add-tasks-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    margin-left: -12px;
}

#add-projects-container {
    width: 150px;
}

#add-tasks-container {
    width: 130px;
}

#add-projects-container button, #add-tasks-container button {
    margin : 0;
    padding : 0;
    padding-left: var(--sidebar-padding);
}

#add-projects-container {
    gap: 6px;
}

#projects-container {
    display: flex;
    flex-direction: column;
    margin-top: -6px;
    position: relative;
    z-index: 1;
}

.project {
    display: flex;
    justify-content: space-between;
    align-items: center;   
    gap: 6px;
    padding-left: var(--sidebar-padding);
    padding-right: 6px;
    line-height: 2.5rem;
    border-radius: 10px;
    position: relative;
}

.project.active-project::after {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    content: "";
    background-color: var(--active-color);
    border-radius: 10px;
    right: 0px;
    filter: opacity(0.85);
}

.project:hover {
    background-color: var(--sidebar-color);
    position: relative;
    filter: brightness(0.95);
}

.project-delete {
    width: 20px;
    height: auto;
    filter: var(--button-filter);
    opacity: 0.75;
}

.project-delete:hover {
    position: relative;
    left: 1px;
    opacity: 1;
    height: auto;
    width: 22px;
}

#task-view-container {
    padding-left: var(--sidebar-padding);
}

.todo {
    display: flex;
    justify-content: start;
    align-items: center;
    background-color: var(--view-container-color);
    line-height: 2.5rem;
    gap: 12px;
    width: 75%;
    border-radius: 10px;
    padding-left: var(--sidebar-padding);
}

.todo>div:last-child {
    padding-right: 30px;
    text-align: end;
    flex: 1;
}

.todo:hover {
    filter: brightness(0.95);
}

.todo input[type="checkbox"] {
    margin: 0;
    /* Double-sized Checkboxes */
    -ms-transform: scale(1.5); /* IE */
    -moz-transform: scale(1.5); /* FF */
    -webkit-transform: scale(1.5); /* Safari and Chrome */
    -o-transform: scale(1.5); /* Opera */
    transform: scale(1.5);
    padding: 10px;
}

.add-button {
    background-color: inherit;
    border: none;
}

.add-button img {
    width: 24px;
    height: auto;
    filter: var(--button-filter);
    opacity: 0.75;
}

.add-button img:hover {
    opacity: 1;
    width: 26px;
    height: auto;
}

#expanded-task-container {
    position: absolute;
    left: 0px;
    width: 100vw;
    height: 100vh;
}

#expanded-task-container::after {
    position: absolute;
    background-color: black;
    width: 100vw;
    height: 100vh;
    content: "";
    left: 0px;
    top: 0px;
    filter: opacity(0.3);
    z-index: 1;
}

#expanded-task-background {
    position: relative;
    background-color: var(--view-container-color);
    height: 90vh;
    width: min(800px, 60vw);
    top: 5vh;
    left: calc((100vw - min(800px, 60vw)) / 2);
    z-index: 2;
    border-radius: 10px;
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 2.5rem 1fr; 
}

.header-row {
    grid-column: 1 / 3;
    border-bottom: 1px solid grey;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 30px;
    padding-right: 12px;
    font-size: 0.9rem;
}

.header-row img {
    height: 32px;
    background-color: var(--view-container-color);
    border-radius: 5px;
}

.header-row img:hover {
    filter: brightness(0.9);
}

#primary-info {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-top: 12px;
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 12px;
    overflow-y: scroll;
}

#primary-info>div:first-child {
    display: flex;
    align-items: center;
    height: 50px;
    gap: 16px;
    padding-left: 12px;
}

#primary-info input[type="text"], #primary-info textarea {
    border: none;
    background-color: var(--view-container-color);
}

#primary-info input[type="text"] {
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: -2px;
    width: 80%;
}

#primary-info input[type="checkbox"] {
    margin: 0;
    /* Double-sized Checkboxes */
    -ms-transform: scale(2); /* IE */
    -moz-transform: scale(2); /* FF */
    -webkit-transform: scale(2); /* Safari and Chrome */
    -o-transform: scale(2); /* Opera */
    transform: scale(2);
}

#primary-info textarea {
    resize: none;
    height: 12.5%;
    border-radius: 5px;
    font-family: var(--fonts);
    font-size: 1rem;
    padding: 5px;
}

#primary-info textarea:focus {
    outline: 2px solid black;
}

#secondary-info {
    background-color: var(--sidebar-color);
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    padding-top: 10px;
    line-height: 2.5rem;
    border-bottom-right-radius: 10px;
}

#secondary-info>div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    width: 90%;
    height: 4rem;
    border-bottom: 1px groove gray;
}

#secondary-info>div label {
    padding: 5px;
    margin-right: 12px;
    margin-bottom: -5px;
    width: 150px;
    height: 1rem;
    line-height: 1rem;
    font-size: 0.9rem;
    font-weight: 600;
}

#secondary-info input[type="text"] {
    background-color: var(--sidebar-color);
    border: none;
    font-size: 1rem;
    font-family: var(--fonts);
    width: 150px;
    padding: 5px;
    margin: 0;
    border-radius: 5px;
}

#secondary-info input:hover {
    filter: brightness(0.9);
}

#secondary-info input[type="text"]:focus {
    outline: 2px solid black inset;
}

.comment-container, .add-comment-container {
    display: flex;
    align-items: center;
    overflow-y: auto;
    line-height: 1.8rem;
    border-radius: 5px;
}

.comment-container {
    justify-content: space-between;
    align-items: start;
    border: 1px groove gray;
    padding: 5px;
    filter: brightness(1.05);
    background-color: var(--view-container-color);
    gap: 12px;
}

.comment-container input {
    padding: 5px;
}

.comment-container img, .add-comment-container img {
    filter: var(--button-filter) opacity(0.75);
    width: 24px;
    height: auto;
    align-self: center;
}

.comment-container img:hover, .add-comment-container img:hover {
    position: relative;
    filter: var(--button-filter) opacity(1);
    width: 26px;
    left: 1px;
    height: auto;
}

.add-comment-container {
    gap: 12px;
    margin-left: 20px;
    margin-top: 15px;
    height: 1.8rem;
}

input[type="date"], select {
    border: none;
    background-color: var(--sidebar-color);
    font-family: var(--fonts);
    font-size: 1rem;
    padding: 4px;
    border-radius: 5px;
}

select {
    padding-left: 1px;
}

select:hover {
    filter: brightness(0.9);
}

.delete-text {
    position: relative;
    top: 1px;
    left: 6px;
    color: red;
}

.delete-text+img {
    position: absolute;
    width: 24px;
    right: 30px;
    filter: var(--button-filter) opacity(0.75);
}

.delete-text+img:hover {
    filter: var(--button-filter) opacity(1);
    right: 29px;
    width: 26px;
}

#pop-up {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1.2fr 1fr;
    position: absolute;
    width: 300px;
    height: 150px;
    bottom: 50vh;
    background-color: var(--background-color);
    border-radius: 10px;
    border: 3px solid black;
    column-gap: 12px;
    row-gap: 15px;
    padding: 12px;
    padding-top: 27px;
    z-index: 2;
}

#pop-up label, #pop-up input {
    grid-column: 1 / 3;
}

#pop-up label {
    display: flex;
    justify-content: center;
    align-items: center;
    grid-row: 1;
    font-size: 1.6rem;
    font-weight: bold;
}

#pop-up input {
    grid-row: 2;
    font-size: 1rem;
    line-height: 1.4rem;
}

#pop-up button {
    margin-top: 15px;
    margin-bottom: -15px;
    grid-row: 3;
    border-radius: 10px;
    border: none;
    background-color: blue;
    color: white;
    font-size: 1.2rem;
    font-weight: bold;
}

#pop-up button:first-of-type {
    background-color: slategray;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: \"Roboto\";\n    src: url(./fonts/Roboto-Regular.ttf) format(\"truetype\");\n}\n\n:root {\n    --background-color: #eaf4ff;\n    --view-container-color: #d9eaff;\n    --sidebar-color: #bad7ff;\n    --button-filter: invert(20%) sepia(96%) saturate(6722%) hue-rotate(239deg) brightness(102%) contrast(101%);\n    --fonts: \"Roboto\",'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    --sidebar-padding: 30px;\n    --active-color: #ffd988;\n}\n\nbody {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--background-color);\n    margin: 0;\n    width: 100vw;\n    height: 100vh;\n    font-family: var(--fonts);\n    position: relative;\n    z-index: 1;\n}\n\n#landing-view-container {\n    display: grid;\n    grid-template-columns: 2fr 7fr;\n    grid-template-rows: 1fr;\n    width: min(1200px, 90vw);\n    height: 70vh;\n    background-color: var(--view-container-color);\n    border-radius: 15px;\n}\n\n#projects-sidebar {\n    background-color: var(--sidebar-color);\n    border-top-left-radius: 15px;\n    border-bottom-left-radius: 15px;\n    padding-left: 20px;\n    padding-right: 20px;\n}\n\n#projects-sidebar, #task-view-container {\n    display: flex;\n    flex-direction: column;\n    padding-top: 30px;\n    gap: 12px;\n}\n\n#projects-sidebar>div:first-child, #task-view-container>div:first-child {\n    font-weight: 600;\n    font-size: 1.6rem;\n    margin-bottom: 1.8rem;\n    padding-left: calc(var(--sidebar-padding) - 10px);\n}\n\n#add-projects-container, #add-tasks-container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 50px;\n    margin-left: -12px;\n}\n\n#add-projects-container {\n    width: 150px;\n}\n\n#add-tasks-container {\n    width: 130px;\n}\n\n#add-projects-container button, #add-tasks-container button {\n    margin : 0;\n    padding : 0;\n    padding-left: var(--sidebar-padding);\n}\n\n#add-projects-container {\n    gap: 6px;\n}\n\n#projects-container {\n    display: flex;\n    flex-direction: column;\n    margin-top: -6px;\n    position: relative;\n    z-index: 1;\n}\n\n.project {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;   \n    gap: 6px;\n    padding-left: var(--sidebar-padding);\n    padding-right: 6px;\n    line-height: 2.5rem;\n    border-radius: 10px;\n    position: relative;\n}\n\n.project.active-project::after {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    z-index: -1;\n    content: \"\";\n    background-color: var(--active-color);\n    border-radius: 10px;\n    right: 0px;\n    filter: opacity(0.85);\n}\n\n.project:hover {\n    background-color: var(--sidebar-color);\n    position: relative;\n    filter: brightness(0.95);\n}\n\n.project-delete {\n    width: 20px;\n    height: auto;\n    filter: var(--button-filter);\n    opacity: 0.75;\n}\n\n.project-delete:hover {\n    position: relative;\n    left: 1px;\n    opacity: 1;\n    height: auto;\n    width: 22px;\n}\n\n#task-view-container {\n    padding-left: var(--sidebar-padding);\n}\n\n.todo {\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    background-color: var(--view-container-color);\n    line-height: 2.5rem;\n    gap: 12px;\n    width: 75%;\n    border-radius: 10px;\n    padding-left: var(--sidebar-padding);\n}\n\n.todo>div:last-child {\n    padding-right: 30px;\n    text-align: end;\n    flex: 1;\n}\n\n.todo:hover {\n    filter: brightness(0.95);\n}\n\n.todo input[type=\"checkbox\"] {\n    margin: 0;\n    /* Double-sized Checkboxes */\n    -ms-transform: scale(1.5); /* IE */\n    -moz-transform: scale(1.5); /* FF */\n    -webkit-transform: scale(1.5); /* Safari and Chrome */\n    -o-transform: scale(1.5); /* Opera */\n    transform: scale(1.5);\n    padding: 10px;\n}\n\n.add-button {\n    background-color: inherit;\n    border: none;\n}\n\n.add-button img {\n    width: 24px;\n    height: auto;\n    filter: var(--button-filter);\n    opacity: 0.75;\n}\n\n.add-button img:hover {\n    opacity: 1;\n    width: 26px;\n    height: auto;\n}\n\n#expanded-task-container {\n    position: absolute;\n    left: 0px;\n    width: 100vw;\n    height: 100vh;\n}\n\n#expanded-task-container::after {\n    position: absolute;\n    background-color: black;\n    width: 100vw;\n    height: 100vh;\n    content: \"\";\n    left: 0px;\n    top: 0px;\n    filter: opacity(0.3);\n    z-index: 1;\n}\n\n#expanded-task-background {\n    position: relative;\n    background-color: var(--view-container-color);\n    height: 90vh;\n    width: min(800px, 60vw);\n    top: 5vh;\n    left: calc((100vw - min(800px, 60vw)) / 2);\n    z-index: 2;\n    border-radius: 10px;\n    display: grid;\n    grid-template-columns: 3fr 1fr;\n    grid-template-rows: 2.5rem 1fr; \n}\n\n.header-row {\n    grid-column: 1 / 3;\n    border-bottom: 1px solid grey;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 30px;\n    padding-right: 12px;\n    font-size: 0.9rem;\n}\n\n.header-row img {\n    height: 32px;\n    background-color: var(--view-container-color);\n    border-radius: 5px;\n}\n\n.header-row img:hover {\n    filter: brightness(0.9);\n}\n\n#primary-info {\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n    padding-top: 12px;\n    padding-left: 24px;\n    padding-right: 24px;\n    padding-bottom: 12px;\n    overflow-y: scroll;\n}\n\n#primary-info>div:first-child {\n    display: flex;\n    align-items: center;\n    height: 50px;\n    gap: 16px;\n    padding-left: 12px;\n}\n\n#primary-info input[type=\"text\"], #primary-info textarea {\n    border: none;\n    background-color: var(--view-container-color);\n}\n\n#primary-info input[type=\"text\"] {\n    font-size: 2rem;\n    font-weight: 600;\n    letter-spacing: -2px;\n    width: 80%;\n}\n\n#primary-info input[type=\"checkbox\"] {\n    margin: 0;\n    /* Double-sized Checkboxes */\n    -ms-transform: scale(2); /* IE */\n    -moz-transform: scale(2); /* FF */\n    -webkit-transform: scale(2); /* Safari and Chrome */\n    -o-transform: scale(2); /* Opera */\n    transform: scale(2);\n}\n\n#primary-info textarea {\n    resize: none;\n    height: 12.5%;\n    border-radius: 5px;\n    font-family: var(--fonts);\n    font-size: 1rem;\n    padding: 5px;\n}\n\n#primary-info textarea:focus {\n    outline: 2px solid black;\n}\n\n#secondary-info {\n    background-color: var(--sidebar-color);\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    align-items: center;\n    padding-top: 10px;\n    line-height: 2.5rem;\n    border-bottom-right-radius: 10px;\n}\n\n#secondary-info>div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: start;\n    width: 90%;\n    height: 4rem;\n    border-bottom: 1px groove gray;\n}\n\n#secondary-info>div label {\n    padding: 5px;\n    margin-right: 12px;\n    margin-bottom: -5px;\n    width: 150px;\n    height: 1rem;\n    line-height: 1rem;\n    font-size: 0.9rem;\n    font-weight: 600;\n}\n\n#secondary-info input[type=\"text\"] {\n    background-color: var(--sidebar-color);\n    border: none;\n    font-size: 1rem;\n    font-family: var(--fonts);\n    width: 150px;\n    padding: 5px;\n    margin: 0;\n    border-radius: 5px;\n}\n\n#secondary-info input:hover {\n    filter: brightness(0.9);\n}\n\n#secondary-info input[type=\"text\"]:focus {\n    outline: 2px solid black inset;\n}\n\n.comment-container, .add-comment-container {\n    display: flex;\n    align-items: center;\n    overflow-y: auto;\n    line-height: 1.8rem;\n    border-radius: 5px;\n}\n\n.comment-container {\n    justify-content: space-between;\n    align-items: start;\n    border: 1px groove gray;\n    padding: 5px;\n    filter: brightness(1.05);\n    background-color: var(--view-container-color);\n    gap: 12px;\n}\n\n.comment-container input {\n    padding: 5px;\n}\n\n.comment-container img, .add-comment-container img {\n    filter: var(--button-filter) opacity(0.75);\n    width: 24px;\n    height: auto;\n    align-self: center;\n}\n\n.comment-container img:hover, .add-comment-container img:hover {\n    position: relative;\n    filter: var(--button-filter) opacity(1);\n    width: 26px;\n    left: 1px;\n    height: auto;\n}\n\n.add-comment-container {\n    gap: 12px;\n    margin-left: 20px;\n    margin-top: 15px;\n    height: 1.8rem;\n}\n\ninput[type=\"date\"], select {\n    border: none;\n    background-color: var(--sidebar-color);\n    font-family: var(--fonts);\n    font-size: 1rem;\n    padding: 4px;\n    border-radius: 5px;\n}\n\nselect {\n    padding-left: 1px;\n}\n\nselect:hover {\n    filter: brightness(0.9);\n}\n\n.delete-text {\n    position: relative;\n    top: 1px;\n    left: 6px;\n    color: red;\n}\n\n.delete-text+img {\n    position: absolute;\n    width: 24px;\n    right: 30px;\n    filter: var(--button-filter) opacity(0.75);\n}\n\n.delete-text+img:hover {\n    filter: var(--button-filter) opacity(1);\n    right: 29px;\n    width: 26px;\n}\n\n#pop-up {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1.2fr 1fr;\n    position: absolute;\n    width: 300px;\n    height: 150px;\n    bottom: 50vh;\n    background-color: var(--background-color);\n    border-radius: 10px;\n    border: 3px solid black;\n    column-gap: 12px;\n    row-gap: 15px;\n    padding: 12px;\n    padding-top: 27px;\n    z-index: 2;\n}\n\n#pop-up label, #pop-up input {\n    grid-column: 1 / 3;\n}\n\n#pop-up label {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    grid-row: 1;\n    font-size: 1.6rem;\n    font-weight: bold;\n}\n\n#pop-up input {\n    grid-row: 2;\n    font-size: 1rem;\n    line-height: 1.4rem;\n}\n\n#pop-up button {\n    margin-top: 15px;\n    margin-bottom: -15px;\n    grid-row: 3;\n    border-radius: 10px;\n    border: none;\n    background-color: blue;\n    color: white;\n    font-size: 1.2rem;\n    font-weight: bold;\n}\n\n#pop-up button:first-of-type {\n    background-color: slategray;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/creationPopUp.js":
/*!******************************!*\
  !*** ./src/creationPopUp.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   creationPopUp: () => (/* binding */ creationPopUp)
/* harmony export */ });
/* harmony import */ var _domManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domManager.js */ "./src/domManager.js");
/* harmony import */ var _expandedTodo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expandedTodo.js */ "./src/expandedTodo.js");



const creationPopUp = (function() {   
    const body = document.getElementsByTagName("body")[0];
    const TASK_INPUT = "task";
    const PROJECT_INPUT = "project";
    const COMMENT_INPUT = "comment";

    /**
     * Creates a popup for creation of a new task, project, or comment
     * @param {String} inputType - "task" | "project" | "comment"
     */
    const createPopUp = function(inputType) {
        const popUp = document.createElement("div");
        popUp.id = "pop-up";

        const popUpForm = document.createElement("form");
        popUpForm.setAttribute("name", "pop-up");

        const inputLabel = document.createElement("label");

        switch (inputType) {
            case TASK_INPUT:
                inputLabel.textContent = "Enter task name";
                break;
            case PROJECT_INPUT:
                inputLabel.textContent = "Enter project name";
                break;
            case COMMENT_INPUT:
                inputLabel.textContent = "Enter comment";
                break;
        }

        inputLabel.setAttribute("name", "pop-up");
        inputLabel.setAttribute("for", "creation-input");

        const inputField = document.createElement("input");
        inputField.type = "text";
        inputField.setAttribute("name", "pop-up");
        inputField.id = "creation-input";

        const abortButton = document.createElement("button");
        abortButton.type = "button";
        abortButton.textContent = "Cancel";
        abortButton.addEventListener("click", () => {
            popUp.remove();
        });

        const confirmButton = document.createElement("button");
        confirmButton.setAttribute("name", "pop-up");
        confirmButton.type = "submit";
        confirmButton.textContent = "Add";
        confirmButton.addEventListener("click", () => {
            switch (inputType) {
                case TASK_INPUT:
                    _domManager_js__WEBPACK_IMPORTED_MODULE_0__.domManager.addTodo(inputField.value);
                    break;
                case PROJECT_INPUT:
                    _domManager_js__WEBPACK_IMPORTED_MODULE_0__.domManager.addProject(inputField.value);
                    break;
                case COMMENT_INPUT:
                    _expandedTodo_js__WEBPACK_IMPORTED_MODULE_1__.expandedTodo.addComment(inputField.value);
                    break;
            }
            popUp.remove();
        });

        popUp.appendChild(popUpForm);
        popUp.appendChild(inputLabel);
        popUp.appendChild(inputField);
        popUp.appendChild(abortButton);
        popUp.appendChild(confirmButton);

        body.appendChild(popUp);
    }

    return {createPopUp};
})();



/***/ }),

/***/ "./src/domManager.js":
/*!***************************!*\
  !*** ./src/domManager.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   domManager: () => (/* binding */ domManager)
/* harmony export */ });
/* harmony import */ var _projectRepository_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectRepository.js */ "./src/projectRepository.js");
/* harmony import */ var _todoRepository_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoRepository.js */ "./src/todoRepository.js");
/* harmony import */ var _expandedTodo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expandedTodo.js */ "./src/expandedTodo.js");
/* harmony import */ var _creationPopUp_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./creationPopUp.js */ "./src/creationPopUp.js");
/* harmony import */ var _img_plus_circle_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/plus-circle.svg */ "./src/img/plus-circle.svg");
/* harmony import */ var _img_trash_can_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/trash-can.svg */ "./src/img/trash-can.svg");







const domManager = (function() {
    const projectsContainer = document.getElementById("projects-container");
    const taskContainer = document.getElementById("task-container");
    const tasksHeader = document.getElementById("tasks-header");

    const PROJECT_ID_DATA = "projectID";

    let projectInFocusID = "";

    const init = function() {  
        let addButtons = Array.from(document.getElementsByClassName("add-button"));
        
        addButtons.forEach(button => {
        let buttonImage = new Image();
        buttonImage.src = _img_plus_circle_svg__WEBPACK_IMPORTED_MODULE_4__;
        buttonImage.alt = "add";
        button.appendChild(buttonImage);
        });
    
        const addProjectContainer = document.getElementById("add-projects-container");
        const addProjectButton = addProjectContainer.firstElementChild;
        addProjectButton.addEventListener("click", () => _creationPopUp_js__WEBPACK_IMPORTED_MODULE_3__.creationPopUp.createPopUp("project"));

        const addTodoContainer = document.getElementById("add-tasks-container");
        const addTodoButton = addTodoContainer.firstElementChild;
        addTodoButton.addEventListener("click", () => _creationPopUp_js__WEBPACK_IMPORTED_MODULE_3__.creationPopUp.createPopUp("task"));

        renderAllProjects();
        _expandedTodo_js__WEBPACK_IMPORTED_MODULE_2__.expandedTodo.toggleVisibility(false);
    }

    const renderProject = function(projectData, focusOnProject = false) {
        const project = document.createElement("div");
        project.classList.add("project");
        project.dataset[PROJECT_ID_DATA] = projectData.id;
        project.textContent = `# ${projectData.name}`;

        const deleteImage = new Image();
        deleteImage.src = _img_trash_can_svg__WEBPACK_IMPORTED_MODULE_5__;
        deleteImage.alt = "delete";
        deleteImage.classList.add("project-delete");
        deleteImage.addEventListener("click", deleteProject);

        project.appendChild(deleteImage);
        project.addEventListener("click", renderProjectTodos);
        projectsContainer.appendChild(project);

        if (focusOnProject) {
            project.click();
        }
    }

    const renderTodo = function(todoData) {
        const todo = document.createElement("div");
        todo.classList.add("todo");
        todo.dataset["todoID"] = todoData.id;
        todo.addEventListener("click", _expandedTodo_js__WEBPACK_IMPORTED_MODULE_2__.expandedTodo.renderExpandedTodo);
        
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = todoData.id;
        checkbox.checked = todoData.isDone;
        checkbox.addEventListener("change", function() {
            _todoRepository_js__WEBPACK_IMPORTED_MODULE_1__.todoRepository.updateTodo(this.id, {"isDone": this.checked});   
        });
        
        const todoName = document.createElement("div");
        todoName.textContent = todoData.name;
        todoName.dataset["todoID"] = todoData.id;

        const dueDate = document.createElement("div");
        dueDate.textContent = todoData.dueDate != "" ? `Due: ${todoData.dueDate}` : "";
        dueDate.dataset["todoID"] = todoData.id;
        dueDate.addEventListener("click", _expandedTodo_js__WEBPACK_IMPORTED_MODULE_2__.expandedTodo.renderExpandedTodo);

        todo.appendChild(checkbox);
        todo.appendChild(todoName);
        todo.appendChild(dueDate);
        taskContainer.appendChild(todo);
    }

    const addProject = function(projectName) {
        if (projectName) {
            const projectData = _projectRepository_js__WEBPACK_IMPORTED_MODULE_0__.projectRepository.createNewProject(projectName);
            renderProject(projectData, true);
        }
    }

    const addTodo = function(todoName) {
        if (projectInFocusID != "") {
            if (todoName) {
                const todoData = _todoRepository_js__WEBPACK_IMPORTED_MODULE_1__.todoRepository.createNewTodo(todoName, projectInFocusID);
                renderTodo(todoData);
            }
        }
        else {
            alert("Please create and/or select a project first");
        }
    }

    const renderAllProjects = function() {
        let projects = _projectRepository_js__WEBPACK_IMPORTED_MODULE_0__.projectRepository.getAllProjects();
        projectsContainer.innerHTML = "";
        taskContainer.innerHTML = "";
        if (projects.length > 0) {
            projects.forEach(project => { renderProject(project); });
            renderProjectTodos(projects[0].id);
        }
    }

    const renderProjectTodos = function(data) {
        const isEvent = typeof data != "string";
        const projectID = isEvent ? data.target.dataset[PROJECT_ID_DATA] : data;

        if (isEvent) {
            data.stopPropagation();
        }
              
        if (projectID) {
            const projectData = _projectRepository_js__WEBPACK_IMPORTED_MODULE_0__.projectRepository.getProjectByID(projectID);
            tasksHeader.textContent = `${projectData.name} Tasks`;
            projectInFocusID = projectID;
            const todos = _todoRepository_js__WEBPACK_IMPORTED_MODULE_1__.todoRepository.getTodosByProjectID(projectID);
            
            if (todos.length > 0) {
                taskContainer.innerHTML = "";
                todos.forEach(todoData => {
                    renderTodo(todoData);
                });
            }
            else {
                taskContainer.innerHTML = "";
            }
        }

        markActiveProject();
    }

    const markActiveProject = function() {
        const projects = Array.from(projectsContainer.getElementsByClassName("project"));
        projects.forEach(project => {
            if (project.dataset[PROJECT_ID_DATA] != projectInFocusID) {
                project.classList.remove("active-project");
            }
            else {
                project.classList.add("active-project");
            }
        });
    }

    const deleteTodo = function(event) {
        const todoID = event.target.id;

        if (todoID && confirm("Delete Task?")) {
            _todoRepository_js__WEBPACK_IMPORTED_MODULE_1__.todoRepository.deleteTodo(todoID);
            event.target.parentElement.remove();
        }
    }

    const deleteProject = function(event) {
        event.stopPropagation();
        const projectDOM = event.target.parentElement;
        const projectID = projectDOM.dataset[PROJECT_ID_DATA];
        const isInFocus = projectDOM.classList.contains("active-project");

        _projectRepository_js__WEBPACK_IMPORTED_MODULE_0__.projectRepository.deleteProject(projectID);
        _todoRepository_js__WEBPACK_IMPORTED_MODULE_1__.todoRepository.deleteProjectTodos(projectID);
        projectDOM.remove();

        if (isInFocus) {
            if (projectsContainer.childElementCount > 0) {
                projectsContainer.firstElementChild.click();
            }
            else {
                taskContainer.innerHTML = "";
                projectInFocusID = "";
                tasksHeader.textContent = "Tasks";
            }
        }
    }

    init();

    return {deleteTodo, renderProjectTodos, renderAllProjects, addTodo, addProject}
})();




/***/ }),

/***/ "./src/expandedTodo.js":
/*!*****************************!*\
  !*** ./src/expandedTodo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   expandedTodo: () => (/* binding */ expandedTodo)
/* harmony export */ });
/* harmony import */ var _todoRepository_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoRepository.js */ "./src/todoRepository.js");
/* harmony import */ var _projectRepository_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectRepository.js */ "./src/projectRepository.js");
/* harmony import */ var _domManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domManager.js */ "./src/domManager.js");
/* harmony import */ var _creationPopUp_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./creationPopUp.js */ "./src/creationPopUp.js");
/* harmony import */ var _img_window_close_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/window-close.svg */ "./src/img/window-close.svg");
/* harmony import */ var _img_trash_can_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/trash-can.svg */ "./src/img/trash-can.svg");
/* harmony import */ var _img_plus_circle_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/plus-circle.svg */ "./src/img/plus-circle.svg");








const expandedTodo = (function() {
    const expandedTask = document.getElementById("expanded-task-background");
    expandedTask.addEventListener("click", event => event.stopPropagation());

    const headerRow = expandedTask.firstElementChild;
    const primaryInfo = document.getElementById("primary-info");
    const secondaryInfo = document.getElementById("secondary-info");
    const expandedTaskContainer = document.getElementById("expanded-task-container");

    let todoData = null;

    const toggleVisibility = function(showElement) {
        !showElement ? expandedTask.parentElement.setAttribute("hidden", true) : expandedTask.parentElement.removeAttribute("hidden");   
    }

    const renderExpandedTodo = function(data) {
        const todoID = typeof data != "string" ? data.target.dataset["todoID"] : data;

        if (todoID) {
            todoData = _todoRepository_js__WEBPACK_IMPORTED_MODULE_0__.todoRepository.getTodoByID(todoID);

            removePreviousTaskElements();
            setHeaderElements(todoData);
            toggleVisibility(true);
            setPrimaryInfo(todoData);
            setSecondaryInfo(todoData);

            expandedTaskContainer.addEventListener("click", () => {
                toggleVisibility(false);
                _domManager_js__WEBPACK_IMPORTED_MODULE_2__.domManager.renderProjectTodos(todoData.projectID);
            });
        }
    }

    const removePreviousTaskElements = function() {
        Array.from(headerRow.children).forEach(element => {
            element.remove();
        });
        
        Array.from(primaryInfo.children).forEach(element => {
            element.remove();
        });

        Array.from(secondaryInfo.children).forEach(element => {
            element.remove();
        });
    }

    const setHeaderElements = function(todoData) {
        const projectName = _projectRepository_js__WEBPACK_IMPORTED_MODULE_1__.projectRepository.getProjectByID(todoData.projectID).name;
        const projectDOM = document.createElement("div");
        projectDOM.textContent = `# ${projectName}`;

        headerRow.appendChild(projectDOM);
        setCloseIcon(todoData);
    }

    const setCloseIcon = function(todoData) {
        const closeWindowIcon = new Image();
        closeWindowIcon.src = _img_window_close_svg__WEBPACK_IMPORTED_MODULE_4__;
        closeWindowIcon.alt = "close_task_window";
        closeWindowIcon.addEventListener("click", () => {
            expandedTodo.toggleVisibility(false);
            _domManager_js__WEBPACK_IMPORTED_MODULE_2__.domManager.renderProjectTodos(todoData.projectID);
        });

        headerRow.append(closeWindowIcon);
    }

    const setPrimaryInfo = function(todoData) {
        const nameAndCheck = document.createElement("div");
        nameAndCheck.classList.add("name-and-check");

        const taskName = document.createElement("input");
        taskName.type = "text";
        taskName.value = todoData.name;
        taskName.classList.add("expanded-task-name");
        taskName.addEventListener("change", event => {
            _todoRepository_js__WEBPACK_IMPORTED_MODULE_0__.todoRepository.updateTodo(todoData.id, {"name": event.target.value}); 
        });

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todoData.isDone;
        checkbox.addEventListener("change", event => {
            _todoRepository_js__WEBPACK_IMPORTED_MODULE_0__.todoRepository.updateTodo(todoData.id, {"isDone": event.target.checked}); 
        });

        const description = document.createElement("textarea")
        description.placeholder = "Description";
        description.value = todoData.description;
        description.addEventListener("change", event => {
            _todoRepository_js__WEBPACK_IMPORTED_MODULE_0__.todoRepository.updateTodo(todoData.id, {"description": event.target.value});
        });

        const comments = [];
        todoData.checklistItems.forEach(item => {
            const commentContainer = document.createElement("div");
            commentContainer.classList.add("comment-container");

            const comment = document.createElement("div");
            comment.textContent = item;

            const deleteImage = new Image();
            deleteImage.classList.add("comment-delete");
            deleteImage.src = _img_trash_can_svg__WEBPACK_IMPORTED_MODULE_5__;
            deleteImage.addEventListener("click", deleteComment);

            commentContainer.appendChild(comment);
            commentContainer.appendChild(deleteImage);
            comments.push(commentContainer);

            deleteImage.dataset["todoID"] = todoData.id;
            deleteImage.dataset["index"] = comments.indexOf(commentContainer);
        });

        const addCommentContainer = document.createElement("div");
        addCommentContainer.classList.add("add-comment-container");

        const addImage = new Image();
        addImage.src = _img_plus_circle_svg__WEBPACK_IMPORTED_MODULE_6__;
        addImage.addEventListener("click", () => {
            _creationPopUp_js__WEBPACK_IMPORTED_MODULE_3__.creationPopUp.createPopUp("comment");
        });
        addImage.dataset["todoID"] = todoData.id;

        const addText = document.createElement("div");
        addText.textContent = "Add Comment";

        addCommentContainer.appendChild(addImage);
        addCommentContainer.appendChild(addText);        
        nameAndCheck.appendChild(checkbox);
        nameAndCheck.appendChild(taskName);
        primaryInfo.appendChild(nameAndCheck);
        primaryInfo.appendChild(description);

        comments.forEach(comment => {
            comment.dataset["index"] = comments.indexOf(comment);
            primaryInfo.appendChild(comment);
        });

        primaryInfo.appendChild(addCommentContainer);
    }

    const addComment = function(commentText) {
        if (commentText) {
            todoData.checklistItems.push(commentText);
            const newChecklist = todoData.checklistItems;
            _todoRepository_js__WEBPACK_IMPORTED_MODULE_0__.todoRepository.updateTodo(todoData.id, {"checklistItems": newChecklist});
            
            renderExpandedTodo(todoData.id);
        }
    }

    const deleteComment = function(event) {
        const todoID = event.target.dataset["todoID"];
        const index = event.target.dataset["index"];

        const checklist = _todoRepository_js__WEBPACK_IMPORTED_MODULE_0__.todoRepository.getTodoByID(todoID).checklistItems;
        checklist.splice(index, 1);

        _todoRepository_js__WEBPACK_IMPORTED_MODULE_0__.todoRepository.updateTodo(todoID, {"checklistItems": checklist});
        renderExpandedTodo(todoID);
    }

    const setSecondaryInfo = function(todoData) {
        const projectDiv = document.createElement("div");
        
        const projectLabel = document.createElement("label");
        projectLabel.setAttribute("for", "projectInput");
        projectLabel.textContent = "Project";

        const projectInput = document.createElement("input");
        projectInput.type = "text";
        projectInput.id = "projectInput";
        projectInput.value = _projectRepository_js__WEBPACK_IMPORTED_MODULE_1__.projectRepository.getProjectByID(todoData.projectID).name;
        projectInput.addEventListener("change", event => {
            _projectRepository_js__WEBPACK_IMPORTED_MODULE_1__.projectRepository.updateProject(todoData.projectID, {"name": event.target.value})
            _domManager_js__WEBPACK_IMPORTED_MODULE_2__.domManager.renderAllProjects();
        });

        projectDiv.appendChild(projectLabel);
        projectDiv.appendChild(projectInput);


        const dateDiv = document.createElement("div");

        const dateLabel = document.createElement("label");
        dateLabel.setAttribute("for", "dateInput");
        dateLabel.textContent = "Due Date";

        const dateInput = document.createElement("input");
        dateInput.type = "date";
        dateInput.id = "dateInput";
        dateInput.value = todoData.dueDate;
        dateInput.addEventListener("change", event => {
            _todoRepository_js__WEBPACK_IMPORTED_MODULE_0__.todoRepository.updateTodo(todoData.id, {"dueDate": event.target.value});
            _domManager_js__WEBPACK_IMPORTED_MODULE_2__.domManager.renderProjectTodos(todoData.projectID);
        });

        dateDiv.appendChild(dateLabel);
        dateDiv.appendChild(dateInput);


        const priorityDiv = document.createElement("div");

        const priorityLabel = document.createElement("label");
        priorityLabel.setAttribute("for", "priorityInput");
        priorityLabel.textContent = "Priority";

        const priorityInput = document.createElement("select");
        priorityInput.id = "priorityInput";
        priorityInput.addEventListener("change", event => {
            _todoRepository_js__WEBPACK_IMPORTED_MODULE_0__.todoRepository.updateTodo(todoData.id, {"priority": event.target.value});
        });
        
        const option1 = document.createElement("option");
        option1.value = "None";
        option1.textContent = "None";
        const option2 = document.createElement("option");
        option2.value = "Low";
        option2.textContent = "Low";
        const option3 = document.createElement("option");
        option3.value = "Medium";
        option3.textContent = "Medium";
        const option4 = document.createElement("option");
        option4.value = "High";
        option4.textContent = "High";
        
        priorityInput.appendChild(option1);
        priorityInput.appendChild(option2);
        priorityInput.appendChild(option3);
        priorityInput.appendChild(option4);
        priorityInput.value = todoData.priority != "" ? todoData.priority : "None";

        priorityDiv.appendChild(priorityLabel);
        priorityDiv.appendChild(priorityInput);


        const deleteDiv = document.createElement("div");

        const deleteText = document.createElement("div");
        deleteText.textContent = "Delete Task";
        deleteText.classList.add("delete-text");

        const deleteTaskImage = new Image();
        deleteTaskImage.src = _img_trash_can_svg__WEBPACK_IMPORTED_MODULE_5__;
        deleteTaskImage.dataset["todoID"] = todoData.id;
        deleteTaskImage.alt = "delete_task";
        deleteTaskImage.addEventListener("click", event => {
            if (confirm("Delete this task?")) {
                const todoID = event.target.dataset["todoID"];
                const projectID = _todoRepository_js__WEBPACK_IMPORTED_MODULE_0__.todoRepository.getTodoByID(todoID).projectID;
                _todoRepository_js__WEBPACK_IMPORTED_MODULE_0__.todoRepository.deleteTodo(todoID);
                _domManager_js__WEBPACK_IMPORTED_MODULE_2__.domManager.renderProjectTodos(projectID);
                expandedTodo.toggleVisibility(false);
            }
        });

        deleteDiv.appendChild(deleteText);
        deleteDiv.appendChild(deleteTaskImage);

        secondaryInfo.appendChild(projectDiv);
        secondaryInfo.appendChild(dateDiv);
        secondaryInfo.appendChild(priorityDiv);
        secondaryInfo.appendChild(deleteDiv);
    }

    return { toggleVisibility, renderExpandedTodo, addComment }
})();



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _domManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domManager.js */ "./src/domManager.js");




/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project)
/* harmony export */ });
const Project = function(object) {
    this.name = object.name;
    this.id = object.id;
}

/***/ }),

/***/ "./src/projectRepository.js":
/*!**********************************!*\
  !*** ./src/projectRepository.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projectRepository: () => (/* binding */ projectRepository)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");


class ProjectRepository {
    #projectCounterKey = "projectCounter";
    #projectsKey = "projects";

    constructor() {
        if (!localStorage.getItem(this.#projectCounterKey)) {
            localStorage.setItem(this.#projectCounterKey, "0");
        }
    }

    //#region Create
    createNewProject(projectName) {
        let projectCounter = this.#getProjectCounter();
        
        const projects = this.getAllProjects();
        let project = new _project_js__WEBPACK_IMPORTED_MODULE_0__.Project({name: projectName, id: projectCounter});
        projects.push(project);
        let projectJSON = JSON.stringify(projects);

        localStorage.setItem(this.#projectsKey, projectJSON);

        projectCounter++;
        this.#setProjectCounter(projectCounter);

        return project;
    }
    //#endregion

    //#region Read
    getAllProjects() {
        const projectJSON = localStorage.getItem(this.#projectsKey);
        return projectJSON ? JSON.parse(projectJSON) : [];
    }

    getProjectByID(projectID) {
        const projects = this.getAllProjects();
        let projectWithID = null;
        projects.forEach(project => {
            if (project.id == projectID) {
                projectWithID = project;
                return;
            }
        });
        return projectWithID;
    }

    #getProjectCounter() {
        return localStorage.getItem(this.#projectCounterKey);
    }

    #setProjectCounter(valueString) {
        localStorage.setItem(this.#projectCounterKey, valueString);
    }
    //#endregion
    
    //#region Update
    updateProject(projectID, updatedData) {
        let project = this.getProjectByID(projectID);

        if (project) {
            let oldProjectJSON = JSON.stringify(project);

            let dataKeys = Object.keys(updatedData);
            dataKeys.forEach(key => {
                project[key] = updatedData[key];
            });
    
            let newProjectJSON = JSON.stringify(project);
            let projectsJSON = localStorage.getItem(this.#projectsKey);
            let newProjectsJSON = projectsJSON.replace(oldProjectJSON, newProjectJSON);
            localStorage.setItem(this.#projectsKey, newProjectsJSON);
    
            return project;
        }
        return null;
    }
    //#endregion

    //#region Delete
    deleteProject(projectID) {
        let projects = this.getAllProjects();
        for (let i = 0; i < projects.length; i++) {
            let storageID = projects[i].id;
            if (storageID == projectID) {
                projects.splice(i, 1);
                break;
            }
        }
        localStorage.setItem(this.#projectsKey, JSON.stringify(projects));
    }
    //#endregion
}

const projectRepository = new ProjectRepository();



/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Todo: () => (/* binding */ Todo)
/* harmony export */ });
const Todo = function(object) {
    this.name = object.name;
    this.id = object.id;
    this.projectID = object.projectID;
    this.description = "";
    this.dueDate = "";
    this.priority = "";
    this.checklistItems = [];
    this.isDone = false;
    
    if (object.hasOwnProperty("description")) {
        this.description = object.description;
    }

    if (object.hasOwnProperty("dueDate")) {
        this.dueDate = object.dueDate;
    }

    if (object.hasOwnProperty("priority")) {
        this.priority = object.priority;
    }

    if (object.hasOwnProperty("checkListItems")) {
        this.checklistItems = object.checklistItems;  
    }

    if (object.hasOwnProperty("isDone")) {
        this.isDone = object.isDone;
    }
}

/***/ }),

/***/ "./src/todoRepository.js":
/*!*******************************!*\
  !*** ./src/todoRepository.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   todoRepository: () => (/* binding */ todoRepository)
/* harmony export */ });
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");


class TodoRepository {
    #todoCounterKey = "todoCounter";
    #todosKey = "todos";

    constructor() {
        if (!localStorage.getItem(this.#todoCounterKey)) {
            localStorage.setItem(this.#todoCounterKey, "0");
        } 
    }

    //#region Create
    createNewTodo(todoName, projectID) {
        let todoCounter = this.#getTodoCounter();

        const todos = this.getAllTodos();
        let todo = new _todo_js__WEBPACK_IMPORTED_MODULE_0__.Todo({name: todoName, projectID, id: todoCounter});
        todos.push(todo);
        let todosJSON = JSON.stringify(todos);

        localStorage.setItem(this.#todosKey, todosJSON);

        todoCounter++;
        this.#setTodoCounter(todoCounter);

        return todo;
    }
    //#endregion

    //#region Read
    getAllTodos() {
        const todosJSON = localStorage.getItem(this.#todosKey);
        return todosJSON ? JSON.parse(todosJSON) : [];
    }

    getTodosByProjectID(projectID) {
        let todos = this.getAllTodos();
        return todos.filter(todo => todo.projectID == projectID);
    }

    getTodoByID(todoID) {
        let todos = this.getAllTodos();
        return todos.find(todo => todo.id == todoID);
    }

    #getTodoCounter(){
        return localStorage.getItem(this.#todoCounterKey);
    }

    #setTodoCounter(valueString) {
        localStorage.setItem(this.#todoCounterKey, valueString);
    }
    //#endregion

    //#region Update
    updateTodo(todoID, updatedData) {
        let todo = this.getTodoByID(todoID);
        if (todo) {
            let oldTodoJSON = JSON.stringify(todo);

            let dataKeys = Object.keys(updatedData);
            dataKeys.forEach(key => {
                todo[key] = updatedData[key];
            });
    
            let newTodoJSON = JSON.stringify(todo);
            let todosJSON = localStorage.getItem(this.#todosKey);
            let newTodosJSON = todosJSON.replace(oldTodoJSON, newTodoJSON);
            localStorage.setItem(this.#todosKey, newTodosJSON);
    
            return todo;
        }
        return null;
    }
    //#endregion

    //#region Destroy
    deleteTodo(todoID) {
        let todos = this.getAllTodos();
        for (let i = 0; i < todos.length; i++) {
            let storageID = todos[i].id;
            if (storageID == todoID) {
                todos.splice(i, 1);
                break;
            }
        }
        localStorage.setItem(this.#todosKey, JSON.stringify(todos));
    }

    deleteProjectTodos(projectID) {
        let todos = this.getAllTodos();
        let newTodos = todos.filter(todo => todo.projectID != projectID);
        localStorage.setItem(this.#todosKey, JSON.stringify(newTodos));
    }
    //#endregion
}

const todoRepository = new TodoRepository();




/***/ }),

/***/ "./src/fonts/Roboto-Regular.ttf":
/*!**************************************!*\
  !*** ./src/fonts/Roboto-Regular.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc2b5060f7accec5cf74.ttf";

/***/ }),

/***/ "./src/img/plus-circle.svg":
/*!*********************************!*\
  !*** ./src/img/plus-circle.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "057fbbe813d06c74ac0c.svg";

/***/ }),

/***/ "./src/img/trash-can.svg":
/*!*******************************!*\
  !*** ./src/img/trash-can.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b4a7b26be64c05d0f239.svg";

/***/ }),

/***/ "./src/img/window-close.svg":
/*!**********************************!*\
  !*** ./src/img/window-close.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fabc6ea21c817cc4963e.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLGlJQUE2QztBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0IsZ0NBQWdDO0FBQ2hDLG1DQUFtQztBQUNuQyw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IsOEJBQThCO0FBQzlCLGlDQUFpQztBQUNqQyw0QkFBNEI7QUFDNUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLHVCQUF1Qix1QkFBdUIseUJBQXlCLHVCQUF1QixhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSx1QkFBdUIsdUJBQXVCLHlCQUF5Qix1QkFBdUIsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVks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cmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jcmVhdGlvblBvcFVwLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZG9tTWFuYWdlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2V4cGFuZGVkVG9kby5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3RSZXBvc2l0b3J5LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvZG9SZXBvc2l0b3J5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1JvYm90by1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5cbjpyb290IHtcbiAgICAtLWJhY2tncm91bmQtY29sb3I6ICNlYWY0ZmY7XG4gICAgLS12aWV3LWNvbnRhaW5lci1jb2xvcjogI2Q5ZWFmZjtcbiAgICAtLXNpZGViYXItY29sb3I6ICNiYWQ3ZmY7XG4gICAgLS1idXR0b24tZmlsdGVyOiBpbnZlcnQoMjAlKSBzZXBpYSg5NiUpIHNhdHVyYXRlKDY3MjIlKSBodWUtcm90YXRlKDIzOWRlZykgYnJpZ2h0bmVzcygxMDIlKSBjb250cmFzdCgxMDElKTtcbiAgICAtLWZvbnRzOiBcIlJvYm90b1wiLCdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICAgIC0tc2lkZWJhci1wYWRkaW5nOiAzMHB4O1xuICAgIC0tYWN0aXZlLWNvbG9yOiAjZmZkOTg4O1xufVxuXG5ib2R5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgbWFyZ2luOiAwO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250cyk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbiNsYW5kaW5nLXZpZXctY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDdmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgICB3aWR0aDogbWluKDEyMDBweCwgOTB2dyk7XG4gICAgaGVpZ2h0OiA3MHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZpZXctY29udGFpbmVyLWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4jcHJvamVjdHMtc2lkZWJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1jb2xvcik7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuXG4jcHJvamVjdHMtc2lkZWJhciwgI3Rhc2stdmlldy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICBnYXA6IDEycHg7XG59XG5cbiNwcm9qZWN0cy1zaWRlYmFyPmRpdjpmaXJzdC1jaGlsZCwgI3Rhc2stdmlldy1jb250YWluZXI+ZGl2OmZpcnN0LWNoaWxkIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDEuOHJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tc2lkZWJhci1wYWRkaW5nKSAtIDEwcHgpO1xufVxuXG4jYWRkLXByb2plY3RzLWNvbnRhaW5lciwgI2FkZC10YXNrcy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMTJweDtcbn1cblxuI2FkZC1wcm9qZWN0cy1jb250YWluZXIge1xuICAgIHdpZHRoOiAxNTBweDtcbn1cblxuI2FkZC10YXNrcy1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMzBweDtcbn1cblxuI2FkZC1wcm9qZWN0cy1jb250YWluZXIgYnV0dG9uLCAjYWRkLXRhc2tzLWNvbnRhaW5lciBidXR0b24ge1xuICAgIG1hcmdpbiA6IDA7XG4gICAgcGFkZGluZyA6IDA7XG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zaWRlYmFyLXBhZGRpbmcpO1xufVxuXG4jYWRkLXByb2plY3RzLWNvbnRhaW5lciB7XG4gICAgZ2FwOiA2cHg7XG59XG5cbiNwcm9qZWN0cy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tdG9wOiAtNnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4ucHJvamVjdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgICBcbiAgICBnYXA6IDZweDtcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXNpZGViYXItcGFkZGluZyk7XG4gICAgcGFkZGluZy1yaWdodDogNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyLjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wcm9qZWN0LmFjdGl2ZS1wcm9qZWN0OjphZnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB6LWluZGV4OiAtMTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjdGl2ZS1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICByaWdodDogMHB4O1xuICAgIGZpbHRlcjogb3BhY2l0eSgwLjg1KTtcbn1cblxuLnByb2plY3Q6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItY29sb3IpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45NSk7XG59XG5cbi5wcm9qZWN0LWRlbGV0ZSB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGZpbHRlcjogdmFyKC0tYnV0dG9uLWZpbHRlcik7XG4gICAgb3BhY2l0eTogMC43NTtcbn1cblxuLnByb2plY3QtZGVsZXRlOmhvdmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogMXB4O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiAyMnB4O1xufVxuXG4jdGFzay12aWV3LWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zaWRlYmFyLXBhZGRpbmcpO1xufVxuXG4udG9kbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdmlldy1jb250YWluZXItY29sb3IpO1xuICAgIGxpbmUtaGVpZ2h0OiAyLjVyZW07XG4gICAgZ2FwOiAxMnB4O1xuICAgIHdpZHRoOiA3NSU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXNpZGViYXItcGFkZGluZyk7XG59XG5cbi50b2RvPmRpdjpsYXN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICBmbGV4OiAxO1xufVxuXG4udG9kbzpob3ZlciB7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOTUpO1xufVxuXG4udG9kbyBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICAgIG1hcmdpbjogMDtcbiAgICAvKiBEb3VibGUtc2l6ZWQgQ2hlY2tib3hlcyAqL1xuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuNSk7IC8qIElFICovXG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuNSk7IC8qIEZGICovXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuNSk7IC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjUpOyAvKiBPcGVyYSAqL1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uYWRkLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5hZGQtYnV0dG9uIGltZyB7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGZpbHRlcjogdmFyKC0tYnV0dG9uLWZpbHRlcik7XG4gICAgb3BhY2l0eTogMC43NTtcbn1cblxuLmFkZC1idXR0b24gaW1nOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHdpZHRoOiAyNnB4O1xuICAgIGhlaWdodDogYXV0bztcbn1cblxuI2V4cGFuZGVkLXRhc2stY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMHB4O1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4jZXhwYW5kZWQtdGFzay1jb250YWluZXI6OmFmdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBsZWZ0OiAwcHg7XG4gICAgdG9wOiAwcHg7XG4gICAgZmlsdGVyOiBvcGFjaXR5KDAuMyk7XG4gICAgei1pbmRleDogMTtcbn1cblxuI2V4cGFuZGVkLXRhc2stYmFja2dyb3VuZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZpZXctY29udGFpbmVyLWNvbG9yKTtcbiAgICBoZWlnaHQ6IDkwdmg7XG4gICAgd2lkdGg6IG1pbig4MDBweCwgNjB2dyk7XG4gICAgdG9wOiA1dmg7XG4gICAgbGVmdDogY2FsYygoMTAwdncgLSBtaW4oODAwcHgsIDYwdncpKSAvIDIpO1xuICAgIHotaW5kZXg6IDI7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIuNXJlbSAxZnI7IFxufVxuXG4uaGVhZGVyLXJvdyB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEycHg7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi5oZWFkZXItcm93IGltZyB7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZpZXctY29udGFpbmVyLWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5oZWFkZXItcm93IGltZzpob3ZlciB7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7XG59XG5cbiNwcmltYXJ5LWluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEycHg7XG4gICAgcGFkZGluZy10b3A6IDEycHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4jcHJpbWFyeS1pbmZvPmRpdjpmaXJzdC1jaGlsZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBnYXA6IDE2cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xufVxuXG4jcHJpbWFyeS1pbmZvIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLCAjcHJpbWFyeS1pbmZvIHRleHRhcmVhIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdmlldy1jb250YWluZXItY29sb3IpO1xufVxuXG4jcHJpbWFyeS1pbmZvIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTJweDtcbiAgICB3aWR0aDogODAlO1xufVxuXG4jcHJpbWFyeS1pbmZvIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIC8qIERvdWJsZS1zaXplZCBDaGVja2JveGVzICovXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMik7IC8qIElFICovXG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDIpOyAvKiBGRiAqL1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgyKTsgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cbiAgICAtby10cmFuc2Zvcm06IHNjYWxlKDIpOyAvKiBPcGVyYSAqL1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMik7XG59XG5cbiNwcmltYXJ5LWluZm8gdGV4dGFyZWEge1xuICAgIHJlc2l6ZTogbm9uZTtcbiAgICBoZWlnaHQ6IDEyLjUlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udHMpO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBwYWRkaW5nOiA1cHg7XG59XG5cbiNwcmltYXJ5LWluZm8gdGV4dGFyZWE6Zm9jdXMge1xuICAgIG91dGxpbmU6IDJweCBzb2xpZCBibGFjaztcbn1cblxuI3NlY29uZGFyeS1pbmZvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWNvbG9yKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyLjVyZW07XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG59XG5cbiNzZWNvbmRhcnktaW5mbz5kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IDRyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGdyb292ZSBncmF5O1xufVxuXG4jc2Vjb25kYXJ5LWluZm8+ZGl2IGxhYmVsIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IC01cHg7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMXJlbTtcbiAgICBsaW5lLWhlaWdodDogMXJlbTtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4jc2Vjb25kYXJ5LWluZm8gaW5wdXRbdHlwZT1cInRleHRcIl0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItY29sb3IpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnRzKTtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbiNzZWNvbmRhcnktaW5mbyBpbnB1dDpob3ZlciB7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7XG59XG5cbiNzZWNvbmRhcnktaW5mbyBpbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cyB7XG4gICAgb3V0bGluZTogMnB4IHNvbGlkIGJsYWNrIGluc2V0O1xufVxuXG4uY29tbWVudC1jb250YWluZXIsIC5hZGQtY29tbWVudC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjhyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uY29tbWVudC1jb250YWluZXIge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgYm9yZGVyOiAxcHggZ3Jvb3ZlIGdyYXk7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjA1KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12aWV3LWNvbnRhaW5lci1jb2xvcik7XG4gICAgZ2FwOiAxMnB4O1xufVxuXG4uY29tbWVudC1jb250YWluZXIgaW5wdXQge1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuLmNvbW1lbnQtY29udGFpbmVyIGltZywgLmFkZC1jb21tZW50LWNvbnRhaW5lciBpbWcge1xuICAgIGZpbHRlcjogdmFyKC0tYnV0dG9uLWZpbHRlcikgb3BhY2l0eSgwLjc1KTtcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4uY29tbWVudC1jb250YWluZXIgaW1nOmhvdmVyLCAuYWRkLWNvbW1lbnQtY29udGFpbmVyIGltZzpob3ZlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZpbHRlcjogdmFyKC0tYnV0dG9uLWZpbHRlcikgb3BhY2l0eSgxKTtcbiAgICB3aWR0aDogMjZweDtcbiAgICBsZWZ0OiAxcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uYWRkLWNvbW1lbnQtY29udGFpbmVyIHtcbiAgICBnYXA6IDEycHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBoZWlnaHQ6IDEuOHJlbTtcbn1cblxuaW5wdXRbdHlwZT1cImRhdGVcIl0sIHNlbGVjdCB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItY29sb3IpO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250cyk7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbnNlbGVjdCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxcHg7XG59XG5cbnNlbGVjdDpob3ZlciB7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7XG59XG5cbi5kZWxldGUtdGV4dCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMXB4O1xuICAgIGxlZnQ6IDZweDtcbiAgICBjb2xvcjogcmVkO1xufVxuXG4uZGVsZXRlLXRleHQraW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgcmlnaHQ6IDMwcHg7XG4gICAgZmlsdGVyOiB2YXIoLS1idXR0b24tZmlsdGVyKSBvcGFjaXR5KDAuNzUpO1xufVxuXG4uZGVsZXRlLXRleHQraW1nOmhvdmVyIHtcbiAgICBmaWx0ZXI6IHZhcigtLWJ1dHRvbi1maWx0ZXIpIG9wYWNpdHkoMSk7XG4gICAgcmlnaHQ6IDI5cHg7XG4gICAgd2lkdGg6IDI2cHg7XG59XG5cbiNwb3AtdXAge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDEuMmZyIDFmcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgYm90dG9tOiA1MHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XG4gICAgY29sdW1uLWdhcDogMTJweDtcbiAgICByb3ctZ2FwOiAxNXB4O1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgcGFkZGluZy10b3A6IDI3cHg7XG4gICAgei1pbmRleDogMjtcbn1cblxuI3BvcC11cCBsYWJlbCwgI3BvcC11cCBpbnB1dCB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xufVxuXG4jcG9wLXVwIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ3JpZC1yb3c6IDE7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiNwb3AtdXAgaW5wdXQge1xuICAgIGdyaWQtcm93OiAyO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBsaW5lLWhlaWdodDogMS40cmVtO1xufVxuXG4jcG9wLXVwIGJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAtMTVweDtcbiAgICBncmlkLXJvdzogMztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI3BvcC11cCBidXR0b246Zmlyc3Qtb2YtdHlwZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2xhdGVncmF5O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLCtEQUF1RDtBQUMzRDs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQiwrQkFBK0I7SUFDL0Isd0JBQXdCO0lBQ3hCLDBHQUEwRztJQUMxRyxpRUFBaUU7SUFDakUsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHlDQUF5QztJQUN6QyxTQUFTO0lBQ1QsWUFBWTtJQUNaLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osNkNBQTZDO0lBQzdDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHNDQUFzQztJQUN0Qyw0QkFBNEI7SUFDNUIsK0JBQStCO0lBQy9CLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixpREFBaUQ7QUFDckQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJ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SUFDWCxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiO1xcbiAgICBzcmM6IHVybCguL2ZvbnRzL1JvYm90by1SZWd1bGFyLnR0ZikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogI2VhZjRmZjtcXG4gICAgLS12aWV3LWNvbnRhaW5lci1jb2xvcjogI2Q5ZWFmZjtcXG4gICAgLS1zaWRlYmFyLWNvbG9yOiAjYmFkN2ZmO1xcbiAgICAtLWJ1dHRvbi1maWx0ZXI6IGludmVydCgyMCUpIHNlcGlhKDk2JSkgc2F0dXJhdGUoNjcyMiUpIGh1ZS1yb3RhdGUoMjM5ZGVnKSBicmlnaHRuZXNzKDEwMiUpIGNvbnRyYXN0KDEwMSUpO1xcbiAgICAtLWZvbnRzOiBcXFwiUm9ib3RvXFxcIiwnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gICAgLS1zaWRlYmFyLXBhZGRpbmc6IDMwcHg7XFxuICAgIC0tYWN0aXZlLWNvbG9yOiAjZmZkOTg4O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnRzKTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4jbGFuZGluZy12aWV3LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDdmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgIHdpZHRoOiBtaW4oMTIwMHB4LCA5MHZ3KTtcXG4gICAgaGVpZ2h0OiA3MHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12aWV3LWNvbnRhaW5lci1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcbiNwcm9qZWN0cy1zaWRlYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1jb2xvcik7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcXG59XFxuXFxuI3Byb2plY3RzLXNpZGViYXIsICN0YXNrLXZpZXctY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XFxuICAgIGdhcDogMTJweDtcXG59XFxuXFxuI3Byb2plY3RzLXNpZGViYXI+ZGl2OmZpcnN0LWNoaWxkLCAjdGFzay12aWV3LWNvbnRhaW5lcj5kaXY6Zmlyc3QtY2hpbGQge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMS44cmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tc2lkZWJhci1wYWRkaW5nKSAtIDEwcHgpO1xcbn1cXG5cXG4jYWRkLXByb2plY3RzLWNvbnRhaW5lciwgI2FkZC10YXNrcy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IC0xMnB4O1xcbn1cXG5cXG4jYWRkLXByb2plY3RzLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG59XFxuXFxuI2FkZC10YXNrcy1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTMwcHg7XFxufVxcblxcbiNhZGQtcHJvamVjdHMtY29udGFpbmVyIGJ1dHRvbiwgI2FkZC10YXNrcy1jb250YWluZXIgYnV0dG9uIHtcXG4gICAgbWFyZ2luIDogMDtcXG4gICAgcGFkZGluZyA6IDA7XFxuICAgIHBhZGRpbmctbGVmdDogdmFyKC0tc2lkZWJhci1wYWRkaW5nKTtcXG59XFxuXFxuI2FkZC1wcm9qZWN0cy1jb250YWluZXIge1xcbiAgICBnYXA6IDZweDtcXG59XFxuXFxuI3Byb2plY3RzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbi10b3A6IC02cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgXFxuICAgIGdhcDogNnB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXNpZGViYXItcGFkZGluZyk7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDZweDtcXG4gICAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucHJvamVjdC5hY3RpdmUtcHJvamVjdDo6YWZ0ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHotaW5kZXg6IC0xO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWN0aXZlLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcmlnaHQ6IDBweDtcXG4gICAgZmlsdGVyOiBvcGFjaXR5KDAuODUpO1xcbn1cXG5cXG4ucHJvamVjdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItY29sb3IpO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjk1KTtcXG59XFxuXFxuLnByb2plY3QtZGVsZXRlIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgZmlsdGVyOiB2YXIoLS1idXR0b24tZmlsdGVyKTtcXG4gICAgb3BhY2l0eTogMC43NTtcXG59XFxuXFxuLnByb2plY3QtZGVsZXRlOmhvdmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiAxcHg7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgd2lkdGg6IDIycHg7XFxufVxcblxcbiN0YXNrLXZpZXctY29udGFpbmVyIHtcXG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zaWRlYmFyLXBhZGRpbmcpO1xcbn1cXG5cXG4udG9kbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZpZXctY29udGFpbmVyLWNvbG9yKTtcXG4gICAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcXG4gICAgZ2FwOiAxMnB4O1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXNpZGViYXItcGFkZGluZyk7XFxufVxcblxcbi50b2RvPmRpdjpsYXN0LWNoaWxkIHtcXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcXG4gICAgdGV4dC1hbGlnbjogZW5kO1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4udG9kbzpob3ZlciB7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjk1KTtcXG59XFxuXFxuLnRvZG8gaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgLyogRG91YmxlLXNpemVkIENoZWNrYm94ZXMgKi9cXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS41KTsgLyogSUUgKi9cXG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuNSk7IC8qIEZGICovXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjUpOyAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xcbiAgICAtby10cmFuc2Zvcm06IHNjYWxlKDEuNSk7IC8qIE9wZXJhICovXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmFkZC1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5hZGQtYnV0dG9uIGltZyB7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGZpbHRlcjogdmFyKC0tYnV0dG9uLWZpbHRlcik7XFxuICAgIG9wYWNpdHk6IDAuNzU7XFxufVxcblxcbi5hZGQtYnV0dG9uIGltZzpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHdpZHRoOiAyNnB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbiNleHBhbmRlZC10YXNrLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMHB4O1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbiNleHBhbmRlZC10YXNrLWNvbnRhaW5lcjo6YWZ0ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBsZWZ0OiAwcHg7XFxuICAgIHRvcDogMHB4O1xcbiAgICBmaWx0ZXI6IG9wYWNpdHkoMC4zKTtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuI2V4cGFuZGVkLXRhc2stYmFja2dyb3VuZCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdmlldy1jb250YWluZXItY29sb3IpO1xcbiAgICBoZWlnaHQ6IDkwdmg7XFxuICAgIHdpZHRoOiBtaW4oODAwcHgsIDYwdncpO1xcbiAgICB0b3A6IDV2aDtcXG4gICAgbGVmdDogY2FsYygoMTAwdncgLSBtaW4oODAwcHgsIDYwdncpKSAvIDIpO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMi41cmVtIDFmcjsgXFxufVxcblxcbi5oZWFkZXItcm93IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEycHg7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4uaGVhZGVyLXJvdyBpbWcge1xcbiAgICBoZWlnaHQ6IDMycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZpZXctY29udGFpbmVyLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uaGVhZGVyLXJvdyBpbWc6aG92ZXIge1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcXG59XFxuXFxuI3ByaW1hcnktaW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTJweDtcXG4gICAgcGFkZGluZy10b3A6IDEycHg7XFxuICAgIHBhZGRpbmctbGVmdDogMjRweDtcXG4gICAgcGFkZGluZy1yaWdodDogMjRweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuI3ByaW1hcnktaW5mbz5kaXY6Zmlyc3QtY2hpbGQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGdhcDogMTZweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xcbn1cXG5cXG4jcHJpbWFyeS1pbmZvIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSwgI3ByaW1hcnktaW5mbyB0ZXh0YXJlYSB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdmlldy1jb250YWluZXItY29sb3IpO1xcbn1cXG5cXG4jcHJpbWFyeS1pbmZvIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0ycHg7XFxuICAgIHdpZHRoOiA4MCU7XFxufVxcblxcbiNwcmltYXJ5LWluZm8gaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgLyogRG91YmxlLXNpemVkIENoZWNrYm94ZXMgKi9cXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMik7IC8qIElFICovXFxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgyKTsgLyogRkYgKi9cXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDIpOyAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xcbiAgICAtby10cmFuc2Zvcm06IHNjYWxlKDIpOyAvKiBPcGVyYSAqL1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xcbn1cXG5cXG4jcHJpbWFyeS1pbmZvIHRleHRhcmVhIHtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBoZWlnaHQ6IDEyLjUlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250cyk7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4jcHJpbWFyeS1pbmZvIHRleHRhcmVhOmZvY3VzIHtcXG4gICAgb3V0bGluZTogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jc2Vjb25kYXJ5LWluZm8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWNvbG9yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAyLjVyZW07XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4jc2Vjb25kYXJ5LWluZm8+ZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggZ3Jvb3ZlIGdyYXk7XFxufVxcblxcbiNzZWNvbmRhcnktaW5mbz5kaXYgbGFiZWwge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIG1hcmdpbi1yaWdodDogMTJweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogLTVweDtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBoZWlnaHQ6IDFyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuI3NlY29uZGFyeS1pbmZvIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItY29sb3IpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnRzKTtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4jc2Vjb25kYXJ5LWluZm8gaW5wdXQ6aG92ZXIge1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcXG59XFxuXFxuI3NlY29uZGFyeS1pbmZvIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXTpmb2N1cyB7XFxuICAgIG91dGxpbmU6IDJweCBzb2xpZCBibGFjayBpbnNldDtcXG59XFxuXFxuLmNvbW1lbnQtY29udGFpbmVyLCAuYWRkLWNvbW1lbnQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgbGluZS1oZWlnaHQ6IDEuOHJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uY29tbWVudC1jb250YWluZXIge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAgYm9yZGVyOiAxcHggZ3Jvb3ZlIGdyYXk7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMDUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12aWV3LWNvbnRhaW5lci1jb2xvcik7XFxuICAgIGdhcDogMTJweDtcXG59XFxuXFxuLmNvbW1lbnQtY29udGFpbmVyIGlucHV0IHtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uY29tbWVudC1jb250YWluZXIgaW1nLCAuYWRkLWNvbW1lbnQtY29udGFpbmVyIGltZyB7XFxuICAgIGZpbHRlcjogdmFyKC0tYnV0dG9uLWZpbHRlcikgb3BhY2l0eSgwLjc1KTtcXG4gICAgd2lkdGg6IDI0cHg7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uY29tbWVudC1jb250YWluZXIgaW1nOmhvdmVyLCAuYWRkLWNvbW1lbnQtY29udGFpbmVyIGltZzpob3ZlciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZmlsdGVyOiB2YXIoLS1idXR0b24tZmlsdGVyKSBvcGFjaXR5KDEpO1xcbiAgICB3aWR0aDogMjZweDtcXG4gICAgbGVmdDogMXB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5hZGQtY29tbWVudC1jb250YWluZXIge1xcbiAgICBnYXA6IDEycHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDEuOHJlbTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdLCBzZWxlY3Qge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItY29sb3IpO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udHMpO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG5zZWxlY3Qge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFweDtcXG59XFxuXFxuc2VsZWN0OmhvdmVyIHtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7XFxufVxcblxcbi5kZWxldGUtdGV4dCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAxcHg7XFxuICAgIGxlZnQ6IDZweDtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuLmRlbGV0ZS10ZXh0K2ltZyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDI0cHg7XFxuICAgIHJpZ2h0OiAzMHB4O1xcbiAgICBmaWx0ZXI6IHZhcigtLWJ1dHRvbi1maWx0ZXIpIG9wYWNpdHkoMC43NSk7XFxufVxcblxcbi5kZWxldGUtdGV4dCtpbWc6aG92ZXIge1xcbiAgICBmaWx0ZXI6IHZhcigtLWJ1dHRvbi1maWx0ZXIpIG9wYWNpdHkoMSk7XFxuICAgIHJpZ2h0OiAyOXB4O1xcbiAgICB3aWR0aDogMjZweDtcXG59XFxuXFxuI3BvcC11cCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMS4yZnIgMWZyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgYm90dG9tOiA1MHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICAgIGNvbHVtbi1nYXA6IDEycHg7XFxuICAgIHJvdy1nYXA6IDE1cHg7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxuICAgIHBhZGRpbmctdG9wOiAyN3B4O1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4jcG9wLXVwIGxhYmVsLCAjcG9wLXVwIGlucHV0IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbn1cXG5cXG4jcG9wLXVwIGxhYmVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNwb3AtdXAgaW5wdXQge1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBsaW5lLWhlaWdodDogMS40cmVtO1xcbn1cXG5cXG4jcG9wLXVwIGJ1dHRvbiB7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IC0xNXB4O1xcbiAgICBncmlkLXJvdzogMztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI3BvcC11cCBidXR0b246Zmlyc3Qtb2YtdHlwZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHNsYXRlZ3JheTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBkb21NYW5hZ2VyIH0gZnJvbSBcIi4vZG9tTWFuYWdlci5qc1wiO1xuaW1wb3J0IHsgZXhwYW5kZWRUb2RvIH0gZnJvbSBcIi4vZXhwYW5kZWRUb2RvLmpzXCI7XG5cbmNvbnN0IGNyZWF0aW9uUG9wVXAgPSAoZnVuY3Rpb24oKSB7ICAgXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXTtcbiAgICBjb25zdCBUQVNLX0lOUFVUID0gXCJ0YXNrXCI7XG4gICAgY29uc3QgUFJPSkVDVF9JTlBVVCA9IFwicHJvamVjdFwiO1xuICAgIGNvbnN0IENPTU1FTlRfSU5QVVQgPSBcImNvbW1lbnRcIjtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBwb3B1cCBmb3IgY3JlYXRpb24gb2YgYSBuZXcgdGFzaywgcHJvamVjdCwgb3IgY29tbWVudFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dFR5cGUgLSBcInRhc2tcIiB8IFwicHJvamVjdFwiIHwgXCJjb21tZW50XCJcbiAgICAgKi9cbiAgICBjb25zdCBjcmVhdGVQb3BVcCA9IGZ1bmN0aW9uKGlucHV0VHlwZSkge1xuICAgICAgICBjb25zdCBwb3BVcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHBvcFVwLmlkID0gXCJwb3AtdXBcIjtcblxuICAgICAgICBjb25zdCBwb3BVcEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICAgICAgcG9wVXBGb3JtLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwb3AtdXBcIik7XG5cbiAgICAgICAgY29uc3QgaW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblxuICAgICAgICBzd2l0Y2ggKGlucHV0VHlwZSkge1xuICAgICAgICAgICAgY2FzZSBUQVNLX0lOUFVUOlxuICAgICAgICAgICAgICAgIGlucHV0TGFiZWwudGV4dENvbnRlbnQgPSBcIkVudGVyIHRhc2sgbmFtZVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBQUk9KRUNUX0lOUFVUOlxuICAgICAgICAgICAgICAgIGlucHV0TGFiZWwudGV4dENvbnRlbnQgPSBcIkVudGVyIHByb2plY3QgbmFtZVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBDT01NRU5UX0lOUFVUOlxuICAgICAgICAgICAgICAgIGlucHV0TGFiZWwudGV4dENvbnRlbnQgPSBcIkVudGVyIGNvbW1lbnRcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0TGFiZWwuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInBvcC11cFwiKTtcbiAgICAgICAgaW5wdXRMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJjcmVhdGlvbi1pbnB1dFwiKTtcblxuICAgICAgICBjb25zdCBpbnB1dEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBpbnB1dEZpZWxkLnR5cGUgPSBcInRleHRcIjtcbiAgICAgICAgaW5wdXRGaWVsZC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicG9wLXVwXCIpO1xuICAgICAgICBpbnB1dEZpZWxkLmlkID0gXCJjcmVhdGlvbi1pbnB1dFwiO1xuXG4gICAgICAgIGNvbnN0IGFib3J0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgYWJvcnRCdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgICAgIGFib3J0QnV0dG9uLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgICAgICAgYWJvcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHBvcFVwLnJlbW92ZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBjb25maXJtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgY29uZmlybUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicG9wLXVwXCIpO1xuICAgICAgICBjb25maXJtQnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xuICAgICAgICBjb25maXJtQnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGRcIjtcbiAgICAgICAgY29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChpbnB1dFR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFRBU0tfSU5QVVQ6XG4gICAgICAgICAgICAgICAgICAgIGRvbU1hbmFnZXIuYWRkVG9kbyhpbnB1dEZpZWxkLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBQUk9KRUNUX0lOUFVUOlxuICAgICAgICAgICAgICAgICAgICBkb21NYW5hZ2VyLmFkZFByb2plY3QoaW5wdXRGaWVsZC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgQ09NTUVOVF9JTlBVVDpcbiAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWRUb2RvLmFkZENvbW1lbnQoaW5wdXRGaWVsZC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcG9wVXAucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHBvcFVwLmFwcGVuZENoaWxkKHBvcFVwRm9ybSk7XG4gICAgICAgIHBvcFVwLmFwcGVuZENoaWxkKGlucHV0TGFiZWwpO1xuICAgICAgICBwb3BVcC5hcHBlbmRDaGlsZChpbnB1dEZpZWxkKTtcbiAgICAgICAgcG9wVXAuYXBwZW5kQ2hpbGQoYWJvcnRCdXR0b24pO1xuICAgICAgICBwb3BVcC5hcHBlbmRDaGlsZChjb25maXJtQnV0dG9uKTtcblxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKHBvcFVwKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge2NyZWF0ZVBvcFVwfTtcbn0pKCk7XG5cbmV4cG9ydCB7Y3JlYXRpb25Qb3BVcH0iLCJpbXBvcnQgeyBwcm9qZWN0UmVwb3NpdG9yeSB9IGZyb20gXCIuL3Byb2plY3RSZXBvc2l0b3J5LmpzXCI7XG5pbXBvcnQgeyB0b2RvUmVwb3NpdG9yeSB9IGZyb20gXCIuL3RvZG9SZXBvc2l0b3J5LmpzXCI7XG5pbXBvcnQgeyBleHBhbmRlZFRvZG8gfSBmcm9tIFwiLi9leHBhbmRlZFRvZG8uanNcIjtcbmltcG9ydCB7IGNyZWF0aW9uUG9wVXAgfSBmcm9tIFwiLi9jcmVhdGlvblBvcFVwLmpzXCI7XG5pbXBvcnQgQWRkSWNvbiBmcm9tIFwiLi9pbWcvcGx1cy1jaXJjbGUuc3ZnXCI7XG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tIFwiLi9pbWcvdHJhc2gtY2FuLnN2Z1wiO1xuXG5jb25zdCBkb21NYW5hZ2VyID0gKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy1jb250YWluZXJcIik7XG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1jb250YWluZXJcIik7XG4gICAgY29uc3QgdGFza3NIZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tzLWhlYWRlclwiKTtcblxuICAgIGNvbnN0IFBST0pFQ1RfSURfREFUQSA9IFwicHJvamVjdElEXCI7XG5cbiAgICBsZXQgcHJvamVjdEluRm9jdXNJRCA9IFwiXCI7XG5cbiAgICBjb25zdCBpbml0ID0gZnVuY3Rpb24oKSB7ICBcbiAgICAgICAgbGV0IGFkZEJ1dHRvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhZGQtYnV0dG9uXCIpKTtcbiAgICAgICAgXG4gICAgICAgIGFkZEJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICBsZXQgYnV0dG9uSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgYnV0dG9uSW1hZ2Uuc3JjID0gQWRkSWNvbjtcbiAgICAgICAgYnV0dG9uSW1hZ2UuYWx0ID0gXCJhZGRcIjtcbiAgICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKGJ1dHRvbkltYWdlKTtcbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgIGNvbnN0IGFkZFByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1wcm9qZWN0cy1jb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBhZGRQcm9qZWN0Q29udGFpbmVyLmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBjcmVhdGlvblBvcFVwLmNyZWF0ZVBvcFVwKFwicHJvamVjdFwiKSk7XG5cbiAgICAgICAgY29uc3QgYWRkVG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRhc2tzLWNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3QgYWRkVG9kb0J1dHRvbiA9IGFkZFRvZG9Db250YWluZXIuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgIGFkZFRvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGNyZWF0aW9uUG9wVXAuY3JlYXRlUG9wVXAoXCJ0YXNrXCIpKTtcblxuICAgICAgICByZW5kZXJBbGxQcm9qZWN0cygpO1xuICAgICAgICBleHBhbmRlZFRvZG8udG9nZ2xlVmlzaWJpbGl0eShmYWxzZSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyUHJvamVjdCA9IGZ1bmN0aW9uKHByb2plY3REYXRhLCBmb2N1c09uUHJvamVjdCA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuICAgICAgICBwcm9qZWN0LmRhdGFzZXRbUFJPSkVDVF9JRF9EQVRBXSA9IHByb2plY3REYXRhLmlkO1xuICAgICAgICBwcm9qZWN0LnRleHRDb250ZW50ID0gYCMgJHtwcm9qZWN0RGF0YS5uYW1lfWA7XG5cbiAgICAgICAgY29uc3QgZGVsZXRlSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgZGVsZXRlSW1hZ2Uuc3JjID0gRGVsZXRlSWNvbjtcbiAgICAgICAgZGVsZXRlSW1hZ2UuYWx0ID0gXCJkZWxldGVcIjtcbiAgICAgICAgZGVsZXRlSW1hZ2UuY2xhc3NMaXN0LmFkZChcInByb2plY3QtZGVsZXRlXCIpO1xuICAgICAgICBkZWxldGVJbWFnZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGVsZXRlUHJvamVjdCk7XG5cbiAgICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZChkZWxldGVJbWFnZSk7XG4gICAgICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbmRlclByb2plY3RUb2Rvcyk7XG4gICAgICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3QpO1xuXG4gICAgICAgIGlmIChmb2N1c09uUHJvamVjdCkge1xuICAgICAgICAgICAgcHJvamVjdC5jbGljaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyVG9kbyA9IGZ1bmN0aW9uKHRvZG9EYXRhKSB7XG4gICAgICAgIGNvbnN0IHRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0b2RvLmNsYXNzTGlzdC5hZGQoXCJ0b2RvXCIpO1xuICAgICAgICB0b2RvLmRhdGFzZXRbXCJ0b2RvSURcIl0gPSB0b2RvRGF0YS5pZDtcbiAgICAgICAgdG9kby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXhwYW5kZWRUb2RvLnJlbmRlckV4cGFuZGVkVG9kbyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgY2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICAgICAgY2hlY2tib3guaWQgPSB0b2RvRGF0YS5pZDtcbiAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHRvZG9EYXRhLmlzRG9uZTtcbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRvZG9SZXBvc2l0b3J5LnVwZGF0ZVRvZG8odGhpcy5pZCwge1wiaXNEb25lXCI6IHRoaXMuY2hlY2tlZH0pOyAgIFxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHRvZG9OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdG9kb05hbWUudGV4dENvbnRlbnQgPSB0b2RvRGF0YS5uYW1lO1xuICAgICAgICB0b2RvTmFtZS5kYXRhc2V0W1widG9kb0lEXCJdID0gdG9kb0RhdGEuaWQ7XG5cbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSB0b2RvRGF0YS5kdWVEYXRlICE9IFwiXCIgPyBgRHVlOiAke3RvZG9EYXRhLmR1ZURhdGV9YCA6IFwiXCI7XG4gICAgICAgIGR1ZURhdGUuZGF0YXNldFtcInRvZG9JRFwiXSA9IHRvZG9EYXRhLmlkO1xuICAgICAgICBkdWVEYXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBleHBhbmRlZFRvZG8ucmVuZGVyRXhwYW5kZWRUb2RvKTtcblxuICAgICAgICB0b2RvLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICAgICAgdG9kby5hcHBlbmRDaGlsZCh0b2RvTmFtZSk7XG4gICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kbyk7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IGZ1bmN0aW9uKHByb2plY3ROYW1lKSB7XG4gICAgICAgIGlmIChwcm9qZWN0TmFtZSkge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdERhdGEgPSBwcm9qZWN0UmVwb3NpdG9yeS5jcmVhdGVOZXdQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgICAgICAgIHJlbmRlclByb2plY3QocHJvamVjdERhdGEsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYWRkVG9kbyA9IGZ1bmN0aW9uKHRvZG9OYW1lKSB7XG4gICAgICAgIGlmIChwcm9qZWN0SW5Gb2N1c0lEICE9IFwiXCIpIHtcbiAgICAgICAgICAgIGlmICh0b2RvTmFtZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EYXRhID0gdG9kb1JlcG9zaXRvcnkuY3JlYXRlTmV3VG9kbyh0b2RvTmFtZSwgcHJvamVjdEluRm9jdXNJRCk7XG4gICAgICAgICAgICAgICAgcmVuZGVyVG9kbyh0b2RvRGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhbGVydChcIlBsZWFzZSBjcmVhdGUgYW5kL29yIHNlbGVjdCBhIHByb2plY3QgZmlyc3RcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJBbGxQcm9qZWN0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgcHJvamVjdHMgPSBwcm9qZWN0UmVwb3NpdG9yeS5nZXRBbGxQcm9qZWN0cygpO1xuICAgICAgICBwcm9qZWN0c0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICB0YXNrQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIGlmIChwcm9qZWN0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4geyByZW5kZXJQcm9qZWN0KHByb2plY3QpOyB9KTtcbiAgICAgICAgICAgIHJlbmRlclByb2plY3RUb2Rvcyhwcm9qZWN0c1swXS5pZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJQcm9qZWN0VG9kb3MgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGNvbnN0IGlzRXZlbnQgPSB0eXBlb2YgZGF0YSAhPSBcInN0cmluZ1wiO1xuICAgICAgICBjb25zdCBwcm9qZWN0SUQgPSBpc0V2ZW50ID8gZGF0YS50YXJnZXQuZGF0YXNldFtQUk9KRUNUX0lEX0RBVEFdIDogZGF0YTtcblxuICAgICAgICBpZiAoaXNFdmVudCkge1xuICAgICAgICAgICAgZGF0YS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgaWYgKHByb2plY3RJRCkge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdERhdGEgPSBwcm9qZWN0UmVwb3NpdG9yeS5nZXRQcm9qZWN0QnlJRChwcm9qZWN0SUQpO1xuICAgICAgICAgICAgdGFza3NIZWFkZXIudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0RGF0YS5uYW1lfSBUYXNrc2A7XG4gICAgICAgICAgICBwcm9qZWN0SW5Gb2N1c0lEID0gcHJvamVjdElEO1xuICAgICAgICAgICAgY29uc3QgdG9kb3MgPSB0b2RvUmVwb3NpdG9yeS5nZXRUb2Rvc0J5UHJvamVjdElEKHByb2plY3RJRCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICh0b2Rvcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGFza0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgICAgIHRvZG9zLmZvckVhY2godG9kb0RhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJUb2RvKHRvZG9EYXRhKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhc2tDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG1hcmtBY3RpdmVQcm9qZWN0KCk7XG4gICAgfVxuXG4gICAgY29uc3QgbWFya0FjdGl2ZVByb2plY3QgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBBcnJheS5mcm9tKHByb2plY3RzQ29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0XCIpKTtcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0LmRhdGFzZXRbUFJPSkVDVF9JRF9EQVRBXSAhPSBwcm9qZWN0SW5Gb2N1c0lEKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLXByb2plY3RcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtcHJvamVjdFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlVG9kbyA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHRvZG9JRCA9IGV2ZW50LnRhcmdldC5pZDtcblxuICAgICAgICBpZiAodG9kb0lEICYmIGNvbmZpcm0oXCJEZWxldGUgVGFzaz9cIikpIHtcbiAgICAgICAgICAgIHRvZG9SZXBvc2l0b3J5LmRlbGV0ZVRvZG8odG9kb0lEKTtcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlUHJvamVjdCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBjb25zdCBwcm9qZWN0RE9NID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHByb2plY3RJRCA9IHByb2plY3RET00uZGF0YXNldFtQUk9KRUNUX0lEX0RBVEFdO1xuICAgICAgICBjb25zdCBpc0luRm9jdXMgPSBwcm9qZWN0RE9NLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZS1wcm9qZWN0XCIpO1xuXG4gICAgICAgIHByb2plY3RSZXBvc2l0b3J5LmRlbGV0ZVByb2plY3QocHJvamVjdElEKTtcbiAgICAgICAgdG9kb1JlcG9zaXRvcnkuZGVsZXRlUHJvamVjdFRvZG9zKHByb2plY3RJRCk7XG4gICAgICAgIHByb2plY3RET00ucmVtb3ZlKCk7XG5cbiAgICAgICAgaWYgKGlzSW5Gb2N1cykge1xuICAgICAgICAgICAgaWYgKHByb2plY3RzQ29udGFpbmVyLmNoaWxkRWxlbWVudENvdW50ID4gMCkge1xuICAgICAgICAgICAgICAgIHByb2plY3RzQ29udGFpbmVyLmZpcnN0RWxlbWVudENoaWxkLmNsaWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXNrQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgcHJvamVjdEluRm9jdXNJRCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgdGFza3NIZWFkZXIudGV4dENvbnRlbnQgPSBcIlRhc2tzXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0KCk7XG5cbiAgICByZXR1cm4ge2RlbGV0ZVRvZG8sIHJlbmRlclByb2plY3RUb2RvcywgcmVuZGVyQWxsUHJvamVjdHMsIGFkZFRvZG8sIGFkZFByb2plY3R9XG59KSgpO1xuXG5leHBvcnQgeyBkb21NYW5hZ2VyIH07XG4iLCJpbXBvcnQgeyB0b2RvUmVwb3NpdG9yeSB9IGZyb20gXCIuL3RvZG9SZXBvc2l0b3J5LmpzXCI7XG5pbXBvcnQgeyBwcm9qZWN0UmVwb3NpdG9yeSB9IGZyb20gXCIuL3Byb2plY3RSZXBvc2l0b3J5LmpzXCI7XG5pbXBvcnQgeyBkb21NYW5hZ2VyIH0gZnJvbSBcIi4vZG9tTWFuYWdlci5qc1wiO1xuaW1wb3J0IHsgY3JlYXRpb25Qb3BVcCB9IGZyb20gXCIuL2NyZWF0aW9uUG9wVXAuanNcIjtcbmltcG9ydCBDbG9zZUljb24gZnJvbSBcIi4vaW1nL3dpbmRvdy1jbG9zZS5zdmdcIjtcbmltcG9ydCBEZWxldGVJY29uIGZyb20gXCIuL2ltZy90cmFzaC1jYW4uc3ZnXCI7XG5pbXBvcnQgQWRkSWNvbiBmcm9tIFwiLi9pbWcvcGx1cy1jaXJjbGUuc3ZnXCI7XG5cbmNvbnN0IGV4cGFuZGVkVG9kbyA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBleHBhbmRlZFRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4cGFuZGVkLXRhc2stYmFja2dyb3VuZFwiKTtcbiAgICBleHBhbmRlZFRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpKTtcblxuICAgIGNvbnN0IGhlYWRlclJvdyA9IGV4cGFuZGVkVGFzay5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICBjb25zdCBwcmltYXJ5SW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpbWFyeS1pbmZvXCIpO1xuICAgIGNvbnN0IHNlY29uZGFyeUluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlY29uZGFyeS1pbmZvXCIpO1xuICAgIGNvbnN0IGV4cGFuZGVkVGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhwYW5kZWQtdGFzay1jb250YWluZXJcIik7XG5cbiAgICBsZXQgdG9kb0RhdGEgPSBudWxsO1xuXG4gICAgY29uc3QgdG9nZ2xlVmlzaWJpbGl0eSA9IGZ1bmN0aW9uKHNob3dFbGVtZW50KSB7XG4gICAgICAgICFzaG93RWxlbWVudCA/IGV4cGFuZGVkVGFzay5wYXJlbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImhpZGRlblwiLCB0cnVlKSA6IGV4cGFuZGVkVGFzay5wYXJlbnRFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImhpZGRlblwiKTsgICBcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJFeHBhbmRlZFRvZG8gPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGNvbnN0IHRvZG9JRCA9IHR5cGVvZiBkYXRhICE9IFwic3RyaW5nXCIgPyBkYXRhLnRhcmdldC5kYXRhc2V0W1widG9kb0lEXCJdIDogZGF0YTtcblxuICAgICAgICBpZiAodG9kb0lEKSB7XG4gICAgICAgICAgICB0b2RvRGF0YSA9IHRvZG9SZXBvc2l0b3J5LmdldFRvZG9CeUlEKHRvZG9JRCk7XG5cbiAgICAgICAgICAgIHJlbW92ZVByZXZpb3VzVGFza0VsZW1lbnRzKCk7XG4gICAgICAgICAgICBzZXRIZWFkZXJFbGVtZW50cyh0b2RvRGF0YSk7XG4gICAgICAgICAgICB0b2dnbGVWaXNpYmlsaXR5KHRydWUpO1xuICAgICAgICAgICAgc2V0UHJpbWFyeUluZm8odG9kb0RhdGEpO1xuICAgICAgICAgICAgc2V0U2Vjb25kYXJ5SW5mbyh0b2RvRGF0YSk7XG5cbiAgICAgICAgICAgIGV4cGFuZGVkVGFza0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRvZ2dsZVZpc2liaWxpdHkoZmFsc2UpO1xuICAgICAgICAgICAgICAgIGRvbU1hbmFnZXIucmVuZGVyUHJvamVjdFRvZG9zKHRvZG9EYXRhLnByb2plY3RJRCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZVByZXZpb3VzVGFza0VsZW1lbnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIEFycmF5LmZyb20oaGVhZGVyUm93LmNoaWxkcmVuKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBBcnJheS5mcm9tKHByaW1hcnlJbmZvLmNoaWxkcmVuKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgQXJyYXkuZnJvbShzZWNvbmRhcnlJbmZvLmNoaWxkcmVuKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0SGVhZGVyRWxlbWVudHMgPSBmdW5jdGlvbih0b2RvRGF0YSkge1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb2plY3RSZXBvc2l0b3J5LmdldFByb2plY3RCeUlEKHRvZG9EYXRhLnByb2plY3RJRCkubmFtZTtcbiAgICAgICAgY29uc3QgcHJvamVjdERPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2plY3RET00udGV4dENvbnRlbnQgPSBgIyAke3Byb2plY3ROYW1lfWA7XG5cbiAgICAgICAgaGVhZGVyUm93LmFwcGVuZENoaWxkKHByb2plY3RET00pO1xuICAgICAgICBzZXRDbG9zZUljb24odG9kb0RhdGEpO1xuICAgIH1cblxuICAgIGNvbnN0IHNldENsb3NlSWNvbiA9IGZ1bmN0aW9uKHRvZG9EYXRhKSB7XG4gICAgICAgIGNvbnN0IGNsb3NlV2luZG93SWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBjbG9zZVdpbmRvd0ljb24uc3JjID0gQ2xvc2VJY29uO1xuICAgICAgICBjbG9zZVdpbmRvd0ljb24uYWx0ID0gXCJjbG9zZV90YXNrX3dpbmRvd1wiO1xuICAgICAgICBjbG9zZVdpbmRvd0ljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGV4cGFuZGVkVG9kby50b2dnbGVWaXNpYmlsaXR5KGZhbHNlKTtcbiAgICAgICAgICAgIGRvbU1hbmFnZXIucmVuZGVyUHJvamVjdFRvZG9zKHRvZG9EYXRhLnByb2plY3RJRCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGhlYWRlclJvdy5hcHBlbmQoY2xvc2VXaW5kb3dJY29uKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRQcmltYXJ5SW5mbyA9IGZ1bmN0aW9uKHRvZG9EYXRhKSB7XG4gICAgICAgIGNvbnN0IG5hbWVBbmRDaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG5hbWVBbmRDaGVjay5jbGFzc0xpc3QuYWRkKFwibmFtZS1hbmQtY2hlY2tcIik7XG5cbiAgICAgICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIHRhc2tOYW1lLnR5cGUgPSBcInRleHRcIjtcbiAgICAgICAgdGFza05hbWUudmFsdWUgPSB0b2RvRGF0YS5uYW1lO1xuICAgICAgICB0YXNrTmFtZS5jbGFzc0xpc3QuYWRkKFwiZXhwYW5kZWQtdGFzay1uYW1lXCIpO1xuICAgICAgICB0YXNrTmFtZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHRvZG9SZXBvc2l0b3J5LnVwZGF0ZVRvZG8odG9kb0RhdGEuaWQsIHtcIm5hbWVcIjogZXZlbnQudGFyZ2V0LnZhbHVlfSk7IFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgY2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHRvZG9EYXRhLmlzRG9uZTtcbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBldmVudCA9PiB7XG4gICAgICAgICAgICB0b2RvUmVwb3NpdG9yeS51cGRhdGVUb2RvKHRvZG9EYXRhLmlkLCB7XCJpc0RvbmVcIjogZXZlbnQudGFyZ2V0LmNoZWNrZWR9KTsgXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpXG4gICAgICAgIGRlc2NyaXB0aW9uLnBsYWNlaG9sZGVyID0gXCJEZXNjcmlwdGlvblwiO1xuICAgICAgICBkZXNjcmlwdGlvbi52YWx1ZSA9IHRvZG9EYXRhLmRlc2NyaXB0aW9uO1xuICAgICAgICBkZXNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHRvZG9SZXBvc2l0b3J5LnVwZGF0ZVRvZG8odG9kb0RhdGEuaWQsIHtcImRlc2NyaXB0aW9uXCI6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBjb21tZW50cyA9IFtdO1xuICAgICAgICB0b2RvRGF0YS5jaGVja2xpc3RJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgY29uc3QgY29tbWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBjb21tZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb21tZW50LWNvbnRhaW5lclwiKTtcblxuICAgICAgICAgICAgY29uc3QgY29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBjb21tZW50LnRleHRDb250ZW50ID0gaXRlbTtcblxuICAgICAgICAgICAgY29uc3QgZGVsZXRlSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGRlbGV0ZUltYWdlLmNsYXNzTGlzdC5hZGQoXCJjb21tZW50LWRlbGV0ZVwiKTtcbiAgICAgICAgICAgIGRlbGV0ZUltYWdlLnNyYyA9IERlbGV0ZUljb247XG4gICAgICAgICAgICBkZWxldGVJbWFnZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGVsZXRlQ29tbWVudCk7XG5cbiAgICAgICAgICAgIGNvbW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY29tbWVudCk7XG4gICAgICAgICAgICBjb21tZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZUltYWdlKTtcbiAgICAgICAgICAgIGNvbW1lbnRzLnB1c2goY29tbWVudENvbnRhaW5lcik7XG5cbiAgICAgICAgICAgIGRlbGV0ZUltYWdlLmRhdGFzZXRbXCJ0b2RvSURcIl0gPSB0b2RvRGF0YS5pZDtcbiAgICAgICAgICAgIGRlbGV0ZUltYWdlLmRhdGFzZXRbXCJpbmRleFwiXSA9IGNvbW1lbnRzLmluZGV4T2YoY29tbWVudENvbnRhaW5lcik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGFkZENvbW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBhZGRDb21tZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhZGQtY29tbWVudC1jb250YWluZXJcIik7XG5cbiAgICAgICAgY29uc3QgYWRkSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgYWRkSW1hZ2Uuc3JjID0gQWRkSWNvbjtcbiAgICAgICAgYWRkSW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGNyZWF0aW9uUG9wVXAuY3JlYXRlUG9wVXAoXCJjb21tZW50XCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgYWRkSW1hZ2UuZGF0YXNldFtcInRvZG9JRFwiXSA9IHRvZG9EYXRhLmlkO1xuXG4gICAgICAgIGNvbnN0IGFkZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBhZGRUZXh0LnRleHRDb250ZW50ID0gXCJBZGQgQ29tbWVudFwiO1xuXG4gICAgICAgIGFkZENvbW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkSW1hZ2UpO1xuICAgICAgICBhZGRDb21tZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRleHQpOyAgICAgICAgXG4gICAgICAgIG5hbWVBbmRDaGVjay5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gICAgICAgIG5hbWVBbmRDaGVjay5hcHBlbmRDaGlsZCh0YXNrTmFtZSk7XG4gICAgICAgIHByaW1hcnlJbmZvLmFwcGVuZENoaWxkKG5hbWVBbmRDaGVjayk7XG4gICAgICAgIHByaW1hcnlJbmZvLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgICAgICBjb21tZW50cy5mb3JFYWNoKGNvbW1lbnQgPT4ge1xuICAgICAgICAgICAgY29tbWVudC5kYXRhc2V0W1wiaW5kZXhcIl0gPSBjb21tZW50cy5pbmRleE9mKGNvbW1lbnQpO1xuICAgICAgICAgICAgcHJpbWFyeUluZm8uYXBwZW5kQ2hpbGQoY29tbWVudCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHByaW1hcnlJbmZvLmFwcGVuZENoaWxkKGFkZENvbW1lbnRDb250YWluZXIpO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZENvbW1lbnQgPSBmdW5jdGlvbihjb21tZW50VGV4dCkge1xuICAgICAgICBpZiAoY29tbWVudFRleHQpIHtcbiAgICAgICAgICAgIHRvZG9EYXRhLmNoZWNrbGlzdEl0ZW1zLnB1c2goY29tbWVudFRleHQpO1xuICAgICAgICAgICAgY29uc3QgbmV3Q2hlY2tsaXN0ID0gdG9kb0RhdGEuY2hlY2tsaXN0SXRlbXM7XG4gICAgICAgICAgICB0b2RvUmVwb3NpdG9yeS51cGRhdGVUb2RvKHRvZG9EYXRhLmlkLCB7XCJjaGVja2xpc3RJdGVtc1wiOiBuZXdDaGVja2xpc3R9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmVuZGVyRXhwYW5kZWRUb2RvKHRvZG9EYXRhLmlkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGRlbGV0ZUNvbW1lbnQgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBjb25zdCB0b2RvSUQgPSBldmVudC50YXJnZXQuZGF0YXNldFtcInRvZG9JRFwiXTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBldmVudC50YXJnZXQuZGF0YXNldFtcImluZGV4XCJdO1xuXG4gICAgICAgIGNvbnN0IGNoZWNrbGlzdCA9IHRvZG9SZXBvc2l0b3J5LmdldFRvZG9CeUlEKHRvZG9JRCkuY2hlY2tsaXN0SXRlbXM7XG4gICAgICAgIGNoZWNrbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICAgIHRvZG9SZXBvc2l0b3J5LnVwZGF0ZVRvZG8odG9kb0lELCB7XCJjaGVja2xpc3RJdGVtc1wiOiBjaGVja2xpc3R9KTtcbiAgICAgICAgcmVuZGVyRXhwYW5kZWRUb2RvKHRvZG9JRCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0U2Vjb25kYXJ5SW5mbyA9IGZ1bmN0aW9uKHRvZG9EYXRhKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcHJvamVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICBwcm9qZWN0TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHJvamVjdElucHV0XCIpO1xuICAgICAgICBwcm9qZWN0TGFiZWwudGV4dENvbnRlbnQgPSBcIlByb2plY3RcIjtcblxuICAgICAgICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIHByb2plY3RJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgICAgIHByb2plY3RJbnB1dC5pZCA9IFwicHJvamVjdElucHV0XCI7XG4gICAgICAgIHByb2plY3RJbnB1dC52YWx1ZSA9IHByb2plY3RSZXBvc2l0b3J5LmdldFByb2plY3RCeUlEKHRvZG9EYXRhLnByb2plY3RJRCkubmFtZTtcbiAgICAgICAgcHJvamVjdElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZXZlbnQgPT4ge1xuICAgICAgICAgICAgcHJvamVjdFJlcG9zaXRvcnkudXBkYXRlUHJvamVjdCh0b2RvRGF0YS5wcm9qZWN0SUQsIHtcIm5hbWVcIjogZXZlbnQudGFyZ2V0LnZhbHVlfSlcbiAgICAgICAgICAgIGRvbU1hbmFnZXIucmVuZGVyQWxsUHJvamVjdHMoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0TGFiZWwpO1xuICAgICAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RJbnB1dCk7XG5cblxuICAgICAgICBjb25zdCBkYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGRhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkYXRlSW5wdXRcIik7XG4gICAgICAgIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiRHVlIERhdGVcIjtcblxuICAgICAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGRhdGVJbnB1dC50eXBlID0gXCJkYXRlXCI7XG4gICAgICAgIGRhdGVJbnB1dC5pZCA9IFwiZGF0ZUlucHV0XCI7XG4gICAgICAgIGRhdGVJbnB1dC52YWx1ZSA9IHRvZG9EYXRhLmR1ZURhdGU7XG4gICAgICAgIGRhdGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHRvZG9SZXBvc2l0b3J5LnVwZGF0ZVRvZG8odG9kb0RhdGEuaWQsIHtcImR1ZURhdGVcIjogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XG4gICAgICAgICAgICBkb21NYW5hZ2VyLnJlbmRlclByb2plY3RUb2Rvcyh0b2RvRGF0YS5wcm9qZWN0SUQpO1xuICAgICAgICB9KTtcblxuICAgICAgICBkYXRlRGl2LmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gICAgICAgIGRhdGVEaXYuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcblxuXG4gICAgICAgIGNvbnN0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICBwcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByaW9yaXR5SW5wdXRcIik7XG4gICAgICAgIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5XCI7XG5cbiAgICAgICAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgICAgIHByaW9yaXR5SW5wdXQuaWQgPSBcInByaW9yaXR5SW5wdXRcIjtcbiAgICAgICAgcHJpb3JpdHlJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHRvZG9SZXBvc2l0b3J5LnVwZGF0ZVRvZG8odG9kb0RhdGEuaWQsIHtcInByaW9yaXR5XCI6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG9wdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBvcHRpb24xLnZhbHVlID0gXCJOb25lXCI7XG4gICAgICAgIG9wdGlvbjEudGV4dENvbnRlbnQgPSBcIk5vbmVcIjtcbiAgICAgICAgY29uc3Qgb3B0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIG9wdGlvbjIudmFsdWUgPSBcIkxvd1wiO1xuICAgICAgICBvcHRpb24yLnRleHRDb250ZW50ID0gXCJMb3dcIjtcbiAgICAgICAgY29uc3Qgb3B0aW9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIG9wdGlvbjMudmFsdWUgPSBcIk1lZGl1bVwiO1xuICAgICAgICBvcHRpb24zLnRleHRDb250ZW50ID0gXCJNZWRpdW1cIjtcbiAgICAgICAgY29uc3Qgb3B0aW9uNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIG9wdGlvbjQudmFsdWUgPSBcIkhpZ2hcIjtcbiAgICAgICAgb3B0aW9uNC50ZXh0Q29udGVudCA9IFwiSGlnaFwiO1xuICAgICAgICBcbiAgICAgICAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChvcHRpb24xKTtcbiAgICAgICAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChvcHRpb24yKTtcbiAgICAgICAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChvcHRpb24zKTtcbiAgICAgICAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChvcHRpb240KTtcbiAgICAgICAgcHJpb3JpdHlJbnB1dC52YWx1ZSA9IHRvZG9EYXRhLnByaW9yaXR5ICE9IFwiXCIgPyB0b2RvRGF0YS5wcmlvcml0eSA6IFwiTm9uZVwiO1xuXG4gICAgICAgIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuICAgICAgICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KTtcblxuXG4gICAgICAgIGNvbnN0IGRlbGV0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgICAgY29uc3QgZGVsZXRlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRlbGV0ZVRleHQudGV4dENvbnRlbnQgPSBcIkRlbGV0ZSBUYXNrXCI7XG4gICAgICAgIGRlbGV0ZVRleHQuY2xhc3NMaXN0LmFkZChcImRlbGV0ZS10ZXh0XCIpO1xuXG4gICAgICAgIGNvbnN0IGRlbGV0ZVRhc2tJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBkZWxldGVUYXNrSW1hZ2Uuc3JjID0gRGVsZXRlSWNvbjtcbiAgICAgICAgZGVsZXRlVGFza0ltYWdlLmRhdGFzZXRbXCJ0b2RvSURcIl0gPSB0b2RvRGF0YS5pZDtcbiAgICAgICAgZGVsZXRlVGFza0ltYWdlLmFsdCA9IFwiZGVsZXRlX3Rhc2tcIjtcbiAgICAgICAgZGVsZXRlVGFza0ltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XG4gICAgICAgICAgICBpZiAoY29uZmlybShcIkRlbGV0ZSB0aGlzIHRhc2s/XCIpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9kb0lEID0gZXZlbnQudGFyZ2V0LmRhdGFzZXRbXCJ0b2RvSURcIl07XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdElEID0gdG9kb1JlcG9zaXRvcnkuZ2V0VG9kb0J5SUQodG9kb0lEKS5wcm9qZWN0SUQ7XG4gICAgICAgICAgICAgICAgdG9kb1JlcG9zaXRvcnkuZGVsZXRlVG9kbyh0b2RvSUQpO1xuICAgICAgICAgICAgICAgIGRvbU1hbmFnZXIucmVuZGVyUHJvamVjdFRvZG9zKHByb2plY3RJRCk7XG4gICAgICAgICAgICAgICAgZXhwYW5kZWRUb2RvLnRvZ2dsZVZpc2liaWxpdHkoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBkZWxldGVEaXYuYXBwZW5kQ2hpbGQoZGVsZXRlVGV4dCk7XG4gICAgICAgIGRlbGV0ZURpdi5hcHBlbmRDaGlsZChkZWxldGVUYXNrSW1hZ2UpO1xuXG4gICAgICAgIHNlY29uZGFyeUluZm8uYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG4gICAgICAgIHNlY29uZGFyeUluZm8uYXBwZW5kQ2hpbGQoZGF0ZURpdik7XG4gICAgICAgIHNlY29uZGFyeUluZm8uYXBwZW5kQ2hpbGQocHJpb3JpdHlEaXYpO1xuICAgICAgICBzZWNvbmRhcnlJbmZvLmFwcGVuZENoaWxkKGRlbGV0ZURpdik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgdG9nZ2xlVmlzaWJpbGl0eSwgcmVuZGVyRXhwYW5kZWRUb2RvLCBhZGRDb21tZW50IH1cbn0pKCk7XG5cbmV4cG9ydCB7IGV4cGFuZGVkVG9kbyB9OyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgZG9tTWFuYWdlciBmcm9tIFwiLi9kb21NYW5hZ2VyLmpzXCI7XG4iLCJleHBvcnQgY29uc3QgUHJvamVjdCA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHRoaXMubmFtZSA9IG9iamVjdC5uYW1lO1xuICAgIHRoaXMuaWQgPSBvYmplY3QuaWQ7XG59IiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3QuanNcIjtcblxuY2xhc3MgUHJvamVjdFJlcG9zaXRvcnkge1xuICAgICNwcm9qZWN0Q291bnRlcktleSA9IFwicHJvamVjdENvdW50ZXJcIjtcbiAgICAjcHJvamVjdHNLZXkgPSBcInByb2plY3RzXCI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLiNwcm9qZWN0Q291bnRlcktleSkpIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuI3Byb2plY3RDb3VudGVyS2V5LCBcIjBcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyNyZWdpb24gQ3JlYXRlXG4gICAgY3JlYXRlTmV3UHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgICAgICBsZXQgcHJvamVjdENvdW50ZXIgPSB0aGlzLiNnZXRQcm9qZWN0Q291bnRlcigpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSB0aGlzLmdldEFsbFByb2plY3RzKCk7XG4gICAgICAgIGxldCBwcm9qZWN0ID0gbmV3IFByb2plY3Qoe25hbWU6IHByb2plY3ROYW1lLCBpZDogcHJvamVjdENvdW50ZXJ9KTtcbiAgICAgICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICAgICAgbGV0IHByb2plY3RKU09OID0gSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpO1xuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuI3Byb2plY3RzS2V5LCBwcm9qZWN0SlNPTik7XG5cbiAgICAgICAgcHJvamVjdENvdW50ZXIrKztcbiAgICAgICAgdGhpcy4jc2V0UHJvamVjdENvdW50ZXIocHJvamVjdENvdW50ZXIpO1xuXG4gICAgICAgIHJldHVybiBwcm9qZWN0O1xuICAgIH1cbiAgICAvLyNlbmRyZWdpb25cblxuICAgIC8vI3JlZ2lvbiBSZWFkXG4gICAgZ2V0QWxsUHJvamVjdHMoKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RKU09OID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy4jcHJvamVjdHNLZXkpO1xuICAgICAgICByZXR1cm4gcHJvamVjdEpTT04gPyBKU09OLnBhcnNlKHByb2plY3RKU09OKSA6IFtdO1xuICAgIH1cblxuICAgIGdldFByb2plY3RCeUlEKHByb2plY3RJRCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IHRoaXMuZ2V0QWxsUHJvamVjdHMoKTtcbiAgICAgICAgbGV0IHByb2plY3RXaXRoSUQgPSBudWxsO1xuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICAgICAgaWYgKHByb2plY3QuaWQgPT0gcHJvamVjdElEKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdFdpdGhJRCA9IHByb2plY3Q7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHByb2plY3RXaXRoSUQ7XG4gICAgfVxuXG4gICAgI2dldFByb2plY3RDb3VudGVyKCkge1xuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy4jcHJvamVjdENvdW50ZXJLZXkpO1xuICAgIH1cblxuICAgICNzZXRQcm9qZWN0Q291bnRlcih2YWx1ZVN0cmluZykge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLiNwcm9qZWN0Q291bnRlcktleSwgdmFsdWVTdHJpbmcpO1xuICAgIH1cbiAgICAvLyNlbmRyZWdpb25cbiAgICBcbiAgICAvLyNyZWdpb24gVXBkYXRlXG4gICAgdXBkYXRlUHJvamVjdChwcm9qZWN0SUQsIHVwZGF0ZWREYXRhKSB7XG4gICAgICAgIGxldCBwcm9qZWN0ID0gdGhpcy5nZXRQcm9qZWN0QnlJRChwcm9qZWN0SUQpO1xuXG4gICAgICAgIGlmIChwcm9qZWN0KSB7XG4gICAgICAgICAgICBsZXQgb2xkUHJvamVjdEpTT04gPSBKU09OLnN0cmluZ2lmeShwcm9qZWN0KTtcblxuICAgICAgICAgICAgbGV0IGRhdGFLZXlzID0gT2JqZWN0LmtleXModXBkYXRlZERhdGEpO1xuICAgICAgICAgICAgZGF0YUtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIHByb2plY3Rba2V5XSA9IHVwZGF0ZWREYXRhW2tleV07XG4gICAgICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgICAgIGxldCBuZXdQcm9qZWN0SlNPTiA9IEpTT04uc3RyaW5naWZ5KHByb2plY3QpO1xuICAgICAgICAgICAgbGV0IHByb2plY3RzSlNPTiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuI3Byb2plY3RzS2V5KTtcbiAgICAgICAgICAgIGxldCBuZXdQcm9qZWN0c0pTT04gPSBwcm9qZWN0c0pTT04ucmVwbGFjZShvbGRQcm9qZWN0SlNPTiwgbmV3UHJvamVjdEpTT04pO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy4jcHJvamVjdHNLZXksIG5ld1Byb2plY3RzSlNPTik7XG4gICAgXG4gICAgICAgICAgICByZXR1cm4gcHJvamVjdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgLy8jZW5kcmVnaW9uXG5cbiAgICAvLyNyZWdpb24gRGVsZXRlXG4gICAgZGVsZXRlUHJvamVjdChwcm9qZWN0SUQpIHtcbiAgICAgICAgbGV0IHByb2plY3RzID0gdGhpcy5nZXRBbGxQcm9qZWN0cygpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgc3RvcmFnZUlEID0gcHJvamVjdHNbaV0uaWQ7XG4gICAgICAgICAgICBpZiAoc3RvcmFnZUlEID09IHByb2plY3RJRCkge1xuICAgICAgICAgICAgICAgIHByb2plY3RzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLiNwcm9qZWN0c0tleSwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbiAgICB9XG4gICAgLy8jZW5kcmVnaW9uXG59XG5cbmNvbnN0IHByb2plY3RSZXBvc2l0b3J5ID0gbmV3IFByb2plY3RSZXBvc2l0b3J5KCk7XG5cbmV4cG9ydCB7IHByb2plY3RSZXBvc2l0b3J5IH07IiwiZXhwb3J0IGNvbnN0IFRvZG8gPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB0aGlzLm5hbWUgPSBvYmplY3QubmFtZTtcbiAgICB0aGlzLmlkID0gb2JqZWN0LmlkO1xuICAgIHRoaXMucHJvamVjdElEID0gb2JqZWN0LnByb2plY3RJRDtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gXCJcIjtcbiAgICB0aGlzLmR1ZURhdGUgPSBcIlwiO1xuICAgIHRoaXMucHJpb3JpdHkgPSBcIlwiO1xuICAgIHRoaXMuY2hlY2tsaXN0SXRlbXMgPSBbXTtcbiAgICB0aGlzLmlzRG9uZSA9IGZhbHNlO1xuICAgIFxuICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoXCJkZXNjcmlwdGlvblwiKSkge1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gb2JqZWN0LmRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoXCJkdWVEYXRlXCIpKSB7XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IG9iamVjdC5kdWVEYXRlO1xuICAgIH1cblxuICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoXCJwcmlvcml0eVwiKSkge1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gb2JqZWN0LnByaW9yaXR5O1xuICAgIH1cblxuICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoXCJjaGVja0xpc3RJdGVtc1wiKSkge1xuICAgICAgICB0aGlzLmNoZWNrbGlzdEl0ZW1zID0gb2JqZWN0LmNoZWNrbGlzdEl0ZW1zOyAgXG4gICAgfVxuXG4gICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShcImlzRG9uZVwiKSkge1xuICAgICAgICB0aGlzLmlzRG9uZSA9IG9iamVjdC5pc0RvbmU7XG4gICAgfVxufSIsImltcG9ydCB7IFRvZG8gfSBmcm9tIFwiLi90b2RvLmpzXCI7XG5cbmNsYXNzIFRvZG9SZXBvc2l0b3J5IHtcbiAgICAjdG9kb0NvdW50ZXJLZXkgPSBcInRvZG9Db3VudGVyXCI7XG4gICAgI3RvZG9zS2V5ID0gXCJ0b2Rvc1wiO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy4jdG9kb0NvdW50ZXJLZXkpKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLiN0b2RvQ291bnRlcktleSwgXCIwXCIpO1xuICAgICAgICB9IFxuICAgIH1cblxuICAgIC8vI3JlZ2lvbiBDcmVhdGVcbiAgICBjcmVhdGVOZXdUb2RvKHRvZG9OYW1lLCBwcm9qZWN0SUQpIHtcbiAgICAgICAgbGV0IHRvZG9Db3VudGVyID0gdGhpcy4jZ2V0VG9kb0NvdW50ZXIoKTtcblxuICAgICAgICBjb25zdCB0b2RvcyA9IHRoaXMuZ2V0QWxsVG9kb3MoKTtcbiAgICAgICAgbGV0IHRvZG8gPSBuZXcgVG9kbyh7bmFtZTogdG9kb05hbWUsIHByb2plY3RJRCwgaWQ6IHRvZG9Db3VudGVyfSk7XG4gICAgICAgIHRvZG9zLnB1c2godG9kbyk7XG4gICAgICAgIGxldCB0b2Rvc0pTT04gPSBKU09OLnN0cmluZ2lmeSh0b2Rvcyk7XG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy4jdG9kb3NLZXksIHRvZG9zSlNPTik7XG5cbiAgICAgICAgdG9kb0NvdW50ZXIrKztcbiAgICAgICAgdGhpcy4jc2V0VG9kb0NvdW50ZXIodG9kb0NvdW50ZXIpO1xuXG4gICAgICAgIHJldHVybiB0b2RvO1xuICAgIH1cbiAgICAvLyNlbmRyZWdpb25cblxuICAgIC8vI3JlZ2lvbiBSZWFkXG4gICAgZ2V0QWxsVG9kb3MoKSB7XG4gICAgICAgIGNvbnN0IHRvZG9zSlNPTiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuI3RvZG9zS2V5KTtcbiAgICAgICAgcmV0dXJuIHRvZG9zSlNPTiA/IEpTT04ucGFyc2UodG9kb3NKU09OKSA6IFtdO1xuICAgIH1cblxuICAgIGdldFRvZG9zQnlQcm9qZWN0SUQocHJvamVjdElEKSB7XG4gICAgICAgIGxldCB0b2RvcyA9IHRoaXMuZ2V0QWxsVG9kb3MoKTtcbiAgICAgICAgcmV0dXJuIHRvZG9zLmZpbHRlcih0b2RvID0+IHRvZG8ucHJvamVjdElEID09IHByb2plY3RJRCk7XG4gICAgfVxuXG4gICAgZ2V0VG9kb0J5SUQodG9kb0lEKSB7XG4gICAgICAgIGxldCB0b2RvcyA9IHRoaXMuZ2V0QWxsVG9kb3MoKTtcbiAgICAgICAgcmV0dXJuIHRvZG9zLmZpbmQodG9kbyA9PiB0b2RvLmlkID09IHRvZG9JRCk7XG4gICAgfVxuXG4gICAgI2dldFRvZG9Db3VudGVyKCl7XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLiN0b2RvQ291bnRlcktleSk7XG4gICAgfVxuXG4gICAgI3NldFRvZG9Db3VudGVyKHZhbHVlU3RyaW5nKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuI3RvZG9Db3VudGVyS2V5LCB2YWx1ZVN0cmluZyk7XG4gICAgfVxuICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgLy8jcmVnaW9uIFVwZGF0ZVxuICAgIHVwZGF0ZVRvZG8odG9kb0lELCB1cGRhdGVkRGF0YSkge1xuICAgICAgICBsZXQgdG9kbyA9IHRoaXMuZ2V0VG9kb0J5SUQodG9kb0lEKTtcbiAgICAgICAgaWYgKHRvZG8pIHtcbiAgICAgICAgICAgIGxldCBvbGRUb2RvSlNPTiA9IEpTT04uc3RyaW5naWZ5KHRvZG8pO1xuXG4gICAgICAgICAgICBsZXQgZGF0YUtleXMgPSBPYmplY3Qua2V5cyh1cGRhdGVkRGF0YSk7XG4gICAgICAgICAgICBkYXRhS2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgdG9kb1trZXldID0gdXBkYXRlZERhdGFba2V5XTtcbiAgICAgICAgICAgIH0pO1xuICAgIFxuICAgICAgICAgICAgbGV0IG5ld1RvZG9KU09OID0gSlNPTi5zdHJpbmdpZnkodG9kbyk7XG4gICAgICAgICAgICBsZXQgdG9kb3NKU09OID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy4jdG9kb3NLZXkpO1xuICAgICAgICAgICAgbGV0IG5ld1RvZG9zSlNPTiA9IHRvZG9zSlNPTi5yZXBsYWNlKG9sZFRvZG9KU09OLCBuZXdUb2RvSlNPTik7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLiN0b2Rvc0tleSwgbmV3VG9kb3NKU09OKTtcbiAgICBcbiAgICAgICAgICAgIHJldHVybiB0b2RvO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICAvLyNlbmRyZWdpb25cblxuICAgIC8vI3JlZ2lvbiBEZXN0cm95XG4gICAgZGVsZXRlVG9kbyh0b2RvSUQpIHtcbiAgICAgICAgbGV0IHRvZG9zID0gdGhpcy5nZXRBbGxUb2RvcygpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgc3RvcmFnZUlEID0gdG9kb3NbaV0uaWQ7XG4gICAgICAgICAgICBpZiAoc3RvcmFnZUlEID09IHRvZG9JRCkge1xuICAgICAgICAgICAgICAgIHRvZG9zLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLiN0b2Rvc0tleSwgSlNPTi5zdHJpbmdpZnkodG9kb3MpKTtcbiAgICB9XG5cbiAgICBkZWxldGVQcm9qZWN0VG9kb3MocHJvamVjdElEKSB7XG4gICAgICAgIGxldCB0b2RvcyA9IHRoaXMuZ2V0QWxsVG9kb3MoKTtcbiAgICAgICAgbGV0IG5ld1RvZG9zID0gdG9kb3MuZmlsdGVyKHRvZG8gPT4gdG9kby5wcm9qZWN0SUQgIT0gcHJvamVjdElEKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy4jdG9kb3NLZXksIEpTT04uc3RyaW5naWZ5KG5ld1RvZG9zKSk7XG4gICAgfVxuICAgIC8vI2VuZHJlZ2lvblxufVxuXG5jb25zdCB0b2RvUmVwb3NpdG9yeSA9IG5ldyBUb2RvUmVwb3NpdG9yeSgpO1xuXG5leHBvcnQgeyB0b2RvUmVwb3NpdG9yeSB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9