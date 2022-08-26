function Car(props) {
    const carStyle = {
        boxShadow: '0 0 10px #fff',
        fontSize: '50px',
        display: 'inline-block',
        padding: '15px ',
        margin: '15px',
        textAlign: 'center',
    }
    const ChangeBtn = {
        padding: '10px 30px',
        background: 'transparent',
        color: '#fff',
        border: '1px solid #fff',
        textTransform: 'uppercase',
        cursor: 'pointer',
        fontSize: 20,
        letterSpacing: 2,
    }
    return (
        <div className="Car" style={carStyle}>
            <h1>{props.name}</h1>
            <p>{props.year}</p>
            <span>Id:<strong>{Math.floor(Math.random() * 4)}</strong></span>
            <br />
            <button style={ChangeBtn} onClick={props.onClick}>Change Title</button>
        </div>
    )
}

export default Car