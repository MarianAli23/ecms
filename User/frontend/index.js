const complaintButton = document.getElementById("complaintForm");

complaintButton.addEventListener("click", function () {});
// JavaScript code to handle form submission
const form = document.getElementById("complaintForm");
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the form from submitting normally

  // Retrieve the form data
  const AccusedEmployee = document.getElementById("accusedEmployee").value;
  const IncidentDate = document.getElementById("incidentDate").value;
  const ComplaintDescription = document.getElementById(
    "complaintDescription"
  ).value;
  const ContactInfo =
    document.getElementById("contactInformation").value;

  // Perform a POST request to the server  
  fetch("http://localhost:5010/employee-complaint-form", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      AccusedEmployee,
      IncidentDate,
      ComplaintDescription,
      ContactInfo
    }),
  })
    .then((response) => {
      console.log(response);
      return response.json(); // Parse the response body as JSON
    })
    .then((data) => {
      console.log(data); // Access the response data
    })
    .catch((err) => {
      console.error(err);
    });
  
  // Clear the form
  form.reset();
  alert("Complaint submitted successfully!");
});

const deleteButton = document.getElementById("delete_form")

//Button deletes info, change number to delete
deleteButton.addEventListener("click", (event) => {
  fetch("http://localhost:5010/employee-complaint-form/2", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((data) => {
      console.log(data); // Access the response data
    })
    .catch((err) => {
      console.error(err);
    });
})
