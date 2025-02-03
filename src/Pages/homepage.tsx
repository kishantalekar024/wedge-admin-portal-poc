import { Box, Card, CardContent, Typography } from "@mui/material";

export const HomePage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card>
        <CardContent>
          <Typography variant="h4">Welcome to the Wedge admin Panel</Typography>
          <Typography variant="body1">Manage your users</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
