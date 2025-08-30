
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import Host from "./pages/host";
import Client from "./pages/client";

const { Header, Content } = Layout;

export default function App() {
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Header>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["client"]}>
                    <Menu.Item key="host">
                        <Link to="/host">Host</Link>
                    </Menu.Item>
                    <Menu.Item key="client">
                        <Link to="/client">Client</Link>
                    </Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: "20px" }}>
                <Routes>
                    <Route path="/host" element={<Host />} />
                    <Route path="/client" element={<Client />} />
                </Routes>
            </Content>
        </Layout>
    );
}
