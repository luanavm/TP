
const handlerResponse = (response) =>{
  const userList = $("#userList")
  userList.empty()
  response.forEach(user => {
    const newLi = document.createElement('li')
    newLi.innerText = user.name
    userList.append(newLi)
  });
}

const loadUsers = $("#loadUsers");
const toggleUserList = () => {
  const userList = $("#userList");
  userList.toggle();
}

const fetchUsers =() =>{
$.get("https://jsonplaceholder.typicode.com/users",handlerResponse);

}

loadUsers.on("click",fetchUsers);
loadUsers.on("click",toggleUserList);