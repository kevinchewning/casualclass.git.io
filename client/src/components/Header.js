import React, { useState } from 'react';
import { Menu,Image} from 'semantic-ui-react'
import logo from '../assets/login.png';
import {Link,} from 'react-router-dom';


const Header = () => {

    const [active, setActive] = useState('')

    const handleItemClick = (event, { name }) => {
        setActive(name);
    }

    return (
        <Menu>
           <Menu.Item header className='logo'>
          <Link to='/'><Image src={logo} size='small'/></Link> 
        </Menu.Item>
            <Menu.Item
                name='Account'
                active={active === 'Account'}
                onClick={handleItemClick}
            />

            <Menu.Menu position='right'>
                <Menu.Item
                    name='Sign In'
                    active={active === 'Sign In'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='Sign Up'
                    active={active === 'Sign Up'}
                    onClick={handleItemClick}
                />
            </Menu.Menu>
        </Menu>

    )

}

export default Header;