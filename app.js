let mahboob = {
    name : 'mahboob',
    family : 'eslmaiyeh',
    hazine : 10000,
    daramad :15000
}
let mohammad = {
    name : 'mohammad',
    family : 'eslmaiyeh',
    hazine : 100000,
    daramad :105000
}
let addhazine =function(accountName , amount){
    accountName.hazine = accountName.hazine +amount;
}
let adddaramad = function(accountName , amount){
    accountName.daramad = accountName.daramad +amount;
}
let getAccountData = function(accountName){
    let balance = accountName.daramad - accountName.hazine
    return `acount name is : ${accountName.name} - balance = ${balance}`
}

addhazine(mahboob,5000);
adddaramad(mohammad , 133000)

console.log(getAccountData(mohammad));