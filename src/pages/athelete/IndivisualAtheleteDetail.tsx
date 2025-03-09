import axios from "axios";
import Table from "../../components/table/Table"
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom";


type AthleteData = {
  id: number;
  name: string;
  email: string;
};

interface MedicineRecord {
  _id: string;
  date: string;
  medicineName: string;
  dosage: string;
}



const IndivisualAtheleteDetail = () => {

  const [data, setData] = useState<MedicineRecord[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const location = useLocation();

  let athleteId = location.state.id;
  // const data = [rowData];


  const columns: any = [
    { rowKey: "athleteId", header: "ID" },
    {
      rowKey: "notes", header: "Notes"
    },
    { rowKey: "tookMedicine", header: "Took Medicine" },
    {
      rowKey: "date",
      header: "date",

    },
  ];


  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      if (!athleteId) {
        setError("Athlete ID is required.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get<{ success: boolean; data: MedicineRecord[] }>(
          `http://localhost:5000/medicine/athlete-medicine/${athleteId}`
        );

        if (response.status === 200 && Array.isArray(response.data.data)) {
          if (response.data.data.length === 0) {
            setError("No medicine records found for this athlete.");
          } else {
            setData(response.data.data);
          }
        } else {
          setError("Unexpected response format.");
        }
      } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
          setError(err.response?.data?.message || "Error fetching data.");
        } else {
          setError("An unexpected error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [athleteId]);
  

  return (
    <>
   
   <div className="container mx-auto py-28">
   
      <Table columns={columns} data={data} />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" ,textAlign:"center",padding:70}}>{error}</p>}
    </div>
    </>
  )
}

export default IndivisualAtheleteDetail
