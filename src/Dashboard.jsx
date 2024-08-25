import React, {useState} from "react";
import logo from './logo.svg';
import {Button, Col, Input, Layout, Menu, Row, Select, Tabs, theme, Typography} from "antd";
import {
    MailOutlined,
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    UserOutlined,
    UploadOutlined
} from '@ant-design/icons'
import {Occupancy} from "./Occupancy";
import {Adr} from "./Adr";
import {RevPAR} from "./RevPAR";
import Sider from "antd/es/layout/Sider";
import {Content, Header} from "antd/es/layout/layout";

const { Title } = Typography

export const Dashboard = () => {

    const [collapsed, setCollapsed] = useState(true);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const menuItems = [
        {
            key: '1',
            icon: <UploadOutlined />,
            label: 'Data Input',
        },
        {
            key: '2',
            icon: <DesktopOutlined />,
            label: 'Dashboard',
        },
        {
            key: 'sub1',
            label: 'Tables',
            icon: <MailOutlined />,
            children: [
                {
                    key: '4',
                    label: 'Monthly',
                },
                {
                    key: '5',
                    label: 'Daily',
                },
                {
                    key: '6',
                    label: 'Day of Week',
                },
                {
                    key: '7',
                    label: 'Segmentation',
                },
            ],
        },
        {
            key: '8',
            label: 'Consulting',
            icon: <UserOutlined />,
        },
        {
            key: '9',
            label: 'Materials',
            icon: <ContainerOutlined />,
        },
        {
            key: '10',
            label: 'Blogs',
            icon: <AppstoreOutlined />,
        },
        {
            key: '11',
            label: 'News',
            icon: <AppstoreOutlined />,
        },
        {
            key: '12',
            label: 'Research',
            icon: <AppstoreOutlined />,
        },
    ];

    const tabItems = [
        {
            key: '1',
            label: 'Occupancy',
            children: <Occupancy/>,
        },
        {
            key: '2',
            label: 'ADR',
            children: <Adr/>,
        },
        {
            key: '3',
            label: 'RevPAR',
            children: <RevPAR/>,
        },
    ];
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed} theme={'light'}>
                <div className="demo-logo-vertical" />
                <div style={{marginTop: '60px'}}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={menuItems}
                    />
                </div>
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                    <span style={{fontSize: '40px', fontWeight: 'bold',}}>Geo Insights</span>
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Row align={'bottom'} style={{marginBottom: '20px'}}>
                        <Col span={4}>
                            <img src={'https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dhotel&psig=AOvVaw3eTp61VzhTsDlfgd_ss7w5&ust=1724682562509000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKiNhrqtkIgDFQAAAAAdAAAAABAE'} alt={'hotel'} width={223} height={133}/>
                        </Col>
                        <Col span={6}>
                            <Row>
                                <div><b>Your hotel: </b>Amadeus Tbilisi</div>
                            </Row>
                            <Row>
                                <div><b>Address: </b>Tbilisi, Leonidze str.35</div>
                            </Row>
                            <Row>
                                <div><b>Class: </b>midscale</div>
                            </Row>
                        </Col>
                        <Col span={6}>
                            <Row>
                                <div><b># Rooms:</b>35</div>
                            </Row>
                            <Row>
                                <div><b>Market: </b>Tbilisi midscale (20-50 keys)</div>
                            </Row>
                            <Row>
                                <div><b>Submarket: </b>Old Tbilisi midscale (20-50 keys)</div>
                            </Row>
                        </Col>
                        <Col span={6}>
                            <Row>
                                <div><b>Comp.set: </b>6</div>
                            </Row>
                            <Row>
                                <div><b>Comp.set Rooms: </b>250</div>
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{borderTop: 'solid black 1px'}}>
                        <h2>How you compare to other Markets: 3/6</h2>
                        <Select placeholder={'Select Market'} style={{width: '200px', marginLeft: '55%'}} options={[
                            {
                                value: 1,
                                label: 'Comp.set, Market (Tbilisi midscale (20-50 keys))'
                            },
                            {
                                value: 2,
                                label: 'Submarket Old Tbilisi midscale (20-50 keys)'
                            },
                            {
                                value: 3,
                                label: 'Georgia (..)'
                            }
                        ]
                        }>

                        </Select>
                    </Row>
                    <Row>
                        <Col span={4}>
                            Occupancy Rate: 45%
                        </Col>
                        <Col span={4}>
                            ADR: 67$
                        </Col>
                        <Col span={4}>
                            RevPAR: 30$
                        </Col>
                        <Col span={4}>
                            RevPAR Index: 40
                        </Col>
                        <Col span={4}>
                            RevPAR Rank: 4/6
                        </Col>
                    </Row>
                    <Tabs defaultActiveKey="1" items={tabItems}/>
                </Content>
            </Layout>
        </Layout>
    );
}