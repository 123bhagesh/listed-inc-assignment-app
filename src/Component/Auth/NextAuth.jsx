import NextAuth from 'next-auth';
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
    providers : [
        // Google Provider
        GoogleProvider({
            clientId: "1049523505558-k5l62us0nbmtjpafva3t1rmjobpqj72f.apps.googleusercontent.com",
            clientSecret: "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"
        })
    ]
})