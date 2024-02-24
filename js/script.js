document.addEventListener("DOMContentLoaded", function () {
  const fullNameInput = document.getElementById("fullName");
  const convertBtn = document.getElementById("abbreBtn");
  const resultDiv = document.getElementById("result");

  convertBtn.addEventListener("click", function () {
    const fullName = fullNameInput.value.trim(); 
    const abbreviation = getAbbreviation(fullName); 
    if (abbreviation) {
      resultDiv.textContent = "Abbreviate Name: " + abbreviation; return
    } else {
      resultDiv.textContent = "Insert you name !!!";
    }
  });

  function getAbbreviation(fullName) {
    if (!fullName) return null;

    const words = fullName.split(" ");

    const abbreviation = words
      .map((word) => word.charAt(0).toUpperCase())
      .join("");

    return abbreviation;
  }
});
