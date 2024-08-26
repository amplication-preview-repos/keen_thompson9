import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const NoteShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="content" source="content" />
        <TextField label="ID" source="id" />
        <TextField label="title" source="title" />
      </SimpleShowLayout>
    </Show>
  );
};
