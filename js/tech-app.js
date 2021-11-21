const tech_left = document.querySelector(".tech-left");
const tech_img = document.querySelector(".tech-img");


let data = {
    fetchData(index){
        fetch(
            '../data/data.json'
        )
        .then((response) => response.json())
        .then((data) => this.getData(data, index))
    },
    getData(data, index){
        tech_img.src = data.technology[index].images.landscape;

        tech_left.innerHTML = createContent(data.technology, index);
    }

}

data.fetchData(0);


function createContent(data, index){
    let dotcontent = '';

    for(let i = 0;i < data.length;i++){
        if(i == index){
            dotcontent += `<div class="column-dot dot-col-active" onclick="data.fetchData(${i})">${i+1}</div>`;
        }else{
            dotcontent += `<div class="column-dot" onclick="data.fetchData(${i})">${i+1}</div>`;
        }
    }

    return `
    <div class="tech-column"> 
        ${dotcontent}
    </div>
    <div class="tech-content">
        <h5>THE TERMINOLOGY…</h5>
        <h1>${data[index].name}</h1>
        <p>${data[index].description}</p>
    </div>
    `;
}
