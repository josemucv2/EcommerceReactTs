import * as React from "react";
import Button from "@mui/material/Button";
interface Props {
  color: Boolean;
  label: string;
}

const BasicButtons: React.FC<Props> = ({ color, label }) => {
  if (color) {
    return (
      <Button variant="contained" sx={{ bgcolor: "#3A4451", width: "100%" }}>
        {label}
      </Button>
    );
  }
  return (
    <Button
      variant="outlined"
      sx={{ color: "#3A4451", borderColor: "#3A4451", width: "100%" }}
    >
      {label}
    </Button>
  );
};

export default BasicButtons;
