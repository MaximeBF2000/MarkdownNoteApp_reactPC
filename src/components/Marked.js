import React from 'react'
import marked from "marked"
import renderHTML from "react-render-html"

export default function Marked({ text }) {
  console.log()
  return (
    <div className="marked">
      {renderHTML(marked(text))}
    </div>
  )
}
