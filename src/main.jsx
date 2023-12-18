import React from 'react';
import ReactDOM from 'react-dom/client';
import { Container } from './Container';
import './Container.css'
import { FilterProvider } from './context/FilterProvider';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft, faArrowRight, faCartShopping } from '@fortawesome/free-solid-svg-icons';

library.add(faArrowLeft, faArrowRight, faCartShopping);

ReactDOM.createRoot(document.getElementById('root')).render(
  <FilterProvider>
    <Container />
  </FilterProvider>

)
