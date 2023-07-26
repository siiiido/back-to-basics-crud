import { Request, Response } from 'express';
import User from '../model/user';

const createNewUser = async (req: Request, res: Response) => {
  const { name, email, phoneNumber } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const user = await User.create({
    name,
    email,
    phoneNumber: phoneNumber || 123,
  });

  if (user) {
    res.status(201).json({ message: 'New user is created' });
  } else {
    res.status(400).json({ message: 'Invalid user data received' });
  }
};

const printWord = (req: Request, res: Response) => {
  res.send('This is printWord');
};

export { createNewUser, printWord };
