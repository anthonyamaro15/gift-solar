import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import AdminLogin from '../AdminLogin';
import { loginRequest } from '../../apiRequest';
import { serverUrl } from '../../../envVariables';

const response = { token: 'exampletoken' };
const userInfo = { email: "example@gmail.com", password: "pass123" }

const server = setupServer(
   rest.post(`${serverUrl}/api/auth/login`, (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(response));
   })
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.restoreHandlers());


describe("Renders AdminLogin without crashing", () => {
   let open = false;
   const setOpen = () => open = !open;
   it("Renders properly", () => {
      render(
         <Router>
            <AdminLogin open={open} setOpen={setOpen} />
         </Router>
      );
   });

   it('Displays form inputs', () => {
      let open = false;
      const setOpen = () => open = !open;
      render(
         <Router>
            <AdminLogin open={true} setOpen={setOpen} />
         </Router>
      );
      
      expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
      expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
      expect(screen.getByText(/olvido la contrasenia?/i)).toBeInTheDocument();
      expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
   });

   it("Checks for success login response", async () => {
      const { data } = await loginRequest(userInfo);
      expect(data.token.length > 0);
   });

   it("Checks for error login response", async () => {
      server.use(
         rest.post(`${serverUrl}/api/auth/login`, (req, res, ctx) => {
            return res(ctx.status(500));
         })
      );

      await expect(loginRequest(userInfo)).rejects.toThrow("500")
   })
}) 