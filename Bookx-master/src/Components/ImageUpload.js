import React, { useEffect } from "react";
import { app } from "../config/firebase";

const db = app.firestore();

function ImageUplaod() {
  const [fileUrl, setFileUrl] = React.useState(null);
  const [users, setUsers] = React.useState([]);

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const desc = e.target.desc.value;
    if (!username || !fileUrl) {
      return;
    }
    await db.collection("users").doc(username).set({
      name: username,
      desc:desc,
      avatar: fileUrl,
    });
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = await db.collection("users").get();
      setUsers(
        usersCollection.docs.map((doc) => {
          return doc.data();
        })
      );
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="file" onChange={onFileChange} />
        <input type="text" name="username" placeholder="NAME" />
        <input type="text" name="desc" placeholder="Add Description" />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.name}>
              <img width="100" height="100" src={user.avatar} alt={user.name} />
              <p>{user.name}</p>
              <p>{user.desc}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ImageUplaod;
