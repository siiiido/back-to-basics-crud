import { model, Schema } from 'mongoose';

interface INote {
  title: string;
  content: string;
}

const noteSchema = new Schema<INote>({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

// ThoNote라는 이름으로 MongoDB Collection에 새로 추가됨(DB에서는 소문자 & 복수 thenotes)
const Note = model<INote>('TheNote', noteSchema);

export default Note;
