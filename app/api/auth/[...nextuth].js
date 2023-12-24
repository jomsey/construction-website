import NextAuth from "next-auth/next";
import { AppProviders } from "next-auth/providers";


export default NextAuth({
  providers: [
    AppProviders.Google(
      {
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.GOOGLE_CLIENT_SECRET,
      }
    )
  ],
  session: {
    jwt: true
  },

  callbacks: {
    async jwt(token, user) {
      return token
    },
    async session(session, user) {
      return session
    }
  }
})