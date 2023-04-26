import { createUser } from './server/crudFunctions/userCreate'

// Get references to the username and password input fields
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');

// Get a reference to the button that will trigger user creation
const createUserButton = document.querySelector('#login');

// Register an event listener for the create user button
createUserButton.addEventListener('click', async () => {
    const username = usernameInput.value;
    const password = passwordInput.value;

    // Call the createUser function and pass in the username and password
    await createUser(username, password);
});