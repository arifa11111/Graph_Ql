import { Box,  Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Header } from '../../Organisms/Header'
import { SearchJob } from '../../Organisms/SearchJob'
import { Filter } from '../../Organisms/Filter/index'
import FindJobs from '../../Template/FindJobs'
import { theme } from '../../../Theme/index'
import Cards from '../../Organisms/Cards'
import { PageHeading1, PageHeading2, searchJobLocation ,searchJobskills} from "../../../Data/Cities"
import { DescCard } from '../../Organisms/Description'
import { TabContext,  TabPanel } from "@mui/lab";
import { useParams } from 'react-router';
import * as service from "../../../service/service";
import Sidepane from '../../Organisms/SidePane'

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

}
let heading1=PageHeading1[0],heading2=PageHeading2[0]

function FindPage() {
  const { location } = useParams();
  const [cards, setCards] = useState<CardsProps[]>([])
  const [descCard, setDescCard] = useState<boolean>(false)
  const [id, setId] = useState<number>(0)
  const [tabNo,setTabNo] = useState<string>("2")

  const allCards = async () => {
    const values = await service.getCards();
    if (!(await values).ok) {
      console.error("No cards");
    }
    console.warn("Check Warn");
    const data = await values.json();
    console.warn(data);
    if (!(await values).ok || !data) {
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
    const Response = await service.patchCard(id, card);
    allCards();
  };

  return (
    <Box data-testid="findPage">
      <FindJobs header={<Header location={location}  />} sidepane={<Sidepane  setDesc={()=>{setDescCard(false)}}
        findPage={
          <Box >
            <Box sx={{ display: 'flex', }} data-testid='searchFilter'>
              <SearchJob skills={searchJobskills} locations={searchJobLocation} />
              <Filter />
            </Box>
            <Box sx={{ paddingTop:'36px' }}>
              <Typography variant='h2'> {heading1} </Typography>
              <Typography variant='body2' sx={{ color: theme.palette.black?.two }}>{heading2}</Typography>
            </Box>
            <Box sx={{ transform: 'translateY(5%)' }}>
        <TabContext value={tabNo}>
          <TabPanel value={"1"} sx={{display:"grid",gridGap:'18px',transform: 'translate(-25px,20px)',boxShadow:'none'}}>
              {cards.map((card, key) => {
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
                    state={true} /></Box>)
              })}
              
        </TabPanel>
        <TabPanel value={"2"} sx={{display:"grid",gridTemplateColumns:"320px 320px 320px",width:"950px",
                                  columnGap:'50px',rowGap:'48px',transform: 'translate(-25px,-5px)'}}>
              { cards.map((card, key) => {
                return (<Box onClick={() => {setDescCard(true); setId(card.id);setTabNo('1');heading1=PageHeading1[1];heading2=PageHeading2[1]; }} key={key}>
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
                    state={false} /></Box>)
              })
              }
              </TabPanel>
              </TabContext>

              {descCard &&
                <Box sx={{ position: 'absolute', left: '653px', top: "41px" }}>
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