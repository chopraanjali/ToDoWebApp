
let input = prompt('What would you like to do?');

const todoList = ['Prepare dinner', 'Go for a walk'];


while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('------------------');

        // List out items 
        for (let i = 0; i < todoList.length; i++) {
            console.log(`${i + 1}: ${todoList[i]}`);
        }

        console.log('------------------');
    } else if (input === 'add') {
        input = prompt('What would you like to add?')
        todoList.push(input);
        console.log(`${input} added to the list!`)

    } else if (input === 'delete') {
        console.log('Here is your list!')
        for (let i = 0; i < todoList.length; i++) {
            console.log(`${i + 1}: ${todoList[i]}`);
        }
        input = prompt('Which item would you like to delete? Enter index of item.');
        const index = parseInt(input);
        if (!Number.isNaN(index) && index < todoList.length) {

            const deleted = todoList.splice(index - 1, 1);
            console.log(`Deleted item ${index}: ${deleted}!`);

        } else {

            console.log('Unknown index!')
        }
    }
    input = prompt('What would you like to do?');
}
console.log('Exiting the app!')