import { agent } from './veramo/setup.js'
import express from 'express';
const router = express.Router();

// Define the createIdentifier route
router.get('/:user', async (req, res) => {
  const user = req.params.user;

  try {
    // Call the createIdentifier function
    const identifier = await createIdentifier(user);
    res.send(identifier);
  } catch (error) {
    console.error('Error creating identifier:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Define the createIdentifier function
async function createIdentifier(user: string) {
  const identifier = await agent.didManagerCreate({ alias: user });
  console.log(`New identifier created`);
  console.log(JSON.stringify(identifier, null, 2));
  return JSON.stringify(identifier, null, 2);
}

export default router;
