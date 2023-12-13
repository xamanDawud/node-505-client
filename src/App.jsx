import { Link } from "react-router-dom";
import "./App.css";

function App() {
  let handlerSubmit = (e) => {
    e.preventDefault();
    let form = e.target;
    let name = form.name.value;
    let email = form.email.value;
    let password = form.password.value;
    let user = { name, email, password };
    console.log(user);

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          alert("User added Successfully");
        }
        form.reset();
      })
      .catch((e) => console.log(e));
  };
  return (
    <>
      <h1>
        Node 505 Mission Add <Link to={"/users"}>User</Link>
      </h1>
      <form onSubmit={handlerSubmit}>
        <input type="text" name="name" id="" placeholder="Name" /> <br />
        <input type="email" name="email" id="" placeholder="Email" />
        <br />
        <input type="password" name="password" id="" placeholder="Password" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default App;
