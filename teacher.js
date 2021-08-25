// Creating variables for each checkbox id
var teacherGrade9 = [];
var teacherGrade10 = [];
var teacherGrade11 = [];
var teacherGrade12 = [];
var teacherGradeAll = [];
var teacherGenderMale = [];
var teacherGenderFemale = [];
var teacherGenderBoth = [];
var teacherClubComputer = [];
var teacherClubBasketball = [];
var teacherClubDeca = [];
var teacherClubAll = [];
var teacherAnnouncement = [];
// creating a counter so when ever a new announcement is created it is being added instead of replacing the old announcement
var counter = 0;

// Creating a function to store the value of each checkbox and also intialize the checkbox
function submitAnnouncement() {
  teacherGrade9[counter] = document.getElementById("grade1").checked;
  teacherGrade10[counter] = document.getElementById("grade2").checked;
  teacherGrade11[counter] = document.getElementById("grade3").checked;
  teacherGrade12[counter] = document.getElementById("grade4").checked;
  teacherGradeAll[counter] = document.getElementById("grade5").checked;
  teacherGenderMale[counter] = document.getElementById("gender1").checked;
  teacherGenderFemale[counter] = document.getElementById("gender2").checked;
  teacherGenderBoth[counter] = document.getElementById("gender3").checked;
  teacherClubComputer[counter] = document.getElementById("club1").checked;
  teacherClubBasketball[counter] = document.getElementById("club2").checked;
  teacherClubDeca[counter] = document.getElementById("club3").checked;
  teacherClubAll[counter] = document.getElementById("club4").checked;
  teacherAnnouncement[counter] = document.getElementById("teacherAnnouncement").value;
  localStorage.setItem("teacherGrade9Key", JSON.stringify(teacherGrade9));
  localStorage.setItem("teacherGrade10Key", JSON.stringify(teacherGrade10));
  localStorage.setItem("teacherGrade11Key", JSON.stringify(teacherGrade11));
  localStorage.setItem("teacherGrade12Key", JSON.stringify(teacherGrade12));
  localStorage.setItem("teacherGradeAllKey", JSON.stringify(teacherGradeAll));
  localStorage.setItem("teacherGenderMaleKey", JSON.stringify(teacherGenderMale));
  localStorage.setItem("teacherGenderFemaleKey", JSON.stringify(teacherGenderFemale));
  localStorage.setItem("teacherGenderBothKey", JSON.stringify(teacherGenderBoth));
  localStorage.setItem("teacherClubComputerKey", JSON.stringify(teacherClubComputer));
  localStorage.setItem("teacherClubBasketballKey", JSON.stringify(teacherClubBasketball));
  localStorage.setItem("teacherClubDecaKey", JSON.stringify(teacherClubDeca));
  localStorage.setItem("teacherClubAllKey", JSON.stringify(teacherClubAll));
  localStorage.setItem("teacherAnnouncementKey", JSON.stringify(teacherAnnouncement));
  // Intializing the counter for the announcement to go in the array
  counter++;
}
// Creating a function that stores the variables in an array
function getAnnouncement() {
  if(JSON.parse(localStorage.getItem("teacherGrade9Key")!=null)) {
    teacherGrade9 = JSON.parse(localStorage.getItem("teacherGrade9Key"));
    teacherGrade10 = JSON.parse(localStorage.getItem("teacherGrade10Key"));
    teacherGrade11 = JSON.parse(localStorage.getItem("teacherGrade11Key"));
    teacherGrade12 = JSON.parse(localStorage.getItem("teacherGrade12Key"));
    teacherGradeAll = JSON.parse(localStorage.getItem("teacherGradeAllKey"));
    teacherGenderMale = JSON.parse(localStorage.getItem("teacherGenderMaleKey"));
    teacherGenderFemale = JSON.parse(localStorage.getItem("teacherGenderFemaleKey"));
    teacherGenderBoth = JSON.parse(localStorage.getItem("teacherGenderBothKey"));
    teacherClubComputer = JSON.parse(localStorage.getItem("teacherClubComputerKey"));
    teacherClubBasketball = JSON.parse(localStorage.getItem("teacherClubBasketballKey"));
    teacherClubDeca = JSON.parse(localStorage.getItem("teacherClubDecaKey"));
    teacherClubAll = JSON.parse(localStorage.getItem("teacherClubAllKey"));
    teacherAnnouncement = JSON.parse(localStorage.getItem("teacherAnnouncementKey"));
    counter = teacherGrade9.length;
  }
}