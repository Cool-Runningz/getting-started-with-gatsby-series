import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const Blog = props => {
  return (
    <div style={{ textAlign: "center" }}>
      <Link to="/"><span role="img" aria-label="house">🏠</span> Home</Link>
      <h1>Blog Page</h1>
      <p style={{ color: "navy" }}>
        It’s like a language. You learn the alphabet, which are the scales. You
        learn sentences, which are the chords. And then you talk
        extemporaneously with the horn. It’s a wonderful thing to speak
        extemporaneously, which is something I’ve never gotten the hang of. But
        musically I love to talk just off the top of my head. And that’s what
        jazz music is all about. I played in rhumba bands, mickey mouse bands;
        all kinds of bands. Records used to be documents, but now record
        companies want product. The saxophone is actually a translation of the
        human voice, in my conception. All you can do is play melody. No matter
        how complicated it gets, it’s still a melody. Life is too full of
        distractions nowadays. When I was a kid we had a little Emerson radio
        and that was it. We were more dedicated. We didn’t have a choice. There
        are four qualities essential to a great jazzman. They are taste,
        courage, individuality, and irreverence. These are the qualities I want
        to retain in my music
      </p>
    </div>
  )
}

export default Blog
