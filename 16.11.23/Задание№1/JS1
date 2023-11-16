const textx = document.getElementById("textx")
const chet = document.getElementById("chet")
const cheto = document.getElementById("cheto")
const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
chett=0
sumstrok=0
let mass=[[]*100]
d=0
for(let x=0;x<100;x++){
    mass[x]=Math.floor(Math.random()*100)
    if (mass[x]%2==0){chett+=1}
}
d=0
for (let x=0;x<10;x++){
    for(let y=0;y<10;y++){
        d+=mass[x*10+y]
        
    }
    if(d>100){sumstrok+=1}
    console.log(d,x)
    d=0
}
massiv=mass
c=""
for (let x = 0; x < 100; x++){
    if (massiv[x]<10){
        if ((x+1)%10==0 && x>0){
            c+=String(massiv[x])+"    \n\n  "
        }
        else{
            c+=String(massiv[x])+'     '
        }
    }
    else{
        if ((x+1)%10==0 && x>0){
            c+=String(massiv[x])+"   \n\n  "
        }
        else{
            c+=String(massiv[x])+'    '
        }
    }
}
textx.textContent='  '+c
chet.textContent=chett
cheto.textContent=sumstrok
