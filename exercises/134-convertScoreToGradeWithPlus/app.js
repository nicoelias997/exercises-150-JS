function convertScoreToGrade(score) {
	let puntaje = "";
  if(score < 0 || score > 100){
    puntaje = "Invalid score"
  }
  if(score <= 100 && score >= 90){
    puntaje = "A"
    if(score < 93){
      puntaje = "-A"
    }
    if(score > 98){
      puntaje = "A+"
    }
  }
  if(score < 90 && score >= 80){
    puntaje = "B"
     if(score < 83){
      puntaje = "-B"
    }
    if(score > 88){
      puntaje = "B+"
    }
  }
  if(score < 80 && score >= 70){
    puntaje = "C"
     if(score < 73){
      puntaje = "-C"
    }
    if(score > 78){
      puntaje = "C+"
    }
  }
  if(score < 70 && score >= 60){
    puntaje = "D"
     if(score < 63){
      puntaje = "-D"
    }
    if(score > 68){
      puntaje = "D+"
    }
  }
  if(score > 0 && score < 60){
    puntaje = "F"
  }
  
  return puntaje
}

convertScoreToGrade(99); //"A*"
convertScoreToGrade(91); //"-A"
convertScoreToGrade(70); //"-C"
convertScoreToGrade(50); //"F"
convertScoreToGrade(101); //"Invalid score"
convertScoreToGrade(-2); //"Invalid score"