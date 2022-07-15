## guard

ng generate guard [name]
ng generate g [name]

在给定或默认项目中生成新的通用路由守卫定义。

参数

参数	说明	值类型

name	新路由守卫的名称。 string

## 选项

选项	         说明	                                              值类型	          默认值

--flat	       如果为 true（默认值），则在当前项目的顶层创建新文件。  boolean	        true
--implements	 指定要实现的接口。                                   array	
--project	     项目的名称。                                         string	
--skip-tests	 不要为新守卫创建 “spec.ts” 测试文件。                boolean          false