interface geometricShape {
    shape : 'circle' | 'square',
    aOrD : number,
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
    let aOrD : number = Number(prompt('lenght or Radius', '5'));
    let backgroundColor : string|null = prompt('background color','black');
    let cOrS : boolean = Boolean(prompt('If your shape is a circle enter false if your shape is a square enter true.', 'false'));
    if(cOrS){
        name = 'square'+String(square)
        square+=1}
    else{name = 'circle'+String(circle)
        circle+=1}
    listShape.push({shape:shape, aOrD:aOrD, backgroundColor:backgroundColor, cOrS:cOrS, name:name} as geometricShape);
    getListShape();
}

function getListShape() : void {
    console.log(listShape)
}
