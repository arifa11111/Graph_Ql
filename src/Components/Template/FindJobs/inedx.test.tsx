import { render, screen } from "@testing-library/react";
import FindJobs from ".";
import { Header } from "../../Organisms/Header";
import Sidepane from "../../Organisms/SidePane";

it("Checking Header in FindJobs Template",() => {
    render(<FindJobs header={<Header/>} sidepane={<Sidepane/>}/>)
    const HeaderElement  = screen.getByTestId("header");
    expect(HeaderElement).toBeInTheDocument();
});