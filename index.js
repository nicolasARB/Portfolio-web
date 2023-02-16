window.addEventListener('load', ()=>{
    const anim = [
{bottom: '0rem'}
    ]

    var card = document.querySelectorAll(".card");

    card.forEach(element =>{
        element.addEventListener("mouseenter", ()=>{
            console.log("mouseover");

           console.log(element);
        var body = element.querySelector(".card-body");
        var imagecover = element.querySelector("#imagecover");
        var buttons = element.querySelectorAll(".zindex")
        var elementitle = element.querySelector(".elementitle");
        elementitle.style = "opacity: 1;";
        buttons.forEach(but =>{
            but.style = "opacity: 1;";
        })
        //fix in some phone heights
        if(window.innerHeight >= 700 && window.innerHeight <= 750){
            imagecover.style = " background-color: rgba(111, 66, 193, 0.5); height: 108%";
            body.style = `opacity: 1; top: 100%;`; 
        }else if(window.innerHeight >= 675 && window.innerHeight <= 699){
            imagecover.style = " background-color: rgba(111, 66, 193, 0.5); height: 115%";
            body.style = `opacity: 1; top: 107%;`; 
        }else if(window.innerHeight >= 650 && window.innerHeight <= 674){
            imagecover.style = " background-color: rgba(111, 66, 193, 0.5); height: 120%";
            body.style = `opacity: 1; top: 115%;`; 
        }else if(window.innerHeight >= 600 && window.innerHeight <= 649){
            imagecover.style = " background-color: rgba(111, 66, 193, 0.5); height: 124%";
            body.style = `opacity: 1; top: 115%;`;
        } else if(window.innerHeight >= 550 && window.innerHeight <= 599){
            imagecover.style = " background-color: rgba(111, 66, 193, 0.5); height: 140%";
            body.style = `opacity: 1; top: 127%;`;
        }else{      
            body.style = `opacity: 1; top: 100%;`; 
             imagecover.style = " background-color: rgba(111, 66, 193, 0.5); height: 100%";
    }


        })
        element.addEventListener("mouseleave", ()=>{
            console.log("mouseout");
            var body = element.querySelector(".card-body");
            var imagecover = element.querySelector("#imagecover");
            imagecover.style = "background-color: rgba(111, 66, 193, 0.5); height: 0%;";
                    var buttons = element.querySelectorAll(".zindex")
            var elementitle = element.querySelector(".elementitle");
            elementitle.style = "opacity: 0;";
            buttons.forEach(but =>{
                but.style = "opacity: 0;";
            })
            body.style = `opacity: 0; top: 0%;`;
        })
    })

var selectors = document.querySelectorAll(".selectorcontainer");

selectors.forEach(select =>{
select.querySelector("div").addEventListener('click', ()=>{
    selectors.forEach(removeselected =>{
      removeselected.classList.remove('selected'); 
      select.querySelector("div").removeAttribute('style');
    })
    /*
    if(select.querySelector('div').id == "personalselector"){
        select.querySelector("div").id = null;
    }*/
    select.classList.add('selected');

})
})
})
