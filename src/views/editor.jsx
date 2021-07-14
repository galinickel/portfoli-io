import { React } from 'react'
import { Layout, Menu, Tabs } from 'antd';
import { PlusCircleOutlined,EditOutlined } from '@ant-design/icons';

// import { Link } from 'react-router-dom'
import Display from '../cmps/editor/display.jsx'

const Editor = () => {
    const { Content, Sider } = Layout;
    const { SubMenu } = Menu;
    const { TabPane } = Tabs;

    return (
        <section className="editor">
            <Layout>
                <Layout>
                    <Sider 
                        width="20%">
                        <Tabs 
                        centered="true"
                        size="large"
                        style={{ height: '100%', backgroundColor: '#fff' }}>
                            <TabPane tab={<span> <PlusCircleOutlined/> Add </span>} key="1">
                                <Menu
                                    mode="inline"
                                    defaultSelectedKeys={['1']}
                                    defaultOpenKeys={['sub1']}
                                >
                                    <SubMenu key="Navbar" title="Navbar">
                                        <Menu.Item key="1">option1</Menu.Item>
                                        <Menu.Item key="2">option2</Menu.Item>
                                    </SubMenu>
                                    <SubMenu key="Header" title="Header">
                                        <Menu.Item key="5">option5</Menu.Item>
                                        <Menu.Item key="6">option6</Menu.Item>
                                    </SubMenu>
                                    <SubMenu key="Section1" title="Section">
                                        <Menu.Item key="9">option9</Menu.Item>
                                        <Menu.Item key="10">option10</Menu.Item>
                                    </SubMenu>
                                    <SubMenu key="Image" title="Image">
                                        <Menu.Item key="11">option9</Menu.Item>
                                        <Menu.Item key="12">option10</Menu.Item>
                                    </SubMenu>
                                    <SubMenu key="Section2" title="Section">
                                        <Menu.Item key="13">option9</Menu.Item>
                                        <Menu.Item key="14">option10</Menu.Item>
                                    </SubMenu>
                                    <SubMenu key="Video" title="Video">
                                        <Menu.Item key="15">option9</Menu.Item>
                                        <Menu.Item key="16">option10</Menu.Item>
                                    </SubMenu>
                                    <SubMenu key="Form" title="Form">
                                        <Menu.Item key="17">option9</Menu.Item>
                                        <Menu.Item key="18">option10</Menu.Item>
                                    </SubMenu>
                                    <SubMenu key="Footer" title="Footer">
                                        <Menu.Item key="19">option9</Menu.Item>
                                        <Menu.Item key="20">option10</Menu.Item>
                                    </SubMenu>
                                </Menu>
                            </TabPane>
                            <TabPane tab={<span> <EditOutlined/> Edit </span>} key="2">
                                Content of Tab Pane 2
                            </TabPane>
                        </Tabs>
                    </Sider>
                    <Content>
                        <div className="content">
                        <Display/>

                        </div>
                    </Content>
                </Layout>
            </Layout>
        </section>
    );
}
export default Editor;