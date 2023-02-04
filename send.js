const form = document.querySelector('#form');
const fileInp = document.querySelector('#inpFile')
const clientID = '741835748342883';

form.onsubmit = (e) =>{
     e.preventDefault();
    const data = new FormData();
    data.append('image',fileInp.files[0]);
    fetch('https://api.imgur.com/3/image',{
        method:'POST',
        body:data,
        headers:{
            Authorization:`Client-ID ${clientID}`
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let div = document.createElement("div");
            div.className = "imgLink"
            div.innerHTML = `<a href='${data.data.link}'>link to image</a>`
            form.append(div);
        })
        .catch(error => console.log(error))
}