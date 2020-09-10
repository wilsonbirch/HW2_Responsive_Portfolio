const scriptURL = 'https://script.google.com/macros/s/AKfycbzLxWwbLmEJymghD5IOOWXqalpv3egyFxTsKyhhOMvH1vjw3ZE/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            console.log('Success!', response);
            window.location.href = "contact_submit.html";
        })
        .catch(error => console.error('Error!', error.message))
})


