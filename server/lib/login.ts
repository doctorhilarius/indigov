interface FormInputs {
    email: string
    password: string
}

// TODO: Auth0
// Array of example users for testing purposes
const users = [
    {
        id: 1,
        name: 'Brooke Souza',
        email: 'brooke@souzas.org',
        password: 'brookesouza',
    },
    {
        id: 2,
        name: 'Indigov Engineer',
        email: 'engineer@indigov.com',
        password: 'indigov',
    },
]

export function logIn(formInputs: FormInputs) {
    const { email, password }: FormInputs = formInputs

    const user = users.find((user) => {
        return user.email === email && user.password === password
    })

    return user
}
