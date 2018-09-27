import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {shallow} from 'enzyme';
import {Navbar} from "../navbar/Navbar";
import {Route} from "react-router";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>, 
    div);
});


it('contains a NavBar', () => {
   const wrapper =  shallow(<App/>);
   expect(wrapper.find(Navbar).length).toEqual(1);
});

it('contains some routes', () => {
   const wrapper =  shallow(<App/>);
   expect(wrapper.find(Route).length).toEqual(8);
});
