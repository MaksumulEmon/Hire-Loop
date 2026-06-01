import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    baseURL: process.env.BETTER_AUTH_URL
})


export const { signIn, signUp, useSession ,signOut} = createAuthClient()


// import { createAuthClient } from "better-auth/react";

// export const authClient = createAuthClient({
//     baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL,
// });

// export const signIn = authClient.signIn;
// export const signUp = authClient.signUp;
// export const signOut = authClient.signOut;
// export const useSession = authClient.useSession;