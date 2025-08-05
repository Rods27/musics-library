import { Routes, Route, Navigate } from 'react-router-dom';

import Favorites from '../pages/Favorites';
import Musics from '../pages/Musics';

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
