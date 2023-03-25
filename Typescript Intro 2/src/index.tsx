// Interface 1
interface Todo {
    title: string;
    status: boolean;
    id?: number;
}

// Interface 2
interface Name {
    firstName: string;
    lastName?: string;
}

const getName = ({ firstName, lastName }: Name) => {
    if (lastName) {
        return `${firstName} ${lastName}`;
    } else {
        return `${firstName}`;
    }
};

// Interface 3
interface AddressDetails {
    houseNumber: number;
    street: string;
    city: string;
    state: string;
    postalCode: number;
    country: string;
}

// Interface 4
interface PersonalDetails {
    prefix?: string;
    phoneNumber: number[];
    addresses: AddressDetails[];
    email?: string;
    firstname: string;
    lastname: string;
    middlename?: string;
}

const phoneBook: PersonalDetails[] = [];

function PhoneBook(person: PersonalDetails) {
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
console.log(phoneBook)
