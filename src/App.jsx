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

  return (
    <div>
      <div>
        <h2>Choose Font: </h2>
        <div>
          <label htmlFor='Font-select'>Choose a Font</label><br />
          <select id='Font-select' value={selectFont} onChange = { (e) => setSelectFont(e.target.value)}>
            {fonts.map((font) => (
              <option key={font} value={font}>
                {font.split(',')[0]}
              </option>
            ))}
          </select>
        </div>
        <h3>Personalization Below Photo:</h3>
        <textarea
          value = {text}
          onChange = { (e) => setText(e.target.value)}
        />
      </div>
    </div>
  )

}

export default App