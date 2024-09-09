const input = document.getElementById("input");
const btn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const romanValues = new Map([
    ["M",1000],
    ["CM",900],
    ["D",500],
    ["CD",400],
    ["C",100],
    ["XC",90],
    ["L",50],
    ["XL",40],
    ["X",10],
    ["IX",9],
    ["V",5],
    ["IV",4],
    ["I",1]
]);

function integerToRoman(num){
    let result = "";
    for(const [numeral, value] of romanValues){
        while(num >= value){
            result += numeral;
            num -= value;
        }
    }
    return result;
}

btn.addEventListener("click", () => {
    const number = parseInt(input.value);

    if(input.value.length === 0 || isNaN(number)){
        output.innerText = "Please enter a valid number.";
    }
    else if(input.value < 0){
        output.innerText = "Please enter a number greater than or equal to 1.";
    }
    else if(input.value >= 4000){
        output.innerText = "Please enter a number less than or equal to 3999.";
    }
    else{
        const romanNumeral = integerToRoman(number);
        console.log(romanNumeral);
        output.innerText = romanNumeral;
    }
})