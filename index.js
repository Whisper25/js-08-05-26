const currencies = [
  { value: "UAH", text: "Гривня (UAH)" },
  { value: "USD", text: "Долар (USD)" },
  { value: "EUR", text: "Євро (EUR)" },
  { value: "PLN", text: "Злотий (PLN)" },
  { value: "GBP", text: "Фунт (GBP)" },
  { value: "JPY", text: "Єна (JPY)" },
];
const root = document.getElementById("root");
const convertSection = document.createElement("section");
convertSection.classList.add("convertSection");
const h1 = document.createElement("h1");
h1.textContent = "Конвертер валют";
const convertForm = document.createElement("form");
convertForm.classList.add("convertForm");
const convertInput = document.createElement("input");
convertInput.type = "number";
convertInput.placeholder = "Введіть суму";
convertInput.min = 1;
const selectDiv = document.createElement("div");
selectDiv.classList.add("selectDiv");
function createSelect() {
  const select = document.createElement("select");
  const options = currencies.map((currency) => {
    const option = document.createElement("option");
    option.value = currency.value;
    option.textContent = currency.text;
    return option;
  });
  select.append(...options);
  return select;
}
const selectFrom = createSelect();
const selectTo = createSelect();
selectFrom.value = "USD";
selectTo.value = "UAH";
const submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.textContent = "Конвертувати";
submitButton.classList.add("submitButton");
const result = document.createElement("div");
const h3 = document.createElement("h3");
h3.textContent = "Результат зʼявиться тут";

result.append(h3);
selectDiv.append(selectFrom, selectTo);
convertForm.append(convertInput, selectDiv, submitButton);
convertSection.append(h1, convertForm, result);
root.append(convertSection);


//logic
//1 - написати функцію, яка робить запит до стороннього ресурсу на отримання курсу потрібної нам валюти
//2 - обробляємо проміс 
//3 - написати функцію конвертації
//4 - обробляти сабмит на формі
// https://open.er-api.com/v6/latest/USD
