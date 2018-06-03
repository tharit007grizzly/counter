import React, {Component} from 'react'

class Header extends Component{
  render(){


      let currentUser = this.props.currentUser;
      let loginUser = this.props.loginUser;

    return(
      <div>
        Header { loginUser && currentUser }
      </div>
    )

  }
}

export default Header
