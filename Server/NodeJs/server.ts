import express from 'express';
import path from 'path';
import cors from 'cors'; // Import cors if you're using it
import { fileURLToPath } from 'url';

import createIdentifierRoute from './src/create-identifier.js';
import createCredentialRoute from './src/create-credential.js';
import listIdentifiersRoute from './src/list-identifiers.js';
import verifyCredentialsRoute from './src/verify-credential.js';
import updateUserRoute from './src/update-users/update-users.js';
import sendMail from './src/send-mail.js';

const app = express();

// Allow requests from all origins
app.use(cors()); // Initialize cors
app.use(express.json()); // JSON body parser middleware
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const jsonDirectory = path.join(__dirname, 'json');

app.use(express.static(jsonDirectory));

app.use('/create-identifier', createIdentifierRoute);
app.use('/create-credential', createCredentialRoute);
app.use('/find-identifiers', listIdentifiersRoute);
app.use('/verify-credential', verifyCredentialsRoute);
app.use('/update-user', updateUserRoute);
app.use('/email', sendMail);


const PORT = process.env.PORT || 3001;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});
