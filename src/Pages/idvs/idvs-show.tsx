import {
  BooleanField,
  DateField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";

export const IdvShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="status" />
      <TextField source="first_name" />
      <TextField source="middle_name" />
      <TextField source="last_name" />
      <TextField source="street_address" />
      <TextField source="Suburb" />
      <TextField source="City" />
      <DateField source="post_code" />
      <TextField source="country_code" />
      <TextField source="DocumentType" />
      <TextField source="failureCode" />
      <TextField source="manualNotes" />
      <BooleanField source="isManualOverridden" />
      <TextField source="overriddenBy" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
      <DateField source="__v" />
      <TextField source="id" />
    </SimpleShowLayout>
  </Show>
);
