/*

Consider the two functions below. 
Will they both return the same thing? 
Why or why not? 
Consider browser event loops...

*/

(function() {
    console.log("1"); 
    setTimeout(function(){console.log("2")}, 1000); 
    setTimeout(function(){console.log("3")}, 0); 
    console.log("4");
})();