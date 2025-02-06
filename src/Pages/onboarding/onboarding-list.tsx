import {
  BooleanField,
  Datagrid,
  DateField,
  DateInput,
  EmailField,
  List,
  NumberField,
  ReferenceArrayField,
  SelectInput,
  TextField,
  TextInput,
} from "react-admin";

export const OnboardingList = () => {
  const OnboardingListFilters = [
    <TextInput key={"search"} source="email" label="search" alwaysOn={true} />,
    <SelectInput
      key="status"
      source="status"
      label="Status"
      choices={["PENDING", "COMPLETED", "FAILED", "IN_PROGRESS"].map(
        (choice) => ({ id: choice, name: choice }),
      )}
    />,
    <SelectInput
      key="failure reason"
      source="failureReason"
      label="failure reason"
      choices={["FACE_MISMATCH", "DOCUMENT_EXPIRED", "ADDRESS_INVALID"].map(
        (choice) => ({ id: choice, name: choice }),
      )}
    />,
    <DateInput key="startDate" source="startDate" label="Start Date" />,
    <DateInput key="endDate" source="endDate" label="End Date" />,
  ];
  // const PostPanel = () => {
  //   const record = useRecordContext();
  //   return <div>{record?.body}</div>;
  // };
  return (
    <List disableAuthentication filters={OnboardingListFilters} debounce={1000}>
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
        <ReferenceArrayField source="idvs" reference="idvs" label="Idvs" />
        <DateField source="createdAt" />
        <DateField source="updatedAt" />
      </Datagrid>
    </List>
  );
};
