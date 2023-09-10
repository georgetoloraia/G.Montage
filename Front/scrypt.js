const kvadrati = document.getElementById("kvadrati");
const wertili = document.getElementById("wertili");
const calculateButton = document.getElementById("calculateButton");
const resultDiv = document.getElementById("result");

function CalculateResult() {
    let Kvadrati1 = kvadrati.valueAsNumber
    let Wertili1 = wertili.valueAsNumber
    
    
    if (Kvadrati1 <= 80) {
        Wertili1 = Wertili1 * 15
        resultDiv.textContent = `ფასი =  ${Wertili1}`;
    } else if ( Kvadrati1 > 80 && Kvadrati1 <= 160) {
        Wertili1 = Wertili1 * 20
        resultDiv.textContent = `ფასი = ${Wertili1}`
    } else if (Kvadrati1 > 160) {
        Wertili1 = Wertili1 * 25
        resultDiv.textContent = `ფასი = ${Wertili1}`
    }
    
}

calculateButton.addEventListener("click", CalculateResult);