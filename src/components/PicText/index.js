import React from 'react'
/**
 * Container for picture and div holding an h2 and text
 *
 * @param {Object} img {src, alt, width(str)}
 * @param {String} title
 * @param {Array} text [str, str,..., str]
 * @param {Boolean} right when true, positions image to the right
 */

export default function PicText({ img, title, text, right }) {
  function makePs(arr) {
    arr.forEach( str => <p>{str}</p>);
  }

  const pos = right ? 'pic-right' : ''

  const styleObj = {
    width: `${img.width}%`
  }

  return (
    <section className={`pic-text ${pos}`}>
      <img src={img.src} alt={img.alt} style={styleObj}/>
    <div className="desc">
        <h2>{title}</h2>
        {makePs(text)}
      {/* <p>{text}</p> */}
    </div>
  </section>
  )
}
