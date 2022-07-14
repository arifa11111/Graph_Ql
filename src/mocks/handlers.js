import { rest } from 'msw';
const data = {
  cards: [
    {
      id: 0,
      icons: "/images/icons/hp.svg",
      company: "HP",
      job:'User Experiance Designer',
      location: "Hyderabad, Telangana, India",
      bike: true,
      bus: true,
      car: true,
      train: true,
      postedTime: "1hr 36 mins ago",
      state: false,
      isApplied:false,
      isSaved:true,
      isDesc:false
    },
    {
      id: 1,
      icons: "/images/icons/instagram.svg",
      job:'User Experiance Designer',
      company: "HP",
      location: "Hyderabad, Telangana, India",
      bike: true,
      bus: true,
      car: true,
      train: true,
      postedTime: "45 mins ago",
      state: false,
      isApplied:false,
      isSaved:false,
      isDesc:false
    },
    {
      id: 2,
      icons: "images/icons/bmw.svg",
      job:'User Experiance Designer',
      company: "HP",
      location: "Hyderabad, Telangana, India",
      bike: true,
      bus: true,
      car: true,
      train: true,
      postedTime: "3 days ago",
      state: false,
      isApplied:false,
      isSaved:false,
      isDesc:false
    },
    {
      id: 3,
      icons: "images/icons/myntra.svg",
      job:'User Experiance Designer',
      company: "Mntra",
      location: "Hyderabad, Telangana, India",
      bike: true,
      bus: true,
      car: false,
      train: true,
      postedTime: "4 days ago",
      state: false,
      isApplied:false,
      isSaved:false,
      isDesc:false
    },
    {
      id: 4,
      icons: "images/icons/twitter.svg",
      company: "Twitter",
      job:'User Experiance Designer',
      location: "Hyderabad, Telangana, India",
      bike: true,
      bus: true,
      car: true,
      train: true,
      postedTime: "1 week ago",
      state: false,
      isApplied:false,
      isSaved:false,
      isDesc:false
    },
    {
      id: 5,
      icons: "images/icons/wipro.svg",
      company: "Wipro",
      job:'User Experiance Designer',
      location: "Hyderabad, Telangana, India",
      bike: true,
      bus: true,
      car: true,
      train: true,
      postedTime: "10 days ago",
      state: false,
      isApplied:false,
      isSaved:false,
      isDesc:false
    },
  ],
};

const baseUrl = "http://localhost:3001/api";

export const handlers = [
  rest.get(baseUrl+"/cards", (req, res, ctx) => {
    return res(ctx.json(data));
  }),

  rest.get(baseUrl+"/card", (req, res, ctx) => {
      const cardId = req.url.searchParams.get('id');
      return res(ctx.json(data.cards.at(cardId)));
  }),

  rest.patch(baseUrl+"/card/:id", (req, res, ctx) => {
    const { id } = req.params;
    data.cards = data.cards.map( card => {
      if(card.id !== parseInt(id))
      {
        return card;
      }
      return req.body;
    })
    return res(ctx.status(200),ctx.json({status : "Updated Card"}));
}),
];