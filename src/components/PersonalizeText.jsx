const PersonalizeText = ({
    selectFont,
    setSelectFont,
    fonts,
    text,
    setText,
    handleSubmit
}) => {
    return(
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
        onChange = { (e) => setText(e.target.value)}/>
        <div>
            <button onClick = {handleSubmit}>
                Submit
            </button>
        </div>

  </div>
  )
}

export default PersonalizeText