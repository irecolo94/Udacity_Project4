function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    let encodedText = encodeURI(formText)
    Client.checkForName(formText)
    const regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    console.log("::: Form Submitted :::")

    if (regexp.test(formText))
      {fetch('http://localhost:8081/test', {
              method: 'POST',
              credentials: 'same-origin',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({url: formText})
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
      } else {window.alert('Invalid url')}
}

export { handleSubmit }
