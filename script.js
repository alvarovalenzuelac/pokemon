$(document).ready(function(){
    $("gallery").append(`<img id="logo"class="d-block"src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1024px-International_Pok%C3%A9mon_logo.svg.png" alt="">`);
    
    for(let i = 1;i<=151;i++){
        $("gallery").append(`<img id="${i}" src="http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${i}.png">`)
    }

    $("gallery>img").on("click",function(){
        let img_src = $(this).attr("src")
        
        $.get(`http://pokeapi.co/api/v2/pokemon/${$(this).attr("id")}`,function(data){

            $("section").removeClass("d-none")

            //console.log("back_default",data.sprites.back_default)
            //console.log("back_female",data.sprites.back_female)
            //console.log("back_shiny",data.sprites.back_shiny)
            //console.log("back_shiny_female",data.sprites.back_shiny_female)
            //console.log("front_default",data.sprites.front_default)
            //console.log("front_female",data.sprites.front_female)
            //console.log("front_shiny",data.sprites.front_shiny)
            //console.log("front_shiny_female",data.sprites.front_shiny_female)
            let lista_tipos = ""
            for(let i = 0;i<data.types;i++){
                lista_tipos += `<li class="h5 text-capitalize">${data.types[i].type.name}</li>`//tipo
            }
            imagenes_default = [data.sprites.front_default,data.sprites.back_default]
            imagenes_shiny = [data.sprites.front_shiny,data.sprites.back_shiny]
            
            let contador = 1;


            setInterval(function() {
                if(contador % 2 == 0){
                    $("#default").attr("src",imagenes_default[0])
                    $("#shiny").attr("src",imagenes_default[1])
                }else{
                    $("#default").attr("src",imagenes_shiny[0])
                    $("#shiny").attr("src",imagenes_shiny[1])
                }
                contador +=1
            }, 4000);

            $("section").html(`
            <p class="h2 text-capitalize">${data.name}</p>
            <img id="default" class="" src="${data.sprites.front_default}" data="${data.sprites.back_default}" alt="">
            <img id="shiny" src="${data.sprites.back_default}" data="${data.sprites.back_shiny}" alt="">

            
            <p class="h4">Types</p>
            <ul>
                ${lista_tipos}
            </ul>
            <p class="h4">Altura</p>
            <p class="h5">${data.height}</p>
            <p class="h4">Peso</p>
            <p class="h5">${data.weight}</p>`)


        })
    })
})

