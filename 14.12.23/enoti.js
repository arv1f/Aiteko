;
;
function apigenerate(data, enot) {
    fetch("https://visioncraftapi--vladalek05.repl.co/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    }).then(function (data) { return data.json(); }).then(function (body) {
        console.log(body);
        var image_url = body.images[0];
        var imgElement = document.createElement('img');
        imgElement.src = image_url;
        var imageElement = document.getElementById('image');
        imageElement.appendChild(imgElement);
        enotCache.saveData({ name: enot.name, age: enot.age, weight: enot.weight, image: image_url }); // Сохраняем данные о еноте в кэш
    });
}
;
var EnotCache = /** @class */ (function () {
    function EnotCache(storageKey) {
        this.storageKey = storageKey;
    }
    ;
    // Сохранение данных в localStorage
    EnotCache.prototype.saveData = function (data) {
        localStorage.setItem(this.storageKey, JSON.stringify(data));
    };
    ;
    // Получение данных из localStorage
    EnotCache.prototype.getData = function () {
        var data = localStorage.getItem(this.storageKey);
        return data ? JSON.parse(data) : null;
    };
    ;
    return EnotCache;
}());
;
// Использование
var enotCache = new EnotCache('enotData');
// Получение данных
var divElement = document.getElementById('textdiv');
var enots = enotCache.getData();
if (enots) {
    var TextEnot = 'Name: ' + enots.name + '. Age: ' + enots.age + '. Weight: ' + enots.weight + '.';
    divElement.innerText = TextEnot; // Выводит после перезагрузки страницы
    var imgElement = document.createElement('img');
    imgElement.src = enots.image;
    var imageElement = document.getElementById('image');
    imageElement.appendChild(imgElement);
}
function displayInputText() {
    var divElement = document.getElementById('textdiv');
    var inputElementName = document.getElementById('name');
    var inputElementAge = document.getElementById('age');
    var inputElementWeight = document.getElementById('weight');
    var enot = {
        name: inputElementName.value,
        weight: Number(inputElementAge.value),
        age: Number(inputElementWeight.value),
    };
    var apiKey = '1fcdf54c-559b-40e0-a8ff-2f101e3cc449';
    var loras = { "3DMM_V12": 1, "GrayClay_V1.5.5": 2, "eye_size_slider_v1": 3, "age_slider_v20": 1, };
    var prompt = "Draw a beautiful cute animal raccoon by " +
        "<br> name " + enot.name +
        ", weight " + enot.weight +
        " kilogram, <br> and so old " + enot.name + ".;";
    var DataEnota = {
        model: "absolutereality_v1.8.1",
        sampler: "LMS",
        prompt: prompt,
        negative_prompt: '',
        image_count: 1,
        token: apiKey,
        cfg_scale: 5,
        steps: 20,
        loras: loras,
    };
    apigenerate(DataEnota, enot);
    var TextEnot = 'Name: ' + enot.name + '. Age: ' + enot.age + '. Weight: ' + enot.weight + '.';
    //let TextEnot: string = 'Name: '+inputElementName.value+'. Age: '+inputElementAge.value+'. Weight: '+inputElementWeight.value+'.';
    divElement.innerText = TextEnot;
}
var buttonElement = document.getElementById('mainButton');
buttonElement.addEventListener('click', displayInputText);
//npx tsc typescript-intro/src/enoti/enoti.ts
