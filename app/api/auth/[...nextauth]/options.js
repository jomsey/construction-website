import CredentialProvider from "next-auth/providers/credentials"


export const options = {
    providers: [
        CredentialProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                    placeholder: "username"
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "password"
                }
            },
            async authorize(credentials) {
                const user = {
                    id: 1,
                    name: "Jomsey",
                    password: "1234"
                }

                if (credentials.password === user.password && credentials.username === user.name) {
                    return user
                }
                return null

            }
        })

    ],

    pages: [
        '/admin'
    ]
}