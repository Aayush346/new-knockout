document.getElementById("team-form").addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Get teams from input fields
  const teams = [
    document.getElementById("team1").value,
    document.getElementById("team2").value,
    document.getElementById("team3").value,
    document.getElementById("team4").value
  ];
  
  // Generate matchups
  generateMatchups(teams);
});

function generateMatchups(teams) {
  const bracket = document.getElementById("bracket");
  bracket.innerHTML = "";  // Clear previous matchups
  
  // Pair the teams into matchups
  for (let i = 0; i < teams.length; i += 2) {
    const matchupDiv = document.createElement("div");
    matchupDiv.classList.add("matchup");
    
    const team1 = document.createElement("span");
    team1.textContent = teams[i];
    
    const vs = document.createElement("span");
    vs.textContent = "VS";
    
    const team2 = document.createElement("span");
    team2.textContent = teams[i + 1];
    
    const winnerSelect = document.createElement("select");
    const option1 = document.createElement("option");
    option1.value = teams[i];
    option1.textContent = teams[i];
    const option2 = document.createElement("option");
    option2.value = teams[i + 1];
    option2.textContent = teams[i + 1];
    
    winnerSelect.appendChild(option1);
    winnerSelect.appendChild(option2);
    
    matchupDiv.appendChild(team1);
    matchupDiv.appendChild(vs);
    matchupDiv.appendChild(team2);
    matchupDiv.appendChild(winnerSelect);
    
    bracket.appendChild(matchupDiv);
  }
}
