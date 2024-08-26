import { NoteWhereInput } from "./NoteWhereInput";

export type NoteListRelationFilter = {
  every?: NoteWhereInput;
  some?: NoteWhereInput;
  none?: NoteWhereInput;
};
