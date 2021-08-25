// creating variables depending on the ones from teacher and student pages
var studentGrade9;
var studentGrade10;
var studentGrade11;
var studentGrade12;
var studentGradeAll;
var studentGenderMale;
var studentGenderFemale;
var studentGenderBoth;
var studentClubComputer;
var studentClubBasketball;
var studentClubDeca;
var studentClubAll;
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
var announcementTextHolder = " ";
// creating a function to get all the items from local storage for them to be displayed on the page
function displayAnnouncement() {
  studentGrade9 = JSON.parse(localStorage.getItem("studentGrade9Key"));
  studentGrade10 = JSON.parse(localStorage.getItem("studentGrade10Key"));
  studentGrade11 = JSON.parse(localStorage.getItem("studentGrade11Key"));
  studentGrade12 = JSON.parse(localStorage.getItem("studentGrade12Key"));
  studentGradeAll = JSON.parse(localStorage.getItem("studentGradeAllKey"));
  studentGenderMale = JSON.parse(localStorage.getItem("studentGenderMaleKey"));
  studentGenderFemale = JSON.parse(localStorage.getItem("studentGenderFemaleKey"));
  studentGenderBoth = JSON.parse(localStorage.getItem("studentGenderBothKey"));
  studentClubComputer = JSON.parse(localStorage.getItem("studentClubComputerKey"));
  studentClubBasketball = JSON.parse(localStorage.getItem("studentClubBasketballKey"));
  studentClubDeca = JSON.parse(localStorage.getItem("studentClubDecaKey"));
  studentClubAll = JSON.parse(localStorage.getItem("studentClubAllKey"));
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
  // creating a for loop to process multiple announcements
  for (var i = 0; i < teacherGrade9.length; i++) {
    // creating an if statement to check for each categories and which ones are checked and based on that the announcement is shown
    if (((teacherGrade9[i] != null && teacherGrade9[i] == true && teacherGrade9[i] === studentGrade9) ||
      (teacherGrade10[i] != null && teacherGrade10[i] == true && teacherGrade10[i] === studentGrade10) ||
      (teacherGrade11[i] != null && teacherGrade11[i] == true && teacherGrade11[i] === studentGrade11) ||
      (teacherGrade12[i] != null && teacherGrade12[i] == true && teacherGrade12[i] === studentGrade12) ||
      (teacherGradeAll[i] != null && teacherGradeAll[i] == true && teacherGradeAll[i] === studentGradeAll))
      && ((teacherGenderMale[i] != null && teacherGenderMale[i] == true && teacherGenderMale[i] === studentGenderMale) ||
        (teacherGenderFemale[i] != null && teacherGenderFemale[i] == true && teacherGenderFemale[i] === studentGenderFemale) ||
        (teacherGenderBoth[i] != null && teacherGenderBoth[i] == true && teacherGenderBoth[i] === studentGenderBoth))
      && ((teacherClubComputer[i] != null && teacherClubComputer[i] == true && teacherClubComputer[i] === studentClubComputer) ||
        (teacherClubBasketball[i] != null && teacherClubBasketball[i] == true && teacherClubBasketball[i] === studentClubBasketball) ||
        (teacherClubDeca[i] != null && teacherClubDeca[i] == true && teacherClubDeca[i] === studentClubDeca) ||
        (teacherClubAll[i] != null && teacherClubAll[i] == true && teacherClubAll[i] === studentClubAll))) {
      // It adds the current announcement to the array when a match is found
      announcementTextHolder += (teacherAnnouncement[i] + "\n" + "\n")
      document.getElementById("studentResults").value = announcementTextHolder;
    }
    // when there is no match found then it shows No Announcement
    else if (document.getElementById("studentResults").value === "") {
      document.getElementById("studentResults").value = "No Announcement"
    }
  }
  // Displays the announcements 
  document.getElementById("studentResults").innerHTML = announcementTextHolder;
}