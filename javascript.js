const obj = {
    foo: "bar",
    method : function() {
var logFunction = function() {
console.log("My foo is:", this.foo);
};
logFunction();
}
    
};