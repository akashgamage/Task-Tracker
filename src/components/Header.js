// 01)

// Default ------------------------------------>

// const Header = () => {
//   return (
//     <div>
//       <h1>Task Tracker</h1>
//     </div>
//   )
// }

// 02)

// Pass some stuf using props ------------------------------------>

// 1st way = gather/pass from app.js page

// const Header = (props) => {
//   return (
//     <header>
//       <h1>{props.title}</h1>
//     </header>
//   )
// }

// 2nd way = gather/pass from same page 

// const Header = (props) => {
//   return (
//     <header>
//       <h1>{props.title}</h1>
//     </header>
//   )
// }

// Header.defaultProps = {
//   title: 'Task Tracker',
// }

// 3rd way = gather/pass from same page without using props 

// const Header = ({title}) => {
//   return (
//     <header>
//       <h1>{title}</h1>
//     </header>
//   )
// }

// Header.defaultProps = {
//   title: 'Task Tracker',
// }

// 03) 

// PropTypes , use fro pass from another page ---------------------->

// import PropTypes from 'prop-types' //impt

// const Header = ({title}) => {
//   return (
//     <header>
//       <h1>{title}</h1>
//     </header>
//   )
// }

// Header.defaultProps = {
//   title: 'Task Tracker',
// }

// Header.defaultProps = {   // set an object {}
//   title: PropTypes.string.isRequired,
// }

// 04) Styling ------------------------------------------------------->

// 1st way

// import PropTypes from 'prop-types'

// const Header = ({title}) => {
//   return (
//     <header>
//       <h1 style={{color: 'blue', backgroundColor: 'red'}}>{title}</h1>
//     </header>
//   )
// }

// Header.defaultProps = {
//   title: 'Task Tracker',
// }

// Header.propTypes = {
//   title: PropTypes.string.isRequired,
// }

// 2nd way

// import PropTypes from 'prop-types'

// const Header = ({title}) => {
//   return (
//     <header>
//       <h1 style={headingStyle}>{title}</h1>
//     </header>
//   )
// }

// Header.defaultProps = {
//   title: 'Task Tracker',
// }

// Header.propTypes = {
//   title: PropTypes.string.isRequired,
// }

// const headingStyle = {
//   color: 'blue',
//   backgroundColor: 'black',
// }

// using css file -------------------------------------------->

import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
  const location = useLocation()

  return (
    <header className='header'>
      <h1>{title}</h1>
      {location.pathname === '/' && (<Button
          color={showAdd ? 'red' : 'blue'}
          text={showAdd ? 'Close' : 'Add'}
          onClick={onAdd}
        />)}
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header

