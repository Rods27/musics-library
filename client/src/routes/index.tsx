import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home, Musics, Favorites } from '../pages';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/musics" element={<Musics />} />
      <Route path="/musics/favorites" element={<Favorites />} />
    </Routes>
  );
}

export default AppRoutes;
