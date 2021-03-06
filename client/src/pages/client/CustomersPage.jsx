import React from "react";
import ClientHeader from '../../components/client/ClientHeader'
import SideBar from '../../components/client/SideBar'
import MainPanel from '../../components/client/customers/MainPanel'
import ListPanel from '../../components/client/customers/ListPanel'
import '../../css/clientPage.css';


export default function CustomerPage() {

    return (
        <div>

                <ClientHeader />
                <SideBar />
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <MainPanel />
                    <ListPanel />
                </main>

        </div>
    )
};

