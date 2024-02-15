import './MyInput.css'
export default function MyInput({children, id, placeholder, value}) {
    if (value=='-'){
    return (
        <div>
            <label>{children}</label>
            <input type="text" placeholder={placeholder} id={id}/>
        </div>
    )}
    else{
        return (
            <div>
                <label>{children}</label>
                <input type="text" placeholder={placeholder} defaultValue={value} id={id}/>
            </div>
        )   
    }
}