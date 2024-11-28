// import express from 'express';
// import { agent } from './veramo/setup.js';

// const verifyCredentialsRoute = express.Router();

// interface VerifiableCredential {
//   credentialSubject: {
//     id: string;
//     farmer: string;
//     transporter: string;
//     weight: number;
//   };
//   issuer: {
//     id: string;
//   };
//   type: string[];
//   '@context': string[];
//   issuanceDate: string;
//   proof: {
//     type: string;
//     jwt: string;
//   };
// }

// // Define the route to verify credentials
// verifyCredentialsRoute.post('/', async (req, res) => {
//   try {
//     const credential: VerifiableCredential = req.body; // Parse JSON data from the request body
//     const verificationResult = await main(credential); // Call the main function with the received Verifiable Credential
//     res.json({ verified: verificationResult });
//   } catch (error) {
//     console.error('Error verifying credentials:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// async function main(credential: VerifiableCredential) {
//   const result = await agent.verifyCredential({
//     credential: credential
//   });
//   console.log(`Credential verified`, result.verified);
//   return result.verified;
// }

// export default verifyCredentialsRoute;


import express from 'express';
import { agent } from './veramo/setup.js';

const verifyCredentialsRoute = express.Router();

interface VerifiableCredential {
  credentialSubject: {
    id: string;
    farmer: string;
    transporter: string;
    weight: number;
  };
  issuer: {
    id: string;
  };
  type: string[];
  '@context': string[];
  issuanceDate: string;
  proof: {
    type: string;
    jwt: string;
  };
}

verifyCredentialsRoute.post('/', async (req, res) => {
  try {
    const hash = req.body.hash; // Parse JSON data from the request body
    const credential=  await fetch (`http://127.0.0.1:8080/ipfs/${hash}`);
    if (!credential.ok) {
      throw new Error('Failed to fetch file from IPFS');
    }

    let fileContent = await credential.text();
    fileContent = JSON.parse(fileContent);
    const verificationResult = await main(fileContent);
    if (verificationResult){
      const response = {
        verified: true,
        farmer: fileContent.credentialSubject.farmer,
        transporter: fileContent.credentialSubject.transporter,
        weight: fileContent.credentialSubject.weight,
        

      };
      res.json({ verified: response });
    }
    else {
      const response = {
        verified: false,
        farmer: fileContent.credentialSubject.farmer,
        transporter: fileContent.credentialSubject.transporter,
        weight: fileContent.credentialSubject.weight,
        

      };
      res.json({ verified: response });
    }
    
  } catch (error) {
    console.error('Error verifying credentials:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

async function main(credential: VerifiableCredential) {
  const result = await agent.verifyCredential({
     credential
  });
  console.log(`Credential verified`, result.verified);
  return result.verified;
}

export default verifyCredentialsRoute;
 
