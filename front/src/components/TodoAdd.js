import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [todos, setTodos] = useState([]);
    const [newList, setNewList] = useState("");

    function loadTodos() {
        setTodos([]);
        axios.get("http://localhost:3001/todos/list")
            .then(function (response) {
                setTodos(response['data']);
            });
    }

    function changeNewTodo(e) {
        setNewList(e.target.value);
    }

    function addTodo() {
        axios.post("http://localhost:3001/todos/add", { todo: newList })
            .then(function (response) {
                if (response['data']['status'] == "OK") {
                    setNewList("");
                    loadTodos();
                }
            })
    }

    function deleteTask(e) {
        var id = e.target.value;

        axios.post("http://localhost:3001/todos/delete", { id: id })
            .then(function (response) {
                if (response['data']['status'] == "OK") {
                    loadTodos();
                }
            });
    }

    function checkTask(e) {
        var id = e.target.value;
        var is_done = e.target.checked == true ? 1 : 0;

        axios.post("http://localhost:3001/todos/check", { id: id, is_done: is_done })
            .then(function (response) {
                if (response['data']['status'] == "OK") {
                    loadTodos();
                }
            });
    }

    useEffect(() => {
        loadTodos();
    }, [])

    return (
        <div className="container">
            <h1>To-Do List</h1>

            <table className="table">
                <thead>
                    <tr>
                        <th style={{ width: "75%" }}>Todo</th>
                        <th style={{ width: "25%" }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo) =>
                        <tr key={todo['id']}>
                            <td>{todo['task']}</td>
                            {/* task, todo */}
                            <td>
                                <input type="checkbox" className="me-2" checked={todo['is_done'] == 1 ? true : false} value={todo['id']} onChange={checkTask} style={{ width: "35px", height: "35px" }} />
                                <button className="btn btn-danger" value={todo['id']} onClick={deleteTask} style={{ marginTop: "-25px" }}>X</button>
                            </td>
                        </tr>
                    )}
                </tbody>
                <tfoot>
                    <tr>
                        <td>
                            <input type="text" className="form-control" value={newList} onChange={changeNewTodo} />
                        </td>
                        <td>
                            <button className="btn btn-success" onClick={addTodo}>+</button>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default App;
