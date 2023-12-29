// import GoogleProvider from "next-auth/providers/google"
// import CredentialProvider from "next-auth/providers/credentials"


// export const options = {
//     providers: [
//         GoogleProvider(
//             // clientId = process.env.GOOGLE_CLIENT_ID,
//             // clientSecret = process.env.GOOGLE_CLIENT_SECRET
//         ),
//         CredentialProvider({
//             name: "Credentials",
//             credentials: {
//                 username: {
//                     label: "Username",
//                     type: "text",
//                     placeholder: "username"
//                 },
//                 pasword: {
//                     label: "Password",
//                     type: "password",
//                     placeholder: "password"
//                 }
//             },
//             async authorize(credentials) {

//                 const user = {
//                     id: 1,
//                     name: "Jomsey",
//                     password: "1234"
//                 }

//                 if (credentials?.password === user.password && credentials?.username === user.name) {
//                     return user
//                 }
//                 return null

//             }
//         })

//     ],

//     // pages:[

//     // ]
// }