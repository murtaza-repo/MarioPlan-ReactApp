import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
  const { profile } = props;

  return (
    <div>
      <ul className="right">
        <li><NavLink to='/create'>New Project</NavLink></li>
        <li><NavLink onClick={props.signOut} to='/'>Log Out</NavLink></li>
        <li><NavLink to='/' className="btn btn-floating orange lighten-1">{ profile.initials }</NavLink></li>
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    profile: state.firebase.profile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks)
