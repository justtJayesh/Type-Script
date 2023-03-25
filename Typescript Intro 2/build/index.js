const getName = ({ firstName, lastName }) => {
    if (lastName) {
        return `${firstName} ${lastName}`;
    }
    else {
        return `${firstName}`;
    }
};
const phoneBook = [];
function PhoneBook(person) {
    phoneBook.push(person);
}
const person1 = {
    phoneNumber: [5435839534, 876783493],
    addresses: [
        {
            houseNumber: 33,
            street: "evn street",
            city: "Nagpur",
            state: "Maharashtra",
            postalCode: 34332,
            country: "India",
        },
    ],
    firstname: "Harsh",
    lastname: "Sharma",
};
PhoneBook(person1);
console.log(phoneBook);
//# sourceMappingURL=index.js.map