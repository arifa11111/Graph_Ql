import { fireEvent, render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import LandingUI from "."

const fun=()=>{
    render(<BrowserRouter><LandingUI/></BrowserRouter>)

}
it("Landing Ui testing", () => {
    fun()
    const LandingElement = screen.getByTestId("stepper");
    expect(LandingElement).toBeInTheDocument()
})

it("Landing Ui testing Active1", () => {
    fun()
    const InputBaseElement = screen.getByRole("combobox");
    fireEvent.change(InputBaseElement,{target:{value:"Ameerpet, Hyderabad, Telangana"}})
    const InputBaseElementAfterFire = screen.getAllByRole("option")[0];
    fireEvent.click(InputBaseElementAfterFire)
    const LogoChangeElement = screen.getByText("Real Time Air Quality Index(AQI) in this location");
    expect(LogoChangeElement).toBeInTheDocument()
})

it("Landing Ui testing Active2", () => {
    fun()
    const ButtonElement = screen.getByTestId("btnNext");
    fireEvent.click(ButtonElement)
    const InputBaseElement = screen.getByRole("combobox");
    fireEvent.change(InputBaseElement,{target:{value:"Hyderabad"}})
    const InputBaseElementAfterFire = screen.getAllByRole("option")[0];
    fireEvent.click(InputBaseElementAfterFire)
    const LogoChangeElement = screen.getByText("Real Time Air Quality Index(AQI) in this location");
    expect(LogoChangeElement).toBeInTheDocument()
})

it("Landing Ui testing Active3", () => {
    fun()
    const ButtonElement = screen.getByTestId("btnNext");
    fireEvent.click(ButtonElement)
    const InputBaseElement0 = screen.getByRole("combobox");
    fireEvent.change(InputBaseElement0,{target:{value:"Hyderabad"}})
    const InputBaseElementAfterFire0 = screen.getAllByRole("option")[0];
    fireEvent.click(InputBaseElementAfterFire0)
    const AgainButtonElement = screen.getByTestId("btnNext");
    fireEvent.click(AgainButtonElement)
    const InputBaseElement = screen.getByRole("combobox");
    fireEvent.change(InputBaseElement,{target:{value:"UI/Ux Designer"}})
    const InputBaseElementAfterFire = screen.getAllByRole("option")[0];
    fireEvent.click(InputBaseElementAfterFire)
})

it("Landing Ui testing BackButton", () => {
    fun()
    expect(window.location.pathname).toBe('/')
    const LogoChangeElement = screen.getByText("Enter Location to know Time Air Quality Index (AQI)");
    expect(LogoChangeElement).toBeInTheDocument()
})