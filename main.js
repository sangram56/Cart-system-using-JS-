

/*here we use the incdec as argument  for working  both on the images by applying the same logic  so here insted of 
fetching the value of Textbox,Textbox1 (id of the input field) we just simpily replace the divid  with incdec.and also pass
pass the value of ('textbox,textbox1) in the onclick functions in html file , we can do the same step for all other 
programs for get the same output where we see this kind of condition*/






//for decrese the amoount of the product
//itemprice is for decrease  the main price on click
//here incdec and itemprice replace the 2 cards input div ids.

//fetch the product total amount
var product_total_amt=document.getElementById("product_total_amt");

//for total cart amouont
var shipping_charge=document.getElementById('shipping_charge');
var total_cart_amt=document.getElementById('total_cart_amt');

//discoutn code
var discountCode=document.getElementById("discount_code1");



const decreaseNumber=(incdec,itemprice)=>{
    var itemval=document.getElementById(incdec);
    var myprice=document.getElementById(itemprice);
    console.log(itemval.value);
    if(itemval.value <= 0){
        itemval.value=0;
        alert("negative value not allowed")
    }else{
        itemval.value=parseInt(itemval.value)-1;
        itemval.style.background="#fff";
        itemval.style.color="#000";
        myprice.innerHTML=parseInt(myprice.innerHTML)-100;
        product_total_amt.innerHTML=parseInt(product_total_amt.innerHTML)-100;

        total_cart_amt.innerHTML=parseInt(product_total_amt.innerHTML) +  
        parseInt(shipping_charge.innerHTML);
        


    }
}


//for increase the value but valule limit is 5
//itemprice is for incerese the mian price on click
const increaseNumber=(incdec,itemprice)=>{
    var itemval=document.getElementById(incdec);
    var myprice=document.getElementById(itemprice);
    if(itemval.value >= 5){
        itemval.value=5;
        alert("maximum 5 piece is allowed");
        itemval.style.background="red";
        itemval.style.color="#fff";
    }else{
        itemval.value=parseInt(itemval.value)+1;
        myprice.innerHTML=parseInt(myprice.innerHTML)+100;
        product_total_amt.innerHTML=parseInt(product_total_amt.innerHTML)+100;

        total_cart_amt.innerHTML=parseInt(product_total_amt.innerHTML)+  
        parseInt(shipping_charge.innerHTML);

    }
}

//discount
const discount_code=()=>{
    let totalamtcurr=parseInt(total_cart_amt.innerHTML);
    let error_trw =document.getElementById('error_trw');
    if(discountCode.value === 'Watch87'){
        let newtotalamt= totalamtcurr - 15;
        total_cart_amt.innerHTML = newtotalamt;
        error_trw.innerHTML= 'code is valid ';
    }else{
        error_trw.innerHTML= 'code is invallid';

    }
}




