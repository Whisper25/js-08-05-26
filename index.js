

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then((response)=>response.json())
// .then((data)=>{console.table(data)})
// .catch((err)=>{console.log(err)})
// .finally(()=>{console.log(111)});


// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then((response)=>response.json())
// .then((data)=>{console.log(data)})
// .catch((err)=>{console.log(err)})
// .finally(()=>{console.log(222)});


const limit=10;
const root = document.getElementById('root');
const container = document.createElement('div');
container.classList.add('container');
root.append(container);
fetch(`https://api.thecatapi.com/v1/images/search?limit=${limit}`)
.then((response)=>response.json())
.then((data)=>{
    console.table(data);

    const imgArray = data.map((element)=>{
        const img = document.createElement('img');
        img.src=element.url;
        img.classList.add('img');
        img.addEventListener('click', ()=>{
            const bigImgWrapper = document.createElement('div');
            bigImgWrapper.classList.add('bigImgWrapper');
            const bigImg = document.createElement('img');
            bigImg.src = element.url;
            const close = document.createElement('span');
            close.textContent='X'
            close.classList.add('close')
            bigImgWrapper.append(close,bigImg);
            root.append(bigImgWrapper);
            close.addEventListener('click', ()=>{
                bigImgWrapper.remove();
            })
        })
        return img;
    })
    container.append(...imgArray);
})
.catch((error)=>{
    console.log(error)
})