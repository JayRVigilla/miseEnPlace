import React from 'react'
/**
 *
 * @param {Object} img {src, alt}
 * @param {String} title
 * @param {Array} text [str, str,..., str]
 */



export default function PicText({ img, title, text }) {
  function makePs(arr) {
    arr.forEach( str => <p>{str}</p>);
  }

  return (
    <section className="pic-text">
      <img src={img.src} alt={img.alt}/>
    <div className="desc">
        <h2>{title}</h2>
        {makePs(text)}
      {/* <p>{text}</p> */}
    </div>
  </section>
  )
}
