

let user_number = function user_result(){
    let user_number = parseInt(document.getElementById('input').value, 10);
    meterFunction(), kilogramsFunction(), literFunction();

};



let meterFeet = document.getElementById("m-fValue");

let kiloPounds = document.getElementById("k-pValue");


let literGallons = document.getElementById("l-gValue");



function meterFunction(){
    user_number = parseInt(document.getElementById('input').value, 10);
    user_number *= 3.28
    meterFeet.textContent = user_number.toFixed(3);
    console.log(user_number);
    
}

function kilogramsFunction(){
    user_number = parseInt(document.getElementById('input').value, 10);
    user_number *= 2.21
    kiloPounds.textContent = user_number.toFixed(3)
    console.log(user_number);
    
    

}

function literFunction(){
    user_number = parseInt(document.getElementById('input').value, 10);
    user_number /= 3.79
    literGallons.textContent = user_number.toFixed(3)
    console.log(user_number);

}



