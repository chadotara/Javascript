const scriptURL = 'https://script.google.com/macros/s/AKfycbwV6nC4Sx3ke00BnLm4v2j8uRhaJv0aEKUOvut17EJDVNQmp2plUjFNuhnZhVyC3bw6pg/exec'
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById('msg');

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {msg.innerHTML = 'Thank you for Subscribing!'
        setTimeout(function(){
            msg.innerHTML = ''
        },4000)
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})