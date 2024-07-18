import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import {PrismaAdapter} from "@auth/prisma-adapter";
import { Prisma } from '@prisma/client';

export const options = {
    adapter: PrismaAdapter(Prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
        CredentialsProvider({
            type: 'credentials',
            credentials: {
                email: { label: 'Email', type: 'email', placeholder: 'hello@example.com' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials, req) {
                const user = {
                    id: '61614',
                    name: 'raushan',
                    email: 'jon@example.com',
                    password: '12345',
                };
                const { email, password } = credentials;
                if (email === user.email && password === user.password) {
                    return user;
                } else {
                    return null;
                }
            },
        }),
    ],
    session: {
        strategy: 'jwt',
    },
};
