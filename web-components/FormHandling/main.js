
const data = new URLSearchParams(window.location.search)
          var info = document.getElementById("info");
          info.innerHTML = `
          <label>Full Name :</label>${data.get("firstName")+" "+data.get("middleName")+" "+data.get("lastName")}<br>
          <label>email :</label> ${data.get("email")}<br>
          <label>Qualification :</label> ${data.get("qualification")}<br>
          <label>contact :</label> ${data.get("contact")}<br>
          <label>dob :</label> ${data.get("dob")}<br>
          `