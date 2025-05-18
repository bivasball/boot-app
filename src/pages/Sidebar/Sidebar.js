import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
    const [active, setActive] = useState("Marketing");
    const [expanded, setExpanded] = useState({
        Sales: false,
        Marketing: false,
        Settings: false,
    });

    const menuItems = {
        Dashboards: [],
        Customers: [],
        Sales: ["Orders", "Revenue"],
        Marketing: ["Campaigns", "Analytics"],
        Reports: [],
        Settings: ["Profile", "Preferences"],
    };

    const toggleExpand = (section) => {
        setExpanded((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    return (
        <div className="sidebar">
            <h2>Navigation</h2>
            <ul>
                {Object.entries(menuItems).map(([category, subItems]) => (
                    <li key={category}>
                        <div className="menu-item" onClick={() => toggleExpand(category)}>
                            {category} {subItems.length > 0 && <span>{expanded[category] ? "▼" : "▶"}</span>}
                        </div>
                        {expanded[category] && subItems.length > 0 && (
                            <ul className="submenu">
                                {subItems.map((item) => (
                                    <li key={item} className={active === item ? "active" : ""} onClick={() => setActive(item)}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;