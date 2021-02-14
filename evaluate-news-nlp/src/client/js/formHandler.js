function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    }),
    fetch('https://api.openweathermap.org/data/2.5/weather?zip=90210&appid=')
    .then(res => res.json())
    .then(function(data) {
        document.getElementById('results').innerHTML += data.main.temp
    })

}

export { handleSubmit }
