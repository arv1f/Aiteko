;
;
var storageKey;
function saveData(data) {
    localStorage.setItem(storageKey, JSON.stringify(data));
}
;
function getData() {
    var data = localStorage.getItem(storageKey);
    return data ? JSON.parse(data) : null;
}
;
var divElement = document.getElementById('textdiv');
var enots = getData();
if (enots) { //          ЗАсовываем данные из кеша в сайт
    var TextEnot = 'Name: ' + enots.name + '. Age: ' + enots.age + '. Weight: ' + enots.weight + '.';
    divElement.innerText = TextEnot; // Выводит после перезагрузки страницы
    var imgElement = document.createElement('img');
    imgElement.src = String(enots.image);
    var imageElement = document.getElementById('image');
    imageElement.appendChild(imgElement);
}
function fetchGet(url, id) {
    var elements = document.getElementById(id);
    fetch(url, {
        method: "GET",
    }).then(function (data) { return data.json(); }).then(function (body) {
        body.forEach(function (element) {
            var optionElement = document.createElement('option');
            optionElement.value = element;
            optionElement.text = element;
            elements.appendChild(optionElement);
        });
    });
    return elements;
}
;
var models = fetchGet("https://visioncraftapi--vladalek05.repl.co/models", 'models');
var samplers = fetchGet("https://visioncraftapi--vladalek05.repl.co/samplers", 'samplers');
//let lorass = fetchGet("https://visioncraftapi--vladalek05.repl.co/loras",'loras');
function main() {
    var inputElementName = document.getElementById('name');
    var inputElementAge = document.getElementById('age'); //Подключаем элементы сайта
    var inputElementWeight = document.getElementById('weight');
    var cfg_scale = document.getElementById('cfg_scale'); //0-20
    var steps = document.getElementById('steps'); //1-50
    var apiKey = '1fcdf54c-559b-40e0-a8ff-2f101e3cc449';
    var loras = { "3DMM_V12": 1, "GrayClay_V1.5.5": 2, "eye_size_slider_v1": 3, "age_slider_v20": 1, };
    var prompt = "Draw a beautiful cute animal raccoon by " +
        "<br> name " + document.getElementById('name') +
        ", weight " + document.getElementById('weight') +
        " kilogram, <br> and so old " + document.getElementById('age') + ".;";
    var enot = {
        name: inputElementName.value,
        weight: Number(inputElementAge.value),
        age: Number(inputElementWeight.value),
        prompt: prompt,
    };
    var DataEnota = {
        model: String(models.value),
        sampler: String(samplers.value),
        prompt: prompt,
        negative_prompt: '',
        image_count: 1,
        token: apiKey,
        cfg_scale: Number(cfg_scale),
        steps: Number(steps),
        loras: loras,
    };
    fetch("https://visioncraftapi--vladalek05.repl.co/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(DataEnota)
    }).then(function (data) { return data.json(); }).then(function (body) {
        var _a;
        var image_url = body.images[0];
        var imgElement = document.createElement('img');
        imgElement.src = image_url;
        var imageElement = document.getElementById('image');
        var imgElements = imageElement.getElementsByTagName('img');
        while (imgElements.length > 0) {
            (_a = imgElements[0].parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(imgElements[0]);
        }
        imageElement.appendChild(imgElement);
        saveData({ name: enot.name, weight: enot.weight, age: enot.age, image: image_url }); // Сохраняем данные о еноте в кэш
        enot.image = image_url;
    });
}
;
var buttonElement = document.getElementById('mainButton');
buttonElement.addEventListener('click', main); // Запускаем все
//npx tsc typescript-intro/src/enoti/enoti2.ts
