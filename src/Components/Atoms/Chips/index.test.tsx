import { render, screen } from "@testing-library/react"
import Chips from ".";

it("Testing for Chips", () =>{
    render(<Chips onDelete={() => {console.log("deleted")}} label={"10 - 20 Kms"} size={"medium"}
    sx={{borderRadius:"0px", backgroundColor:"white", height:"32px", maxHeight:"100%", border:"1px solid black"}}
    avatar={undefined}></Chips>)
    const ChipElement = screen.getByText("10 - 20 Kms");
    expect(ChipElement).toBeInTheDocument();
})