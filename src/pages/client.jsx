import React, { useState, useEffect } from "react";
import { Button, Grid, Space } from "antd-mobile";

function generateTicket(rows = 5, cols = 5, maxNum = 75) {
    const numbers = new Set();
    while (numbers.size < rows * cols) {
        numbers.add(Math.floor(Math.random() * maxNum) + 1);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

export default function Client() {
    const [ticket, setTicket] = useState(generateTicket());
    const [marked, setMarked] = useState([]);

    const toggleNumber = (num) => {
        if (marked.includes(num)) {
            setMarked(marked.filter((n) => n !== num));
        } else {
            setMarked([...marked, num]);
        }
    };

    const newTicket = () => {
        setTicket(generateTicket());
        setMarked([]);
    };

    return (
        <div
            style={{
                height: "70vh",
                width: "100vw",
                padding: 16,
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                background: "#f5f5f5",
            }}
        >
            <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                <Grid columns={5} gap={8} style={{ width: "100%", maxWidth: 500 }}>
                    {ticket.map((num) => (
                        <div
                            key={num}
                            onClick={() => toggleNumber(num)}
                            style={{
                                padding: 16,
                                textAlign: "center",
                                borderRadius: 8,
                                background: marked.includes(num) ? "#1677ff" : "#fff",
                                color: marked.includes(num) ? "white" : "black",
                                fontWeight: "bold",
                                fontSize: "1.5rem",
                                cursor: "pointer",
                                boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                                userSelect: "none",
                            }}
                        >
                            {num}
                        </div>
                    ))}
                </Grid>
            </div>

            <Space style={{ marginTop: 16 }}>
                <Button color="primary" onClick={newTicket}>
                    🎲 New Ticket
                </Button>
            </Space>
        </div>
    );
}
