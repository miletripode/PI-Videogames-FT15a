import React from 'react';
import { NavLink } from 'react-router-dom';
import { configure, shallow } from 'enzyme';
import SearchBar from '../SearchBar';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import NavBar from '../NavBar';

configure({adapter: new Adapter()});

describe('<NavBar />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<NavBar />)
  })

  it('Deberia renderizar Tres <Link />', () => {
    expect(wrapper.find(NavLink)).toHaveLength(3);
  });
  it('El primer Link debe tener el texto "Inicio" y cambiar la ruta hacia "/".', () => {
    expect(wrapper.find(NavLink).at(0).prop('to')).toEqual('/');
    expect(wrapper.find(NavLink).at(0).text()).toEqual('Inicio');
  });
  it('El segundo Link debe tener el texto "Home" y cambiar la ruta hacia "/home"', () => {
    expect(wrapper.find(NavLink).at(1).prop('to')).toEqual('/home');
    expect(wrapper.find(NavLink).at(1).text()).toEqual('Home');
  });
  it('El tercer Link debe tener el texto "Create Videogame" y cambiar la ruta hacia "/create"', () => {
    expect(wrapper.find(NavLink).at(2).prop('to')).toEqual('/create');
    expect(wrapper.find(NavLink).at(2).text()).toEqual('Create Videogame');
  });
})