import { useContext, useState, useEffect } from "react";
import { TodoStateContext } from "../App";
import TodoHeader from "../components/TodoHeader";
import MyButton from "../components/MyButton";
import { TodoList } from "../components/TodoList";

const Home = () => {
    const todoList = useContext(TodoStateContext);

    const [data, setData] = useState([]);

    return (
        <div>
            <TodoHeader
            // headText={headText}
            />
            <TodoList todoList={data} />
        </div>
    );
};

export default Home;
