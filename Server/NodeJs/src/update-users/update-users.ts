import express, { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();
const jsonDirectory = '../ssi/json';

router.post('/:type', (req: Request, res: Response) => {
  const { type } = req.params;
  const { ids} = req.body;

  // Validate the user type
  if (!['Farmer', 'Silo', 'Transporter'].includes(type)) {
    return res.status(400).json({ error: 'Invalid user type' });
  }

  // Construct the file path based on the user type
  const filePath = path.join(jsonDirectory, `${type}s.json`);

  // Read the JSON file
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    try {
      const users = JSON.parse(data);

      // Update the isAdded field for the specified user IDs
      ids.forEach((id: string) => {
        const userIndex = users.findIndex((user: any) => user.id === id);
        if (userIndex !== -1) {
          users[userIndex].isAdded = true;
        }
      });

      // Write the updated data back to the file
      fs.writeFile(filePath, JSON.stringify(users, null, 2), (err) => {
        if (err) {
          console.error('Error writing file:', err);
          return res.status(500).json({ error: 'Internal server error' });
        }
        return res.json({ message: 'isAdded field updated successfully' });
      });
    } catch (error) {
      console.error('Error parsing JSON:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  });
});

export default router;
