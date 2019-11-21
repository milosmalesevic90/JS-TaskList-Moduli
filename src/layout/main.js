import { TaskList } from "../components/tasklist";
import { Task } from "../components/Task";
import { InputForm } from '../components/inputForm'


class Main {
    constructor() {
        let inputForm = new InputForm();

        let taskList = new TaskList();
        this.node = document.createElement('main');
        this.node.appendChild(inputForm.getNode());
        this.node.appendChild(taskList.getNode());
        inputForm.setBtnAddOnClick(function () {
            let text = inputForm.txtTitle.value;
            text = text.trim();
            if (text == '') return;
            let task = new Task(text);
            task.setBtnDeleteClickEvent(()=>{
                task.deleteItem();
            });
            taskList.addTask(task);
        })
    }
    getNode() {
        return this.node;
    }
}
export {
    Main
}