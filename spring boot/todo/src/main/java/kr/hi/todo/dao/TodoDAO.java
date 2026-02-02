package kr.hi.todo.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import kr.hi.todo.model.vo.TodoVO;

public interface TodoDAO {

	List<TodoVO> selectTodos();

	boolean insertTodo(@Param("todo")TodoVO todo);

	TodoVO selectTodo(@Param("todo_num")int todo_num);
	
	TodoVO deleteTodo(@Param("todo_num")int todo_num);
	
}