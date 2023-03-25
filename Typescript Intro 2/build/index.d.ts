interface Todo {
    title: string;
    status: boolean;
    id?: number;
}
interface Name {
    firstName: string;
    lastName?: string;
}
declare const getName: ({ firstName, lastName }: Name) => string;
interface AddressDetails {
    houseNumber: number;
    street: string;
    city: string;
    state: string;
    postalCode: number;
    country: string;
}
interface PersonalDetails {
    prefix?: string;
    phoneNumber: number[];
    addresses: AddressDetails[];
    email?: string;
    firstname: string;
    lastname: string;
    middlename?: string;
}
declare const phoneBook: PersonalDetails[];
declare function PhoneBook(person: PersonalDetails): void;
declare const person1: {
    phoneNumber: number[];
    addresses: {
        houseNumber: number;
        street: string;
        city: string;
        state: string;
        postalCode: number;
        country: string;
    }[];
    firstname: string;
    lastname: string;
};
