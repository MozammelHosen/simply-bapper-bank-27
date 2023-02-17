document.getElementById("deposite-btn").addEventListener("click", function(){
const deepositeField = document.getElementById("deposite-field");
const depositeFieldvalue = deepositeField.value;
const depositeFieldInt = parseFloat(depositeFieldvalue)
console.log(depositeFieldInt)
//  deposite amount

const depositeAmount = document.getElementById("deposite-amount");
const depositeAmountText = depositeAmount.innerText;
const depositeAmountInt = parseFloat(depositeAmountText);
console.log(depositeAmountInt)

const previuseBalance = depositeFieldInt + depositeAmountInt;
console.log(previuseBalance)
deepositeField.value = previuseBalance;
// depositeAmount = deepositeField;
})