package kr.hi.todo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import kr.hi.todo.dao.TodoDAO;
import kr.hi.todo.model.vo.TodoVO;

@Service
public class TodoService {
	
	private final TodoDAO todoDAO;
	
	public TodoService(TodoDAO todoDAO) {
		this.todoDAO = todoDAO;
	}

	public List<TodoVO> getTodos() {
		return todoDAO.selectTodos();
	}
	
	public boolean insertTodo(TodoVO todo) {
		try {
			return todoDAO.insertTodo(todo);
		}catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	public TodoVO getTodo(int todo_num) {
		// TODO Auto-generated method stub
		return todoDAO.selectTodo(todo_num);
	}

	public TodoVO deleteTodo(int todo_num) {
		// TODO Auto-generated method stub
		return todoDAO.deleteTodo(todo_num);
	}
}