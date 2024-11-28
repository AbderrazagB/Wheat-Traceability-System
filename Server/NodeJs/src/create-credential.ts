import express from 'express';
import { agent } from './veramo/setup.js';

const createCredentialRoute = express.Router();

interface Data {
  issuer: string;
  farmer: string;
  transporter: string;
  licensePlate: string;
  weight: number;
}

// Define the route to create credentials
createCredentialRoute.post('/', async (req, res) => {
  try {
    const data: Data = req.body; // Parse JSON data from the request body
    console.log(data)
    const credential = await createCredentials(data); // Call createCredentials function with parsed data
    console.log(credential)
    res.json({ credential : credential }); // Send the credential as JSON in the response body
  } catch (error) {
    console.error('Error creating credentials:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Define the createCredentials function
async function createCredentials(data: Data) {
  const identifier = await agent.didManagerGetByAlias({ alias: data.issuer });

  const verifiableCredential = await agent.createVerifiableCredential({
    credential: {
      issuer: { id: identifier.did },
      credentialSubject: {
        id: 'did:web:example.com',
        farmer: data.farmer,
        transporter: data.transporter,
        weight: data.weight,
      },
    },
    proofFormat: 'jwt',
  });

  // return JSON.stringify(verifiableCredential, null, 2);
  return verifiableCredential;

}

export default createCredentialRoute;
