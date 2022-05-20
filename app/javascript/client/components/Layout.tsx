import React from "react";
import { Connect, Email } from "./BottomNav";
import { Nav } from "./Nav";

export const Layout = ({ children }) => {
    return (
        <div className="flex flex-col h-screen overflow-y-auto">
            <header className="py-6">
                <Nav />
            </header>
            <main className="container mx-auto pt-16 flex-1 flex">
                <Connect />
                <div className="flex-1 px-28">
                    {children}
                </div>
                <Email />
            </main>
        </div>
    );
}