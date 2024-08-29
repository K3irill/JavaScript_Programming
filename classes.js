'use strict'

class Task {
    constructor(title = Task.getDefaultTitle(), isCompleted = false) {
        this.title = title,
        this._isCompleted = isCompleted,
        Task.counter += 1
    }
    
    static getDefaultTitle(){
        return 'Title text'
    }


    completed(){
        this._isCompleted = true
    }

    get isCompleted(){
        return this._isCompleted === true ? 'task is completed' : 'task is not completed'
    }
}

Task.counter = 0;

let task = new Task('ES6', false);
// let task2 = new Task('learn ReactJS', true)
// let task3 = new Task()

// task.completed()

console.log(task.isCompleted, task._isCompleted);
