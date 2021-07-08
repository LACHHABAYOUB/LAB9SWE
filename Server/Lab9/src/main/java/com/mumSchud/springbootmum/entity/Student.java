package com.mumSchud.springbootmum.entity;

import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.LocalDate;
import java.util.Date;

@Data
@AllArgsConstructor
@Entity
@Table(name = "STUDENT_TBL")
@Getter
@Setter
public class Student {

    @Id
    @GeneratedValue
    private int id;
	private String studentNumber;
	private String firstname;
	private String MiddleName;
    private String lastname;
    private String cgpa;
    private String enrollmentDate;

	private String isInternational;


	public Student(String studentNumber ,String firstname,String MiddleName, String lastname, String cgpa, String enrollmentDate,String isInternational) {
		this.studentNumber=studentNumber;
		this.firstname=firstname;
		this.MiddleName=MiddleName;
		this.lastname=lastname;
		this.cgpa=cgpa;
		this.enrollmentDate=enrollmentDate;
		this.isInternational=isInternational;
	}
	public Student() {
	}

}