import React from 'react'
import CartWidget from './CartWidget'
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
    <nav><div>
      <Breadcrumb>
  <BreadcrumbItem>
    <BreadcrumbLink href='#'>DearSwiftie</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink><Menu>
  <MenuButton>Productos</MenuButton>
  <Portal>
    <MenuList>
      <MenuItem>Perfumes</MenuItem>
      <MenuItem>CD</MenuItem>
      <MenuItem>Remeras</MenuItem>
    </MenuList>
  </Portal>
</Menu></BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink ><CartWidget/></BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
      <h1></h1>
      
      
    </div>
    </nav>
  )
}

export default NavBar