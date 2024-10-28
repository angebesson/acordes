
const headerBg = document.querySelector(".header");
const panelIsActive = document.querySelector(".menu-list");


export default function menuHamburger(btnHamburger,panel,menuLink){
    document.addEventListener("click",(e)=>{
    if(e.target.matches(btnHamburger)||e.target.matches(`${btnHamburger} *`)){
        document.querySelector(panel).classList.toggle("is-active");
        document.querySelector(btnHamburger).classList.toggle("is-active");
        if(e.target.matches(menuLink)){
            document.querySelector(panel).classList.remove("is-active");
            document.querySelector(btnHamburger).classList.remove("is-active");
        }
        if(panelIsActive.classList.contains("is-active")){
            headerBg.classList.remove("blur");
            
        }else{
            headerBg.classList.add("blur")
        }
        ;
    }
    })

}

menuHamburger(".hamburger",".panel",".menu-link");