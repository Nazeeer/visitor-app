import React, { useState } from 'react';
import VisistorForm from "../components/VisistorForm";
import { Box } from "@mui/material";
import Footer from "../components/Footer";
import MyButton from "../components/MyButton"; // Import MyButton component
import VisitorList from '../components/VisitorList';
import { Height } from '@mui/icons-material';

const Visitors = () => {
  const [isVisitorForm, setIsVisitorForm] = useState(true);

  return (
    <Box
      className="visitors-page"
      sx={{
        minHeight: "100vh",
        display: "flex",
        // gap: 4,
        flexDirection: "column",
        justifyContent: "space-between",
        
      }}
    >

      <Box marginInline={2}  sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "normal",
        flexGrow: 1,
        // marginTop:'12vh'
      }}>
       
        <Box
          sx={{
            position: "relative",
            width: "100%",
            overflow: "hidden",
            maxWidth: "400px",
            borderRadius: "10px",
 
            paddingInline: { xs: "10px", sm: "30px" },
            backgroundColor: "#fff",
          }}
        >
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',marginBottom:"40px"}}>
            <MyButton bgColor={isVisitorForm ? "#FFC100" : "#D2D2D2"} bRadius=" 0 15px 15px 0" onClick={() => setIsVisitorForm(true)}>
              اضافة زائر
            </MyButton>
            <MyButton bgColor={!isVisitorForm ? "#FFC100" : "#D2D2D2"} bRadius="15px 0 0 15px " onClick={() => setIsVisitorForm(false)}>
              قائمة الزوار
            </MyButton>
          </div>
          {isVisitorForm ? <VisistorForm /> : <VisitorList/>} 
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Visitors;
