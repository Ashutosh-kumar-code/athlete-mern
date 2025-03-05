import { useState } from "react";
import Table from "../../components/table/Table"
import { X } from 'lucide-react';
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
    const  id  = location.state._id || {};
    
    let userDetaildata = [rowData]


    const [modalOpen, setModalOpen] = useState(false);
    const [selectedAthlete, setSelectedAthlete] = useState<AthleteData | null>(null);
    const [note, setNote] = useState("");
    const openModal = (athlete: AthleteData) => {
        setSelectedAthlete(athlete);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedAthlete(null);
    };

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
                        onClick={() => openModal(row)}                    >
                        daily update
                    </button>

                </div>
            )
        },
    ];
    console.log("Location State:", location.state._id);

    console.log(id,"id heeee")


    const handleRowClick = (row: any) => {
    };

    const [selectedOption, setSelectedOption] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };



    const postData = async () => {
        try {

            const payload = {
                athleteId: "67c8848520aa6b1db2743a8c",
                tookMedicine: selectedOption ,
                notes: "I have taken medicine properly, remaining only one",
              };

          const response = await axios.post("http://localhost:5000/medicine/daily-updates",payload);
            console.log(response.data)
          closeModal()
          if(response) {
            alert("Medicine updated successfully!");
            
          }
        } catch (error:any) {
          console.error("Error Posting Data:",error.message);
        }
      };

       console.log(selectedOption)


    return (
        <div className="container mx-auto pt-20">
            <h1 className="py-10 text-xl font-semibold">Athelete Detail </h1>
            <Table columns={columns} data={userDetaildata} onRowClick={handleRowClick} />
            {modalOpen && selectedAthlete && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="flex justify-end pb-4">
                            <button onClick={closeModal} className=""> <X /></button>
                        </div>
                        <h2 className="text-lg font-semibold mb-2">
                            {selectedAthlete.name}, did you take anti-doping today?
                        </h2>
                        <div className="py-3">
                        <select
                            className=" text-black px-4 py-2 rounded cursor-pointer"
                            value={selectedOption}
                            onChange={handleChange}
                        >
                            <option value="">Select an option</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        </div>
                       
                        <label htmlFor="" className="text-base  text-gray-600 font-semibold ">Note </label>
                        <textarea
                            id="note"
                            name="note"
                            rows={4}
                            value={note}
                            className="w-full border mt-2 p-2 my-3"
                            onChange={(event)=> setNote(event.target.value)}
                            />
                        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded w-full" onClick={postData}>
                            Add
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AtheleteDetail
