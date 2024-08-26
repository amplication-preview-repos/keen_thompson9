import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const NoteList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Notes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="content" source="content" />
        <TextField label="ID" source="id" />
        <BooleanField label="isImportant" source="isImportant" />
        <TextField label="title" source="title" />
      </Datagrid>
    </List>
  );
};
