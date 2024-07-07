// import './App.css'
import Header from "./components/Header";
import Main from "./components/Main";
import MainTest from "./components/Tests/MainTest";
import MovieList from "./components/Tests/MovieList";
import {movies} from "./components/Tests/Movies.js"

function App() {
  return (
    <>
      {/*<Header/>*/}
      {/*<Main />*/}
      {/*<MainTest name="Velin Iliev" />*/}
      <MovieList movies={movies} />
    </>
  )
}

export default App
