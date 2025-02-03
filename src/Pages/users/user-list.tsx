import { Card, CardContent, Stack } from "@mui/material";
import {
  ArrayField,
  ChipField,
  CreateButton,
  Datagrid,
  DateField,
  FilterButton,
  FilterForm,
  FilterList,
  FilterListItem,
  FilterLiveSearch,
  ImageField,
  ImageInput,
  List,
  ListBase,
  RichTextField,
  SavedQueriesList,
  SearchInput,
  SimpleShowLayout,
  SingleFieldList,
  TextField,
  TextInput,
} from "react-admin";
import MailIcon from "@mui/icons-material/MailOutline";
import CategoryIcon from "@mui/icons-material/LocalOffer";
const FallbackImageField = ({ source, record = {} }) => (
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
