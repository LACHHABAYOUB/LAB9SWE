package com.mumSchud.springbootmum.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import com.mumSchud.springbootmum.entity.Student;
import com.mumSchud.springbootmum.service.studentService;

@Controller
@CrossOrigin(origins = "http://127.0.0.1:5500/,http://127.0.0.1:5500/registerForm.html")

public class StudentController {
	  @Autowired
	    private studentService service;

	@GetMapping("/")
	public String showHomepage() {
		return "index";
	}

	@RequestMapping("/students")
	public String studentPortal(Model model) {
		List<Student>students=service.getStudents();
		model.addAttribute("students", students);
		return "students";
	}
	
	@RequestMapping("/students/{id}")
	public String updatePage(Model model,@PathVariable int id) {
		Student student=service.getStudentById(id);
    	model.addAttribute("student", student);
		return "studentUpdate";
	}


	@RestController
	public class StudentRestController {


		@GetMapping("/eregistrar/api/student/list")
		public List<Student> sample() {
			return service.getStudents();
		}


		@PostMapping("/eregistrar/api/student/register")
		public Student create(@RequestBody Student student){
			return service.saveStudent(student);
		}

		@GetMapping("eregistrar/api/student/get/{id}")
		public Student findStudentById(@PathVariable int id) {
			return service.getStudentById(id);
		}


		@PutMapping("eregistrar/api/student/get/{id}")
		public Student updateStudent(@RequestBody Student student, @PathVariable int id) {
			return service.updateStudent(student, id);
		}

		@RequestMapping(value = "/eregistrar/api/student/delete/{id}", method = RequestMethod.DELETE)
		public void delete(@PathVariable int id){
			service.deleteStudent(id);
		}



	}
}