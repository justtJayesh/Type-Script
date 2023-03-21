let first_name: string = "Jayesh";
let age: number = 26;
let isFetching: boolean = false;
let arr: number[] = [1, 2, 3, 4, 5];
let arrayString: Array<string> = ["a", "b", "c"];

// Declare tuple

// create a function that takes 2 arguments, x, y both numbers, it should return the product of the 2 numbers.
function product(a: number, b: number) {
  return a * b;
}
console.log("Product of two numbers: ", product(2, 2));

// create a function that takes 2 arguments, x ,y both numbers, it should divide output ( x / y ).
function divider(x: number, y: number) {
  return x / y;
}
console.log("Divison of two numbers: ", divider(25, 5));

// create a function that takes a name and prints it without returning anything
function printer(str: string) {
  console.log(str);
}
printer("Jayesh");

// create a tuple , which keeps a string as the first value, and boolean as the second
let newTuple: [string, boolean] = ["Jayesh", false];

// create an enum, it should have User, SuperUser, Admin, SuperAdmin
enum Roles {
  User,
  SuperUser,
  Admin,
  SuperAdmin,
}
