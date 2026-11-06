fetch('https://dummyjson.com/recipes')
.then(res => res.json())
.then((data)=>{
    console.log(data);
    recfunction(data.recipes);
});

function recfunction(data){
    let main=document.querySelector("#main");
    for(i=0; i<data.length; i++){
        let div=document.createElement("div");
        div.classList.add("col-md-4");
        let card=document.createElement("div");
        card.classList.add("card");
        card.innerHTML=`<img class="card-img-top" src="${(data[i].image)}">
                        <h3>${data[i].name}</h3>
                        <div class="categ">
                        <h5 class="type"> <i class="fa-solid fa-bowl-rice"></i>${data[i].cuisine}</h5>
                        <h5><i class="fa-regular fa-alarm-clock"></i> ${data[i].cookTimeMinutes} Minutes</h5>
                        </div>
                        <div class="diff">
                        <span class="badge text-bg-secondary">${data[i].tags[0]}</span>
                        <h6><i class="fa-solid fa-gauge-simple"></i> ${data[i].difficulty}</h6>
                        </div>
                        `;
        div.appendChild(card);
        main.appendChild(div);
    }
     
}