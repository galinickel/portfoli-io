import { React } from 'react'
// import { Link } from 'react-router-dom'
import { Menu } from 'antd';
import { MailOutlined} from '@ant-design/icons';



const Header = () => {

    return (
        <div>
            <Menu>
                <Menu.Item key="mail" icon={<MailOutlined />}>
                    Navigation One
                </Menu.Item>
            </Menu>
            
        </div>
    );
}
export default Header;