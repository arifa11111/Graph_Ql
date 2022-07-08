import { fireEvent, render, screen } from "@testing-library/react";
import {Upload} from '.'

const Resume = () => {
    render( <Upload /> )
}

it('close Icon', () => {
    Resume();
    const icon = screen.getAllByAltText('Logo')[0] as HTMLAnchorElement
    expect(icon).toBeInTheDocument()
})

it('click to upload files button',() => {
    Resume();
    const btn = screen.getByRole('button', { name: /Click Here to Upload Files/i });
    expect(btn).toBeInTheDocument();
    fireEvent.click(btn);
})

it('input field to upload files', () => {
     Resume()
     const input = screen.getByTestId('file')
     expect(input).toBeInTheDocument()
     expect(input).toHaveAttribute('type','file')
})
