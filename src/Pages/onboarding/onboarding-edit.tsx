import {
  ArrayInput,
  BooleanInput,
  DateInput,
  Edit,
  NumberInput,
  ReferenceInput,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
} from "react-admin";

export const OnboardingEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="email" />
      <TextInput source="ird_number" />
      <TextInput source="status" />
      <NumberInput source="intended_transaction_count" />
      <NumberInput source="intended_transaction_amount" />
      <TextInput source="phone_number" />
      <TextInput source="failureReason" />
      <TextInput source="manualNotes" />
      <BooleanInput source="isManualOverridden" />
      <TextInput source="overriddenBy" />
      <DateInput source="overriddenTimestamp" />
      <ArrayInput source="idvs">
        <SimpleFormIterator>
          <TextInput source="status" />
          <TextInput source="first_name" />
          <TextInput source="middle_name" />
          <TextInput source="last_name" />
          <TextInput source="street_address" />
          <TextInput source="Suburb" />
          <TextInput source="City" />
          <DateInput source="post_code" />
          <TextInput source="country_code" />
          <TextInput source="DocumentType" />
          <DateInput source="failureCode" />
          <TextInput source="manualNotes" />
          <BooleanInput source="isManualOverridden" />
          <TextInput source="overriddenBy" />
          {/* <ReferenceInput source="_id" reference="s" /> */}
          <DateInput source="createdAt" />
          <DateInput source="updatedAt" />
        </SimpleFormIterator>
      </ArrayInput>
      <DateInput source="__v" />
      <DateInput source="createdAt" />
      <DateInput source="updatedAt" />
    </SimpleForm>
  </Edit>
);
