import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Bell, Trash } from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";

// interface Notification {
//   id: number;
//   playerName: string;
//   sport: string;
//   message: string;
// }

// const initialNotifications: Notification[] = [
//   { id: 1, playerName: "John Doe", sport: "Football", message: "Scored a hat-trick!" },
//   { id: 2, playerName: "Serena Williams", sport: "Tennis", message: "Won the championship!" },
//   { id: 3, playerName: "Michael Phelps", sport: "Swimming", message: "Broke another record!" },
// ];

export default function NotificationPage() {
  const [notifications, setNotifications] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotifications = async () => {
        try {
            const response = await axios.get("http://localhost:5000/notifications-list");
            setNotifications(response.data);
        } catch (err) {
            console.error("Error fetching notifications:", err);
        } finally {
            setLoading(false);
        }
    };

    fetchNotifications();
}, []);

if (loading) return <p>Loading notifications...</p>; 

  const deleteNotification = async (id: number) => {
    try {
      await axios.delete(`http://localhost:5000/notifications/${id}`);
      setNotifications(notifications?.filter((notification: any) => notification._id !== id));
      toast.success("Notification deleted successfully!");
  } catch (error) {
      console.error("Error deleting notification:", error);
      toast.error("Failed to delete notification.");
  }
    // setNotifications((prev) => prev?.filter((notif) => notif.id !== id));
  };

  return (
    <div className="max-w-lg mx-auto p-4 pt-36">
      <h1 className="text-xl font-bold flex items-center gap-2">
        <Link to="#" className="relative text-white">
          <Bell className="w-6 h-6 text-blue-500" />
        </Link>
        Notifications
      </h1>
      <div className="mt-4 bg-white shadow-md rounded-lg p-4">
        {notifications?.length === 0 ? (
          <p className="text-gray-500">No new notifications</p>
        ) : (
          notifications?.map((notif) => (
            <div
            
              key={notif.id}
              className="flex justify-between items-center hover:bg-slate-100 p-3 border-b last:border-none bg-white"
            >
              <div >
                <span className="text-black font-semibold text-blue-500">{notif.playerName} ({notif.sport})</span>
                <p className="text-black">{notif.message}</p>
              </div>
              <button onClick={() => deleteNotification(notif._id)} className="text-red-500">
                <Trash className="w-5 h-5" />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
