import { useState } from "react";
import Table from "../../components/table/Table"


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

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedAthlete, setSelectedAthlete] = useState<AthleteData | null>(null);

    const openModal = (athlete: AthleteData) => {
        setSelectedAthlete(athlete);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedAthlete(null);
    };

    const columns: Column<AthleteData>[] = [
        { rowKey: "id", header: "ID" },
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



    const data: AthleteData[] = [
        { id: 1, name: "John Doe", email: "john@example.com" },
        { id: 2, name: "Jane Smith", email: "jane@example.com" },
    ];

    const handleRowClick = (row: any) => {
        console.log("Row clicked:", row);
    };
    
    return (
        <div className="container mx-auto pt-20">
            <h1 className="py-10 text-xl font-semibold">Athelete Detail </h1>
            <Table columns={columns} data={data} onRowClick={handleRowClick} />
            {modalOpen && selectedAthlete && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-lg font-semibold mb-4">
                            {selectedAthlete.name}, did you take anti-doping today?
                        </h2>
                        <label htmlFor="" className="text-base  text-gray-600 font-semibold">Note :</label>
                        <textarea
                            id="note"
                            name="note"
                            rows={4}
                            className="w-full border mt-2 p-2 my-3" />
                        <div className="flex gap-3 items-center">

                            <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={closeModal}>
                                Yes
                            </button>
                            <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={closeModal}>
                                No
                            </button>
                        </div>
                        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded w-full" onClick={closeModal}>
                            Add
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AtheleteDetail
