// Step 1: Create an array to store tasks
let tasks = [];
// Step 2: Create a function to add a task
function addTask(description) {
    console.log(`Adding task: ${description}`);
    // Simulate a delay using setTimeout
    setTimeout(() => {
        tasks.push(description); // Add the task to the array
        console.log(`Task added: ${description}`);
        mainMenu(); // Return to the main menu after adding a task
    }, 2000); // Delay of 2 seconds
}
// Step 3: Create a function to view all tasks
function viewTasks() {
    console.log("Retrieving tasks...");
    setTimeout(() => {
        if (tasks.length === 0) {
            console.log("No tasks to show.");
        } else {
            console.log("Your tasks:");
            // Display each task with a number
            tasks.forEach((task, index) => {
                console.log(`${index + 1}. ${task}`);
            });
        }
        mainMenu(); // Return to the main menu after viewing tasks
    }, 1000); // Delay of 1 second
}
const readline = require('readline');
// Setup readline interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});// Step 4: Create a main menu function
function mainMenu() {
    rl.question("\nWhat would you like to do?\n1. Add a task\n2. View tasks\n3. Exit\nChoose an option: ", (answer) => {
        switch (answer) {
            case '1':
                rl.question("Enter task description: ", (description) => {
                    addTask(description); // Call addTask function
                });
                break;
            case '2':
                viewTasks(); // Call viewTasks function
                break;
            case '3':
                console.log("Exiting the application. Goodbye!");
                rl.close(); // Close the readline interface
                break;
            default:
                console.log("Invalid option. Please try again.");
                mainMenu(); // Show menu again if the option is invalid
        }
    });
}// Start the program
mainMenu();


    