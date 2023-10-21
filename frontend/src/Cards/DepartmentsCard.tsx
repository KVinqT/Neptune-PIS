import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { IconProps } from "@mui/material";

export interface Icon {
  type: React.ComponentType<IconProps>;
  color: string;
  size: number;
}
export interface Props {
  name: string;
  icon: Icon;
  route: string;
}

const DepartmentCard = ({ name, icon, route }: Props) => {
  const ActivateIcon = icon.type;
  return (
    <Link to={route}>
      <Paper
        sx={{
          width: 150,
          height: 110,
          m: 2,
          display: "flex",
          justifyContent: "center",
        }}
        elevation={4}
      >
        <div className="flex flex-col justify-center items-center">
          <ActivateIcon fontSize="large" />
          <p className="text-sm mt-3">{name} Department</p>
        </div>
      </Paper>
    </Link>
  );
};

export default DepartmentCard;
