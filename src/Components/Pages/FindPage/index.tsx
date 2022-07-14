import { Box ,Typography} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Header } from '../../Organisms/Header'
import { SearchJob } from '../../Organisms/SearchJob'
import Sidepane from '../../Organisms/SidePane'
import {Filter} from '../../Organisms/Filter/index'
import FindJobs from '../../Template/FindJobs'
import {theme} from '../../../Theme/index'
import Cards from '../../Organisms/Cards'
import {PageHeading1,PageHeading2} from "../../../Data/Cities"

interface CardsProps {
  id: number;
  icons: string;
  company: string;
  location: string;
  bike: boolean;
  bus: boolean;
  car: boolean;
  train: boolean;
  postedTime: string;
  state: boolean;
}

let view
function FindPage() {
  const [cards, setCards] = useState<CardsProps[]>([])
  const [styling,setStyling] = useState(true)
  const allCards = async() =>{
    const values = await fetch('http://localhost:3001/api/cards');
    if(!values.ok)
    {
      console.log("Error");
    }
    const data = values.json()
    setCards(await data);
  }
  useEffect(() => { allCards() })
  
  const flex = {
    display:'grid',transform: 'translateY(53px)',gridGap:'30px',gridTemplateColumns: 'auto auto auto'
  }
  const grid = {
    display:'grid',transform: 'translateY(53px)',gridGap:'30px'
  }
     {view = styling ?  flex :  grid}
  return (
    <Box >
      <FindJobs header={<Header />} sidepane={<Sidepane
        findPage={
          <Box>
              <Box sx={{display:'flex',}}>
                <SearchJob skills={["frontend developer", "Full stack developer"]} locations={["Hyderabad", "Mumbai"]} />
                <Filter />
              </Box>
              <Box sx={{transform: 'translateY(-30px)'}}>
                <Typography variant='h2' id='recommend'> {PageHeading1[0]} </Typography>
                <Typography variant='body2' sx={{color:theme.palette.black?.two}} id='profile'>{PageHeading2[0]}</Typography>
              </Box>
              <Box sx={view} onClick={()=>setStyling(false)}>
              <Cards
                  icons="/images/icons/hp.svg"
                  job="User Experience Designer"
                  company="HP"
                  location="Hyderabad, India"
                  bike={true}
                  bus={true}
                  car={true}
                  train={true}
                  postedTime="1hr 36 mins ago"
                  state={false} />

              <Cards
                  icons="/images/icons/myntra.svg"
                  job="User Experience Designer"
                  company="HP"
                  location="Hyderabad, Telangana, India"
                  bike={true}
                  bus={true}
                  car={true}
                  train={true}
                  postedTime="1hr 36 mins ago"
                  state={false} />

              <Cards
                  icons="/images/icons/hp.svg"
                  job="User Experience Designer"
                  company="HP"
                  location="Hyderabad, Telangana, India"
                  bike={true}
                  bus={true}
                  car={true}
                  train={true}
                  postedTime="1hr 36 mins ago"
                  state={false} />
              <Cards
                  icons="/images/icons/hp.svg"
                  job="User Experience Designer"
                  company="HP"
                  location="Hyderabad, India"
                  bike={true}
                  bus={true}
                  car={true}
                  train={true}
                  postedTime="1hr 36 mins ago"
                  state={false} />
              <Cards
                  icons="/images/icons/hp.svg"
                  job="User Experience Designer"
                  company="HP"
                  location="Hyderabad, India"
                  bike={true}
                  bus={true}
                  car={true}
                  train={true}
                  postedTime="1hr 36 mins ago"
                  state={false} />
                  {cards.map(card => <p>card</p> )}
              </Box>
              
        </Box>
        }
        savedPage={
          <Box>

          </Box>
        }
      />}
      />

    </Box>
  )}

export default FindPage  