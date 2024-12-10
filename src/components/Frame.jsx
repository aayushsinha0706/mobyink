const Frame = ({
    text,
    selectFont,
    isSubmitted,
    onEdit
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
                <div>
                    <p style={{
                        position: 'absolute',
                        top: '87.5%',
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
                    <button onClick = {onEdit} style={{}}>Edit Personalisation</button>
                </div>
            )}
        </div>
    )
}

export default Frame