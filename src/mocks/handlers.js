import { rest } from 'msw';
const data = {
  cards: [
    {
      id: 0,
      icons: "/images/icons/hp.svg",
      company: "HP",
      location: "Hyderabad, Telangana, India",
      bike: true,
      bus: true,
      car: true,
      train: true,
      postedTime: "1hr 36 mins ago",
      state: false,
    },
    {
      id: 1,
      icons: "/images/icons/mythra.svg",
      company: "Mynthra",
      location: "Hyderabad, Telangana, India",
      bike: true,
      bus: true,
      car: true,
      train: true,
      postedTime: "36 mins ago",
      state: false,
    },
    {
      id: 2,
      icons: "images/icons/ola.svg",
      company: "Ola",
      location: "Hyderabad, Telangana, India",
      bike: true,
      bus: true,
      car: true,
      train: true,
      postedTime: "1hr ago",
      state: false,
    },
    {
      id: 3,
      icons: "images/icons/hp.svg",
      company: "HP",
      location: "Hyderabad, Telangana, India",
      bike: true,
      bus: true,
      car: true,
      train: true,
      postedTime: "1hr 36 mins ago",
      state: false,
    },
  ],
};

export const handlers = [
  rest.get("http://localhost:3001/api/cards", (req, res, ctx) => {
    return res(ctx.json(data));
  }),

  rest.get("http://localhost:3001/api/card", (req, res, ctx) => {
      const cardId = req.url.searchParams.get('id');
      return res(ctx.json(data.cards.at(cardId)));
  }),

  rest.patch("http://localhost:3001/api/card/:id", (req, res, ctx) => {
    const { id } = req.params;
    console.log(id)
    data.cards = data.cards.map( card => {
      if(card.id !== parseInt(id))
      {
        return card;
      }
      return req.body;
    })
    console.log(data.cards.at(id));
    return res(ctx.status(200),ctx.json({status : "Updated Card"}));
}),
];