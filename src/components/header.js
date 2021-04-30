import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
// import { StaticQuery, graphql } from "gatsby"

const Header = ({ siteTitle, menuItems }) => {
  console.log(menuItems)
  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

// const Nav = () => (
//   <StaticQuery
//     query={graphql`
//       query {
//         allWordpressWpApiMenusMenusItems(
//           filter: { slug: { eq: "sidebar-menu" } }
//         ) {
//           edges {
//             node {
//               slug
//               name
//               items {
//                 title
//                 url
//                 object_slug
//                 wordpress_children {
//                   title
//                   url
//                 }
//               }
//             }
//           }
//         }
//       }
//     `}
//     render={data => {
//       return (
//         <nav className="menu">
//           <ul className="nav flex-column">
//             {data &&
//               data.allWordpressWpApiMenusMenusItems &&
//               data.allWordpressWpApiMenusMenusItems.edges &&
//               data.allWordpressWpApiMenusMenusItems.edges[0] &&
//               data.allWordpressWpApiMenusMenusItems.edges[0].node &&
//               data.allWordpressWpApiMenusMenusItems.edges[0].node.items &&
//               data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
//                 prop => {
//                   return (
//                     <li className="nav-item">
//                       <a
//                         className="nav-link active"
//                         href={prop.url}
//                         alt={prop.title}
//                       >
//                         {prop.title}
//                       </a>
//                       <div className="sub-menu">
//                         {prop &&
//                           prop.wordpress_children &&
//                           prop.wordpress_children.map(child => {
//                             console.log("child ", child)

//                             return (
//                               <a
//                                 className="dropdown-item"
//                                 href={child.url}
//                                 alt={child.title}
//                               >
//                                 {child.title}
//                               </a>
//                             )
//                           })}
//                       </div>
//                     </li>
//                   )
//                 }
//               )}
//           </ul>
//         </nav>
//       )
//     }}
//   />
// )
