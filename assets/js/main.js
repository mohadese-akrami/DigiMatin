let navbar = document.querySelector('.navbar');
document.addEventListener('scroll' , ()=>{
    if(Math.round(window.scrollY) > 70)
        navbar.classList.add('sticky');
    else
    navbar.classList.remove('sticky');
});

let tab_items = document.querySelectorAll('.mega-submenu-categories .tab-item');
let tab_contents = document.querySelectorAll('.mega-submenu-products .tab-content');

tab_items.forEach((tab_item , index) =>{
    tab_item.addEventListener('mouseover' , function(){
        tab_contents.forEach(tab_content =>{
            tab_content.classList.remove('active');
        });
        document.querySelector(`#tab-content-${index}`).classList.add('active');
        tab_items.forEach(tab_item =>{
            tab_item.classList.remove('active');
        });
        tab_item.classList.add('active');
    });
});

const navbar_search =document.querySelector('.navbar-search');
const search_top_nav = document.getElementById('search-top-nav');
navbar_search.addEventListener('click' , function(){
    search_top_nav.classList.toggle('active');
});
document.querySelector('.close-search').addEventListener('click',function(){
    search_top_nav.classList.remove('active');
});

document.querySelector('.mega-menu').addEventListener('mouseover' , function()
{
    if(search_top_nav.classList.contains('active'))
        search_top_nav.classList.remove('active');
});
document.querySelector('.global-nav').addEventListener('mouseover' , function()
{
    if(search_top_nav.classList.contains('active'))
        search_top_nav.classList.remove('active');
});

let members = document.querySelectorAll('#collection .member');
let collection = [];
members.forEach((member)=> collection.push(member.querySelector('p').innerHTML));

let input_search = document.querySelector('.input-search');
let suggestion_list = document.querySelector('.suggestion-list');
input_search.addEventListener('keyup' , GenerationResultList);

function GenerationResultList(event)
{
    let fragment = document.createDocumentFragment();
    let value = event.target.value;
    if(value.length == 0)
    {
        if(suggestion_list.classList.contains('hidden') == false)
            suggestion_list.classList.add('hidden');
    }
    else
    {
        let filtered_list = collection.filter((member) => member.includes(value));
        if(filtered_list.length != 0)
        {
            filtered_list.forEach((member)=>{
                let p = document.createElement('p');
                let a = document.createElement('a');
                a.innerText = member;
                a.href = '#';
                p.appendChild(a);
                fragment.appendChild(p);
            });
        }
        else
        {
            let p = document.createElement('p');
            p.innerText = 'موردی پیدا نشد!';
            fragment.appendChild(p);
        }

        suggestion_list.innerHTML = '';
        suggestion_list.appendChild(fragment);
        suggestion_list.classList.remove('hidden');
    }
}



const itemColors = document.querySelectorAll(".color-list .item-color");
itemColors.forEach((item) =>{
  item.style.backgroundColor = item.dataset.color;
});



const custom_select=document.querySelector("#product-categories-filtering .custom-select");
custom_select.addEventListener("focus" , (e)=>{
    e.target.size= document.querySelectorAll("#product-categories-filtering .custom-select option").length;
});
 
custom_select.addEventListener("blur" , (e)=>{
    e.target.size = 0;
});

custom_select.addEventListener("change" , (e)=>{
    e.target.size = 1;
    e.target.blur();
});

