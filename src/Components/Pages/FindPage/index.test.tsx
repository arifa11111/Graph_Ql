import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import FindPage from '.';

const fun = () => {
    render(<BrowserRouter><FindPage /></BrowserRouter>)
}

it('Find page should render', async()=>{
    await waitFor(() => fun())
    const testid= screen.getByTestId('findPage')
    expect(testid).toBeInTheDocument()
})

it('Search box,filter should render',async()=>{
    await waitFor(() => fun())
    const SideElement = screen.getByTestId("button-test-1")
    fireEvent.click(SideElement)
})

it('Save jobs should render',async ()=>{
    await waitFor(() => fun())
    const SideElement = screen.getByTestId("button-test-2")
    fireEvent.click(SideElement)
})