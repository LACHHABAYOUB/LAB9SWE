/**
 * elibraryapp.js
 */
// IIFE - Immediately Invoked Function Expression
(function(){
    addStudent();
})();

// Window.onload
// window.onload = getBooks;

function addStudent() {


    let studentnumber = document.getElementById("studentNumber").value;
    let firstname =  document.getElementById("firstName").value;
    let middlename =  document.getElementById("middleName").value;
    let lastname =  document.getElementById("lastName").value;
    let enrollmentDate =  document.getElementById("enrollmentDate").value;
    let cgpa =  document.getElementById("cgpa").value;
    let isinternational =  document.getElementById("isInternational").value;

    const data ={
        studentNumber:studentnumber,
        firstName:firstname,
        middleName:middlename,
        lastName:lastname,
        enrollmentDate:enrollmentdate,
        cgpa:cgpa,
        isInternational: isinternational



    }
    fetch("http://localhost:8080/eregistrar/api/student/register", {
        method: "POST", 
        body: JSON.stringify(data)
      }).then(res => {
        console.log("Request complete! response:", res);
      });
   
}