import './App.css';
import requests from './Requests';
import Row from './components/Row';
import Banner from './components/Banner';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">

      <Navbar/>

      <Banner />


      <Row title="NetflixOriginals" fetchURL={requests.fetchNetflixOriginals} isLarge={true} />
      <Row title="Trending" fetchURL={requests.fetchTrending} />
      <Row title="TopRated" fetchURL={requests.fetchTopRated} />

      <Row title="RomanceMovies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="ActionMovies" fetchURL={requests.fetchActionMovies} />
      <Row title="ComedyMovies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
      <Row title="HorrorMovies" fetchURL={requests.fetchHorrorMovies} />


    </div>
  );
}

export default App;
