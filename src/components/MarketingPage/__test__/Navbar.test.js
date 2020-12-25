import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Navbar from '../Navbar';


describe("renders Navbar without crashing", () => {
   it("displays Navbar links", () => {
      render(
         <Router>
            <Navbar />
         </Router>
      )
   });

   it("Displays NavLinks", () => {
      render(
         <Router>
            <Navbar />
         </Router>
      )

      expect(screen.getByText(/home/i)).toBeInTheDocument();
      expect(screen.getByText(/about/i)).toBeInTheDocument();
      expect(screen.getByText(/contact/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /admin/i }));
   })
});