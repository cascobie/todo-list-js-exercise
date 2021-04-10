// Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// const taskDescriptions = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
// function newTask(title, description) {
//   taskDescriptions.push(description);
//   taskTitles.push(title);
//   taskComplete.push(false);
// }



// To make this better, we want to use OOP. First, impletment an object to keep track of the state:
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }

  };
  return task;
}

// marks the provided task as completed
// function completeTask(task) {
//   task.complete = true;
// }

// // Prints out the provided task's details
// function logTaskState(task) {
//   console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
// }


// DRIVER CODE BELOW
const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨")
const tasks = [task1, task2];

task1.logState();
task1.markCompleted();
task1.logState();

// logTaskState(task1); // Clean cat litter has not been completed
// completeTask(task1);
// logTaskState(task1); // Clean cat litter has now been completed


// console.log(tasks);




// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1

// logTaskState(0); // Clean Cat Litter has not been completed
// completeTask(0);
// logTaskState(0); // Clean Cat Litter has been completed
