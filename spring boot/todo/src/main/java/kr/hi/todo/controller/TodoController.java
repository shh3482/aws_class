package kr.hi.todo.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import kr.hi.todo.model.vo.TodoVO;
import kr.hi.todo.service.TodoService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v1/todos")
public class TodoController {

	private final TodoService todoService;
	
	public TodoController(TodoService todoService) {
		this.todoService = todoService;
	}
	
	@GetMapping("")
	public ResponseEntity<List<TodoVO>> getTodos(
			@RequestParam("date")String date){
		//서비스에서 date를 처리하는데, 
		//yyyy-MM-dd 형식이 아니면 전체 조회로, yyyy-MM-dd 형식이면 날짜에 맞는
		//할일을 조회하도록 구현
		
		//빈문자열이면 전체 조회, 아니면 날짜 조회로 구현
		List<TodoVO> list = todoService.getTodos(date);
		return ResponseEntity.ok(list);
	}
	@PostMapping("")
	public ResponseEntity<Boolean> postTodos(
			@RequestBody TodoVO todo){
		boolean result = todoService.insertTodo(todo);
		return ResponseEntity.ok(result);
	}
	@DeleteMapping("/{num}")
	public ResponseEntity<Boolean> deleteTodos(
			@PathVariable("num") int num){
		boolean result = todoService.deleteTodo(num);
		return ResponseEntity.ok(result);
	}
	@PutMapping("/{num}")
	public ResponseEntity<Boolean> putTodos(
			@PathVariable("num") int num,
			@RequestBody TodoVO todo){
		boolean res = todoService.updateTodo(todo);
		return ResponseEntity.ok(res);
	}
	
}
