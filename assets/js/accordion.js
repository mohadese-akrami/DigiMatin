const accordions = document.getElementsByClassName("accordion");
for(let i=0; i< accordions.length ; i++)
{

    accordions[i].addEventListener('click' , function(){
        let panel = this.nextElementSibling;
        if(panel.style.maxHeight)
             panel.style.maxHeight = null;
        else
             panel.style.maxHeight=panel.scrollHeight + "px";
        if(accordions[i].querySelector("i").classList.contains("fa-angle-up"))
        {
            accordions[i].querySelector("i").classList.remove("fa-angle-up");
            accordions[i].querySelector("i").classList.add("fa-angle-down");
        }
        else
        {
            accordions[i].querySelector("i").classList.remove("fa-angle-down");
            accordions[i].querySelector("i").classList.add("fa-angle-up"); 
        }
    });
}