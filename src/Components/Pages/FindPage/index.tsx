import { Box,  Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Header } from '../../Organisms/Header'
import { SearchJob } from '../../Organisms/SearchJob'
import { Filter,arrayValue } from '../../Organisms/Filter/index'
import FindJobs from '../../Template/FindJobs'
import { theme } from '../../../Theme/index'
import Cards from '../../Organisms/Cards'
import { PageHeading1, PageHeading2, searchJobLocation ,searchJobskills, distance} from "../../../Data/Cities"
import { DescCard } from '../../Organisms/Description'
import { TabContext,  TabPanel } from "@mui/lab";
import { useParams } from 'react-router';
import * as service from "../../../service/service";
import Sidepane from '../../Organisms/SidePane';


export interface CardsProps {
  id: number;
  icons: string;
  job: string;
  company: string;
  location: string;
  bike: boolean;
  bus: boolean;
  car: boolean;
  train: boolean;
  postedTime: string;
  state: boolean;
  isSaved: boolean;
  filter:{
    distance:string;
    location:string;
  };
}
const styles = (theme:any) => ({
  root: {
    [theme.breakpoints.down('md')]: {
      width:'258px'
    },
    [theme.breakpoints.up('md')]: {
      width:'258px'
    },
    [theme.breakpoints.up('lg')]: {
      width:'358px'
    },
  },
})
let heading1=PageHeading1[0],heading2=PageHeading2[0]

function FindPage() {
  const { location } = useParams()
  const [cards, setCards] = useState<CardsProps[]>([])
  const [descCard, setDescCard] = useState<boolean>(false)
  const [id, setId] = useState<number>(0)
  const [tabNo,setTabNo] = useState<string>("2")
  const [dista,setDista] =useState<string[]>(distance)
  const [sloc,setSloc] = useState<string>("")
  const [srole,setSrole] = useState<string>("")

  const allCards = async () => {
    const values = await service.getCards();
    const data = await values.json();
    if (!values.ok || !data) {
      console.error("No cards");
    }
    let datastr = JSON.stringify(data.cards);
    let dataJson = JSON.parse(datastr);
    setCards(dataJson);
  };

  useEffect(() => {
    allCards();
  }, []);


  const handleSave = async (id: number) => {
    let card = cards.at(id);
    if (card?.isSaved) {
      card = { ...card, isSaved: false };
      if(document.getElementById("findId") === null){
        setDescCard(false);
      }
    } else if (card?.isSaved === false) {
      card = { ...card, isSaved: true };
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const Response = await service.patchCard(id, card);
    allCards();
  }

  const handleLocation = (loc:string)=>{
    setSloc(loc)
  }
  const handleRole = (role:string)=>{
    setSrole(role)
  }
  return (
    <Box data-testid="findPage">
      <FindJobs header={<Header location={location}  />} sidepane={<Sidepane  setDesc={()=>{setDescCard(false)}}
        findPage={
          <Box >
            <Box sx={{ display: 'flex', }} data-testid='searchFilter'>
              <SearchJob skills={searchJobskills} locations={searchJobLocation} getLoc={handleLocation} getRole={handleRole} />
              <Box onClick={() => {setDista(distance.filter(ele => arrayValue.includes(ele)))}}>
              <Filter />
              </Box>
            </Box>
            <Box sx={{ paddingTop:'36px' }}>
              <Typography variant='h2'> {heading1} </Typography>
              <Typography variant='body2' sx={{ color: theme.palette.black?.two }}>{heading2}</Typography>
            </Box>
            <Box sx={{ transform: 'translateY(5%)' }}>
        <TabContext value={tabNo}>
          <TabPanel value={"1"} sx={{display:"grid",gridGap:'2vh',transform: 'translate(-25px,20px)',boxShadow:'none'}}>
              {cards.filter(card => dista.includes(card.filter.distance)).filter(card => {if(sloc===''|| sloc===undefined){return true}return card.filter.location === sloc })
                     .filter(card => {if(srole===''||srole===undefined){return true}return card.job === srole }).map((card, key) => {
                return (<Box  onClick={() => { setDescCard(true); setId(card.id)}} key={key}>
                  <Cards
                    icons={card.icons}
                    job={card.job}
                    company={card.company}
                    location={card.location}
                    bike={card.bike}
                    bus={card.bike}
                    car={card.car}
                    train={card.train}
                    postedTime={card.postedTime}
                    state={true} />
                    </Box>)
              })}
        </TabPanel>
        <TabPanel value={"2"} sx={{display:"flex", width:"1000px", flexWrap:"wrap",justifyContent:"space-between",transform: 'translate(-25px,-5px)'}}>
                    { cards.filter(card => dista.includes(card.filter.distance)).filter(card => {if(sloc===''|| sloc===undefined){return true}return card.filter.location === sloc })
                     .filter(card => {if(srole===''||srole===undefined){return true}return card.job === srole }).map((card, key) => {
                      return (<Box sx={{width:"33.33%", paddingTop:"15px"}} onClick={() => {setDescCard(true); setId(card.id);setTabNo('1');heading1=PageHeading1[1];heading2=PageHeading2[1]; }} key={key}>
                       <Cards
                          icons={card.icons}
                          job={card.job}
                          company={card.company}
                          location={card.location}
                          bike={card.bike}
                          bus={card.bike}
                          car={card.car}
                          train={card.train}
                          postedTime={card.postedTime}
                          state={false} />
                          </Box>)
                    })
                    }
                    </TabPanel> 
              </TabContext>

              {descCard &&
                <Box sx={{ position: 'absolute', left: '76vh', top: "41px" }}>
                  <DescCard icon={cards.at(id)?.icons} title={cards.at(id)?.job} company={cards.at(id)?.company} address={cards.at(id)?.location}
                    postedTime={cards.at(id)?.postedTime} handleSave={()=>{handleSave(id)}} isSaved={cards.at(id)?.isSaved ? "UnSave" : "Save"} />
                </Box>
              }

            </Box>
          </Box>
        }
        savedPage={
          <Box sx={{display:"grid",gridGap:'18px',paddingLeft:'5px'}}>
            {cards.filter((card: any) => card.isSaved).map((card, key) => {
              return (<Box onClick={() => { setDescCard(true); setId(card.id) }} key={key}>
                <Cards
                  icons={card.icons}
                  job={card.job}
                  company={card.company}
                  location={card.location}
                  bike={card.bike}
                  bus={card.bike}
                  car={card.car}
                  train={card.train}
                  postedTime={card.postedTime}
                  state={true} /></Box>)
            })}
            {descCard &&
              <Box sx={{ position: 'absolute', left: '965px', top: "170px", }}>
                <DescCard icon={cards.at(id)?.icons} title={cards.at(id)?.job} company={cards.at(id)?.company} address={cards.at(id)?.location}
                  postedTime={cards.at(id)?.postedTime} handleSave={()=>{handleSave(id)}} isSaved={cards.at(id)?.isSaved ? "UnSave" : "Save"} />
              </Box>
            }
          </Box>
        }
      />}
      />

    </Box>
  )
}

export default FindPage