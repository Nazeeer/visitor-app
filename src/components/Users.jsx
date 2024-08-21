import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";

const Users = () => {
  return (
    <Stack
      direction="row"
      gap={4}
      alignItems="center"
      justifyContent="flex-start"
      flexWrap="wrap"
      maxWidth={"350px"}
      marginInline="auto"
      p={3}
    >
      <TextField
        id="outlined-basic"
        label="اسم المستخدم"
        variant="outlined"
        fullWidth
      />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">الصلاحية</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value="مستخدم"
          label="الصلاحية"
        >
          <MenuItem value="مستخدم">مستخدم</MenuItem>
          <MenuItem value="ادمن">ادمن</MenuItem>
        </Select>
      </FormControl>
      <TextField
        id="outlined-basic"
        label="كلمه المرور"
        variant="outlined"
        fullWidth
      />
      <TextField
        id="outlined-basic"
        label="تكرار كلمه المرور"
        variant="outlined"
        fullWidth
      />
      <Box width="100%">
        <Button variant="contained">اضافة</Button>
      </Box>
    </Stack>
  );
};

export default Users;
