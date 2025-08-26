document.getElementById("ageForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let dobInput = document.getElementById("dob").value;
  let result = document.getElementById("result");

  if (!dobInput) {
    result.innerText = "⚠️ Please select your date of birth.";
    return;
  }

  let birthDate = new Date(dobInput);
  let today = new Date();

  if (birthDate > today) {
    result.innerText = "❌ Date of birth cannot be in the future!";
    return;
  }

  let ageYear = today.getFullYear() - birthDate.getFullYear();
  let ageMonth = today.getMonth() - birthDate.getMonth();
  let ageDay = today.getDate() - birthDate.getDate();

  // Adjust for negative days/months
  if (ageDay < 0) {
    ageMonth--;
    let prevMonthDays = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    ageDay += prevMonthDays;
  }

  if (ageMonth < 0) {
    ageYear--;
    ageMonth += 12;
  }

  result.innerText = `🎉 You are ${ageYear} years, ${ageMonth} months, and ${ageDay} days old.`;
});

// Clear button functionality
document.getElementById("clearBtn").addEventListener("click", function() {
  document.getElementById("dob").value = "";
  document.getElementById("result").innerText = "";
});
