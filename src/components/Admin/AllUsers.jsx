import { useTheme } from "@emotion/react";
import { AdminPanelSettingsOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { collection, getDocs } from "firebase/firestore";
import React from "react";
import { Stack } from "react-bootstrap";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { fireStore } from "../../firebase";
import shortid from "shortid";

const AllUsers = () => {
  const collectionRef = collection(fireStore, "users");
  const [allData ,loading , error] = useCollectionData(collectionRef);
  console.log(allData ,loading,error)
 
  const rows = allData?.map((item) => ({
    id: shortid.generate(),
    ID: item.id,
    name: item.displayName,
    email: item.Email,
    role: item.auth,
  }));

// const rows = {}
  const columns = [
    {
      field: "ID",
      headerName: "الرقم التعريفي",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "الاسم",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "الايميل",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "role",
      headerName: "الدور",
      flex: 1,
      align: "center",
      headerAlign: "center",
        
    },
  ];
  return (
    <div
      style={{
        height: "300",
        width: "100%",
        direction: "rtl",
        justifyContent: "flex-start",
      }}
    >
      {!loading ? (<DataGrid
        style={{ justifyContent: "center" }}
        rows={rows}
        columns={columns}
      />):(<h1>من فضلك انتظر قليلا</h1>)}
    </div>
  );
};

export default AllUsers;
