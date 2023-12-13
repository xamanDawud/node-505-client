import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  let loadedData = useLoaderData();
  let [updatedData, setUpdatedData] = useState(loadedData);
  let deleteHanlder = (_id) => {
    fetch(`http://localhost:3000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("user deleted successfully");
        }
        let remaining = updatedData.filter((d) => d._id !== _id);
        setUpdatedData(remaining);
      })
      .catch((e) => console.log(e));
  };

  let handlerUpdate = (_id) => {
    console.log(_id);
  };

  return (
    <div>
      <h1>
        All Database <Link to={"/"}>Users</Link> {loadedData.length}
      </h1>
      {updatedData.map((user) => (
        <p key={user._id}>
          {" "}
          Name:- {user.name} Id- {user._id}
          <button
            onClick={() => {
              deleteHanlder(user._id);
            }}
          >
            Delete
          </button>
          <Link to={`/users/${user._id}`}>
            <button onClick={() => handlerUpdate(user._id)}>Update</button>
          </Link>
        </p>
      ))}
    </div>
  );
};

export default Users;
