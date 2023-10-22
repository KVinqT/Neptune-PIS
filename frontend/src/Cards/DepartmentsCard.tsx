import Paper from "@mui/material/Paper";
import { Link, useNavigate } from "react-router-dom";

export interface Icon {
  type: React.ComponentType<any>;
  color: string;
  size: number;
}
export interface Props {
  id: number;
  name: string;
  // icon: Icon;
}

const DepartmentCard = ({ id, name }: Props) => {
  // const ActivateIcon = icon.type;
  const navigate = useNavigate();
  const handleRoute = (id: number) => {
    navigate(`/departments/${id}`);
  };
  return (
    <div onClick={() => handleRoute(id)}>
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
          {/* <ActivateIcon fontSize="large" /> */}
          <p className="text-sm mt-3">{name} Department</p>
        </div>
      </Paper>
    </div>
  );
};

export default DepartmentCard;
