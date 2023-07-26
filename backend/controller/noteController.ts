import { Request, Response } from 'express';
import Note from '../model/Note';

const createNewNote = async (req: Request, res: Response) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: 'ERROR' });
  }

  const notes = await Note.create({
    title,
    content,
  });

  if (notes) {
    res.status(201).json({ message: 'OK' });
  } else {
    res.status(400).json({ message: 'FAIL' });
  }
};

export { createNewNote };
