import { fireEvent, render, screen } from "@testing-library/react";
import { Filter } from ".";
import { ButtonComponent } from "../../Atoms/Buttons/Button";
import { ReactComponent as FilterIcon } from "../../../images/icons/filter.svg"

describe('<FormControl>', () => {
  test('check if it is present', () => {
    render(<Filter />);
    const name = screen.getByTestId('FilterTestId');
    expect(name).toBeDefined();
    expect(name).toBeTruthy();
  }),
  test("search icon  button", () => {
    render(<ButtonComponent startIcon={<FilterIcon />} />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    fireEvent.click(button)
    })

});

