import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from '../pages/NotFound/NotFound';
import Home from '../pages/Home/Home';
import InfImg from '../pages/InfImg/InfImg';
/*
<Route path="/fullImg" element={<Login />} />
*/
export function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/fullImg/:id" element={<InfImg />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
