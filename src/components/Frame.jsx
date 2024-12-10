const Frame = ({
    text,
    selectFont,
    isSubmitted
}) => {
    return(
        <div style={{position: 'relative'}}>
            <img 
                src='src/assets/frame.jpeg' 
                style = {{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'contain'
                }}
            />
            {isSubmitted && (
                <p style={{
                    position: 'absolute',
                    top: '90%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontFamily: selectFont,
                    fontSize: '24px',
                    textAlign: 'center',
                    color: 'black',
                    margin: 0
                }}>
                    {text}
                </p>
            )}
        </div>
    )
}

export default Frame