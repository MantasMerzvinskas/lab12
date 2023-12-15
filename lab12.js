function submitForm() {
  // Gauname reikiamus duomenis
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var studentId = document.getElementById('studentId').value;
  var grade1 = parseFloat(document.getElementById('grade1').value);
  var grade2 = parseFloat(document.getElementById('grade2').value);
  var grade3 = parseFloat(document.getElementById('grade3').value);
  var grade4 = parseFloat(document.getElementById('grade4').value);
  var grade5 = parseFloat(document.getElementById('grade5').value);

  // Patikriname pažymėjimo numerį
  if (!validateStudentId(studentId)) {
      alert('Neteisingas pažymėjimo numeris');
      return;
  }

  // Skaičiuojame vidurkį
  var average = (grade1 + grade2 + grade3 + grade4 + grade5) / 5;
  average = Math.round(average);

  // Nustatome vidurkio spalvą
  var color = '';
  if (average <= 4) {
      color = 'red';
  } else if (average <= 8) {
      color = 'orange';
  } else {
      color = 'green';
  }

  // Atvaizduojame rezultatus
  var resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `
      <p>${firstName}, ${lastName}(${studentId}): <span style="color: ${color};">${average}</span></p>
  `;
}

function validateStudentId(studentId) {
  // Įgyvendinkite pažymėjimo numerio patikrą pagal savo reikalavimus
  // Šiame pavyzdyje patikrinama, ar pažymėjimo numeris yra skaičius ir didesnis už 0
  return !isNaN(studentId) && parseInt(studentId) > 0;
}
function displayGreeting() {
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var studentId = document.getElementById('studentId').value;

  // Display greeting message
  alert(`HELLO ${firstName} ${lastName} ${studentId}`);
}