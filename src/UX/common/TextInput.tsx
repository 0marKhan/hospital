import React from "react";
import { TextField } from "@mui/material";

interface TextInputProps {
  label: string;
  width?: string;
}

const TextInput: React.FC<TextInputProps> = ({ label, width }) => {
  return (
    <TextField
      id="standard-basic"
      label={label}
      variant="standard"
      sx={{
        "& .MuiInputLabel-root": {
          color: "white",
        },
        "& .MuiInputBase-root": {
          color: "white",
          width: width || "100%",
        },
        "& .MuiInput-underline:before": {
          borderBottomColor: "white",
        },
        "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
          borderBottomColor: "white",
        },
      }}
    />
  );
};

export default TextInput;
