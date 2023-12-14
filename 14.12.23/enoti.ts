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


function displayInputText() {
    let inputElementName = <HTMLInputElement>document.getElementById('name');
    let inputElementAge = <HTMLInputElement>document.getElementById('age');
    let inputElementWeight = <HTMLInputElement>document.getElementById('weight');

    const enot: Enot = {
        name: inputElementName.value,
    }

    if (inputElementAge.value){enot.age=Number(inputElementAge.value)}
    if (inputElementWeight.value){enot.weight=Number(inputElementWeight.value)}


    let divElement = <HTMLDivElement>document.getElementById('textdiv');
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
