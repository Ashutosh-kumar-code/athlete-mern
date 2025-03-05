import { Link } from 'react-router-dom';
import Table from '../../components/table/Table'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

const Athelete = () => {

    const navigate = useNavigate();

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedAthlete, setSelectedAthlete] = useState<AthleteData | null>(null);

    // Open modal and set selected row data
    const openModal = (athlete: AthleteData) => {
        setSelectedAthlete(athlete);
        setModalOpen(true);
    };

    // Close modal
    const closeModal = () => {
        setModalOpen(false);
        setSelectedAthlete(null);
    };

    const columns: Column<AthleteData>[] = [
        { rowKey: "id", header: "ID" },
        {
            rowKey: "name", header: "Name", render: (row: AthleteData) => (

                <div className='flex gap-3 ' onClick={()=> navigate("/athelete-detail",{state:row})}>
                    {row.name}
                </div>

            )
        },
        { rowKey: "email", header: "Email" },
        {
            rowKey: "action",
            header: "Action",
            render: (row: any) => (
                <div className='flex gap-3 '>
                    <button
                        className="  text-white bg-blue-500 px-5 py-1 rounded-xl text-sm "
                        onClick={() => navigate("/user-athelete-detail", { state: row })}
                    >
                        See daily data
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
        console.log("Row clicked---------------------->:", row);
    };

    return (
        <div className='pt-20 container mx-auto'>
            <h1 className="py-10 text-xl font-semibold">Athelete</h1>

            <Table columns={columns} data={data} onRowClick={handleRowClick} />
           
        </div>
    )
}

export default Athelete


// {modalOpen && selectedAthlete && (
//     <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
//         <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//             <h2 className="text-lg font-semibold mb-4">Athlete Details</h2>
//             <ul className="mb-4">
//                 <li><strong>ID:</strong> {selectedAthlete.id}</li>
//                 <li><strong>Name:</strong> {selectedAthlete.name}</li>
//                 <li><strong>Email:</strong> {selectedAthlete.email}</li>
//             </ul>
//             <button className="mt-4 bg-blue-900 text-white px-4 py-2 rounded w-full" onClick={closeModal}>
//                 Close
//             </button>
//         </div>
//     </div>
// )}