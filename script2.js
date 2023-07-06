// QUESTION 2 : Get all the countries with a population of less than 2 lakhs using Filter function

var request = new XMLHttpRequest() ;
request.open("GET", "https://restcountries.com/v3.1/all")
request.send();
request.onload=function(){
    var countryData=JSON.parse(this.response);
    const popu=countryData.filter((element)=>{
        return element.population<200000;
    })
    console.log(popu);}




