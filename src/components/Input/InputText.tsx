import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import Search from "../../assets/icons/Lupa.svg";

interface Props {
  action: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const CustomizedInputBase: React.FC<Props> = ({ action, value }) => {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "696px",
        height: "40px",
        borderRadius: "20px",
      }}
    >
      <img src={Search} className="pl-4" />
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search products"
        inputProps={{ "aria-label": "Search products" }}
        onChange={action}
        value={value}
      />

      <Divider sx={{ height: 28, m: 0.5 }} />
    </Paper>
  );
};
export default CustomizedInputBase;
