function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    let encodedText = encodeURI(formText)
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")

fetch('http://localhost:8081/test', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({text: encodedText})
    })
    .then(res => res.json())
    .then(function(res) {
      document.getElementById('confidence').innerHTML = 'confidence:' + res.confidence
      document.getElementById('polarity').innerHTML = 'polarity:' + res.polarity
      document.getElementById('agreement').innerHTML = 'agreement:' + res.agreement
      document.getElementById('subjectivity').innerHTML = 'subjectivity:' + res.subjectivity
      document.getElementById('irony').innerHTML = 'irony:' + res.irony

       console.log(res)
    })
}

export { handleSubmit }
