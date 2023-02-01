import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from "../functions/user";
import { useRouter } from "next/router";
import { query, collection, getDocs, where } from "firebase/firestore";

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const router = useRouter();

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) router.push("/auth/login");
    fetchUserName();
  }, [user, loading]);

  return (
    <div>
      <div>
        Logged in as
        <div>DASHBOARD</div>
        <div>{user?.email}</div>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default Dashboard;
