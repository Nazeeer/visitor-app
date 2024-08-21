import React from 'react';

const MyButton = ({ children, bgColor = "#FFC100",bRadius="15px", onClick }) => {
  return (
    <button 
      type='submit' 
      style={{
        width: "173px",
        backgroundColor: bgColor,
        border: "none",
        borderRadius: bRadius,
        padding: "10px",
        margin: "30px auto 0px auto",
        color: "white",
        fontSize: "20px",
        fontWeight: "700",
        fontFamily:"Cairo",
        cursor:"pointer",
        outline:'none'
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default MyButton;
