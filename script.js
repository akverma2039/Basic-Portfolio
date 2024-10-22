document.getElementById('contactForm').addEventListener('submit', function(event){
    event.preventDefault();
 // Prevent the form form refreshing page

//Form Values
const name = document.getElementById('name').ariaValueMax;
const email = document.getElementById('email').value;
const message = document.getElementById('message').value;

//Basic Validation
if (name === '' || email === '' || message ==='') {
    document.getElementById('formFeedback').innerText='Please fill out all fields.';
    document.getElementById('formFeedback').style.color = 'red';
} else{
    document.getElementById('formFeedback').innerText='Thank you for your message!';
    document.getElementById('formFeedback').style.color = 'green';

    //Clear the form value
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value='';
}
});
