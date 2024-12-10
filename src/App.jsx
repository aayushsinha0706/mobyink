import React, {useState} from 'react'
const App = () => {

  const fonts = [
    'Ashley, cursive',
    'Avant Garde, sans-serif',
    'Rockwell, serif',
    'Times, serif'
  ]

  const [selectFont, setSelectFont] = useState(fonts[0]);
  const [text,setText] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div>
        <p style = {{fontFamily: selectFont, fontSize: '24px'}}>
          {text}
        </p>
      </div>
    )
  }
  return (
    <div>
      <div>
        <h2>Choose Font: </h2>
        <div>
          <label htmlFor='Font-select'>Choose a Font</label>
          <div>
            <select id='Font-select' value={selectFont} onChange = { (e) => setSelectFont(e.target.value)}>
              {fonts.map((font) => (
                <option key={font} value={font}>
                  {font.split(',')[0]}
                </option>
              ))}
            </select>
          </div>
        </div>
        <h3>Personalization Below Photo:</h3>
        <textarea
          value = {text}
          onChange = { (e) => setText(e.target.value)}
        />
        <button
          onClick = {handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  )
}

export default App