const crew_img = document.querySelector(".crew-img");
const crew_left = document.querySelector(".crew-left");

let data = {
    fetchData(index){
        fetch(
            '../data/data.json'
        )
        .then((response) => response.json())
        .then((data) =>  this.getData(data, index))
    },
    getData(data, index){
        crew_img.src = data.crew[index].images.webp;

        crew_left.innerHTML = createLeftBox(data.crew, index);
    }
}

window.addEventListener('load', function(){
    data.fetchData(0);
});


function createLeftBox(data, index){
    let dot_content = '';
    for(let i = 0;i < data.length; i++){
        if(i == index){
            dot_content += `<div class="dot active-dot" onclick="data.fetchData(${i})"></div>`;
        }else{
            dot_content += `<div class="dot" onclick="data.fetchData(${i})"></div>`;
        }
    }
    return `
    <h4>${data[index].role}</h4>
    <h1>${data[index].name}</h1>
    <p>${data[index].bio}</p>
    <div class="dots-cont">
        ${dot_content}
    </div>
    `;
}




{/* <h4>Commander</h4>
<h1>Douglas Hurley</h1>
<p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
<div class="dots-cont">
    <div class="dot active-dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
</div> */}
