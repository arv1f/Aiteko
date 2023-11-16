const inputx = document.getElementById("input")
const addx = document.getElementById("add")
const outputx = document.getElementById("output")
s1=function(parametr){
return "Я не знаю никакого "+parametr
}
s2=function(parametr,numberr){
    d=Math.floor(Math.random()*100)/100
    if (numberr>=d){
        return textx="Я знаю некое "+ parametr
    }
    else{
        textx2=s1(parametr)
        return textx="Имя фукнции 1, а ты знаешь «S»? "+textx2
    }
}
addx.onclick=function(){
    const parametr=inputx.value
    const len = parametr.length
    k=0
    for(let x=0;x<len;x++){
        if (len-x>1){
        if((parametr[x]+parametr[x+1])=="0."||(parametr[x]+parametr[x+1])=="1."){k=1}
    }
    else{if(parametr[x]=="0."||parametr[x]=="1."){k=1}}
}
    if (k){//("0"in parametr ||"1"in parametr){
    numberr=""
    for (let x = 0;x<len;x++){
        
        if(parametr[x] in["0","1","2","3","4","5","6","7","8","9"]){
            numberr+=parametr.substring(x)
            numberr=Number(numberr)
            
            break
        }
    }
        textx=s2(parametr,numberr)
        outputx.textContent=textx

    }
    else{
        textx=s1(parametr)
        outputx.textContent=textx
    }
}
