import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from '@chakra-ui/react'

export const Header = () => {
    return (
      <>
        <h1>Bank Innovation Digital One</h1>
        <Breadcrumb separator='-'>
          <BreadcrumbItem>
            <BreadcrumbLink href='#'>Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href='#'>About</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </>
    )
}