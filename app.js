const submit = document.querySelector('form');
const inputField = document.querySelectorAll('input');

const btnSubmit = document.querySelector('#submit');



btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    inputField.forEach(input => {
        const parentSection = input.parentElement;
        const inputValue = input.value;


        if (!inputValue) {
            parentSection.classList.add('error');
        } 
      
        else {
            parentSection.classList.remove('error')

            if (input.type == 'email') {
                if (!input.value.match(pattern)) {
                    parentSection.classList.add('error');
                    const erorMessage = input.parentElement.querySelector('.error__message');
                    erorMessage.innerHTML = "Looks like this is not an email"
                }
            } else {
                parentSection.classList.remove('error');
            }
        }
    })


})


