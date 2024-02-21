const price_inputs=document.querySelectorAll('.price-input input');
const range_inputs=document.querySelectorAll('.range-input input');
const progress=document.querySelector('.progress');




range_inputs.forEach((input) =>{
    input.addEventListener("input" , () =>{
        let min_value=range_inputs[0].value;
        let max_value=range_inputs[1].value;
        if(max_value > max_value)
        {
            price_inputs[0].value=min_value;
            price_inputs[1].value=max_value;
            progress.style.left=(min_value / price_inputs[0].max) * 100 + "%";
            progress.style.right= 100 - (max_value / price_inputs[0].max) * 100 + "%";

        }
        else
        {
            [min_value , max_value] = [max_value , min_value];
            price_inputs[0].value=min_value;
            price_inputs[1].value=max_value;
            progress.style.left=(min_value / price_inputs[0].max) * 100 + "%";
            progress.style.right= 100 - (max_value / price_inputs[0].max) * 100 + "%";
        }
    });
});