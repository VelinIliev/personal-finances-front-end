export  default function Movie(props) {
  return (
    <article>
      <h4>{props.movie.title}</h4>
      <p>{props.movie.description}</p>
    </article>
  )
}