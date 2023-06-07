import NextAuth from 'next-auth';
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
    providers : [
        // Google Provider
        GoogleProvider({
            clientId: CLINT_ID,
            clientSecret: CLIENT_SECRET
        })
    ]
})