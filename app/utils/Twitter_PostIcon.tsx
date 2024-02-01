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
    link:'/'
  },
  {
    title:'retwitte',
    icon:<AiOutlineRetweet />,
    link:'/'
  },
  {
    title:'heart',
    icon:<IoHeartOutline/>,
    link:'/'
  },
  {
    title:'engagement',
    icon:<LiaPollSolid/>,
    link:'/'
},
{
  title:'bookmark',
  icon:<CiBookmark/>  ,
  link:'/'
},  
{
  title:'share',
  icon:<CiSaveUp2/> ,
  link:'/'
},

]
export default Twitter_PostIcon;