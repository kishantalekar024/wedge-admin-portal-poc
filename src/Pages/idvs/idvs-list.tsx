import {
  BooleanField,
  Datagrid,
  DateField,
  List,
  Pagination,
  TextField,
} from "react-admin";

export const IdvList = () => (
  <List pagination={<Pagination rowsPerPageOptions={[10, 25, 50, 100]} />}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="status" />
      <TextField source="first_name" />
      <TextField source="middle_name" />
      <TextField source="last_name" />
      <TextField source="street_address" />
      <TextField source="Suburb" />
      <TextField source="City" />
      <TextField source="post_code" />
      <TextField source="country_code" />
      <TextField source="DocumentType" />
      <TextField source="failureCode" />
      <TextField source="manualNotes" />
      <BooleanField source="isManualOverridden" />
      <TextField source="overriddenBy" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
      <DateField source="__v" />
    </Datagrid>
  </List>
);
