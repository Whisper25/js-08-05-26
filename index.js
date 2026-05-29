const dayOfTheWeek = prompt('Enter a number of the day');

switch(dayOfTheWeek){
    case '1':
        alert('Monday');
        break;
        case '2':
            alert('Tuesday');
            break;
            case '3':
                alert('Wednesday');
                break;
                case '4':
                    alert('Thursday');
                    break;
                    case '5':
                        alert('Friday');
                        break;
                        case '6':
                            alert('Saturday');
                            break;
                            case '7':
                                alert('Sunday');
                                break;
                                default:
                                    alert('Incorrect number');
                                    break;
}                                

switch(dayOfTheWeek){
    case '1', '2', '3', '4', '5':
        alert('Workday');
        break;
        case '6', '7':
            alert('Weekend');
            break;
        
}                                


const UserInout1 = prompt('Enter first number');
const UserInout2 = prompt('Enter first number')

const number1 = Number(UserInout1);
const number2 = Number(UserInout2);

const operator = prompt('Enter operator: +, -, *, /, %');
switch (operator){
    case '+':{
        const result = number1 + number2;
        alert(number1 + '+' + number2 + '=' + result);
        break;
    }
    case '-':{
        const result = number1 - number2;
        alert(number1 + '-' + number2 + '=' + result);
        break;
    }
    case '/':{
        const result = number1 / number2;
        alert(number1 + '/' + number2 + '=' + result);
        break;
    }
    case '*':{
        const result = number1 * number2;
        alert(number1 + '*' + number2 + '=' + result);
        break;
    }
    case '%':{
        const result = number1 % number2;
        alert(number1 + '%' + number2 + '=' + result);
        break;
    }
    default:
        alert("operator doesn't exist");
        break;
}
