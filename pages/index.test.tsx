import { render,cleanup } from '@testing-library/react';
import Home from './index'


describe('Home component', () => {
 test('it renders', () => {
   render(<Home />);
 });
})