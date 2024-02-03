import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Profile() {
    const containerStyle = {
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    };

    const centerText = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
    };

    return (
        <div style={containerStyle}>
            <Header />
            <div style={centerText}>
                <h1>COMING SOON!!!</h1>
            </div>
            <Footer style={{ position: "fixed", bottom: 0, width: "100%", zIndex: 1000 }} />
        </div>
    );
}
