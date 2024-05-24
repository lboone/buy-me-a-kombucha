import { AuthOptions } from "next-auth"
import GitHubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "@/lib/db"


const authOptions = {
    providers: [
        GitHubProvider({
          clientId: process.env.GITHUB_ID!,
          clientSecret: process.env.GITHUB_SECRET!
        })
      ],
      adapter : MongoDBAdapter(clientPromise),
} as AuthOptions

export default authOptions