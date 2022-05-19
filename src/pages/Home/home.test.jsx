import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Home from './home';

test('ProductHeader Component', () => {
  const componet = render(
    <Provider stores={{}}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </Provider>
  );
  console.log(componet);
  expect(componet).toMatchSnapshot();
});
