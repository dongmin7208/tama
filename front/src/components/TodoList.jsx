import { useState } from "react";
import MyButton from "./MyButton";

const sortOptionList = [
    { value: "latest", name: "New" },
    { value: "oldest", name: "Old" },
];

const filterOptionList = [
    { value: "all", name: "all emotion" },
    { value: "good", name: "good emotion" },
    { value: "bad", name: "all bed" },
];

const TodoList = (todoList) => {
    const [sortType, setSortType] = useState("latest");
    const [filter, setFilter] = useState("all");

    return <div>list</div>;
};

export default TodoList;
