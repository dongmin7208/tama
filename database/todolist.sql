CREATE DATABASE todolist;
USE todolist;
CREATE TABLE todos (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    todo VARCHAR(512) NOT NULL,
    is_done BOOLEAN NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP

);