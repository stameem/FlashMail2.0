// ==UserScript==
// @name         FLASH MAIL 2.0
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  MAil Automation
// @author       SYED TAMEEM SAMDANI (stameem.s@gmail.com)
// @match        https://www.google.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Create the button
    var button = document.createElement("div");
    button.innerHTML = `
    <div class="dropdown">
            <button class="button">SEND MAIL</button>
            </div>
    `;
 // Insert the button at the top of the page of google
    var body = document.body;
    if (body) {
        body.insertBefore(button, body.firstChild);
    };
     var css = document.createElement("style");
    css.innerHTML = `
        .button {
        border: none;
        background-color: #584caf;
        color: White;
        padding: 10px 20px;
        border-radius: 10px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 12px;
        margin: 4px 2px;
        cursor: pointer;
        }
    `;
document.head.appendChild(css);

        // Add event listener to the button
    button.addEventListener("click", function() {
        var searchInput = document.querySelector('.gLFyf');
        if (searchInput) {
            var searchText = encodeURIComponent(searchInput.value);
            var emailLink = "mailto:example@mail.com?subject=TEST%20SUBJECT&body=" + searchText;
            window.open(emailLink);
        }
    });
    })();