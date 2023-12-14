var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var EnotCache = /** @class */ (function () {
    function EnotCache(storageKey) {
        this.storageKey = storageKey;
    }
    // Сохранение данных в localStorage
    EnotCache.prototype.saveData = function (data) {
        localStorage.setItem(this.storageKey, JSON.stringify(data));
    };
    // Получение данных из localStorage
    EnotCache.prototype.getData = function () {
        var data = localStorage.getItem(this.storageKey);
        return data ? JSON.parse(data) : null;
    };
    return EnotCache;
}());
// Использование
var enotCache = new EnotCache('enotData');
// Получение данных
// Выводит после перезагрузки страницы
var divElement = document.getElementById('textdiv');
enot = enotCache.getData();
var TextEnot = 'Name: ' + enot.name + '. Age: ' + enot.age + '. Weight: ' + enot.weight + '.';
divElement.innerText = TextEnot;
function displayInputText() {
    var divElement = document.getElementById('textdiv');
    var inputElementName = document.getElementById('name');
    var inputElementAge = document.getElementById('age');
    var inputElementWeight = document.getElementById('weight');
    var enot = {
        name: inputElementName.value,
    };
    if (inputElementAge.value) {
        enot.age = Number(inputElementAge.value);
    }
    if (inputElementWeight.value) {
        enot.weight = Number(inputElementWeight.value);
    }
    enotCache.saveData({ name: enot.name, age: enot.age, weight: enot.weight }); // Сохраняем данные о еноте в кэш
    var TextEnot = 'Name: ' + enot.name + '. Age: ' + enot.age + '. Weight: ' + enot.weight + '.';
    //let TextEnot: string = 'Name: '+inputElementName.value+'. Age: '+inputElementAge.value+'. Weight: '+inputElementWeight.value+'.';
    divElement.innerText = TextEnot;
    //Photo:
    function fetchImageFromText(text) {
        return __awaiter(this, void 0, void 0, function () {
            var serverUrl, response, data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        serverUrl = 'https://your-server.com/api';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, fetch(serverUrl, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ text: text }) // Текст, который нужно отправить
                            })];
                    case 2:
                        response = _a.sent();
                        // Проверяем, успешно ли выполнен запрос
                        if (!response.ok) {
                            throw new Error("HTTP error! status: ".concat(response.status));
                        }
                        return [4 /*yield*/, response.json()];
                    case 3:
                        data = _a.sent();
                        // Возвращаем URL изображения
                        return [2 /*return*/, data.imageUrl];
                    case 4:
                        error_1 = _a.sent();
                        console.error('Ошибка:', error_1);
                        return [2 /*return*/, ''];
                    case 5: return [2 /*return*/];
                }
            });
        });
    }
}
var buttonElement = document.getElementById('mainButton');
buttonElement.addEventListener('click', displayInputText);
//npx tsc typescript-intro/src/enoti.ts