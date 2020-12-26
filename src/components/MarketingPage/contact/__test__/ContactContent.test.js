import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactContent from '../ContactContent';

describe("Renders ContactContent without crashing", () => {
   it("Renders contact form", () => {
      HTMLCanvasElement.prototype.getContext = () => {
         render(<ContactContent />);
      }
   });
});

