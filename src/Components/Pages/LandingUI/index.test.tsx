import { fireEvent, render, screen } from "@testing-library/react"
import LandingUI from "."

it("Landing Ui testing", () => {
    render(<LandingUI/>);
    const LandingElement = screen.getByTestId("stepper");
    expect(LandingElement).toBeInTheDocument()
})

it("Landing Ui testing Active1", () => {
    render(<LandingUI/>);
    const InputBaseElement = screen.getByRole("combobox");
    fireEvent.change(InputBaseElement,{target:{value:"Ameerpet, Hyderabad, Telangana"}})
    const InputBaseElementAfterFire = screen.getAllByRole("option")[0];
    fireEvent.click(InputBaseElementAfterFire)
    const LogoChangeElement = screen.getByText("Real Time Air Quality Index(AQI) in this location");
    expect(LogoChangeElement).toBeInTheDocument()
})

it("Landing Ui testing Active2", () => {
    render(<LandingUI/>);
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
    render(<LandingUI/>);
    const ButtonElement = screen.getByTestId("btnNext");
    fireEvent.click(ButtonElement)
    const AgainButtonElement = screen.getByTestId("btnNext");
    fireEvent.click(AgainButtonElement)
    const InputBaseElement = screen.getByRole("combobox");
    fireEvent.change(InputBaseElement,{target:{value:"UI/Ux Designer"}})
    const InputBaseElementAfterFire = screen.getAllByRole("option")[0];
    fireEvent.click(InputBaseElementAfterFire)
    const LogoChangeElement = screen.getByText("Jobs found in");
    expect(LogoChangeElement).toBeInTheDocument()
})

it("Landing Ui testing BackButton", () => {
    render(<LandingUI/>);
    const ButtonElement = screen.getByTestId("btnNext");
    fireEvent.click(ButtonElement) 
    const BackButtonElement = screen.getByTestId("btnBack");
    fireEvent.click(BackButtonElement);
    const LogoChangeElement = screen.getByText("Enter Location to know Time Air Quality Index (AQI)");
    expect(LogoChangeElement).toBeInTheDocument()
})