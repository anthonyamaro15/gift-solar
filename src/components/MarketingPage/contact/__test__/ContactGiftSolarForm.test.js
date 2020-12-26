import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen } from '@testing-library/react';
import ContactGiftSolarForm from '../ContactGiftSolarForm';

import { contactGiftSolarRequest } from '../../../apiRequest';
import { serverUrl } from '../../../../envVariables';

const contactInfo = {
   name: "Lisa",
   phoneNumber: 8882436511,
   email: "lisa@gmail.com",
   message: "example message"
};
const response = { message: "Email sent." };

const server = setupServer(
   rest.post(`${serverUrl}/api/contact}`, (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(response));
   })
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.restoreHandlers());

describe("Renders ContactGiftSolarForm component without crashing", () => {
   it("Displays form", () => {
      render(<ContactGiftSolarForm />);
   });

   it("Displays form text and inputs", () => {
      render(<ContactGiftSolarForm />);

      expect(screen.getByText(/tel:/i)).toBeInTheDocument();
      expect(screen.getByText("956-518-3132")).toBeInTheDocument();
      expect(screen.getByText('info@giftsolarpower.com')).toBeInTheDocument();

      expect(screen.getByPlaceholderText(/nombre/i)).toBeInTheDocument();
      expect(screen.getByPlaceholderText(/numero de telefono/i)).toBeInTheDocument();
      expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
      expect(screen.getByPlaceholderText(/tu mensage/i)).toBeInTheDocument();

      expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
   });

   it("Should return success response after submitting form", async () => {
      render(<ContactGiftSolarForm />);

      const { data } = await contactGiftSolarRequest(contactInfo);
      expect(data.message).toBe("Email sent.");
   });

   it("Should return a 500 status for errors", async () => {
      server.use(
         rest.post(`${serverUrl}/api/contact}`, (req, res, ctx) => {
            return res(ctx.status(500));
         })
      );
      await expect(contactGiftSolarRequest(contactInfo)).rejects.toThrow('500');
   })
});
