package com.todolist.mgnt.tl.dao;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Repository
@Mapper
public interface TodoListMapper {

	public String todoListTest();
}
