import { Link, useLoaderData } from "react-router-dom";

const UpdateUser = () => {
  let usersData = useLoaderData();
  let handlerUpdate = (e) => {
    e.preventDefault();
    let form = e.target;
    let name = form.name.value;
    let email = form.email.value;
    let password = form.password.value;
    let user = { name, email, password };

    fetch(`http://localhost:3000/users/${usersData._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("User updated successfully");
        }
        form.reset();
      })
      .catch((e) => console.log(e));
  };
  return (
    <div>
      <h1>
        Update this <Link to={"/users"}>User</Link> information
      </h1>
      <form onSubmit={handlerUpdate}>
        <input type="text" name="name" id="" defaultValue={usersData.name} />
        <br />
        <input type="email" name="email" id="" defaultValue={usersData.email} />
        <br />
        <input
          type="password"
          name="password"
          id=""
          defaultValue={usersData.password}
        />
        <br />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default UpdateUser;
