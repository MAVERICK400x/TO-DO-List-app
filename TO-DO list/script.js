document.addEventListener('DOMContentLoaded', function() {
    const submit = document.getElementById('submit');
    const input = document.getElementById('textarea');
    const output = document.getElementById('output');

    submit.addEventListener('click', function() {
        const textItem = input.value.trim();

        if (textItem) {
            // Create a new paragraph element for the task
            const taskItem = document.createElement('p');

            // Get the current date and time
            const now = new Date();
            const timestamp = now.toLocaleString();

            // Set the task text with timestamp
            taskItem.textContent = `${textItem} (Added on: ${timestamp})`;

            // Append the new task to the output element
            output.appendChild(taskItem);

            // Clear the input field after adding the task
            input.value = '';
        } else {
            alert('Please enter a task!');
        }
    });
});
