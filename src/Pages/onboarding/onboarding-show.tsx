import {
  ArrayField,
  BooleanField,
  Datagrid,
  DateField,
  EmailField,
  NumberField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";

export const OnboardingShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <EmailField source="email" />
      <TextField source="ird_number" />
      <TextField source="status" />
      <NumberField source="intended_transaction_count" />
      <NumberField source="intended_transaction_amount" />
      <TextField source="phone_number" />
      <TextField source="failureReason" />
      <TextField source="manualNotes" />
      <BooleanField source="isManualOverridden" />
      <TextField source="overriddenBy" />
      <DateField source="overriddenTimestamp" />
      <ArrayField source="idvs">
        <Datagrid>
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
          <DateField source="failureCode" />
          <TextField source="manualNotes" />
          <BooleanField source="isManualOverridden" />
          <TextField source="overriddenBy" />
          <ReferenceField source="_id" reference="s" />
          <DateField source="createdAt" />
          <DateField source="updatedAt" />
        </Datagrid>
      </ArrayField>
      <DateField source="__v" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
    </SimpleShowLayout>
  </Show>
);
