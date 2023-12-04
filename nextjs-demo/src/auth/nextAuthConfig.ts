import { NextAuthOptions } from 'next-auth';
import AzureADProvider from "next-auth/providers/azure-ad";

if (!process.env.AZURE_AD_CLIENT_ID || !process.env.AZURE_AD_CLIENT_SECRET) {
    throw "Couldn't get Azure client ID / secret from env"
}

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
      AzureADProvider({
          clientId: process.env.AZURE_AD_CLIENT_ID,
          clientSecret: process.env.AZURE_AD_CLIENT_SECRET,
          tenantId: process.env.AZURE_AD_TENANT_ID,
      }),
  ],
  callbacks: {
    jwt: async ({token, account}) => {
      if(account?.id_token) {
        const [header, payload, sig] = account.id_token.split('.')
        const idToken = JSON.parse(Buffer.from(payload, 'base64').toString('utf8'))
  
        console.log(`id_token: ${account.id_token}`)

        console.log(`token: ${JSON.stringify(token)}`)
        token.roles = [...idToken.roles]
      }

      return token
    },
    session: async ({ session, token }: any) => {
      session.roles = [...token.roles]
      console.log(`session: ${JSON.stringify(session)}`)
      return session
    }
  }
};
