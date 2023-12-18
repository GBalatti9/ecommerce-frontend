import React from 'react';
import ReactDOM from 'react-dom/client';
import { Container } from './Container';
import './Container.css'
import { FilterProvider } from './context/FilterProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <FilterProvider>
    <Container />
  </FilterProvider>

)
