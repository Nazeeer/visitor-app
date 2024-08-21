import React from 'react';
import { Box, Typography } from '@mui/material';

const MyInput = ({ id, placeholder, value, onChange, onBlur, name, type = "text", error }) => {
  return (
    <Box sx={{ position: "relative", margin: { xs: "7px 0" } }}>
      <input
        id={id}
        placeholder={placeholder}
        style={{
          width: "100%",
          border: `2px solid ${error ? '#ff0000' : '#FFC100'}`, // Highlight border if there's an error
          padding: "14px 10px",
          borderRadius: "10px",
          outline: "none",
          fontSize: "16px",
          fontFamily: 'Cairo',
          '-webkit-appearance': 'none',
          '-moz-appearance': 'textfield',
          'appearance': 'textfield'
        }}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
        name={name}
        type={type}
      />
      {error && (
        <Typography
          variant="body2"
          color="error"
          sx={{ mt: 1, fontFamily: 'Cairo', fontSize: "14px" }}
        >
          {error}
        </Typography>
      )}
    </Box>
  );
};

export default MyInput;
