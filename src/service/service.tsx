import { CardsProps } from "../Components/Pages/FindPage";
import {baseUrl} from "../mocks/handlers"

export const getCards = async() => {
    return await fetch(baseUrl+"/cards")
}

export const patchCard = async(id: number ,card?: CardsProps) => {
    return await fetch(baseUrl+'/card/'+id, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(card)
      })
}
