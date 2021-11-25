import '../style/style.header/heade.css'

export default function Header(props){
    return(
        <div className="header">
        <h1 className="header__title">TODO APP</h1>
        <form onSubmit={props.fromSubmit} className="header__input__feild">
            <input onChange={props.inputChangeValue} type="text" value={props.inputValue}placeholder="What do you want to do?"/>
            <button type="submit" className="header__input__submit__btn"> ADD </button>
        </form>
    </div>
    )
}