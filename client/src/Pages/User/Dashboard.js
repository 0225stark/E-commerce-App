import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";

const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard - Ecommerce App"}>
      <div className="container-flui m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-2">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3>User Details:</h3>
              <h4>Name: {auth?.user?.name}</h4>
              <h4>Email: {auth?.user?.email}</h4>
              <h4>Address: {auth?.user?.address}</h4>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;