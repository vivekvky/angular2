export class address {
    street: string
    suit: string;
    city: string;
    zip: number
}

export class user {
    name: string;
    email: string;
    phone: number;
    address= new address();
}

