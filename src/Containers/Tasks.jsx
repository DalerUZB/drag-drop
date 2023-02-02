import React, { useState } from "react";
import Task from "../Components/Task";

import { v4 as id } from "uuid";
import styled from "styled-components";
import moment from "moment";
const Tasks = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Todo",
      color: "#DB2777",
      todos: [],
    },
    {
      id: 2,
      title: "Started",
      color: "#9333EA",
      todos: [],
    },
    {
      id: 3,
      title: "Completed",
      color: "#16A34A",
      todos: [],
    },
  ]);

  const saveTodoFunc = (inputValue, taskId) => {
    const stringifiedTasks = JSON.stringify(tasks);
    const copyTasks = JSON.parse(stringifiedTasks);
    const index = copyTasks.findIndex((task) => task.id === taskId);
    copyTasks[index].todos.push({
      id: id(),
      text: inputValue,
      time: moment().calendar(),
    });
    setTasks(copyTasks);
  };

  return (
    <Wrapper>
      <TasksRow>
        {tasks.map((task) => (
          <Task key={task.id} task={task} saveTodo={saveTodoFunc} />
        ))}
      </TasksRow>
    </Wrapper>
  );
};

export default Tasks;

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  max-height: auto;
  background-color: #e3e3e3;
`;
const TasksRow = styled.div`
  height: 100%;
  display: flex;
  padding-top: 70px;
  justify-content: center;
  gap: 24px;
`;
