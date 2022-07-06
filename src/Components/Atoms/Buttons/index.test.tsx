import { render, screen } from "@testing-library/react";
import {ReactComponent as Filter} from "../../../images/icons/filter.svg";
import { ButtonComponent } from "./index";
import {ReactComponent as Search} from "../../../images/icons/search.svg";
import { ArrowForwardOutlined } from "@mui/icons-material";

    it("Next Button", () => {
        render(<ButtonComponent  label="Next"/>)
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument();
    })

    it("Save Button", () => {
        render(<ButtonComponent label="Save"/>)
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument();
    })

    it("Saved Button", () => {
        render(<ButtonComponent label="Saved"/>)
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument();
    })

    it("green commute button", () => {
        render(<ButtonComponent endIcon={<ArrowForwardOutlined  />} label="Green Commute Routes" />)
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument();
    })

    it("filter button", () => {
        render(<ButtonComponent startIcon={<Filter />} label="Filter" />)
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument();
    })

    it("search icon  button", () => {
        render(<ButtonComponent startIcon={<Search />} />)
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument();
    })
