const URL = "https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=bOoHBz-8t";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");


// const getFacts = async () => {
//    console.log("getting data"); 
//     let response = await fetch(URL);
//     console.log(response);
//     let data = await response.json();
//     factPara.innerText = data[2].text;
// };

//ya

function getFacts(){
    fetch(URL)
    .then((response) => {

    })
    .then((data) => {
        console.log(data);
        factPara.innerText = data[2].text;
    });
}
btn.addEventListener("click", getFacts);
