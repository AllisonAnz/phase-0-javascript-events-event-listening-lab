const input = document.getElementById('input');

function addingEventListener() {
    input.addEventListener('click', function() {
        alert('I was clicked!');
    });
}

//Make a call to the function so that it works on the webpage
addingEventListener()