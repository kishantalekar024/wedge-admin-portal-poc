import {
  BooleanInput,
  DateInput,
  Edit,
  SimpleForm,
  TextInput,
} from "react-admin";
export const IdvEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="status" /> <TextInput source="first_name" />{" "}
      <TextInput source="middle_name" /> <TextInput source="last_name" />{" "}
      <TextInput source="street_address" /> <TextInput source="Suburb" />{" "}
      <TextInput source="City" /> <DateInput source="post_code" />{" "}
      <TextInput source="country_code" /> <TextInput source="DocumentType" />{" "}
      <TextInput source="failureCode" /> <TextInput source="manualNotes" />{" "}
      <BooleanInput source="isManualOverridden" />{" "}
      <TextInput source="overriddenBy" /> <DateInput source="createdAt" />{" "}
      <DateInput source="updatedAt" /> <DateInput source="__v" />{" "}
      <TextInput source="id" />{" "}
    </SimpleForm>
  </Edit>
);
