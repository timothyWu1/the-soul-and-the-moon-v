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
        fixed="top"
        expand="lg"
        style={{ zIndex: "11" }}
        bg={
          header && header.transparentNavbar
            ? collapse
              ? "white"
              : "transparent"
            : "white"
        }
        expanded={collapse}
        className={`border-0 ${
          header && header.transparentNavbar ? "shadow-0" : ""
        } px-lg-5 ${collapse ? "was-transparent was-navbar-light" : ""}`}
      >
        <div>
          <Image
            className="img-scale card-img mb-2"
            src="/img/product/bg.jpg"
            layout="fill"
            // // width={0}
            // height={40}
            sizes="(max-width: 100px) calc(100vw - 30px), 50vw"
          />
        </div>
        {/* LOGO */}
      
        {/* END LOGO */}

        {/* SOCIAL & PHONE BLOCK */}

        <ul className="list-inline mb-0">
          <Link href="/" passHref>
            <Navbar.Brand>
              <Image src="/img/photo/rouge.gif" width={120} height={120} />
            </Navbar.Brand>
          </Link>
          {/* <FontAwesomeIcon icon={faFacebookF} /> */}
          {/* <FontAwesomeIcon icon="fa-Instagram" /> */}
          {/* <FontAwesomeIcon icon="fa-brands fa-instagram" /> */}

          {/* <li className="list-inline-item me-4">
                <a
                  className="text-reset text-hover-primary"
                  href="#"
                  aria-label="Go to Twitter"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li> */}
          {/* <li className="list-inline-item me-2">
                <Icon icon="calls-1" className="me-2" />
                020-800-456-747
              </li> */}
        </ul>
        {/* END SOCIAL & PHONE BLOCK */}
        {/* END ANNOUNCEMENT */}

        {/* TOP USER MOBILE ICONS */}
        <MainIcons className="d-block d-lg-none" CartContext={cartItems} />
        {/* TOP USER MOBILE ICONS */}

        {/* NAV MOBILE TOGGLER  */}
        <Navbar.Toggle
          className="navbar-toggler-right text-hover-primary"
          onClick={() => setCollapse(!collapse)}
          aria-label="Toggle navigation"
        >
          <Icon icon="menu-hamburger-1" className="navbar-icon" />
        </Navbar.Toggle>

        {/* END NAV MOBILE TOGGLER */}

        {/* MENU */}
        <Navbar.Collapse>
          {/* <Col md="10" className="text-start text-md-center">
              <p className="mb-0 md-0 py-0"><h1>The Soul & The Moon</h1></p>
              </Col> */}
          <Col md="11" sm="8" className="text-start text-md-center">
            <Link href="/" passHref>
              <Navbar.Brand>
                <Image src="/img/photo/icone.png" width={600} height={120} />
              </Navbar.Brand>
            </Link>
          </Col>
          {/* SEARCH BLOCK */}
          {/* <SearchBlock /> */}
          {/* END SEARCH BLOCK */}

          {/* TOP USER ICONS */}
          <Nav className="mt-3 mt-lg-0 " navbar>
            {menu.map((item, index) => {
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
            })}
          </Nav>

          <MainIcons className="d-none d-lg-block " sidebarRight />
          {/* END TOP USER ICONS */}
        </Navbar.Collapse>
        {/* END MENU */}
      </Navbar>

      {/* END NAV BAR */}
    </header>
  )
}

export default Header
