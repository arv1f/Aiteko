import './Button.css'
export default function Button({children, onClick, isActive}) {
    return(
    <>
        <button
        className={isActive ? 'button active' : ''}
        onClick={onClick}
        >{children}</button>
    </>
    )
}