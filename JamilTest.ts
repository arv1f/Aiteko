function Pushall(): void {
    let temp: Developer = {level:'jun',login:'fsdb',skills:['fds','vcxbf']};
    if(temp.login!=''){
        listDev.push(temp);
        let temp2: Developer = {level:'jun',login:'fsdcxvdbcasdb',skills:['fds','vcxbf']};
        listDev.push(temp2)
    }
}

type Level = 'jun' | 'mid' | 'sen';
interface Developer {
    login: string,
    skills: string[],
    level: Level,
}
let listDev: Developer[]=[];


function inputDev(): Developer {
    //let temp: Developer;
    let tempLog : any = prompt('login','gfdads');
    if (typeof(tempLog)==='string'){
        let tempskills :any = prompt('skills','gdfgddf, gfd');
        if (typeof(tempskills)==='string'){
            let tempSkills = tempskills.split(', ');
            let templevel :any = prompt('Level','mid');
                if (templevel==='jun'){let temp: Developer = {login:tempLog, skills:tempSkills, level:'jun'};
                return temp}
                if (templevel==='mid'){let temp: Developer = {login:tempLog, skills:tempSkills, level:'mid'};
                return temp}
                if (templevel==='sen'){let temp: Developer = {login:tempLog, skills:tempSkills, level:'jun'};
                return temp}
        }
    }
    let a: Developer = {login:'', skills:[], level:'mid'}
    return a;
}

function Push(): void {
    let temp: Developer = inputDev()
    if(temp.login!=''){
        listDev.push(temp);
        Print();
    }
}
Pushall()

function Print(): void {
    let i:number = 0;
    listDev.forEach(element => {
        if(element!=undefined && element!=null){
        console.log(String(i)+'.'+element.login, element);
        i+=1;}
    });
}

function Delete(): void {
    if (listDev.length>0){
        Print();
        let numbers: any = prompt('Номер который надо удалить', '0');
        if (typeof(numbers)==='string'){
            if (parseInt(numbers)>=0 && parseInt(numbers)<=(listDev.length-1)){
                listDev = listDev.splice(parseInt(numbers),1)
                Print()
            }
        }
    }
}

function Remove(): void {
    if (listDev.length>0){
        Print();
        let numbers: any = prompt('Номер элемента у которого надо заменить Level', '0');
        if (typeof(numbers)==='string'){
            if (parseInt(numbers)>=0 && parseInt(numbers)<=(listDev.length-1)){
                let newLewel: any = prompt('На что заменить?', 'sen');
                if (listDev[numbers].level!=newLewel){listDev[numbers].level=newLewel
                Print()
                }
                
            }
        }        
    }
}
