document.querySelectorAll("select").forEach(select => {
  select.addEventListener("change", function() {
    const selectedWinner = this.value;
    console.log("Winner of this matchup:", selectedWinner);
    // Update next round or store the winner for bracket logic
  });
});
