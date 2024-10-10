// src/TaskList.js
import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./style.css";

const TaskList = () => {
  const [tasks, setTasks] = useState({
    today: [],
    tomorrow: [],
    thisWeek: [],
    nextWeek: [],
    unplanned: [
      { id: 1, title: "Task 1" },
      { id: 2, title: "Task 2" },
      { id: 3, title: "Task 3" },
      { id: 4, title: "Task 4" },
      { id: 5, title: "Task 5" },
      { id: 6, title: "Task 6" },
      { id: 7, title: "Task 7" },
      { id: 8, title: "Task 8" },
      { id: 9, title: "Task 9" },
      { id: 10, title: "Task 10" },
    ],
  });

  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    const task = tasks[source.droppableId].find(
      (task) => task.id === parseInt(draggableId)
    );
    const newTasks = { ...tasks };

    newTasks[source.droppableId] = newTasks[source.droppableId].filter(
      (task) => task.id !== parseInt(draggableId)
    );
    newTasks[destination.droppableId].push(task);

    setTasks(newTasks);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="task-list">
        <Droppable droppableId="today">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="task-block"
            >
              <h2>Today</h2>
              {tasks.today.map((task, index) => (
                <Draggable
                  key={task.id}
                  draggableId={task.id.toString()}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="task"
                    >
                      {task.title}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Droppable droppableId="tomorrow">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="task-block"
            >
              <h2>Tomorrow</h2>
              {tasks.tomorrow.map((task, index) => (
                <Draggable
                  key={task.id}
                  draggableId={task.id.toString()}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="task"
                    >
                      {task.title}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Droppable droppableId="thisWeek">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="task-block"
            >
              <h2>This Week</h2>
              {tasks.thisWeek.map((task, index) => (
                <Draggable
                  key={task.id}
                  draggableId={task.id.toString()}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="task"
                    >
                      {task.title}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Droppable droppableId="nextWeek">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="task-block"
            >
              <h2>Next Week</h2>
              {tasks.nextWeek.map((task, index) => (
                <Draggable
                  key={task.id}
                  draggableId={task.id.toString()}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="task"
                    >
                      {task.title}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Droppable droppableId="unplanned">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="task-block"
            >
              <h2>Unplanned</h2>
              {tasks.unplanned.map((task, index) => (
                <Draggable
                  key={task.id}
                  draggableId={task.id.toString()}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="task"
                    >
                      {task.title}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default TaskList;
