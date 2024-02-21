let prev_btn=document.getElementById("prev-btn");
let next_btn=document.getElementById("next-btn");
let pagination_numbers=document.getElementById("pagination-numbers");
let page_size=16;
let total_products = document.getElementById("total-products").dataset.value;
let page_count = Math.ceil(total_products / page_size);
let current_page = 1;



window.addEventListener("load" , ()=>{
   for(let i=1; i<= page_count ; i++)
   {
    let element = document.createElement("button");
    element.className = "pagination-number";
    element.innerHTML = i;
    element.setAttribute("page-index" , i);
    pagination_numbers.appendChild(element);
   }
   SetCurrentPage(1);

   document.querySelectorAll(".pagination-number").forEach((btn) => {
     btn.addEventListener("click" , ()=>{
        let page_index = Number(btn.getAttribute("page-index"));
        SetCurrentPage(page_index);
     });

    });

});

function SetCurrentPage(page_number)
{
   current_page = page_number;
   document.querySelectorAll(".pagination-number").forEach((btn) => {
      btn.classList.remove("active");
      if(Number(btn.getAttribute("page-index")) == current_page)
          btn.classList.add("active");
   });


   if(current_page == 1)
       prev_btn.setAttribute("disabled" , true);
   else
       prev_btn.removeAttribute("disabled");

   if(current_page == page_count)
       next_btn.setAttribute("disabled" , true);
   else
       next_btn.removeAttribute("disabled");

}

prev_btn.addEventListener("click" , ()=> {
    SetCurrentPage(current_page - 1);
});

next_btn.addEventListener("click" , ()=> {
    SetCurrentPage(current_page + 1);
});






