import Movie from "./Movie.jsx";
import {useState} from "react";

export default function MovieList(props) {
  const [count, setCount] = useState(0)

  function nextMovie() {
    setCount((oldValue) => oldValue + 1)
    if (count >= props.movies.length - 1) {
      setCount(0)
    }
  }

  function previousMovie() {
    setCount((oldValue) => oldValue - 1)
    if (count <= 0) {
      setCount(props.movies.length - 1)
    }
  }

  return (
    <>
      <h2>MovieList</h2>
      <ul>
        <li><Movie movie={props.movies[count]}/></li>
        {count === 1 && <p>movie2</p>}
        {count === 2 ? <p>movie3</p> : null}
        {/*<li><Movie movie={props.movies[1]}/></li>*/}
        {/*<li><Movie movie={props.movies[2]}/></li>*/}
        <button onClick={previousMovie}>Previous movie</button>
        <button onClick={nextMovie}>Next movie</button>
      </ul>
    </>
  );
}