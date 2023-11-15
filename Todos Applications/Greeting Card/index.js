let greeting = '{"greetText":"Wishing that the new year will bring joy, love, peace, and happiness to you.","from":"Rahul","to":"Varakumar"}';

let parseValue = JSON.parse(greeting);
let greetTextEl = document.getElementById("greetText");
greetTextEl.textContent = parseValue.greetText;