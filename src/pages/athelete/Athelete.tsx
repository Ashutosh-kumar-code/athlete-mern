import { Link } from 'react-router-dom';
import Table from '../../components/table/Table'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

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



    const [athletes, setAthletes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAthletes = async () => {
      try {
        const response = await axios.get("http://localhost:5000/all-athletes");
        setAthletes(response.data);
      } catch (error) {
        toast.warn("No athletes found or server error");
      } finally {
        setLoading(false);
      }
    };

    fetchAthletes();
  }, []);

  if (loading) return <p>Loading...</p>;

    const columns: Column<AthleteData>[] = [
        { rowKey: "_id", header: "ID" },
        {
            rowKey: "name", header: "Name", render: (row: AthleteData) => (
                <div className='flex gap-3 ' onClick={()=> navigate("/athelete-detail",{state:row})}>
                    {row.name}
                </div>

            )
        },
        { rowKey: "country", header: "Country" },
        { rowKey: "sport", header: "Sports" },
        { rowKey: "age", header: "Age" },
        {
            rowKey: "action",
            header: "Action",
            render: (row: any) => (
            
                <div className='flex gap-3 '>
                    <button
                        className="  text-white bg-blue-500 px-5 py-1 rounded-xl text-sm "
                        onClick={() => navigate("/user-athelete-detail", { state: { id:row._id } })}
                    >
                        See daily data
                    </button>
                </div>
            )
        },
    ];



    const handleRowClick = (row: any) => {
        console.log("Row clicked---------------------->:", row._id);
    };

    return (
        <div className='pt-20 container mx-auto'>
            <h1 className="py-10 text-xl font-semibold">Athelete</h1>

            <Table columns={columns} data={athletes} onRowClick={handleRowClick} />
           
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
