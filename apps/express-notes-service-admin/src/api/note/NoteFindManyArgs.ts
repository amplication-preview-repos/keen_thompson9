import { NoteWhereInput } from "./NoteWhereInput";
import { NoteOrderByInput } from "./NoteOrderByInput";

export type NoteFindManyArgs = {
  where?: NoteWhereInput;
  orderBy?: Array<NoteOrderByInput>;
  skip?: number;
  take?: number;
};
