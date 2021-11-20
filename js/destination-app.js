
const dest_img = document.querySelector(".dest-img");
const dest_right = document.querySelector(".dest-right");

// async function getData(index = 0){
//     const response = await fetch('../data/data.json');
//     const data = await response.json();


//     dest_img.src = data.destinations[index].images.webp;
// }

let data = {
    fetchData(index){
        fetch(
            '../data/data.json'
        )
        .then((response) => response.json())
        .then((data) => this.getData(data,index));
    },
    getData(data,index){
        dest_img.src = data.destinations[index].images.webp;
        dest_right.innerHTML = secondNav(index) + createDestRight(data, index);
    }
}


window.addEventListener('load', function(){
    data.fetchData(0);
});

function createDestRight (data, index) {
    return `
        <h1>${data.destinations[index].name}</h1>
        <p>${data.destinations[index].description}</p>
        <div class="dest-bottom-box">
            <div class="bottom-left">
                <h5>AVG. DISTANCE</h5>
                <h3>${data.destinations[index].distance}</h3>
            </div>
            <div class="bottom-right">
                <h5>Est. TRAVEL TIME</h5>
                <h3>${data.destinations[index].travel}</h3>
            </div>
        </div>
    `;
}

function secondNav(index) {
    if(index == 0){
        return `
        <ul class="nav-2nd">
            <li class="moon active-2nd" onclick='data.fetchData(0)'>MOON</li>
            <li class="mars" onclick='data.fetchData(1)'>MARS</li>
            <li class="europa" onclick='data.fetchData(2)'>EUROPA</li>
            <li class="titan" onclick='data.fetchData(3)'>TITAN</li>
        </ul>`;
    }
    else if(index == 1){
        return `
        <ul class="nav-2nd">
        <li class="moon" onclick='data.fetchData(0)'>MOON</li>
        <li class="mars active-2nd" onclick='data.fetchData(1)'>MARS</li>
        <li class="europa" onclick='data.fetchData(2)'>EUROPA</li>
        <li class="titan" onclick='data.fetchData(3)'>TITAN</li>
        </ul>`;
    }
    else if(index == 2){
        return `
        <ul class="nav-2nd">
        <li class="moon" onclick='data.fetchData(0)'>MOON</li>
        <li class="mars" onclick='data.fetchData(1)'>MARS</li>
        <li class="europa  active-2nd" onclick='data.fetchData(2)'>EUROPA</li>
        <li class="titan" onclick='data.fetchData(3)'>TITAN</li>
        </ul>`;
    }
    else if(index == 3){
        return `
        <ul class="nav-2nd">
        <li class="moon" onclick='data.fetchData(0)'>MOON</li>
        <li class="mars" onclick='data.fetchData(1)'>MARS</li>
        <li class="europa" onclick='data.fetchData(2)'>EUROPA</li>
        <li class="titan active-2nd" onclick='data.fetchData(3)'>TITAN</li>
        </ul>`;
    }
}
