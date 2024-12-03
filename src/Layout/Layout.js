import React from "react";
import { Outlet } from "react-router-dom";
import MainNav from "../shared/header/MainNav";
import Footer from "../shared/footer/Footer";

export default function Layout() {
    return (
        <div className="layout">
            <MainNav />
            <main className="content">
                <Outlet /> 
            </main>
            <Footer />
        </div>
    );
}
