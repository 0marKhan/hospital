import React, { ReactNode } from "react";
import { Button as MuiButton } from "@mui/material";

interface ButtonComponentProps {
  children: ReactNode;
  width?: string;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  children,
  width,
}) => {
  return (
    <MuiButton variant="contained" sx={{ width }}>
      {children}
    </MuiButton>
  );
};

export default ButtonComponent;
