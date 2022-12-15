import React from "react";

export function Header() {
    return (
        <div className="header">
            <ul className="header-nav py-2 px-4 flex">
                <li className="nav-item pt-6 pb-3 px-6 cursor-pointer">About us</li>
                <li className="nav-item pt-6 pb-3 px-6 cursor-pointer">SEO</li>
                <li className="nav-item pt-6 pb-3 px-6 cursor-pointer">SMM</li>
                <li className="nav-item pt-6 pb-3 px-6 cursor-pointer">Development</li>
            </ul>
        </div>
    )
}