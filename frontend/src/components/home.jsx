import { useState, useEffect } from "react";
import apiClient from "../services/apiClient";
import Header from "./header";


export default function Home() {
    const [motd, setMotd] = useState("");

    useEffect(() => {
        apiClient.get("/api/test/motd").then((res) => {
            setMotd(res.data.message)
        }).catch((error) => {
            console.error("Failed to fetch MOTD:", error)
        });
    }, []);

    return (
        <div>
            <Header></Header>
            <main className="flex justify-center items-center h-screen">
                <div>
                    <div className="">Message of the day: {motd}</div>
                </div>
            </main>
        </div>
    );
}   