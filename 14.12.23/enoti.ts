interface Enot {//    Создаем тип JSON описывающий нашего будущего енота
    name: string;
    age:number;
    weight: number;
    prompt?: string;
    image?: string;
};
interface Data {//      Создаем тип JSON элемента, который по API будем отсылать на сервер
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
let storageKey : string;
function saveData(data: Enot): void {               // Функция для сохранения данных в кеш
    localStorage.setItem(storageKey, JSON.stringify(data));
};

function getData(): Enot | null {               // Функция для взятия данных из кеша
    const data = localStorage.getItem(storageKey);
    return data ? JSON.parse(data) : null;
};


let divElement = <HTMLDivElement>document.getElementById('textdiv');
let enots=getData();
if (enots){                                 //          ЗАсовываем данные из кеша в сайт
    console.log(enots);
let TextEnot: string = 'Name: '+enots.name+'. Age: '+enots.age+'. Weight: '+enots.weight+'.';
divElement.innerText = TextEnot;// Выводит после перезагрузки страницы
const imgElement = document.createElement('img');
imgElement.src = String(enots.image);
let imageElement = <HTMLDivElement>document.getElementById('image');
imageElement.appendChild(imgElement);
}

function main() {

    let inputElementName = <HTMLInputElement>document.getElementById('name');
    let inputElementAge = <HTMLInputElement>document.getElementById('age');             //Подключаем элементы сайта
    let inputElementWeight = <HTMLInputElement>document.getElementById('weight');


    let apiKey='1fcdf54c-559b-40e0-a8ff-2f101e3cc449';
    const loras = { "3DMM_V12": 1, "GrayClay_V1.5.5": 2, "eye_size_slider_v1": 3, "age_slider_v20": 1,};
    const prompt = "Draw a beautiful cute animal raccoon by "+
        "<br> name "+<HTMLInputElement>document.getElementById('name')+
        ", weight "+<HTMLInputElement>document.getElementById('weight')+
        " kilogram, <br> and so old "+<HTMLInputElement>document.getElementById('age')+".;"

    const enot: Enot = {
            name: inputElementName.value,
            weight: Number(inputElementAge.value),
            age: Number(inputElementWeight.value),
            prompt: prompt,
        };

    const DataEnota:Data={                  // API: Данные которые отправятся на сервер
        model: "absolutereality_v1.8.1",
        sampler: "LMS",
        prompt:prompt,
        negative_prompt: '',
        image_count: 1,
        token: apiKey,
        cfg_scale: 5,
        steps: 20,
        loras: loras,
    };
    fetch("https://visioncraftapi--vladalek05.repl.co/generate",{           // API: Отправляем данные на сервер и возвращаем картинку
            method:"POST",
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify(DataEnota)
        }).then(data=>{return data.json();}).then(
            body=>{
                const image_url: string = body.images[0];
                const imgElement = document.createElement('img');
                imgElement.src = image_url
                let imageElement = <HTMLDivElement>document.getElementById('image');
                imageElement.appendChild(imgElement);
                saveData({ name: enot.name, weight: enot.weight , age: enot.age, image: image_url});// Сохраняем данные о еноте в кэш
                enot.image=image_url;
            });
}

let buttonElement = <HTMLButtonElement>document.getElementById('mainButton');
buttonElement.addEventListener('click', main);// Запускаем все
//npx tsc typescript-intro/src/enoti/enoti2.ts
