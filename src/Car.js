import classes from './style.module.css'
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
    const cls = [classes.input]
    if (props.name.length <= 4) {
        cls.push(classes.error)
    } else {
        cls.push(classes.success)
    }
    return (
        <div className="Car" style={carStyle}>
            <h1>{props.name}</h1>
            <p>{props.year}</p>
            <span>Id:<strong>{Math.floor(Math.random() * 4)}</strong></span>
            <br />
            <input className={cls.join(' ')} type="text" style={{ padding: '7px 10px' }} onChange={(e) => { props.onChange(e.target.value, props.idx) }} /><br />
            <button style={ChangeBtn} onClick={props.onClick}>Change Title</button>
            <button style={ChangeBtn} onClick={props.onDelete}>Delete</button>
        </div>
    )
}

export default Car