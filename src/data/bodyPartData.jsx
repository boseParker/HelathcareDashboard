import lungs from "../assets/images/lungs.png";
import teeth from "../assets/images/teeth.png";
import bone from "../assets/images/bone.png";
import { IoMdQrScanner } from "react-icons/io";
 const bodypart = {
  parts: [
    {
      id: 1,
      img: lungs,
      title: "Lungs",
      progress:"red",
      date: "26 Oct 2025"

    },

    {
      id: 2,
      img: teeth,
      title: "Teeth",
      progress:"green",
      date: "26 Oct 2025"
    },
    {
      id: 3,
      img: bone,
      title: "Bones",
      progress:"yellow",
      date: "26 Oct 2025"
    },
    
  ]
  ,
  scanner:<IoMdQrScanner/>
};


const Activitydata = [
  { day: 'Mon', bars: [40, 60, 30] },
  { day: 'Tues', bars: [50, 70, 40] },
  { day: 'Wed', bars: [30, 50, 20] },
  { day: 'Thurs', bars: [60, 80, 50] },
  { day: 'Fri', bars: [70, 90, 30] },
  { day: 'Sat', bars: [30, 50, 25] },
  { day: 'Sun', bars: [40, 60, 35] },
];

export {Activitydata,bodypart}