async function sub(e) {
    console.log("running function")
    e.preventDefault()
    let form = e.target
    let formData = new FormData(form)

    let res
    try {
        await fetch('/process-data/', {
            method  : 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(function(data) {
            if(data.hasOwnProperty("errorMessage")) {
                throw new Error(data["errorMessage"])
            }
            res = data
        }) 
    }
    catch (errorMessage) {
        alert(errorMessage)
        return
    }

    res = res.replaceAll("'",'"') // parsing JSON containing single-quoted keys result in errors. Replacing single quotes with double quotes 
    res = JSON.parse(res) 

    console.log(res["diet_plan"])
    ans_element.innerHTML = res["diet_plan"]
    ans_element.style.display = "block"
}

let form = document.getElementById("form")
let ans_element = document.getElementById("ans")
form.addEventListener("submit", sub)