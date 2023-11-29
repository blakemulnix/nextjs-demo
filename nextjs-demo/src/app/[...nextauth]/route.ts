import NextAuth from 'next-auth';
import { authOptions } from '../../../src/config/nextAuthConfig';

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
