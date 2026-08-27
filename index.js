
// const random = Math.random();
// const myPromise = new Promise
// ((resolve, reject)=>{
//     if(random>0.5){
//         resolve(`All good `+random);
//     } else{
//         reject(`Error`);
//     }
// });
// myPromise
//     .then((response)=>{
//         console.log(response);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
//     .finally(()=>{
//         console.log('finally');
//     });

// const root = document.getElementById('root');
// function loadImage(path, alt){
//     const image = document.createElement('img');
//     image.src = path;
    
//     return new Promise((resolve, reject)=>{
//         image.addEventListener('load', ()=>{
//             image.alt = alt;
//             resolve(image);
//         })
//         image.addEventListener('error', ()=>{
//             reject(new Error(`invalid path`));
//         })
//     })
// }

// const path = '';
// const alt = 'sea';
// loadImage(path, alt)
//     .then((pic)=>{root.append(pic)})
//     .catch((err)=>console.log(err.message));


// const user = {
//     login:'fred',
//     emai:'fredbear@gmail.com',
//     age:23,
//     isMale:true,
//     sayHi(){
//         return 'hi, my login is '+this.login;
//     }
//     ,
//     hobbies:['sport', 'game'],
//     address:{
//         town:'Zp',
//         street:'Qwerty'
//     },
//     property:undefined,
//     description:null
// }
// console.log(user.sayHi());

// const userInJson = JSON.stringify(user);
// console.log(userInJson)

fetch('https://jsonplaceholder.typicode.com/posts')
.then((response)=>response.json())
.then((data)=>{console.table(data)})
.catch((err)=>{console.log(err)})
