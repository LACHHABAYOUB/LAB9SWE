/**
 * elibraryapp.js
 */
// IIFE - Immediately Invoked Function Expression
(function(){
    getStudents();
})();

// Window.onload
// window.onload = getBooks;

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
                    <td>${student.studentId}</td>
                    <td>${student.studentNumber}</td>
                    <td>${student.firstName}</td>
                    <td>${student.middleName}</td>
                    <td>${student.lastName}</td>
                    <td>${student.cgpa}</td>
                    <td>${student.enrollmentDate}</td>
                    <td>${student.isInternational}</td>
                    
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