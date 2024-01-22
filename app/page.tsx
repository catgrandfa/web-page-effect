import TestClient from "./components/clientComponents/TestClient";

export default function Home() {
    return (
        <main>
            <div style={{ height: 2000 }} className={"bg-amber-50 w-full"}>
                首页
            </div>
            <TestClient />
        </main>
    );
}
