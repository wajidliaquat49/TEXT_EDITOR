
var text_html = document.getElementById("text_html");
var bold_html = document.getElementById("bold");
var italic_html = document.getElementById("italic");
var underLine_html = document.getElementById("underLine");
var fontSize_html = document.getElementById("fontSize");
var input_html = document.getElementById("inputFont");
var fontFamily_html = document.getElementById("fontFamily");
var colorPicker = document.getElementById("colorPicker");
var upperCase_html = document.getElementById("upperCase");
var lowerCase_html = document.getElementById("lowerCase");


bold_html.addEventListener("click", function () {
    text_html.style.fontWeight = "bold";
});

italic_html.addEventListener("click", function () {
    text_html.style.fontStyle = "italic";
});

underLine_html.addEventListener("click", function () {
    text_html.style.textDecoration = "underLine";
});

upperCase_html.addEventListener("click", function () {
    text_html.style.textTransform = "upperCase";
});

lowerCase_html.addEventListener("click", function () {
    text_html.style.textTransform = "lowerCase";
});

input_html.addEventListener("click", function () {
    input_java = input_html.value;
    text_html.style.fontSize = input_java + "px";
});

colorPicker.addEventListener("input", function () {
    // var x = document.getElementById("text_html");
    input_java = colorPicker.value;
    text_html.style.color = input_java;
});




