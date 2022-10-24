import { useContext, useState, useEffect } from "react";
import { TodoStateContext } from "../App";
import TodoHeader from "../components/TodoHeader";
import MyButton from "../components/MyButton";
import { TodoList } from "../components/TodoList";

const Home = () => {
    const todoList = useContext(TodoStateContext);

    const [data, setData] = useState([]);
    const [currentDay, setCurrentDay] = useState(new Date());
    const headText = `${currentDay.getFullYear()}年 ${
        currentDay.getMonth() + 1
    }月`;
    useEffect(() => {
        if (todoList.length >= 1) {
            const firstDay = new Date(
                currentDay.getFullYear(),
                currentDay.getMonth(),
                1
            ).getTime();
            const lastDay = new Date(
                currentDay.getFullYear(),
                currentDay.getMonth() + 1,
                0,
                23,
                59,
                59
            ).getTime();
            setData(
                todoList.filter(
                    (it) => firstDay <= it.date && it.date <= lastDay
                )
            );
        } else {
            setData([]);
        }
    }, [todoList, currentDay]);

    const increaseMonth = () => {
        setCurrentDay(
            new Date(
                currentDay.getFullYear(),
                currentDay.getMonth() + 1,
                currentDay.getDate()
            )
        );
    };

    const decreaseMonth = () => {
        setCurrentDay(
            new Date(
                currentDay.getFullYear(),
                currentDay.getMonth() - 1,
                currentDay.getDate()
            )
        );
    };
    return (
        <div>
            <TodoHeader
                headText={headText}
                left={<MyButton text={"<"} onClick={decreaseMonth} />}
                right={<MyButton text={">"} onClick={increaseMonth} />}
            />
            <TodoList todoList={data} />
            <h1>Todo List</h1>
            <ul id="todoList"></ul>
        </div>
    );
};

export default Home;
