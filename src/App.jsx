import PersonalizeText from './components/PersonalizeText'

import {useState} from 'react'

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
    <PersonalizeText
      selectFont={selectFont}
      setSelectFont={setSelectFont}
      fonts={fonts}
      text={text}
      setText={setText}
      handleSubmit={handleSubmit}
    />
  )
}

export default App