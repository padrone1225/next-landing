import { FeatureProps } from "../types/types";
import {
  TbRefresh,
  MdStore,
  BsHandbagFill,
  MdSettingsBackupRestore,
  FiSmile,
  FaPlug,
} from "../components/Icons";

const FEATURES: FeatureProps[] = [
  {
    feature: "Marketing Consultion",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
    link: "#",
    icon: <TbRefresh />,
  },
  {
    feature: "Market Analysis",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
    link: "#",
    icon: <MdStore />,
  },
  {
    feature: "Easy Purchase",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
    link: "#",
    icon: <BsHandbagFill />,
  },
  {
    feature: "Free Updates",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
    link: "#",
    icon: <MdSettingsBackupRestore />,
  },
  {
    feature: "100% Satistified",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
    link: "#",
    icon: <FiSmile />,
  },
  {
    feature: "Easy Plugin",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
    link: "#",
    icon: <FaPlug />,
  },
];

export default FEATURES;
