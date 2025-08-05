import { Routes, Route, Navigate } from 'react-router-dom';

import { Musics, Favorites } from '../pages';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to="/musics" />} />
      <Route path="/musics" element={<Musics />} />
      <Route path="/musics/favorites" element={<Favorites />} />
    </Routes>
  );
}

export default AppRoutes;
