const base_url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdowns = document.querySelectorAll("select");
const btn = document.querySelector("#convert");
const fromcurr = document.querySelector(".from select");
const tocurr = document.querySelector(".to select");
const msg = document.querySelector(".rate");

for(let select of dropdowns){
    for( let currCode in countryList){
       let newoption = document.createElement("option");
       newoption.innerText = currCode;
       newoption.value = currCode;
       if(select.name === "from" && currCode === "USD"){
           newoption.selected= "selected";
       }
       else if(select.name === "to" && currCode === "INR"){
           newoption.selected= "selected";
       }
       select.append(newoption);
    }
   select.addEventListener("change", (evt) => {
    updateflag(evt.target);
   });

}

const updateflag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newsrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newsrc;
}

btn.addEventListener("click", async (evt) => {
    let amount = document.querySelector("#amount.input");
    let amtval = amount.value;
    if(amtval === "" || amtval <= 0){
       amount.value = "1";
       amtval = 1;
    }

    const URL = `${base_url}/${fromcurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[fromcurr.value.toLowerCase()][tocurr.value.toLowerCase()];
    let finalrate = amtval * rate;
    console.log(finalrate);
    msg.innerText = `${amtval} ${fromcurr.value} = ${finalrate} ${tocurr.value}`;
});

