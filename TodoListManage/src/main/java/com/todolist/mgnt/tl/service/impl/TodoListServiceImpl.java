package com.todolist.mgnt.tl.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.todolist.mgnt.tl.dao.TodoListMapper;
import com.todolist.mgnt.tl.service.TodoListService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class TodoListServiceImpl implements TodoListService{

	private final TodoListMapper todoListMapper;
	
	public String todoListTest() {
		return todoListMapper.todoListTest();
	}

}
