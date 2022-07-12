import { render, screen } from '@testing-library/react'
import { LandingTemplate } from './index'
import HomePageStepper from "../../Organisms/Stepper";
import { ReactComponent as Logo } from "../../../images/icons/logo-1.svg";

it('stepper should render',() => {
    render(<LandingTemplate homestepper={<HomePageStepper/>} Logo={<Logo width={"205"} height={"40"} />} />)
    const landingTemplate = screen.getByTestId('steppertemp')
    expect(landingTemplate).toBeInTheDocument()
})

it('logo should render',() => {
    render(<LandingTemplate homestepper={<HomePageStepper/>} Logo={<Logo width={"205"} height={"40"} />} />)
    const landingTemplate = screen.getByTestId('logo')
    expect(landingTemplate).toBeInTheDocument()
})