import express from 'express';
import { agent } from './veramo/setup.js';

const listIdentifiersRoute = express.Router();

// Define the route to find identifiers
listIdentifiersRoute.get('/', async (req, res) => {
  try {
    const identifiers = await findIdentifiers(); // Call the findIdentifiers function
    res.json({ identifiers });
  } catch (error) {
    console.error('Error finding identifiers:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

async function findIdentifiers() {
  const identifiers = await agent.didManagerFind();

  console.log(`There are ${identifiers.length} identifiers`);

  if (identifiers.length > 0) {
    identifiers.forEach((id) => {
      console.log(id);
      console.log('..................');
    });
  }

  return identifiers;
}

export default listIdentifiersRoute;
