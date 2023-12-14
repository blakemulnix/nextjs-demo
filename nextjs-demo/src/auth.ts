import { PublicClientApplication } from "@azure/msal-browser";

const clientId = "4fb5e83b-f675-42c7-aecc-23eb1b845bda";
const tenantId = "2d4c691e-e092-4da4-a7e2-172c13d386ab";

const msalConfig = {
    auth: {
        clientId: clientId,
        authority: `https://login.microsoftonline.com/${tenantId}`
    }
};

const msalInstance = new PublicClientApplication(msalConfig);
await msalInstance.initialize();