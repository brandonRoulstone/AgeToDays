function ageToDays(){
    let response = document.getElementById("response");
    let age = document.getElementById("age").value;
    let result = age * 365.25;
    response.innerHTML =`<p>your age in days are:<br>${result.toFixed(0)}</p>`
    console.log(result.toFixed(0));

}
ageToDays();

age.addEventListener("input", ageToDays);







// fetch("https://reqres.in/api/users")
// .then(res => {
//     if(!res.ok)
//     throw new Error("no Response")
//     return res.json();
// }).then(i => sessionStorage.setItem("normalKey", JSON.stringify(i.data)))
// .catch(err => console.log(err))

// let newObj = JSON.parse(sessionStorage.getItem("normalKey"))
// console.log(newObj);

// let res = sessionStorage
// console.log(sessionStorage)
// let age_in_years = 25
// let age_in_days = age_in_years * 365.25
// console.log("Age in days:", age_in_days)