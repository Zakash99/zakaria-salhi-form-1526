const submitButton = document.getElementById('button');
const fullnamesource= document.getElementById('fullname');
const emailsource= document.getElementById('email');
const messageTextarea = document.getElementById('message');

//EMAIL VALIDATION
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//FUNCTION  
function formvalidate(event) {
  event.preventDefault();

  // DECLARE AN OBJECT THAT WILL STORE THE  FORM-DATA
  const data = {};
  const errors = [];

// FULL NAME

if (fullnamesource.value.trim() !== '') {
  data.fullname = fullnamesource.value.trim();
} else {
  errors.push('Full Name is required.');
}

// EMAIL

if (emailsource.value.trim() !== '') {
  if (emailRegex.test(emailsource.value.trim())) {
    data.email = emailsource.value.trim();
  } else {
    errors.push('Invalid email address.');
  }
} else {
  errors.push('Email is required.');
}

// MESSAGE

if (messageTextarea.value.trim() !== '') {
  data.message = messageTextarea.value.trim();
} else {
  errors.push('Message is required.');
}

// FEEDBACK/ERRORS

if (errors.length > 0) {
  console.error('errors:', errors );
} else {
   console.log('data:', data);
  
  fullnamesource.value = '';
  emailsource.value = '';
  messageTextarea.value = '';

}
}

// REGISTER YOUR FORM TO "CLICK" EVENT.
submitButton.addEventListener('click', formvalidate);