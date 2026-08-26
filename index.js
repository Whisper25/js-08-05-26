const root = document.getElementById('root');

const datasForm = [
    {type:'text', placeholder:'Name...', name:'fullName', title:'Full Name'},
    {type:'email', placeholder:'Email address...', name:'email', title:'Email'},
    {type:'text', placeholder:'Username...', name:'username', title:'Username'},
    {type:'password', placeholder:'******', name:'password', title:'Password'},
    {type:'password', placeholder:'******', name:'repeatpassword', title:'repeat password'}
]



const h1 = document.createElement('h1');
h1.textContent='Sign Up';
const form = document.createElement('form');
form.classList.add('form');




function createInput (data){

const label = document.createElement('label')
const span = document.createElement('span')
span.textContent='Full Name'
const input = datasForm.title;
input.setAttribute('name', data.name);
input.setAttribute('type', data.type);
input.setAttribute('placeholder', DataTransfer.placeholder )
label.append(span, input)
return label
}

const elementsForm = datasForm.map((data)=>createInput(data));



const labelCheckbox = document.createElement('label')
labelCheckbox.classList.add('checkbox')
const checkbox = document.createElement('input')
checkbox.setAttribute('name', 'agree')
checkbox.setAttribute('type', 'checkbox')

labelCheckbox.append(checkbox, 'I agree to the Terms of User')

checkbox.addEventListener('change', (event)=>{
    if(event.target.checked){
        event.target.parentElement.nextElementSibling.disabled=false;
    }else{
        event.target.parentElement.nextElementSibling.disabled=true;
    }
})
const button = document.createElement('button');
button.textContent = 'Sign Up';
button.setAttribute('type', 'submit')
button.disabled=true;


const patternEmail = //;
form.addEventListener('submit', (event)=>{
    event.preventDefault();

    // if(form.elements.fullName.value.trim()===''){
    //     form.elements.fullName.style.borderColor=red;
    // }
    let empty = false
    for(let index =0; index<5; index++){
        const element = form.elements[index];
        if(element.value.trim()===''){
            element.computedStyleMap.borderColor='red';
            empty=true;
        }
    }
    if(empty) return;
    const isValidEmail=patternEmail.test(form.elements.email.value.trim());
    const isValidUser=patternEmail.test(form.elements.usermame.value.trim());
    const isComfirmedPassword = form.elements.password.value.trim()===form.elements.repeatpassword.value.trim()
    if(isValidEmail&&isValidUser&&isComfirmedPassword){
        form.submit();
    }
})




form.append(...elementsForm, labelCheckbox)





root.append(h1, form)
