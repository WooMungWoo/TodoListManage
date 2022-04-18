package com.todolist.mgnt.tl.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.todolist.mgnt.tl.service.TodoListService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class TodoListController {
	
	@Autowired
	private TodoListService todoListService;
	
//	post 로 리턴 예정. url 직접 호출 시 GET
	@RequestMapping(value="/test.do", method=RequestMethod.POST)
	public String listener_call(ModelMap modelMap) throws Exception {
		String testResult = todoListService.todoListTest();
		
		modelMap.put("api_call", testResult);
		System.err.println(modelMap.get("api_call"));
		return "/api_call";
	}
}
