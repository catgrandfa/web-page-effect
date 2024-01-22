"use client";
import { useEffect } from "react";
const TestClient = () => {
    useEffect(() => {
        console.log("ClientMonitor");
    }, []);

    return <div>123123</div>;
};
export default TestClient;
