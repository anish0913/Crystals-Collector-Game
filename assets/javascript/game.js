$(document).ready(function() 
{

	  //Variables
	  var winCount = 0; 
	  var lossCount = 0; 
	  var userScore = 0; 
	  var computerScore = Math.floor(Math.random() * 102) + 19; 
	  var first = Math.floor(Math.random() * 12) + 1; 
	  var second = Math.floor(Math.random() * 12) + 1; 
	  var third = Math.floor(Math.random() * 12) + 1; 
	  var fourth = Math.floor(Math.random() * 12) + 1; 

	  //Displays text score
	  $("#winnerScore").text("Wins: " + winCount);
	  $("#loserScore").text("Losses: " + lossCount);
	  $("#scoreLimit").text("Game Score: " + computerScore);
	  $("#playerScore").text("User Score: " + userScore);

  
	// Reset Function
	function resetGame() 
	{
	  userScore = 0;
	  computerScore = Math.floor(Math.random() * 102) + 19; 
	  first = Math.floor(Math.random() * 12) + 1; 
	  second = Math.floor(Math.random() * 12) + 1; 
	  third = Math.floor(Math.random() * 12) + 1; 
	  fourth = Math.floor(Math.random() * 12) + 1; 
	  $("#scoreLimit").text("Game Score: " + computerScore);
	  $("#playerScore").text("User Score: " + userScore);

	}
  
// Click Function
	function winGame() 
	{
	  alert("Winner Winner!");
	  winCount = winCount + 1;
	  $("#winnerScore").text("Wins: " + winCount);
	  resetGame();
	}
  
// Click Function
	function loseGame() 
	{
	  alert("OOOO... So Close!");
	  lossCount = lossCount + 1;
	  $("#loserScore").text("Losses: " + lossCount);
	  resetGame();
	}
  
	// Click Function
	$("#crystal1").click(function() 
	{
	  userScore = userScore + first; 
	  $("#playerScore").text("User Score: " + userScore);
		if (userScore === computerScore) 
		{
		  winGame();
		} else if (userScore > computerScore) 
		{
		  loseGame();
		}
	});
  
	// Click Function
	$("#crystal2").click(function() 
	{
	  userScore = userScore + second; 
		$("#playerScore").text("User Score: " + userScore);
		if (userScore === computerScore) 
		{
		  winGame();
		} else if (userScore > computerScore) 
		{
		  loseGame();
		}
	});
  
	// Click Function
	$("#crystal3").click(function() 
	{
	  userScore = userScore + third; 
		$("#playerScore").text("User Score: " + userScore);
		if (userScore === computerScore) 
		{
		  winGame();
		} else if (userScore > computerScore) 
		{
		  loseGame();
		}
	});
  
	// Click Function
	$("#crystal4").click(function() 
	{
	  userScore = userScore + fourth; 
	  $("#playerScore").text("User Score: " + userScore);
		if (userScore === computerScore) 
		{
		  winGame();
		} else if (userScore > computerScore) 
		{
		  loseGame();
		}
	});
  
  });