let first_name = "Jayesh";
let age = 26;
let isFetching = false;
let arr = [1, 2, 3, 4, 5];
let arrayString = ["a", "b", "c"];
// Declare tuple
// create a function that takes 2 arguments, x, y both numbers, it should return the product of the 2 numbers.
function product(a, b) {
    return a * b;
}
console.log("Product of two numbers: ", product(2, 2));
// create a function that takes 2 arguments, x ,y both numbers, it should divide output ( x / y ).
function divider(x, y) {
    return x / y;
}
console.log("Divison of two numbers: ", divider(25, 5));
// create a function that takes a name and prints it without returning anything
function printer(str) {
    console.log(str);
}
printer("Jayesh");
// create a tuple , which keeps a string as the first value, and boolean as the second
let newTuple = ["Jayesh", false];
// create an enum, it should have User, SuperUser, Admin, SuperAdmin
var Roles;
(function (Roles) {
    Roles[Roles["User"] = 0] = "User";
    Roles[Roles["SuperUser"] = 1] = "SuperUser";
    Roles[Roles["Admin"] = 2] = "Admin";
    Roles[Roles["SuperAdmin"] = 3] = "SuperAdmin";
})(Roles || (Roles = {}));
//# sourceMappingURL=intro1.js.map