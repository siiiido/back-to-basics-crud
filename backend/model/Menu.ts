import { model, Schema } from 'mongoose';

interface IMenu {
  coffee: string;
  water: string;
  isDineIn: boolean;
}

const menuSchema = new Schema<IMenu>({
  coffee: {
    type: String,
    required: true,
  },
  water: {
    type: String,
  },
  isDineIn: {
    type: Boolean,
    required: true,
  },
});

const Menu = model<IMenu>('Menu', menuSchema);

export default Menu;
