package poly.store.rest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import poly.store.dao.StudentDAO;
import poly.store.entity.Student;
import poly.store.entity.StudentMap;

 

@Controller
public class StudentTestController {
	@Autowired
	StudentDAO dao;
	
	@RequestMapping("/student/index")
	public String index(Model model) {
		Student student = new Student("","WEB",0.0,"");
		model.addAttribute("form", student);
		StudentMap map = dao.findAll();
		model.addAttribute("items", map);
		return "student/index";
	}
	@RequestMapping("/student/edit/{key}")
	public String edit(Model model, @PathVariable("key") String key) {
		model.addAttribute("key", key);
		Student student = dao.findByKey(key);
		model.addAttribute("form", student);
		StudentMap map = dao.findAll();
		model.addAttribute("items", map);
		return "student/index";
	}
	
	@RequestMapping("student/create")
	public String create(Student student) {
		dao.create(student);
		return "redirect:/student/index";
	}
	
	@RequestMapping("/student/update/{key}")
	public String update(@PathVariable("key") String key, Student student) {
		dao.update(key, student);
		return "redirect:/student/edit/" + key;
	}
	@RequestMapping("/student/delete/{key}")
	public String delete(@PathVariable("key") String key, Student student) {
		dao.delete(key);
		return "redirect:/student/index" ;
	}
}
