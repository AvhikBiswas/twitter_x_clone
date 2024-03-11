import { ReactNode } from "react";
import { BsChat } from "react-icons/bs";
import { AiOutlineRetweet } from "react-icons/ai";
import { IoHeartOutline } from "react-icons/io5";
import { LiaPollSolid } from "react-icons/lia";
import { CiSaveUp2,CiBookmark } from "react-icons/ci";
import { ManueButton } from "../Types/ManueButton";



const Twitter_PostIcon: ManueButton[] = [
  {
    title:'chat',
    icon:<BsChat/>,
    link:'/',
    buttonStyle: "hover:text-blue-600"
  },
  {
    title:'retwitte',
    icon:<AiOutlineRetweet />,
    link:'/',
    buttonStyle:"hover:text-green-600"
  },
  {
    title:'heart',
    icon:<IoHeartOutline/>,
    link:'/',
    buttonStyle:"hover:text-red-600"
  },
  {
    title:'engagement',
    icon:<LiaPollSolid/>,
    link:'/',
    buttonStyle:"hover:text-green-600"
},
{
  title:'bookmark',
  icon:<CiBookmark/>  ,
  link:'/',
  buttonStyle:"hover:text-blue-600"},  
{
  title:'share',
  icon:<CiSaveUp2/> ,
  link:'/',
  buttonStyle:"hover:text-sky-600"},

]
export default Twitter_PostIcon;