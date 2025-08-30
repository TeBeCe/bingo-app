import React, { useState } from "react";
import { Button, Grid, Card, Space, Toast } from "antd-mobile";

function generateTicket(rows = 5, cols = 5, maxNum = 75) {
    const numbers = new Set();
    while (numbers.size < rows * cols) {
        numbers.add(Math.floor(Math.random() * maxNum) + 1);
    }
    // sort ascending before returning
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
            Toast.show(`Marked ${num}`);
        }
    };

    const newTicket = () => {
        setTicket(generateTicket());
        setMarked([]);
    };

    return (
        <div style={{ padding: 16 }}>
            <Card title="🎟️ My Bingo Ticket">
                <Grid columns={5} gap={8}>
                    {ticket.map((num) => (
                        <div
                            key={num}
                            onClick={() => toggleNumber(num)}
                            style={{
                                padding: 12,
                                borderRadius: 8,
                                textAlign: "center",
                                background: marked.includes(num) ? "#1677ff" : "#f0f0f0",
                                color: marked.includes(num) ? "white" : "black",
                                fontWeight: "bold",
                                cursor: "pointer",
                            }}
                        >
                            {num}
                        </div>
                    ))}
                </Grid>
            </Card>

            <Space block justify="center" style={{ marginTop: 16 }}>
                <Button color="primary" onClick={newTicket}>
                    🎲 New Ticket
                </Button>
            </Space>
        </div>
    );
}
