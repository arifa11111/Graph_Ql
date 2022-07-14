import { fireEvent, render, screen } from '@testing-library/react'
import {DescCard} from '.'
import myntra from "../../../images/icons/myntra.svg"


const description = () => {
    render(<DescCard icon={myntra} 
        title={'User Experiance Designer'} 
        company={'Myntra'}
        address={'Hitech city, Hyderabad - 500072'}
        postedTime={'2 days ago'}
        isSaved={'Save'} 
         />)
}

it('buttons should render', () => {
    description()
    const button = screen.getAllByRole('button')[0] as HTMLButtonElement
    expect(button).toBeInTheDocument()
    fireEvent.click(button)
})

it('Icons should render' , ()=>{
    description()
    const icon = screen.getAllByAltText('Logo')[0] as HTMLAnchorElement
    expect(icon).toBeInTheDocument()
})

// it('routes button should render' ,() => {
//     description()
//     const btn=screen.getByTestId('routesBtn')
//     expect(btn).toBeInTheDocument()
// })

it('description text should render' ,() => {
    description()
    const text=screen.getByTestId('text')
    expect(text).toBeInTheDocument()
})