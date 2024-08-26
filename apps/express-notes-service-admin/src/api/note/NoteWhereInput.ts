import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type NoteWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  isImportant?: BooleanNullableFilter;
  title?: StringNullableFilter;
};
