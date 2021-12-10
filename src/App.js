import Dashboard from "./pages/Dashboard";
import ListMovie from "./pages/ListMovie";
import ListGenre from "./pages/ListGenre";
import DetailMovie from "./components/DetailMovie";
import {
  Routes,
  Route
} from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/listmovies" element={<ListMovie/>} />
        <Route path="/listGenre" element={<ListGenre/>} />
        <Route path="/listmovies/detailmovie/:id" element={<DetailMovie/>} />
      </Routes>
    </div>
  );
}