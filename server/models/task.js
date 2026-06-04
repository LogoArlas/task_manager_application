//fake database
const task = [
    {
        taskName: "task",
        taskDescription: "This is a task description.",
        userId: 1
    }
]

function getTask() {
    return task;
}

module.exports = { getTask }