var listOfRequests = [];
var selectedItem = "";
function bySelectedRequest(id, value) {
  $("#list").empty();
  document.getElementById("header-title").innerHTML = value + " Request/s";
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "https://reqres.in/api/users",
    data: "",
    success: function (data) {
      listOfRequests = data.data;
      for (let index = 0; index < data.data.length; index++) {
        var ul = document.getElementById("list");
        var li = document.createElement("li");
        li.appendChild(
          document.createTextNode(
            data.data[index].first_name + " " + data.data[index].last_name
          )
        );
        li.setAttribute("id", data.data[index].id);
        ul.appendChild(li);
      }
    },
  });
}
function getNumbersOfRequest(id) {
  var x = document.getElementById(id);
  if (!x.style.display || x.style.display === "none") {
    x.style.display = "block";
    x.innerHTML = 6;
  } else {
    x.style.display = "none";
  }
}

$("#list").on("click", function (e) {
  selectedItem = listOfRequests.filter((data) => {
    if (data.id === Number($(e.target).attr("id"))) return data;
  });
  if (confirm("You want to accept request of " + selectedItem[0].first_name + " " + selectedItem[0].last_name + "!")) {
    alert("Request of " + selectedItem[0].first_name + " " + selectedItem[0].last_name + " is accepted!");
  } else {
    alert("Request of " + selectedItem[0].first_name + " " + selectedItem[0].last_name + " is denied!");
  }

  listOfRequests.splice(listOfRequests.indexOf(selectedItem[0]), 1);
  $("#list").empty();
  for (let index = 0; index < listOfRequests.length; index++) {
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.appendChild(
      document.createTextNode(
        listOfRequests[index].first_name + " " + listOfRequests[index].last_name
      )
    );
    li.setAttribute("id", listOfRequests[index].id);
    ul.appendChild(li);
  }

  console.log(listOfRequests);

  // for (let index = 0; index < listOfRequests.length; index++) {
  //   selectedItem = listOfRequests[index].id === $(e.target).attr('id')
  // }
  // console.log()
});
