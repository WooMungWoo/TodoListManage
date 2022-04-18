package com.todolist.mgnt;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.GenericXmlApplicationContext;

/**
 * Spring Boot Application 시작 클래스로 AbstractSpringBootApp를 상속받아 필요한 기능을 추가하여
 * 사용한다.
 * 
 * <pre>
 * erisframe.run.oltp.boot 
 *    |_ BasicSpringBootApp.java
 * 
 * </pre>
 * 
 * @date : 2019. 4. 3. 오후 9:39:33
 * @version :
 * @author : jann1
 */
@SpringBootApplication 
public class TodoListManageApplication  {

	
	public static void main(String[] args) {

		SpringApplication.run(TodoListManageApplication.class, args);
	}
}