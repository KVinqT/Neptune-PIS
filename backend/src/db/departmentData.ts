import { Departments } from "./type";
import { BsHeart } from "react-icons/bs";
import { BiBrain } from "react-icons/bi";
import { BsLungs } from "react-icons/bs";
import { BsEye } from "react-icons/bs";
import { BiBone } from "react-icons/bi";
import { WiStars } from "react-icons/wi";
import { SiRoots } from "react-icons/si";
import { LiaToothSolid } from "react-icons/lia";
import { MdOutlineBloodtype } from "react-icons/md";

export const departments: Departments[] = [
  {
    id: 1,
    name: "Brain",
    icon: { type: BiBrain, color: "black", size: 24 },
  },
  {
    id: 2,
    name: "Lungs",
    icon: { type: BsLungs, color: "black", size: 24 },
  },
  {
    id: 3,
    name: "Eyes",
    icon: { type: BsEye, color: "black", size: 24 },
  },
  {
    id: 4,
    name: "Heart",
    icon: { type: BsHeart, color: "black", size: 24 },
  },
  {
    id: 5,
    name: "Bone",
    icon: { type: BiBone, color: "black", size: 24 },
  },
  {
    id: 6,
    name: "Skin",
    icon: { type: WiStars, color: "black", size: 24 },
  },
  {
    id: 7,
    name: "Nerve",
    icon: { type: SiRoots, color: "black", size: 24 },
  },
  {
    id: 8,
    name: "Teeth",
    icon: { type: LiaToothSolid, color: "black", size: 24 },
  },
  {
    id: 9,
    name: "Blood",
    icon: { type: MdOutlineBloodtype, color: "black", size: 24 },
  },
];
