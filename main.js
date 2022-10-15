function bySelectedRequest(id, value) {
  $("#list").empty();
  document.getElementById("header-title").innerHTML = value + " Request/s";
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "https://reqres.in/api/users",
    data: "",
    success: function (data) {
      for (let index = 0; index < data.data.length; index++) {
        var ul = document.getElementById("list");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(data.data[index].first_name + " " + data.data[index].last_name));
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