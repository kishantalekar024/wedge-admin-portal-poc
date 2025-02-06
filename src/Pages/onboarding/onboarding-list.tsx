import {
  ArrayField,
  BooleanField,
  ChipField,
  Datagrid,
  DateField,
  EmailField,
  List,
  NumberField,
  ReferenceField,
  SingleFieldList,
  TextField,
} from "react-admin";

export const OnboardingList = ({ props }) => {
  return (
    <List {...props} disableAuthentication>
      <Datagrid>
        <EmailField source="email" />
        <TextField source="id" />
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
          <SingleFieldList>
            <ChipField source="status" />
          </SingleFieldList>
        </ArrayField>
        <DateField source="__v" />
        <DateField source="createdAt" />
        <DateField source="updatedAt" />
      </Datagrid>
    </List>
  );
};
