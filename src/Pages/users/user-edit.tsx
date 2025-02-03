import {
  ArrayField,
  ArrayInput,
  DateInput,
  DateTimeInput,
  Edit,
  ImageInput,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
} from "react-admin";
export const UserEdit = () => (
  <Edit>
    <SimpleForm>
      <DateInput source="createdAt" />
      <TextInput source="name" />

      <ArrayInput source="idvEntried">
        <SimpleFormIterator>
          <TextInput source="name" label="Name" />
          <TextInput source="id" label="IDV" />
          <DateInput source="time" type="date" />
        </SimpleFormIterator>
      </ArrayInput>
      <TextInput source="id" />
    </SimpleForm>
  </Edit>
);
