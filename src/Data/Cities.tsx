import { ReactComponent as Dashboard } from "../images/icons/dashboard.svg";
import { ReactComponent as FindJob } from "../images/icons/work.svg";
import { ReactComponent as SavedJobs } from "../images/icons/save.svg";
import { ReactComponent as Practice } from "../images/icons/test.svg";
import { ReactComponent as News } from "../images/icons/news.svg";
import { ReactComponent as NeedHelp } from "../images/icons/help.svg";
import { ReactComponent as Contact } from "../images/icons/contact.svg";
import { ReactComponent as Settings } from "../images/icons/settings.svg";
import { theme } from "../Theme";
export const areas = [
  { area: "Ameerpet, Hyderabad, Telangana" },
  { area: "Begumpet, Hyderabad, Telangana" },
  { area: "SR Nagar, Hyderabad, Telangana" },
  { area: "Prakash Nagar, Hyderabad, Telangana" },
  { area: "Punjagutta, Hyderabad, Telangana" },
  { area: "Balkampet, Hyderabad, Telangana" },
  { area: "Sanathnagar, Hyderabad, Telangana" },
  { area: "Bharat Nagar, Hyderabad, Telangana" },
  { area: "Erragadda, Hyderabad, Telangana" },
  { area: "Borabanda, Hyderabad, Telangana" },
  { area: "Moti Nagar, Hyderabad, Telangana" },
  { area: "Khairtabad, Hyderabad, Telangana" },
  { area: "Somajiguda, Hyderabad, Telangana" },
  { area: "Raj Bhavan Road, Hyderabad, Telangana" },
  { area: "Lakdikapool, Hyderabad, Telangana" },
  { area: "Saifabad, Hyderabad, Telangana" },
  { area: "A.C. Guards, Hyderabad, Telangana" },
  { area: "Masab Tank, Hyderabad, Telangana" },
  { area: "Chintal Basti, Hyderabad, Telangana" },
  { area: "Musheerabad, Hyderabad, Telangana" },
  { area: "Chikkadpally, Hyderabad, Telangana" },
  { area: "Himayatnagar, Hyderabad, Telangana" },
  { area: "Ashok Nagar, Hyderabad, Telangana" },
  { area: "Domalguda, Hyderabad, Telangana" },
  { area: "Hyderguda, Hyderabad, Telangana" },
  { area: "Ramnagar, Hyderabad, Telangana" },
  { area: "Azamabad, Hyderabad, Telangana" },
  { area: "Adikmet, Hyderabad, Telangana" },
  { area: "Nallakunta, Hyderabad, Telangana" },
  { area: "Shanker Mutt, Hyderabad, Telangana" },
  { area: "RTC X Roads, Hyderabad, Telangana" },
  { area: "Bagh Lingampally, Hyderabad, Telangana" },
  { area: "Vidyanagar, Hyderabad, Telangana" },
  { area: "Secunderabad Cantonment, Hyderabad, Telangana" },
  { area: "Bowenpally, Hyderabad, Telangana" },
  { area: "Karkhana, Hyderabad, Telangana" },
  { area: "East Marredpally, Hyderabad, Telangana" },
  { area: "Sikh Village, Hyderabad, Telangana" },
  { area: "Trimulgherry, Hyderabad, Telangana" },
  { area: "Vikrampuri, Hyderabad, Telangana" },
  { area: "Amboli, Mumbai, Maharashtra" },
  { area: "Chakala, Mumbai, Maharashtra" },
  { area: "D.N. Nagar, Mumbai, Maharashtra" },
  { area: "Four Bungalows, Mumbai, Maharashtra" },
  { area: "JB Nagar, Mumbai, Maharashtra" },
  { area: "LOKHADWALA, Mumbai, Maharashtra" },
  { area: "Marol, Mumbai, Maharashtra" },
  { area: "Model Town, Mumbai, Maharashtra" },
  { area: "Oshiwara, Mumbai, Maharashtra" },
  { area: "Poonam Nagar, Mumbai, Maharashtra" },
  { area: "Sahar, Mumbai, Maharashtra" },
  { area: "Saki Naka, Mumbai, Maharashtra" },
  { area: "Seven Bungalows, Mumbai, Maharashtra" },
  { area: "Versova, Mumbai, Maharashtra" },
  { area: "Indra Lok Phase 1, Mumbai, Maharashtra" },
  { area: "Indra Lok Phase 2, Mumbai, Maharashtra" },
  { area: "Indra Lok Phase 3, Mumbai, Maharashtra" },
  { area: "Mira Road, Mumbai, Maharashtra" },
  { area: "Bhayandar, Mumbai, Maharashtra" },
  { area: "Uttan, Mumbai, Maharashtra" },
  { area: "Kashimira, Mumbai, Maharashtra" },
  { area: "Mira Road East, Mumbai, Maharashtra" },
  { area: "Naya Nagar, Mumbai, Maharashtra" },
  { area: "Sheetal Nagar, Mumbai, Maharashtra" },
  { area: "Shanti Nagar, Mumbai, Maharashtra" },
  { area: "Kanakia, Mumbai, Maharashtra" },
  { area: "Beverely, Mumbai, Maharashtra" },
  { area: "Queens Park, Mumbai, Maharashtra" },
  { area: "Srishti, Mumbai, Maharashtra" },
  { area: "Ramdev Park, Mumbai, Maharashtra" },
  { area: "Medtiya Nagar, Mumbai, Maharashtra" },
  { area: "Pleasant Park, Mumbai, Maharashtra" },
  { area: "Vinay Park, Mumbai, Maharashtra" },
  { area: "Penkadpada, Mumbai, Maharashtra" },
  { area: "Gcc Club, Mumbai, Maharashtra" },
  { area: "Mira gaon, Mumbai, Maharashtra" },
  { area: "Bhayandar East, Mumbai, Maharashtra" },
  { area: "Bhayandar Flyover, Mumbai, Maharashtra" },
  { area: "Bhayandar Khadi, Mumbai, Maharashtra" },
  { area: "Jesal park, Mumbai, Maharashtra" },
  { area: "Bhayandar West, Mumbai, Maharashtra" },
  { area: "Bhayandar railway Station, Mumbai, Maharashtra" },
  { area: "Bhayandar Subway, Mumbai, Maharashtra" },
  { area: "Bhayandar Creek Bridge, Mumbai, Maharashtra" },
  { area: "Metro Line 9 Mira Road, Bhayandar, Mumbai, Maharashtra" },
];

export const sideItems = [
  { text: "Dashboard", icon: Dashboard , color: theme.palette.black?.one},
  { text: "Find Jobs", icon: FindJob , color: theme.palette.black?.two},
  { text: "Saved Jobs", icon: SavedJobs , color: theme.palette.black?.two },
  { text: "Practice Tests", icon: Practice , color: theme.palette.black?.three },
  { text: "News & Events", icon: News , color: theme.palette.black?.three },
];

export const extraSide = [
  { text: "Need Help ?", icon: NeedHelp , color: theme.palette.black?.three },
  { text: "Contact Us", icon: Contact , color: theme.palette.black?.three },
  { text: "Settings", icon: Settings , color: theme.palette.black?.three },
];

export const cities = [
  { area: "Hyderabad" },
  { area: "Mumbai" },
  { area: "Bangloore" },
  { area: "Chennai" },
];

export const distance = ["Distance","0 - 10 Kms", "11 -20 Kms", "21 - 30 Kms","31 - 40 Kms"]; 
export const datePosted = ["Date Posted","Past 24 hours", "Past week", "Past month","Anytime"]; 
export const jobType = ["Job Type","Full time", "Internship", "Contract","Remote"]; 
export const experienceLevel = ["Experience Level","Fresher", "Mid - level", "Director","Executive"]; 
export const transport = ["Transport","Metro", "Bus", "Car pooling","Motor Cycle"]; 

export const cabDetails = ["100","25 Kms","1 hr 20 mins"]
export const title = ["Description","About the Company"]
export const description = ["Open Text is seeking a talented,personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide."]
export const company = ["High level of proficiency with leading UX Design software packages,such as Axure, Sketch, InVision, or Experience Design including the core Adobe Creative Suite products."]
export const skills=["Excellent written and oral communication and presentation skills  "]
export const metro=["Catch a blue line metro towards Raidurg"]

export const sidepageheading = ["Find Jobs", "Saved Jobs"]

export const PageHeading1 = ["Recommended for you","Job list"]
export const PageHeading2 = ["Based on your profile,skills and search history.","Based on your search"]