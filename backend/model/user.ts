import { model, Schema } from 'mongoose';

interface IUser {
  name: string;
  email: string;
  phoneNumber: number;
}

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: Number,
});

const User = model<IUser>('User', userSchema);

export default User;
