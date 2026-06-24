const str1 = "Cat and Dog And cAt";
console.log(str1);
console.log(str1.length);
console.log(str1.charAt(2));

console.log(str1.includes("and"));

const firstLetter = str1.charAt(0);
console.log(firstLetter);

console.log(str1.indexOf("and"));
console.log(str1.lastIndexOf("cat"));

const lastLetter = console.log(str1.at(-1));
console.log(lastLetter);

const firstLetterCode = console.log(str1.charCodeAt(0));
console.log(firstLetterCode);

// console.log(str1.toUpperCase());

const str1Uppercase = str1.toUpperCase();
console.log(str1Uppercase);

if (str1 === str1Uppercase) {
  console.log("equal");
} else {
  console.log("not equal");
}
if (str1.toLowerCase() === str1Uppercase) {
  console.log("equal");
} else {
  console.log("not equal");
}
//
const username='bRad';
const UserNameTrim = username.trim().toLowerCase();
console.log(UserNameTrim);
const firstLetterUsername = UserNameTrim.charAt(0).toUpperCase();
console.log(firstLetterUsername);
const lastLetters=UserNameTrim.slice(1)
console.log(lastLetters);
const FinalUsername = firstLetterUsername+lastLetters;
console.log(FinalUsername);

while(true){
  const userNameVariable = prompt();
  const firstNum=userNameVariable.trim().charCodeAt(0);
 if(firstNum<48 || firstNum>57){
  break;
}
}

const numbers=[1,5,3,2,9,8,7,5];
const partArray = numbers.slice(2,5);
console.log(numbers);
console.log(partArray);

const str2= "qwertyjdjdjdj";
const partStr2=str2.slice(4,9);
console.log(str2);
console.log(partStr2);
const partStr3=str2.substring(9,4);
console.log(partStr3);


const fileName = 'title.qwerty.txt';
const posLastPoint = fileName.trim().lastIndexOf('.');
const format = fileName.trim().slice(posLastPoint+1);
switch(format){
  case 'txt':
  case 'doc':
    console.log('text');
    break;
  case 'jpg':  
  case "png":
    console.log('photo');
    break;
  case 'exe':
    console.log('installation');
    break;
  case 'html':
  case 'css':
  case 'js':
    console.log('code');
    break;
  default:
    console.log('unknown format');
    break;
}
console.log(format.repeat(5));
console.log(format.split(''));
console.log(format.split());
console.log(format.split('x'));
console.log(format.padStart(7, '.'));
console.log(format.padEnd(7, '-'));
