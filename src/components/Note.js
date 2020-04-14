import React from 'react'

export default function Note(props) {
  const { text, setText } = props

  const handleText = e => {
    setText(e.target.value)
    localStorage.setItem("text", e.target.value)
  }

  return (
    <textarea 
      className="note_area" 
      placeholder="Write your note here..."
      value={text}
      onChange={handleText}
    >
    </textarea>
  )
}
