import logo from './logo.svg';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';


function App() {
  return (
    
      <div className="App">
            <Banner />
            <Row title="Netflix original" fetchURL={requests.fetchNetflixOriginals} isLargeRow />
            <Row title="Trending new" fetchURL={requests.fetchTrending} />
            <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
             <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
            {/* <Row title="Top Rated" fetchURL={requests.fetchTopRatedMovies} />
            <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
            <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
            <Row title="Documentary Movies" fetchURL={requests.fetchDocumentaries} /> 
             */}
      </div>
    
  );
}

export default App;
