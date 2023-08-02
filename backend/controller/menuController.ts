import { Request, Response } from 'express';
import Menu from '../model/Menu';

const createMenu = async (req: Request, res: Response) => {
  try {
    const { coffee, water, isDineIn } = req.body;

    if (!coffee || !water) {
      return res.status(400).json({ message: '400 Error' });
    }

    const menus = await Menu.create({
      coffee,
      water,
      isDineIn,
    });

    if (menus) {
      res.status(200).json({ message: '200 OK' });
    } else {
      res.status(400).json({ message: '400 ELSE error' });
    }
  } catch (error) {
    console.error(error);
  }
};

const findAll = async (req: Request, res: Response) => {
  try {
    const menus = await Menu.find();

    if (menus) {
      console.log(menus, ' menus');
      res.status(200).json({ message: '200 GOOD' });
    } else {
      res.status(400).json({ message: '400 Error' });
    }
  } catch (error) {
    console.error(error);
  }
};

const findIsDine = async (req: Request, res: Response) => {
  try {
    const menus = await Menu.find({ isDineIn: true }).exec();

    if (menus) {
      console.log(menus, ' menus');
      res.status(200).json({ message: ' gooood' });
    } else {
      res.status(400).json({ message: 'Error' });
    }
  } catch (error) {
    console.error(error);
  }
};

const findHotWater = async (req: Request, res: Response) => {
  try {
    const howWaterMenus = await Menu.find({ water: 'hot' }).exec();

    if (howWaterMenus) {
      console.log(howWaterMenus, ' howWaterMenus');
      res.status(200).json({ message: '200' });
    } else {
      res.status(400).json({ message: '400' });
    }
  } catch (error) {
    console.error(error);
  }
};

const findOneAndUpdateExam = async (req: Request, res: Response) => {
  try {
    const query = { water: 'hot' };
    const update = { coffee: 'Update Juice' };

    const updateMenu = await Menu.findOneAndUpdate(query, update, {
      new: true,
    });

    if (updateMenu) {
      console.log(updateMenu, ' updateMenu');
      res.status(200).json({ message: '200 Success' });
    } else {
      res.status(400).json({ message: 'Error' });
    }
  } catch (error) {
    console.error(error);
  }
};

const findOneAnndReplaceExam = async (req: Request, res: Response) => {
  try {
    const query = { coffee: 'americano3' };
    const replacement = {
      coffee: 'reaplce juice',
      water: 'ice',
      isDineIn: false,
    };

    const replaceMenu = await Menu.findOneAndReplace(query, replacement, {
      new: true,
    });

    if (replaceMenu) {
      console.log(replaceMenu, ' replaceMenu');
      res.status(200).json({ message: 'success' });
    } else {
      res.status(400).json({ message: 'Error' });
    }
  } catch (error) {
    console.error(error);
  }
};

export {
  createMenu,
  findAll,
  findIsDine,
  findHotWater,
  findOneAndUpdateExam,
  findOneAnndReplaceExam,
};
