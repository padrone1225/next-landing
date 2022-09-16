import { FeatureProps } from "../types/types";
import { TbRefresh, MdStore, BsHandbagFill } from "../components/Icons";

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
];

export default FEATURES;
