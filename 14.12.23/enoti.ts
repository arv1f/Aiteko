interface Enot {
    name: string;
    age:number;
    weight: number;
    image?: string;
    prompt?: string;
};
interface Data {
    model: string;
    sampler: string;
    prompt: string;
    negative_prompt: string;
    image_count: number;
    token: string;
    cfg_scale: number;
    steps: number;
    loras: {[key: string]: number;};
    image?: string;
};

function apigenerate(data:Data,enot:Enot) {
        

        fetch("https://visioncraftapi--vladalek05.repl.co/generate",{
            method:"POST",
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify(data)
        }).then(data=>{return data.json();}).then(
            body=>{
                console.log(body);
                const image_url: string = body.images[0];
                const imgElement = document.createElement('img');
                imgElement.src = image_url
                let imageElement = <HTMLDivElement>document.getElementById('image');
                imageElement.appendChild(imgElement);
                enotCache.saveData({ name: enot.name, age: enot.age, weight: enot.weight , image: image_url});// Сохраняем данные о еноте в кэш
            });
        
    };

class EnotCache {
    private storageKey: string;

    constructor(storageKey: string) {
        this.storageKey = storageKey;
    };
    // Сохранение данных в localStorage
    saveData(data: Enot): void {
        localStorage.setItem(this.storageKey, JSON.stringify(data));
    };
    // Получение данных из localStorage
    getData(): Enot | null {
        const data = localStorage.getItem(this.storageKey);
        return data ? JSON.parse(data) : null;
    };
};

// Использование
const enotCache = new EnotCache('enotData');
// Получение данных
let divElement = <HTMLDivElement>document.getElementById('textdiv');
let enots=enotCache.getData();
if (enots){
let TextEnot: string = 'Name: '+enots.name+'. Age: '+enots.age+'. Weight: '+enots.weight+'.';
divElement.innerText = TextEnot;// Выводит после перезагрузки страницы
const imgElement = document.createElement('img');
imgElement.src = enots.image
let imageElement = <HTMLDivElement>document.getElementById('image');
imageElement.appendChild(imgElement);
}

function displayInputText(): void {
    let divElement = <HTMLDivElement>document.getElementById('textdiv');
    

    let inputElementName = <HTMLInputElement>document.getElementById('name');
    let inputElementAge = <HTMLInputElement>document.getElementById('age');
    let inputElementWeight = <HTMLInputElement>document.getElementById('weight');

    const enot: Enot = {
        name: inputElementName.value,
        weight: Number(inputElementAge.value),
        age: Number(inputElementWeight.value),
    };
    
    let apiKey='1fcdf54c-559b-40e0-a8ff-2f101e3cc449';
    const loras = { "3DMM_V12": 1, "GrayClay_V1.5.5": 2, "eye_size_slider_v1": 3, "age_slider_v20": 1,};
    const prompt = "Draw a beautiful cute animal raccoon by "+
    "<br> name "+enot.name+
    ", weight "+enot.weight+
    " kilogram, <br> and so old "+enot.name+".;"
    const DataEnota:Data={
        model: "absolutereality_v1.8.1",
        sampler: "LMS",
        prompt:prompt,
        negative_prompt: '',
        image_count: 1,
        token: apiKey,
        cfg_scale: 5,
        steps: 20,
        loras: loras,
    }
    apigenerate(DataEnota,enot);
    

    

    let TextEnot: string = 'Name: '+enot.name+'. Age: '+enot.age+'. Weight: '+enot.weight+'.';
    //let TextEnot: string = 'Name: '+inputElementName.value+'. Age: '+inputElementAge.value+'. Weight: '+inputElementWeight.value+'.';
    divElement.innerText = TextEnot;

    


}

let buttonElement = <HTMLButtonElement>document.getElementById('mainButton');
buttonElement.addEventListener('click', displayInputText);



//npx tsc typescript-intro/src/enoti/enoti.ts
