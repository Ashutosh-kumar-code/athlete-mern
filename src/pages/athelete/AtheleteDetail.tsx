import { useState } from "react";
import Table from "../../components/table/Table"
import { useLocation } from "react-router-dom";
import axios from "axios";

type AthleteData = {
    id: number;
    name: string;
    email: string;
};

type Column<T> = {
    rowKey: keyof T | string;
    header: string;
    render?: (row: T) => void;
};

const AtheleteDetail = () => {
    const location = useLocation();
    const rowData = location.state;
    const id = location.state._id || {};

    let userDetaildata = [rowData]




    const columns: Column<AthleteData>[] = [
        { rowKey: "_id", header: "ID" },
        {
            rowKey: "name", header: "Name",
        },
        { rowKey: "email", header: "Email" },
        {
            rowKey: "action",
            header: "Action",
            render: (row: any) => (
                <div className='flex gap-3 '>
                    <button
                        className="  text-white bg-blue-500 px-5 py-1 rounded-xl text-sm"
                    >
                        daily update
                    </button>

                </div>
            )
        },
    ];
    console.log("Location State:", location.state._id);

    console.log(id, "id heeee")


    const handleRowClick = (row: any) => {
    };







    return (
        <div className="container mx-auto pt-20">
            <h1 className="py-10 text-xl font-semibold">Athelete Detail </h1>
            <Table columns={columns} data={userDetaildata} onRowClick={handleRowClick} />

        </div>
    )
}

export default AtheleteDetail
