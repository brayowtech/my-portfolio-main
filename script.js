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
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwmoxHv2iRAtZk51Qhl8oD6DmJivkeesW7qqsLS1gygI8W5Wpf-G3mAfN32YEXMkzOqTQ/exec'
  const form = document.forms['submit-to-google-sheet'];
  const nameInput = document.getElementById("nameInput");
  const msg = document.getElementById("msg");
  
  form.addEventListener('submit', e => {
      e.preventDefault();
  
      // Create a FormData object and include the name input value
      const formData = new FormData(form);
      const name = nameInput.value; // Get the name input value
  
      formData.append('name', name); // Add the name to the FormData
  
      // Send the data to Google Sheets
      fetch(scriptURL, { method: 'POST', body: formData })
          .then(response => {
              msg.innerHTML = "Thank you, your response has been submitted";
              setTimeout(() => {
                  msg.innerHTML = "";
              }, 5000);
              form.reset();
          })
          .catch(error => console.error('Error!', error.message));
  });
  
