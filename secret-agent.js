// The browser script for the Secret Agent assignment.

var txtFirstPart = document.getElementById('firstPart');
var txtSecondPart = document.getElementById('secondPart');
var txtThirdPart = document.getElementById('thirdPart');
var txtFourthPart = document.getElementById('fourthPart');

var decrypt = new secret_agent.Decrypt();

var txtSolution = document.getElementById('solution');

function solve(event)
{
    event.preventDefault(); 
    
    decrypt.firstPart = txtFirstPart.value;
    decrypt.secondPart = txtSecondPart.value;
    decrypt.thirdPart = txtThirdPart.value;
    decrypt.fourthPart = txtFourthPart.value;
    
    txtSolution.innerHTML = decrypt.decryptedString;
}

var form = document.getElementById("secret-agent-form"); 

form.addEventListener('submit', solve);

document.getElementById('encrypted-key').innerHTML = decrypt.encryptedText;