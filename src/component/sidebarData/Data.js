import { SiMicrosoftexcel } from 'react-icons/si'
import { AiFillWindows,AiFillTag } from 'react-icons/ai'
import{SiAdobe, SiYourtraveldottv} from 'react-icons/si'
import {CgMenuGridR} from 'react-icons/cg'
import{BsChatRightDotsFill} from 'react-icons/bs'
import{MdEventAvailable} from 'react-icons/md'
import{RiLogoutBoxLine}from 'react-icons/ri'
export const SidebarData=[
    {
        id:1,
        
        text:"Formula",
        link:"/formulas/formulas",
        icon:<SiMicrosoftexcel/>
    },
    {
        id:2,
        
        text:"Translation",
   
        link:"/creative",
        icon:<SiAdobe/>
    },
    {
        id:3,
        
        text:"Mail Composer",

        link:"/office/office",
        icon:<AiFillWindows/>
    },
    {
        id:4,
        text:"Health Care",
        link:"/health/health",
        icon:<CgMenuGridR/>
    },
    {
        id:5,
        text:"Accessories",
        link:"/accessories/accessories",
  
        icon:<SiYourtraveldottv/>
    },
    {
        id:6,
        text:"Tagline",
        link:"/tagline/tagline",
  
        icon:<AiFillTag/>
    },
    {
        id:7,
        text:"Chat",
        link:"/chatBot",
  
        icon:<BsChatRightDotsFill/>
    },
]

export const ProfileData=[
    {
        id:1,
        
        text:"Events",
        // color:" #FEDF89",
        link:"/events/event",
        icon:<MdEventAvailable/>
    },
    {
        id:2,
        link:'/',
        text:"Logout",
        // color:" #A6F4C5",
        icon:<RiLogoutBoxLine/>
    },
]