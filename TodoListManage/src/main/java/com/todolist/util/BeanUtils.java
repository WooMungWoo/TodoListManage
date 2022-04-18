 package com.todolist.util;

import org.springframework.context.ApplicationContext;

//import com.opensymphony.webwork.ServletActionContext;

/**
 * @author javajigi
 */
public class BeanUtils {
	
	/**
	 * @param beanId
	 * @return
	 */
	public static Object getBean( String beanId) {
		ApplicationContext applicationContext = ApplicationContextProvider.getApplicationContext();
				//WebApplicationContextUtils.getWebApplicationContext(contect, aa /*ServletActionContext.getServletContext()*/);

		if( applicationContext == null ) {
			throw new NullPointerException("Spring ApplicationContext not initialized");
		}
		
		/*
		String[] names = applicationContext.getBeanDefinitionNames();
		for (int i=0; i<names.length; i++) {
			System.out.println(names[i]);
		}
		*/
		
		return applicationContext.getBean(beanId);
	}
	
}
