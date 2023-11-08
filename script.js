const faXmark = document.querySelector(".fa-xmark");
const faBars = document.querySelector(".fa-bars");

const sideMenu = document.getElementById("sideMenu");

faBars.onclick = function(){
    sideMenu.style.right = "0";   
}

faXmark.onclick = function(){
    sideMenu.style.right = "-200px";   
}

// Google sheets form submission
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwlLB3v-TKHROjGkJRlEKUQPG6ugDVcu4d_GB2BZZo6iYa_J34MZ6MsZ5z2MioQwS6L/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
        msg.innerHTML = "Thank you, your response has been submitted";
        setTimeout(() => {
          msg.innerHTML = "";
        }, 5000);
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })
