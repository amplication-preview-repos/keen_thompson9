import { SortOrder } from "../../util/SortOrder";

export type NoteOrderByInput = {
  content?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
};
