import { NoteWhereUniqueInput } from "./NoteWhereUniqueInput";
import { NoteUpdateInput } from "./NoteUpdateInput";

export type UpdateNoteArgs = {
  where: NoteWhereUniqueInput;
  data: NoteUpdateInput;
};
