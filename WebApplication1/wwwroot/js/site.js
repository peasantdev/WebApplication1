// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const frameHeight = 102;
const frames = 15;
const div = document.getElementById("animation");
let frame = 0;
setInterval(function () {
    const frameOffset = (++frame % frames) * -frameHeight;
    div.style.backgroundPosition = "0px " + frameOffset + "px";
}, 100);
