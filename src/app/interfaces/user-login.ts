export interface ResponseUserLogin {
    data:    Data;
    message: string;
}

export interface Data {
    user:    User;
    profile: Profile;
    company: Company;
    token:   string;
    options: Option[];
}

export interface Company {
    id:     number;
    name:   string;
    status: boolean;
}

export interface Option {
    id:          number;
    name:        string;
    description: null | string;
    webIcon:     string;
    webRoute:    string;
    status:      boolean;
}

export interface User {
    id:       number;
    fullname: string;
    mail:     string;
}

export interface Profile{
    id: number,
    name: string,
    code: string,
    status: boolean
}

export interface UserLogin {
    name: string,
    password: string
}