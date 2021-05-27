$(document).ready(function(){
    $("section").append(`<img id="logo"class="d-block"src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1024px-International_Pok%C3%A9mon_logo.svg.png" alt="">`);
    
    for(let i = 1;i<=151;i++){
        $("section").append(`<img src="http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${i}.png">`)
    }
})

