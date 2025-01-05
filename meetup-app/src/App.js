import { Routes, Route, Outlet } from "react-router-dom";
import AllMeetupsPage from './pages/AllMeetups'
import NewMeetupPage from './pages/NewMeetup'
import FavoritesPage from './pages/Favorites'
import TodoPage from './pages/todo'
import MainNavigation from './components/layout/MainNavigation'
import Layout from './components/layout/Layout'
function App() {
  return (
    <Layout>
      <Routes>      
          <Route path="/" element={<AllMeetupsPage />} />
          <Route path="/new-meetups" element={<NewMeetupPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/todo" element={<TodoPage />} />
      </Routes>
    </Layout>
  );
}

export default App;