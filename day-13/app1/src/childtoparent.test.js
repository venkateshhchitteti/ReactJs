import {fireEvent, render,screen} from '@testing-library/react';

import Parent1 from './childtoparent'


test('test1', ()=>{
    render(<Parent1/>);
    const child1 =screen.getByTestId("child1Btn");
    const pTag = screen.getByTestId('message1');
    fireEvent.click(child1);
    expect(pTag).toHaveTextContent("set by child");
    // console.log(parent1);
})