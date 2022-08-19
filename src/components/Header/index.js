import React, { useEffect } from "react"
import Router from "next/router"
import Link from "next/link"
import { Col, Nav, Navbar, NavLink } from "react-bootstrap"

import menu from "../../data/menu.json"

import Icon from "../Icon"
import ActiveLink from "../ActiveLink"
import MainIcons from "./MainIcons"

import { commerce } from "../../lib/commerce"

import { CartContext } from "../CartContext"

import { WishlistContext } from "../WishlistContext"

import DropdownMenuItem from "./DropdownMenuItem"
import UseWindowSize from "../../hooks/UseWindowSize"

import Image from "../../components/Image"

const Header = ({ header }) => {
  const [collapse, setCollapse] = React.useState(false)
  const size = UseWindowSize() // Viewport size hook
  const [parentName, setParentName] = React.useState(false)
  const [cartItems, dispatch] = React.useContext(CartContext) // Cart context
  const [wishlistItems, wishlistDispatch] = React.useContext(WishlistContext) // Wishlist context

  const highlightDropdownParent = () => {
    // Highlight dropdown parent based on page load
    menu.map((item) => {
      item.links &&
        item.links.map((link) => {
          link.link === Router.route && setParentName(item.name)
        })
      item.groups &&
        item.groups.map(
          (group) =>
            group.links &&
            group.links.map(
              (link) => link.link === Router.route && setParentName(item.name)
            )
        )
      item.icons &&
        item.icons.map((link) => {
          link.link === Router.route && setParentName(item.name)
        })

      item.columns &&
        item.columns.map((column) =>
          column.lists.map((list) =>
            list.links.map((link) => {
              if (link.link === Router.route) {
                link.parent
                  ? setParentName(link.parent)
                  : setParentName(item.name)
              }
            })
          )
        )
    })
  }

  const fetchCard = async () => {
    const data2 = await commerce.cart.contents()
    dispatch(data2)
  }

  useEffect(() => {
    highlightDropdownParent()

    fetchCard()

    if (localStorage.getItem("wishlist")) {
      // If localStorage exists set wishlist items to wishlist context
      JSON.parse(localStorage.getItem("wishlist")).map((product) =>
        wishlistDispatch({ type: "add", payload: product })
      )
    }
  }, [])

  const onLinkClick = (parent) => {
    size.width < 991 && setCollapse(!collapse) // If viewport below 991px toggle collapse block
    setParentName(parent) // Set parent name for item parent higlight
  }
  return (
    <header
      className={`header ${header && header.absolute ? "header-absolute" : ""}`}
    >
      {/* TOP BAR */}
      {/* <TopBar header={header} /> */}

      {/* END TOP BAR */}

      {/* NAV BAR */}
      <Navbar
        bg="secondary"
        fixed="top"
        expand="lg"
        style={{ zIndex: "11" }}
        expanded={collapse}
        className={`border-0 ${
          header && header.transparentNavbar ? "shadow-0" : ""
        } px-lg-5 ${collapse ? "was-transparent was-navbar-light" : ""}`}
      >
        <Col
          md="1"
          sm="3"
          className="text-start text-md-center d-none d-lg-block"
        >
          <Link className="" href="/" passHref>
            <Navbar.Brand>
              <Image
                src="/img/photo/rouge.gif"
                width={1000}
                height={1000}
                className="mw-0"
              />
            </Navbar.Brand>
          </Link>
        </Col>

        <Col md="10" sm="6" xs="6" className="text-start text-md-center">
          <Link href="/" passHref>
            <Navbar.Brand>
              <Image src="/img/photo/icone.png" width={500} height={120} />
            </Navbar.Brand>
          </Link>
        </Col>

        

      

        {/* MENU */}


        <Col xs="2" className="text-start text-md-center d-block d-sm-none">
            <MainIcons className="d-block d-lg-none" CartContext={cartItems} />
          </Col>

        <Col
          lg="2"
          md="1"
          sm="3"
          xs="2"
          className=" text-start text-md-center text-primary mt-6 d-none d-md-block"
        >
          <Nav className="mt-3 mt-lg-0 text-primary" navbar>
            {/* {menu.map((item, index) => {
              // Mapping through menu items

              return item.link ? ( // If item has property link than simple link
                <Nav.Item key={index}>
                  <ActiveLink
                    activeClassName="active"
                    href={item.link}
                    passHref
                  >
                    <NavLink>{item.name}</NavLink>
                  </ActiveLink>
                </Nav.Item>
              ) : (
                // If item doesn't have link property than dropdown

                <DropdownMenuItem
                  onLinkClick={onLinkClick}
                  item={item}
                  key={item.name}
                  parentName={parentName}
                  viewportWidth={size.width}
                />
              )
            })} */}

            <div className="mt-1 text-start text-md-center ">
              <MainIcons className="d-block" sidebarRight />
            </div>
          </Nav>
        </Col>

        {/* END TOP USER ICONS */}

        {/* END MENU */}
      </Navbar>

      {/* END NAV BAR */}
    </header>
  )
}

export default Header
