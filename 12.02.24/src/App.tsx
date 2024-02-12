import './App.css'
import MyInput from './components/MyInput/MyInput.tsx'
import Button from './components/Button/Button.tsx'
import MyList from './components/MyList/MyList.tsx'
import { useState } from 'react'
import DrawList from './components/DrawList/DrawList.tsx'

export default function App() {
  const [contentType, setContentType] = useState(null);
  interface geometricShape {
    type : 'circle' | 'square',
    lenght : number,
    color : string,
    indexX : number,
    indexY: number,
    readonly name : string
  }
  let listShape : geometricShape[]=[];//{name:'fsd',type:'circle',lenght:4,color:'white',indexX:1,indexY:2}];
  
  const [products, setProducts] = useState(listShape);
  
  function handleDeleted(){console.log('delete')}


  
  function handleClick( type ) {
    setContentType(type);
  }

  return (
    <>
    <div className='leftDiv'>
      <h1 style={{marginLeft: '30px'}}>Доступные функции</h1>
      <Button isActive={contentType=='button1'} onClick={() => handleClick('button1')}>Добавить фигуру в список</Button>
      <Button isActive={contentType=='button2'} onClick={() => handleClick('button2')}>Изменить фигуру из списка</Button>
      <Button isActive={contentType=='button3'} onClick={() => handleClick('button3')}>Посмотреть на фигуры из списка</Button>
    </div>

    <div className='verticalLine'></div>

    { contentType=='button1' && <>
    <div className='rightDiv'>
      <h2 style={{width:'800px'}}>Введите параметры своей фигуры</h2>
      <MyInput id={'name'} value={'MyBetterFrend'} placeholder={'MyBetterFrend'}>Название фигуры(Константа): </MyInput>
      <MyInput id={'type'} value={'circle'} placeholder={'circle'}>Тип фигуры(circle или square): </MyInput>
      <MyInput id={'lenght'} value={'100'} placeholder={'100'}>Длина или радиус вашей фигуры(желательно от 30): </MyInput>
      <MyInput id={'color'} value={'white'} placeholder={'red'}>Цвет вашей фигуры: </MyInput>
      <MyInput id={'indexX'} value={'0'} placeholder={'0'}>Местоположение вашей фигуры по абциссе: </MyInput>
      <MyInput id={'indexY'} value={'0'} placeholder={'0'}>Местоположение вашей фигуры по ординате: </MyInput>
      <div></div>
      <Button isActive={contentType=='fdsvfds'} onClick={() => {
        handleClick('button2');
        const name : string = document.getElementById("name").value;
        let typeIs : 'circle' | 'square' = document.getElementById("type").value;
        let lenght : number = Number(document.getElementById("lenght").value);
        let color : string = document.getElementById("color").value;
        let indexX : number = Number(document.getElementById("indexX").value);
        let indexY : number = Number(document.getElementById("indexY").value);
        setProducts((prevState) => [...prevState, {name:name, type:typeIs, lenght:lenght, color:color, indexX:indexX, indexY:indexY}]);
        //console.log(products);
      }}>Создать фигуру и добаить её в список фигур</Button>
    </div>
    </> }
    { contentType=='button2' && <>
    <div className='rightDiv'>
      <h2 style={{width:'800px'}}>Выберите фигуру которую желаете изменить в каком-либо параметре</h2>
      <MyList products={products}/>
    </div>
    </> }
    { contentType=='button3' && <>
    <div className='rightDiv'>
      <h2 style={{width:'800px'}}>Вот ваши фигуры нарисованные на плоскости</h2>
      <DrawList products={products}></DrawList>
    </div>
    </> }
    { contentType!='button3' && <div><img style={{position:'absolute', right:'0', top:'82%', width:'400px', height:'200px'}} src="https://i.imgur.com/MRMl5iq.jpg" alt="" /></div>}
    </>
  )
}