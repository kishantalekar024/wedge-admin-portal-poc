import { Stack } from "@mui/material";
import {
  ArrayField,
  ChipField,
  Datagrid,
  FilterButton,
  FilterForm,
  ListBase,
  SearchInput,
  SimpleShowLayout,
  SingleFieldList,
  TextField,
  TextInput,
} from "react-admin";
interface RecordType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

// eslint-disable-next-line react/prop-types
const FallbackImageField = ({
  source,
  record = {} as RecordType,
}: {
  source: string;
  record?: RecordType;
}) => (
  <img
    src={
      record[source] ||
      "https://random-image-pepebigotes.vercel.app/api/swag-wallpaper"
    }
    alt="Avatar"
    style={{
      maxWidth: 150,
      maxHeight: 150,
      objectFit: "contain",
      borderRadius: 20,
    }}
  />
);
export const UserList = () => {
  const userFilters = [
    <SearchInput key={"search"} source="search" alwaysOn={true} />,
    <TextInput key={"idv"} label="IDV" source="idvEntried.name" />,
  ];
  const ListToolbar = () => (
    <Stack direction={"row"} justifyContent={"space-evenly"}>
      <FilterForm filters={userFilters} />
      <div style={{ flexDirection: "row", display: "flex" }}>
        <FilterButton filters={userFilters} title="Filter" />
      </div>
    </Stack>
  );
  const UserPanel = () => (
    <SimpleShowLayout>
      <FallbackImageField source="avatar" />
      <ArrayField source="idvEntried">
        <Datagrid
          bulkActionButtons={false}
          empty={<div>No idvs found for this </div>}
        >
          <TextField source="name" label="Name" />
          <TextField source="id" label="IDV" />
          <TextField source="time" label="Time" />
        </Datagrid>
      </ArrayField>
    </SimpleShowLayout>
  );
  return (
    <ListBase>
      <ListToolbar />
      <Datagrid bulkActionButtons={false} expand={<UserPanel />}>
        <TextField source="name" />
        <ArrayField source="idvEntried">
          <SingleFieldList>
            <ChipField source="id" size="small" />
          </SingleFieldList>
        </ArrayField>
        <TextField source="id" />
      </Datagrid>
    </ListBase>
  );
};
