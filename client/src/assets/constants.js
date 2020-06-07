export const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


export const REGISTER_FORM_FIELDS = [
    {label: 'Email Address', name: 'email', email: 'text', placeholder: "Email..."},
    {label: 'Password', name: 'password', type: 'password', placeholder: "Password..."},
    { label: 'Password Confirmation', name: 'password_confirmation', type: 'password', placeholder: "Password confirmation..." }
];


export const LOGIN_FORM_FIELDS = [
    {label: 'Email Address', name: 'email', email: 'text', placeholder: "Email..."},
    {label: 'Password', name: 'password', type: 'password', placeholder: "Password..."},
];