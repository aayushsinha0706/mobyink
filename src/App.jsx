import PersonalizeText from './components/PersonalizeText'
import Frame from './components/Frame'

import {useState} from 'react'

const App = () => {

  const fonts = [
    'Ashley, cursive',
    'Avant Garde, sans-serif',
    'Rockwell, serif',
    'Times, serif'
  ]

  const [selectFont, setSelectFont] = useState(fonts[0])
  const [text,setText] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const handleEdit = () => {
    setIsSubmitted(false)
    setText('')
  }
  return (
    <div style = {{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      gap: '2rem',
      padding: '2rem'
    }}>
      <Frame text={text} selectFont={selectFont} isSubmitted={isSubmitted} onEdit={handleEdit}/>
      {!isSubmitted && 
        <PersonalizeText
          selectFont={selectFont}
          setSelectFont={setSelectFont}
          fonts={fonts}
          text={text}
          setText={setText}
          handleSubmit={handleSubmit}
        />
      }

    </div>
  )
}

export default App