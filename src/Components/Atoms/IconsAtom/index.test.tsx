import {render, screen} from '@testing-library/react'
import {Icons} from './index'

describe("Display logo", () => {
    test("Should display logo", () => {
        render(<Icons source={'images/icons/bike.svg'} />)
        const logo = screen.getByRole("img")
        expect(logo).toBeInTheDocument()
        expect(logo).toHaveAttribute('alt', 'Logo');
    })
})