import React from 'react'
import {Avatar, Menu} from '@mantine/core'
import { useNavigate } from 'react-router-dom'
const ProfileMenu = ({user, logout}) => {
    const navigate = useNavigate()
  return (
    <Menu>
        <Menu.Target>
            <Avatar src={user?.picture} alt='user image' radius={"xl"}/>
        </Menu.Target>
        <Menu.Dropdown>
            <Menu.Item onClick={()=> navigate("./favourites", {replace: true})}>
               Favoritos
            </Menu.Item>

            <Menu.Item onClick={()=> navigate("./bookings", {replace: true})}>
              Reservas
            </Menu.Item>

            <Menu.Item onClick={()=>{
                localStorage.clear();
                logout()
            }}>
               Salir
            </Menu.Item>
        </Menu.Dropdown>
    </Menu>
  )
}

export default ProfileMenu
