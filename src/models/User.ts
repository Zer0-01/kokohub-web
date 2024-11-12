export interface User {
    id: string;
    name: string;
    email: string;
    phone: string;
    password: string;
    role: string;
    barberDetails: BarberDetails;
}

interface BarberDetails {
    barberId: string;
    experience: number;
    specialties: string[];
}   