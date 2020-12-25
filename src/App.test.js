import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import App from './App';

test('renders App without crashing', () => {
   render(
      <Router>
         <App />
      </Router>
   )    
});
