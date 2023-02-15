import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Portal,
} from '@chakra-ui/react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'
function NavBar() {
  return (
    <nav>
    <div>
      <Breadcrumb>
  <BreadcrumbItem>
      <Link to={"/"}>DearSwiftie</Link>
  </BreadcrumbItem>
  <BreadcrumbItem >
  <Link to={"/catalogue"}>Catalogo</Link>
  </BreadcrumbItem>
  <BreadcrumbItem>
    <BreadcrumbLink><Menu>
  <MenuButton>Productos</MenuButton>
  <Portal>
    <MenuList>
    <Link to={`/category/${"perfume"}`}><MenuItem>Perfumes</MenuItem></Link>
      
      <Link to={`/category/${"cd"}`}>      <MenuItem>CD</MenuItem></Link>

      <Link to={`/category/${"remera"}`}>      <MenuItem>Remeras</MenuItem></Link>

    </MenuList>
  </Portal>
</Menu></BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
  <Link to={"/cart"}><CartWidget/></Link>
  </BreadcrumbItem>
</Breadcrumb>
    </div>
    </nav>
  )
}

export default NavBar