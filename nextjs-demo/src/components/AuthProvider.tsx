"use client";
import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';

export default async function AuthProvider({ children }: any) {
    const clientId = "4fb5e83b-f675-42c7-aecc-23eb1b845bda";
    const tenantId = "2d4c691e-e092-4da4-a7e2-172c13d386ab";
    
    const msalConfig = {
        auth: {
            clientId: clientId,
            authority: `https://login.microsoftonline.com/${tenantId}`
        }
    };
    
    const pca = new PublicClientApplication(msalConfig);
    await pca.initialize();

    return (
        <MsalProvider instance={pca}>
            {children}
        </MsalProvider>
    );
}
