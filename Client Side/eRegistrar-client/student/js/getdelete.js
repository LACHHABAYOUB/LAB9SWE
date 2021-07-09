/**
 * elibraryapp.js
 */
// IIFE - Immediately Invoked Function Expression
(function(){
    getStudents();
})();

// Window.onload
// window.onload = getBooks;
class RestHTTP {

    async delete(url) {

        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        });

        const resData = 'resource deleted...';

        return resData;
    }
}

function deleteStudent(url) {
    const http = new RestHTTP;
    var urlB = "http://localhost:8080/eregistrar/api/student/delete/";
    var r = confirm("Are you sur you want to delete ? ");
    if (r == true) {
        http.delete(urlB + url)

            .then(data => {
                location.reload();
                console.log(data)
            })
            .catch(err => console.log(err));

    }
}

function getStudents() {
    fetch("http://localhost:8080/eregistrar/api/student/list")
    .then((response) => {
        if(response.ok) {
            return response.json();
        } else {
            return Promise.reject({status: response.status, statusText: response.statusText});
        }
    })
    .then(students => {
        
        let content = "";
        students.forEach((student, i) => {
            
            content += `
                <tr>
                    <th scope="row">${i+1}.</th>
                    <td>${student.studentNumber}</td>
                    <td>${student.firstname}</td>
                    <td>${student.middleName}</td>
                    <td>${student.lastname}</td>
                    <td>${student.cgpa}</td>
                    <td>${student.enrollmentDate}</td>
                    <td>${student.isInternational}</td>
                    
                    <td> <button style="background-color: #FF0000; color: white;"
                    id="submit-btn"
                    onClick="deleteStudent([[${student.id}]])"
                    class="d-block btn btn-outline-secondary ms-auto">
                Delete
                </button></td>
                    
                </tr>
            `;
        });
        // output it here
        document.querySelector("#tbody").innerHTML = content;
    })
    .catch(err => {
        console.error("Error message:", err.statusText);
        const errorRow = `
            <tr>
                <td style='color: red;' colspan="5">An error was encountered</td>
            </tr>
        `;
        document.querySelector("#tbody").innerHTML = errorRow;
    });
}


function updateStudent(url){
    const http = new easyHTTP; 
    
    let id=url;
    let studentnumber=document.getElementById("studentnumber").value;
    let firstname=document.getElementById("firstname").value;
    let middleName=document.getElementById("middleName").value;
    let lastName=document.getElementById("lastName").value;
    let enrollmentDate=document.getElementById("enrollmentDate").value;
    let cgpa=document.getElementById("cgpa").value;
    let isinternational=document.getElementById("isInternational").value;

    
    
    var urlB="http://localhost:8080/eregistrar/api/student/register/";
    
    
    const data = {
        id:id,
        studentnumber:studentnumber,
        firstname: firstname, 
        middleName:middleName,
        lastname: lastName, 
        enrollmentDate: enrollmentDate,
        cgpa:cgpa,
        isinternational,isinternational
      }   
 
    http.put(urlB,data, function(err, post){ 
      if(err) { 
        console.log(err); 
      } else { 
        window.location.href = "/list.html";    
      } 
    }); 
    }