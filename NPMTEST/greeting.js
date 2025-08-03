
//   var module = { exports: {} };
//     var exports = module.exports;
 
//   return {
//     sayHelloInEnglish: function() {
//       return "Hello";
//     },
//     sayHelloInSpanish: function() {
//       return "Hola";
//     }
//   };
// };
//     // your code

//     return module.exports;

exports.sayHelloInEnglish = function() {
    console.log("Hello in English");
}
exports.sayHelloInSpanish = function() {
    console.log("Hola in Spanish");
}
