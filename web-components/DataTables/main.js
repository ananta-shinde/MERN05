
 

// array of object : collection entities
var users =[
    {
      "user_id": "583c3ac3f38e84297c002546",
      "email": "test@test.com",
      "name": "test@test.com",
      "given_name": "Hello",
      "family_name": "Test",
      "nickname": "test",
      "last_ip": "94.121.163.63",
      "logins_count": 15,
      "created_at": "2016-11-28T14:10:11.338Z",
      "updated_at": "2016-12-02T01:17:29.310Z",
      "last_login": "2016-12-02T01:17:29.310Z",
      "email_verified": true
    },
    {
      "user_id": "583c5484cb79a5fe593425a9",
      "email": "test1@test.com",
      "name": "test1@test.com",
      "given_name": "Hello1",
      "family_name": "Test1",
      "nickname": "test1",
      "last_ip": "94.121.168.53",
      "logins_count": 1,
      "created_at": "2016-11-28T16:00:04.209Z",
      "updated_at": "2016-11-28T16:00:47.203Z",
      "last_login": "2016-11-28T16:00:47.203Z",
      "email_verified": true
    },
    {
      "user_id": "583c57672c7686377d2f66c9",
      "email": "aaa@aaa.com",
      "name": "aaa@aaa.com",
      "given_name": "John",
      "family_name": "Dough",
      "nickname": "aaa",
      "last_ip": "94.121.168.53",
      "logins_count": 2,
      "created_at": "2016-11-28T16:12:23.777Z",
      "updated_at": "2016-11-28T16:12:52.353Z",
      "last_login": "2016-11-28T16:12:52.353Z",
      "email_verified": true
    },
    {
      "user_id": "5840b954da0529cd293d76fe",
      "email": "a@a.com",
      "name": "a@a.com",
      "given_name": "Jane",
      "family_name": "Dough",
      "nickname": "a",
      "last_ip": "94.121.163.63",
      "logins_count": 3,
      "created_at": "2016-12-01T23:59:16.473Z",
      "updated_at": "2016-12-01T23:59:53.474Z",
      "last_login": "2016-12-01T23:59:53.474Z",
      "email_verified": false
    },
    {
      "user_id": "584a9d13e808bcf75f05f580",
      "email": "test9999@test.com",
      "given_name": "Dummy",
      "family_name": "User",
      "created_at": "2016-12-09T12:01:23.787Z",
      "updated_at": "2016-12-09T12:01:23.787Z",
      "email_verified": false
    }
  ]


 function getVerifiedUsers()
 {
     return users.filter(u=>u.email_verified == true);
 }
 function getUnverifiedUsers()
 {
     return users.filter(u=>u.email_verified == false);
 }

 function getallusers()
 {
    return users;
 }

 function getUserById(id)
 {
    return users.find(u=>u.user_id == id)
 }

// var result = getVerifiedUsers();
 console.log(getUserById("5840b954da0529cd293d76fe"))


var root = document.getElementById("root");



var rowStructure = `
<tr>
  <td>2121</td>
  <td>Ananta</td>
  <td>email</td>
  <td>
    <button class="btn btn-sm btn-info">edit</button>
    <button class="btn btn-sm btn-danger">delete</button>
</td>
</tr>`

function updateRowStructure()
{
    let result= ""
    for(i=0;i<5;i++)
    {
        result =  result + rowStructure;
    }
    return result;
}

var tableStructure = `<table class="table">
<tr>
  <th>user_id</th>
  <th>name</th>
  <th>email</th>
  <th>action</th>
</tr>
 ${updateRowStructure()}
</table>`




root.innerHTML = `<div class="container-fluid">
<div class="row">
    <div class="menubar col-4 bg-secondary p-4">
        <h5>Admin Dashboard</h5>
        <ul class=" list-unstyled text-white">
            <li>view all users</li>
            <li>view verifired users</li>
            <li>view unverified users</li>
        </ul>
    </div>
    <div class="col">
    <h5></h5>
    ${tableStructure} </div>
</div>
</div>`

 


 
  







 
 
