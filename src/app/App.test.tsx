import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {shallow, ShallowWrapper} from "enzyme";
import {Navbar} from "../navbar/Navbar";
import {Route} from "react-router";

let wrapper: ShallowWrapper;

beforeEach(() => {
    wrapper =  shallow(<App/>);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>, 
    div);
});


it('contains a NavBar', () => {
   expect(wrapper.find(Navbar).length).toEqual(1);
});

it('contains some routes', () => {
   expect(wrapper.find(Route).length).toEqual(8);
});
