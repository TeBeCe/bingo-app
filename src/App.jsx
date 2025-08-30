import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Layout } from "antd";
import Host from "./pages/Host";
import Client from "./pages/Client";

const { Header, Content } = Layout;

export default function App() {
    const location = useLocation();
    const [selectedKey, setSelectedKey] = useState("/");

    useEffect(() => {
        setSelectedKey(location.pathname);
    }, [location]);

    return (
        <Layout style={{ minHeight: "100vh" }}>
            {/*<Header>*/}
            {/*    <Menu theme="dark" mode="horizontal" selectedKeys={[selectedKey]}>*/}
            {/*        <Menu.Item key="/host">*/}
            {/*            <Link to="/host">Host</Link>*/}
            {/*        </Menu.Item>*/}
            {/*        <Menu.Item key="/">*/}
            {/*            <Link to="/">Client</Link>*/}
            {/*        </Menu.Item>*/}
            {/*    </Menu>*/}
            {/*</Header>*/}
            <Content style={{ padding: "0", margin: 0 }}>
                <Routes>
                    <Route path="/host" element={<Host />} />
                    <Route path="/" element={<Client />} />
                </Routes>
            </Content>
        </Layout>
    );
}
