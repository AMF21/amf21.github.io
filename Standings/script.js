function filterByTeam() {
  let input = document.getElementById("searchBox");
  let word = input.value.toLowerCase();
  let rows = document.querySelectorAll("#standingsTable tbody tr");

  for (let i = 1; i < rows.length; i++) {
      let teamNameCell = rows[i].querySelector("td:nth-child(3)");
      let teamName = teamNameCell.textContent.toLowerCase();

      if (teamName.includes(word)) {
          rows[i].style.display = "";
      } else {
          rows[i].style.display = "none";
      }
  }
}

function filterTitles() {
  let titleCheckbox = document.getElementById("titleCheckbox");
  let rows = document.querySelectorAll("#standingsTable tbody tr");

  for (let i = 1; i < rows.length; i++) {
      let teamTitlesCell = rows[i].querySelector("td:nth-child(12)");
      let teamTitles = teamTitlesCell.textContent;

      if (titleCheckbox.checked && teamTitles > 0) {
          rows[i].style.display = "";
      } else if (!titleCheckbox.checked) {
          rows[i].style.display = "";
      } else {
          rows[i].style.display = "none";
      }
  }
}