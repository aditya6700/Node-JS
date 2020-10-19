// () == grouping operator

// every nodejs file is added to a wrapper function when it is run 
// this wrapper function has a anonymous function which contains our code 
// this makes all our variables private
// this wrapper function is called as IIFE (Immediately Invoked Function Experssiom)
//  IIFE means this anonymous function is executed immediately after the function is invoked

((exports, require, module, __filename, __dirname) => {
    var name = "masteroot";
    console.log(name,'inside IIFE');
})();

// we can't access the 'name' variable even we declared using var
// as we declared it in a wrapper funciton and makes them as private
// to use this variable using module.exports

try {
    console.log(name,'outside IIFE'); 
} catch (error) {
   
}