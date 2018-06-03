import React, {Component} from 'react'

class Footer extends Component{
  constructor(props){
      super(props)
      this.state = {
      time:0
    };
    // setInterval((state)=>{
    //   this.setState({
    //     time: this.state.time + 1
    //   })
    // },1000)
    // this.setState((state)=>({ time: this.state.time + 1}));
    // this.setState((state)=>({ time: this.state.time + 1}));
    // this.setState((state)=>({ time: this.state.time + 1}));
    this.setState({time:this.state.time+1});
    this.setState({time:this.state.time+1});
    this.setState({time:this.state.time+1});
  }
  render(){
    let time = this.state.time;
    return(
      <div>Footer online time : { time }</div>
    )
  }
}

export default Footer
