let username;

function getUsername() {
  try {
    return username;
  } catch (error) {
    console.log(error.message);
  }
}

function setUsername(name) {
  try {
    username = name;
  } catch (error) {
    console.log(error.message);
  }
}

export default { getUsername, setUsername, username };
