import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "../../firebase";
import React from "react";
import {
  getDoc,
  getFirestore,
  collection,
  updateDoc,
  where,
  doc,
  query,
  getDocs,
  collectionGroup,
} from "@firebase/firestore";

const UserList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getDocs(collection(db, "users")).then((snapshot) => {
      let data = [];
      snapshot.forEach((doc) => data.push({...doc.data(), id: doc.id}))
      data = data.filter(user => user.username !== undefined)
      setData(data);
      console.log("data",data);
    });
  }, []);
  // const handleDelete = (id) => {
  //   setData(filter((item) => item.id !== id));
  // };
  const columns = [
    { field: `owner_uid`, headerName: "User Id", width: 450 },
    {
      field: `username`,
      headerName: "User Name",
      width: 450,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.profilePic} alt="" />
            {`${params.row.username}`}
          </div>
        );
      },
    },
    { field: `email`, headerName: "E-mail", width: 400 },
    // {
    //   field: "action",
    //   headerName: "Action",
    //   width: 250,
    //   renderCell: (params) => {
        
    //     return (
    //       <>
    //         {/* <Link to={"/user/" + `${params.row.owner_uid}`}>
    //           <button className="userListEdit">Edit</button>
    //         </Link> */}
    //         {/* <DeleteOutline
    //           className="userListDelete"
    //           onClick={() =>""}
    //         /> */}
    //       </>
    //     );
    //   },
    // },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={20}
        // checkboxSelection
      />
    </div>
  );
};

export default UserList;
