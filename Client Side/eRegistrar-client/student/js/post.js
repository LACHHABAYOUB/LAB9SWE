(function(){
    addStudent();
})();

// Window.onload



function addStudent() {

  const studentForm = document.getElementById("studentForm");

    const studentnumber = document.querySelector("#studentNumber");
    const firstname =  document.querySelector("#firstname");
    const middlename =  document.querySelector("#middleName");
    const lastname =  document.querySelector("#lastname");
    const enrollmentDate =  document.querySelector("#enrollmentDate");
    const cgpa =  document.querySelector("#cgpa");
    const isinternational =  document.querySelector("#isInternational");

    studentForm.addEventListener("submit", function(e) {
      e.preventDefault();
      //const formData = new FormData(this);


      const thestudentnumber = studentnumber.value;
      const thefirstname = firstname.value;
      const themiddlename = middlename.value;
      const thelastname = lastname.value;
      const theenrollmentDate = enrollmentDate.value;
      const thecgpa = parseFloat(cgpa.value);
      const theisinternational = isinternational.value;


      const data = {
        "studentNumber": thestudentnumber,
        "firstname": thefirstname,
        "lastname": thelastname,
        "cgpa": thecgpa,
        "enrollmentDate": theenrollmentDate,
        "isInternational": theisinternational,
        "middleName": themiddlename
      };

      console.log(data)
      // Remember to set Data/MIME type
      fetch("http://localhost:8080/eregistrar/api/student/register", {
        method: "post",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function(response) {
        return {"status": "ok"}; //response.json();
    }).then(function (jsonResponseData) {
        console.log(jsonResponseData);   
        
        window.location.href = "/list.html";

    }).catch(function(error) {
        console.error(error);
    })
  
      });
   
}