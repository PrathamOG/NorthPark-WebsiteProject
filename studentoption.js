// Creating variables for each student checkbox ids
var StudentGrade9;
var StudentGrade10;
var StudentGrade11;
var StudentGrade12;
var StudentGradeAll;
var StudentGenderMale;
var StudentGenderFemale;
var StudentGenderBoth;
var StudentClubComputer;
var StudentClubBasketball;
var StudentClubDeca;
var StudentClubAll;

// Creating a function that will intialize the checkbox value and also store it
function searchData() {
  StudentGrade9 = document.getElementById("sfgrade1").checked;
  StudentGrade10 = document.getElementById("sfgrade2").checked;
  StudentGrade11 = document.getElementById("sfgrade3").checked;
  StudentGrade12 = document.getElementById("sfgrade4").checked;
  StudentGradeAll = document.getElementById("sfgrade5").checked;
  StudentGenderMale = document.getElementById("sfgender1").checked;
  StudentGenderFemale = document.getElementById("sfgender2").checked;
  StudentGenderBoth = document.getElementById("sfgender3").checked;
  StudentClubComputer = document.getElementById("sfclub1").checked;
  StudentClubBasketball = document.getElementById("sfclub2").checked;
  StudentClubDeca = document.getElementById("sfclub3").checked;
  StudentClubAll = document.getElementById("sfclub4").checked;
  localStorage.setItem("studentGrade9Key", StudentGrade9);
  localStorage.setItem("studentGrade10Key", StudentGrade10);
  localStorage.setItem("studentGrade11Key", StudentGrade11);
  localStorage.setItem("studentGrade12Key", StudentGrade12);
  localStorage.setItem("studentGradeAllKey", StudentGradeAll);
  localStorage.setItem("studentGenderMaleKey", StudentGenderMale);
  localStorage.setItem("studentGenderFemaleKey", StudentGenderFemale);
  localStorage.setItem("studentGenderBothKey", StudentGenderBoth);
  localStorage.setItem("studentClubComputerKey", StudentClubComputer);
  localStorage.setItem("studentClubBasketballKey", StudentClubBasketball);
  localStorage.setItem("studentClubDecaKey", StudentClubDeca);
  localStorage.setItem("studentClubAllKey", StudentClubAll);
}
  // alert(StudentGrade9);
  // alert(StudentGrade10);
  // alert(StudentGrade11);
  // alert(StudentGrade12);
  // alert(StudentGradeAll);
  // alert(StudentGenderMale);
  // alert(StudentGenderFemale);
  // alert(StudentGenderBoth);
  // alert(StudentClubComputer);
  // alert(StudentClubBasketball);
  // alert(StudentClubDeca);
  // alert(StudentClubAll);
