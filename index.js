const currencies = [
    { value: 'UAH', text: 'Гривня (UAH)' },
    { value: 'USD', text: 'Долар (USD)' },
    { value: 'EUR', text: 'Євро (EUR)' },
    { value: 'PLN', text: 'Злотий (PLN)' },
    { value: 'GBP', text: 'Фунт (GBP)' },
    { value: 'JPY', text: 'Єна (JPY)' },
  ];
const root = document.getElementById('root');
const convertSection = document.createElement('section');
convertSection.classList.add('convertSection');
const h1 = document.createElement('h1');
h1.textContent='Конвертер валют';



convertSection.append(h1);
root.append(convertSection);