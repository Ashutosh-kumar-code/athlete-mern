import Table from "../../components/table/Table"
import React from 'react'
import { Link, useLocation } from "react-router-dom";


type AthleteData = {
  id: number;
  name: string;
  email: string;
};

const IndivisualAtheleteDetail = () => {
  const location = useLocation();
  let rowData = location.state;

  const data = [rowData];



  const columns: any = [
    { rowKey: "id", header: "ID" },
    {
      rowKey: "name", header: "Name"
    },
    { rowKey: "email", header: "Email" },
    {
      rowKey: "action",
      header: "Action",

    },
  ];

  return (
    <div className="container mx-auto py-28">
      <Table columns={columns} data={data} />

    </div>
  )
}

export default IndivisualAtheleteDetail
