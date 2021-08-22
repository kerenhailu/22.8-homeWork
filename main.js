// const tasks = [
//   {
//     Name: "One",
//     IsCompleted: "true",
//   },
//   { Name: "Two", IsCompleted: false },
//   { Name: "Three", IsCompleted: true },
//   { Name: "Four", IsCompleted: false },
//   { Name: "Five", IsCompleted: true },
// ];
// for (let i = 0; i < tasks.length; i++) {
//   document.write(`<p>${tasks[i].Name} , ${tasks[i].IsCompleted}</p>`);
// }
// document.getElementById("input");

// document.getElementById("btn").addEventListener("click", function () {
//   // document.write(input.value);
//   var obj = { Name: input.value, IsCompleted: true };
//   tasks.push(obj);
//   document.getElementById(
//     "newwww"
//   ).innerHTML += `<p>${obj.Name},${obj.IsCompleted}</p>`;
//   console.log(tasks);
// });
// //   tasks.innerHtTML += tasks.push(obj.innerText);
// for (let i = 0; i < tasks.length; i++) {
//   tasks[i].id = Math.floor(Math.random() * 1000);
//   if (tasks[i].id == Math.floor(Math.random() * 2000)) {
//     document.write(`the random number and the id is the same`);
//   } else {
//     document.write(`id =${tasks[i].id} , random num=${Math.floor(
//       Math.random() * 2000
//     )}
//     the random number and the id is nott the same`);
//   }
//   if (tasks[i].IsCompleted) {
//     document.write(`<p style="background:red">${tasks[i].Name}</p>`);
//   } else {
//     document.write(`<p>${tasks[i].Name}</p>`);
//   }
// }
// var Movies = [
//   {
//     Name: "football",
//     img: "https://media.istockphoto.com/photos/silhouette-action-sport-picture-id1272269793?b=1&k=6&m=1272269793&s=170667a&w=0&h=D2tH4CQfPqNphREDMzkxbPtWdYDGWZuRCvM8iUSWwx4=",
//     actors: "Tom,Kim,Sun",
//   },
//   {
//     Name: "tennis",
//     img: "https://cdn.pixabay.com/photo/2016/05/09/11/09/tennis-1381230__480.jpg",
//     actors: "Yacov,Avi,Tal",
//   },
//   {
//     Name: "FastAndFurious",
//     img: "https://cdn.pixabay.com/photo/2020/02/29/06/35/race-4889229__480.png",
//     actors: "Eyal,Asaf,roni",
//   },
// ];

// for (let i = 0; i < Movies.length; i++) {
//   document.write(`<p>${Movies[i].Name}: ,${Movies[i].actors}</p>`);
// }
// document.getElementById("btnMovies").addEventListener("click", function () {
//   document.getElementById("inputMovies");
//   var newMovies = {
//     Name: inputMovies.value,
//     img: "https://cdn.pixabay.com/photo/2014/04/07/17/57/moomin-318795__340.jpg",
//     actors: "May,Snopkin,Momin",
//   };
//   Movies.push(newMovies);
//   document.getElementById("seret").innerHTML += `<p>${newMovies.Name}</p>`;
//   // document.write(`<p>${Movies.Name}</p>`)
//   console.log(Movies);
// });
// ---------------------------------------- 3 ?????
var arraya = [];
document.getElementById("one");
document.getElementById("two");
const bottunUser = document.getElementById("btnOneTwo");

bottunUser.onclick = function () {
  var objectOne = {
    Ones: document.getElementById("one").value,
    Twos: document.getElementById("two").value,
  };
  arraya.push(objectOne);
  document.write(`<p>${objectOne.Ones}${objectOne.Twos}</p>`);
  console.log(objectOne);
};

// ---------------------------------------- 4
var FormSendArray = [];
document.getElementById("FirstName"),
  document.getElementById("Email"),
  document.getElementById("Agea"),
  document.getElementById("btnForm").addEventListener("click", function () {
    var FormSend = {
      Name: document.getElementById("FirstName").value,
      HisEmail: document.getElementById("Email").value,
      HisAge: document.getElementById("Agea").value,
    };
    FormSendArray.push(FormSend);
    document.write(
      `<p>${FormSend.Name},${FormSend.HisEmail},${FormSend.HisAge}</p>`
    );
    console.log(FormSend);
  });
// ---------------------------------------- 5
araayFive = [];
document.getElementById("Name5");
document.getElementById("famName5");
document.getElementById("btn5").addEventListener("click", function () {
  var five = {
    Name: document.getElementById("Name5").value,
    FamName: document.getElementById("famName5").value,
  };
  araayFive.push(five);
  document.write(`<p>${five.Name},${five.FamName}</p>`);
});
// ---------------------------------------- 6
for (let i = 0; i < 10; i++) {
  document.write(`<p> i : ${[i]}</p>`);
}
// ---------------------------------------- 7
var aeeayEmail = [
  "keren4509@gmail.com",
  "yafit11@gmail.com",
  "tikva12@gmail.com",
  "eden88@gmail.com",
];
var inputEmaill = document.getElementById("inputEmail");
document.getElementById("btnEmail").addEventListener("click", function () {
  for (let i = 0; i < aeeayEmail.length; i++) {
    if (aeeayEmail[i] == inputEmaill.value) {
      document.write(`the email is the same`);
    } else {
      document.write(`the email is nottt the same`);
    }
  }
});
// ---------------------------------------- 8
document.getElementById("mahrozet");
document.getElementById("btnMahrozet").addEventListener("click", function () {
  document.write(
    `<p>${document.getElementById("mahrozet").value}</p>, <p>${
      document.getElementById("mahrozet").value.length
    }</p>`
  );
});
// ---------------------------------------- 9
araayPerson = {
  NamePerson: "keren hailu",
  CityPerson: "israel , yehod",
  AgePerson: 22,
  flagPerson: `<p><img src="https://cdn.pixabay.com/photo/2012/04/10/23/17/ethiopia-26943__340.png"></p>`,
};
document.getElementById("NamePerson");
document.getElementById("CityPerson");
document.getElementById("flagPerson");
document.getElementById("AgePerson");
document.write(`${araayPerson.NamePerson},${araayPerson.CityPerson},
  ${araayPerson.AgePerson},${araayPerson.flagPerson}`);
