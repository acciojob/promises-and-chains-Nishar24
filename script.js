//your JS code here. If required.
const form = document.getElementById('myForm');
const ageInput = document.getElementById('age');
const nameInput = document.getElementById('name');

form.addEventListener('submit', (event) => {
    //event.preventDefault();

    const age = parseInt(ageInput.value);
    const name = nameInput.value;

    if (age != null && age !== '' && name != null && name !== ''){
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (age >= 18) {
                    resolve();
                } else {
                    reject();
                }
            }, 4000);
        });

        promise.then(() => {
            alert(`Welcome, ${name}. You can vote.`);
        }).catch(() => {
            alert(`Oh sorry, ${name}. You aren't old enough.`);
        });
    } else {
        alert('Please fill in all fields.');
    }
});