import React from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';

const TodoList = (props) => {
    const [todo, setTodo] = useState({
        todo: '',
    });

    const changeValue = (e) => {
        setTodo({
            ...todo,
            [e.target.name]: e.target.value,
        });
    };

    const submitTodo = (e) => {
        e.preventDefault(); // submit이 action을 안타고 자기 할일을 그만함.


        axios({
            url: '/',
            method: 'post',
            headers: { 'Content-Type': 'application/json; charset=utf-8', },
            data: {
                todo: todo
            }
        });

    };

    return (
        <Form onSubmit={submitTodo}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="TodoList input"
                    onChange={changeValue}
                    name="title"
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default TodoList;
