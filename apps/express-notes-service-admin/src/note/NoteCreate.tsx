import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const NoteCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <BooleanInput label="isImportant" source="isImportant" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
