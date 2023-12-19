import React from 'react';
import ReactDOM from 'react-dom/client';
import { Container } from './Container';
import './Container.css'
import { FilterProvider } from './context/FilterProvider';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft, faArrowRight, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter } from 'react-router-dom';

library.add(faArrowLeft, faArrowRight, faCartShopping);

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <FilterProvider>
      <Container />
    </FilterProvider>
  </BrowserRouter>

)
