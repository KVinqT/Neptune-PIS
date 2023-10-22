import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";

const DoctorCard = () => {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <img
          className="w-[100px] m-auto"
          src="https://cdn.discordapp.com/attachments/1158254691919077387/1164980252225847306/IMG_8986.jpg?ex=65452f68&is=6532ba68&hm=f0f319ed9aa8b1b0bb3fe27c4602206e46beb8b02baeec4b34276ecf2dfd7ef1&"
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <button className="text-md text-white font-semibold bg-[#5068E9] py-2 px-4 rounded-lg">
          Book
        </button>
      </CardActions>
    </Card>
  );
};

export default DoctorCard;
