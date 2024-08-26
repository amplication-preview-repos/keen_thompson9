import { Note as TNote } from "../api/note/Note";

export const NOTE_TITLE_FIELD = "title";

export const NoteTitle = (record: TNote): string => {
  return record.title?.toString() || String(record.id);
};
