// import { useState, useContext } from "react";
// import { TodoDispatchContext } from "../App";
// import MyButton from "./MyButton";

// const TodoEditor = ({ isEdit, originData }) => {
//     const [todoContent, setTodoContent] = useState("");
//     const { onCreate, onEdit, onRemove } = useContext(TodoDispatchContext);

//     const handleRemove = () => {
//         if (window.confirm("Do you want Delete?")) {
//             onRemove(originData.id);
//         }
//     };
//     const handleSubmit = () => {
//         if (todoContent.length < 1) {
//             return;
//         }
//         if(window.confirm(isEdit ? "do you want edit?" :  "do you want create?")){
//             if(!isEdit){
//                 todoCreate(todoContent);
//             }else{
//                 onEdit(todoContent);
//             }
//         }
//     <>
//         <section>
//             <h1>TodoList</h1>
//             <div className="input-box, text-wrapper">
//                 <input
//                     placeholder="Todo?"
//                     value={content}
//                     onChange={(e) => setTodoContent(e.target.value)}
//                 />
//             </div>
//         </section>
//         <section>
//             <div className="">
//                 <MyButton
//                     className="Register"
//                     text={"登録"}
//                     onClick={handleSubmit}
//                 />
//             </div>
//         </section>
//     </>;
// };

// export default TodoEditor;
