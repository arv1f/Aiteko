
interface geometricShape {
    shape : 'circle' | 'square',
    lenght : number,
    backgroundColor : string,
    cOrS : boolean,
    readonly name : string
}

let listShape : geometricShape[]=[];
let circle : number = 0;
let square : number = 0;

function setShape() : void {
    let name : string = 'shape0';
    let shape : string|null = prompt('shape','circle');
    let lenght : number = Number(prompt('lenght or Radius', '5'));
    let backgroundColor : string|null = prompt('background color','black');
    let cOrS : boolean = Boolean(prompt('If your shape is a circle enter false if your shape is a square enter true.', 'false'));
    if(cOrS){
        name = 'square'+String(square)
        square+=1}
    else{name = 'circle'+String(circle)
        circle+=1}
    listShape.push({shape:shape, lenght:lenght, backgroundColor:backgroundColor, cOrS:cOrS, name:name} as geometricShape);
    getListShape();
}

function getListShape() : void {
    listShape.forEach(element => {
        console.log(element);
    });
}

function createElementInListShape() : void {
    getListShape();
    let object : number = Number(prompt('input index Object', '0'));
    if (object>=0 && object<=listShape.length-1){
        let element : string|null = prompt('input name Element: lenght/color','color');
        if (element){console.log(element)}
            if (element=='lenght'){
                let data : number = Number(prompt('what to replace','3'));
                if (data){listShape[object].lenght=data}
            }
                else{if (element=='color'){
                    let data : string|null = prompt('what to replace','white');
                    if (data){listShape[object].backgroundColor=data}
                }}
        getListShape();
    }
}
/*
npx tsc typescript-intro/src/02.ts
*/
