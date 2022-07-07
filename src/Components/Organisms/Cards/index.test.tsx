import { fireEvent, render, screen } from "@testing-library/react";
import Cards from ".";

it("Small Card test", () => {
    render(<Cards icons="../../../images/icons/hp.svg"
    job="User Experience Designer"
    company="HP"
    location="Hyderabad, Telangana, India"
    bike={true}
    bus={true}
    car={true}
    train={true}
    postedTime="1hr 36 mins ago"
    state={false}/>)

    const cardElement = screen.getByText("User Experience Designer");
    expect(cardElement).toBeInTheDocument();
});

it("Small Card Fire evnt test", () => {
    render(<Cards icons="../../../images/icons/hp.svg"
    job="User Experience Designer"
    company="HP"
    location="Hyderabad, Telangana, India"
    bike={true}
    bus={true}
    car={true}
    train={true}
    postedTime="1hr 36 mins ago"
    state={false}/>)

    const cardElement = screen.getByTestId("card-contain");
    fireEvent.click(cardElement);
    const FireElement = screen.getByTestId("large-active");
    expect(FireElement).toBeInTheDocument();
});


it("Large Card test", () => {
    render(<Cards icons="../../../images/icons/hp.svg"
    job="User Experience Designer"
    company="HP"
    location="Hyderabad, Telangana, India"
    bike={true}
    bus={true}
    car={true}
    train={true}
    postedTime="1hr 36 mins ago"
    state={true}/>)

    const cardElement = screen.getByText("User Experience Designer");
    expect(cardElement).toBeInTheDocument();
});

it("Large Card Fire test", () => {
    render(<Cards icons="../../../images/icons/hp.svg"
    job="User Experience Designer"
    company="HP"
    location="Hyderabad, Telangana, India"
    bike={true}
    bus={true}
    car={true}
    train={true}
    postedTime="1hr 36 mins ago"
    state={true}/>)

    const cardElement = screen.getByTestId("card-contain");
    fireEvent.click(cardElement);
    const FireElement = screen.getByTestId("card-contain");
    expect(FireElement.className).toBe("makeStyles-largeCard-47 makeStyles-clickBorder-52 MuiBox-root css-0");
});

it("Large Card Double click Fire test", () => {
    render(<Cards icons="../../../images/icons/hp.svg"
    job="User Experience Designer"
    company="HP"
    location="Hyderabad, Telangana, India"
    bike={true}
    bus={true}
    car={true}
    train={true}
    postedTime="1hr 36 mins ago"
    state={true}/>)

    const cardElement = screen.getByTestId("card-contain");
    fireEvent.click(cardElement);
    const FireElement = screen.getByTestId("card-contain");
    fireEvent.click(FireElement);
    const LargeNoBorderFireElement = screen.getByTestId("card-contain");
    expect(LargeNoBorderFireElement.className).toBe("makeStyles-largeCard-60 MuiBox-root css-0");
});

it("Card Icons test", () => {
    render(<Cards icons="../../../images/icons/hp.svg"
    job="User Experience Designer"
    company="HP"
    location="Hyderabad, Telangana, India"
    bike={false}
    bus={false}
    car={false}
    train={false}
    postedTime="1hr 36 mins ago"
    state={true}/>)

    const cardElement = screen.getAllByAltText("Logo");
    expect(cardElement.length).toBe(2);
});