import './MyList.css'
import { useState } from 'react'
import MyInput from '../MyInput/MyInput';
import Button from '../Button/Button';

export default function MyList({ products }){
    const [content, setContent] = useState(null);
    const [buttonContent, setButtonContent] = useState(null);
    const [typeContent, setTypeContent] = useState(null);
    const [renameType, setRenameType] = useState(null);

    function handleClick( type ) {setContent(type)}
    function buttonClick( type ) {
        setTypeContent(type[0]);
        setButtonContent(type[1]);
    }
    function ClickRename( type ) {
        setRenameType(type);
        switch (typeContent) {
            case 'name':
                console.log(content.name);
                break;
            case 'type':
                content.type=document.getElementById(buttonContent).value;
                break;
            case 'lenght':
                content.lenght=document.getElementById(buttonContent).value;
                break;
            case 'color':
                content.color=document.getElementById(buttonContent).value;
                break;
            case 'indexX':
                content.indexX=document.getElementById(buttonContent).value;
                break;
            case 'indexY':
                content.indexY=document.getElementById(buttonContent).value;
                break;
        }
        handleClick(null)
        //content.typeContent
    }
    return (
        <>
            <ul>
                {products.map(product => {
                    return (
                        <li><button onClick={()=>handleClick(product)} className='noBorder'><a className='' href="#">{product.name}</a></button></li>
                    )
            })}</ul>
            {content!=null&&
                <>
                <div className='window'>
                    <div>name: {content.name} <button onClick={()=>buttonClick(['name',content.name])}>Изменить Name нельзя. its const</button></div>
                    <div>type: {content.type} <button onClick={()=>buttonClick(['type',content.type])}>Изменить Type</button></div>
                    <div>lenght: {content.lenght} <button onClick={()=>buttonClick(['lenght',content.lenght])}>Изменить Lenght</button></div>
                    <div>color: {content.color} <button onClick={()=>buttonClick(['color',content.color])}>Изменить Color</button></div>
                    <div>indexX: {content.indexX} <button onClick={()=>buttonClick(['indexX',content.indexX])}>Изменить IndexX</button></div>
                    <div>indexY: {content.indexY} <button onClick={()=>buttonClick(['indexY',content.indexY])}>Изменить IndexY</button></div>
                    <div className='verticalLine1'></div>
                    {buttonContent!=null&&<div style={{position:'absolute', left:'700px', top:'30px'}}><MyInput value={'-'} placeholder={'Введите новое значение'} id={buttonContent}>Изменить {typeContent}</MyInput>
                    <Button isActive={renameType=='rename'} onClick={() => ClickRename('rename')}>Изменить этот параметр</Button></div>}

                    <button className='close' onClick={()=>handleClick(null)}>Закрыть</button>
                </div>
                </>
            }
        </>
    );
}