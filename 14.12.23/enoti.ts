interface Enot {
    name: string;
    age?:number;
    weight?: number;
    photo?: string;
}
/*const myButton = document.getElementById("mainButton") as HTMLButtonElement;
const enotName = document.getElementById("name") as HTMLInputElement;
const enotAge = document.getElementById("age") as HTMLInputElement;
const enotWeight = document.getElementById("weight") as HTMLInputElement;
const textdiv = document.getElementById("textdiv") as HTMLTextAreaElement;*/



interface Enot {
    name: string;
    age?: number;
    weight?: number;
    photo?: string;
}

class EnotCache {
    private storageKey: string;

    constructor(storageKey: string) {
        this.storageKey = storageKey;
    }

    // Сохранение данных в localStorage
    saveData(data: Enot): void {
        localStorage.setItem(this.storageKey, JSON.stringify(data));
    }

    // Получение данных из localStorage
    getData(): Enot | null {
        const data = localStorage.getItem(this.storageKey);
        return data ? JSON.parse(data) : null;
    }
}

// Использование
const enotCache = new EnotCache('enotData');

// Получение данных
let divElement = <HTMLDivElement>document.getElementById('textdiv');
enot=enotCache.getData();
let TextEnot: string = 'Name: '+enot.name+'. Age: '+enot.age+'. Weight: '+enot.weight+'.';
divElement.innerText = TextEnot;// Выводит кэш енота после перезагрузки страницы


function displayInputText() {
    let divElement = <HTMLDivElement>document.getElementById('textdiv');

    let inputElementName = <HTMLInputElement>document.getElementById('name');
    let inputElementAge = <HTMLInputElement>document.getElementById('age');
    let inputElementWeight = <HTMLInputElement>document.getElementById('weight');

    const enot: Enot = {
        name: inputElementName.value,
    }
    if (inputElementAge.value){enot.age=Number(inputElementAge.value)}
    if (inputElementWeight.value){enot.weight=Number(inputElementWeight.value)}

    enotCache.saveData({ name: enot.name, age: enot.age, weight: enot.weight });// Сохраняем данные о еноте в кэш

    let TextEnot: string = 'Name: '+enot.name+'. Age: '+enot.age+'. Weight: '+enot.weight+'.';
    //let TextEnot: string = 'Name: '+inputElementName.value+'. Age: '+inputElementAge.value+'. Weight: '+inputElementWeight.value+'.';
    divElement.innerText = TextEnot;



    //Photo:


    async function fetchImageFromText(text: string): Promise<string> {
        // URL сервера
        const serverUrl = 'https://your-server.com/api';
    
        try {
            // Отправляем запрос на сервер
            const response = await fetch(serverUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ text: text })  // Текст, который нужно отправить
            });
    
            // Проверяем, успешно ли выполнен запрос
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            // Получаем ответ от сервера
            const data = await response.json();
    
            // Возвращаем URL изображения
            return data.imageUrl;
        } catch (error) {
            console.error('Ошибка:', error);
            return '';
        }
    }
    






}

let buttonElement = <HTMLButtonElement>document.getElementById('mainButton');
buttonElement.addEventListener('click', displayInputText);











//npx tsc typescript-intro/src/enoti.ts
