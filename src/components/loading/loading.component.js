import React from "react";
import './loading.styles.scss'
const styles = {
  content: {
    fontSize: '35px',
    position: 'absolute',
    left: 0,
    right: 0,
    marginTop: '20px',
    textAlign: 'center'
  }
}

export default class Loading extends React.Component {
   state = {
    content: this.props.text
   } 

   componentDidMount() {
     const {text, speed} = this.props

     this.interval = window.setInterval(() => {
       this.state.content === text + '...' ? 
       this.setState({
         content: text
       }) :
       this.setState(({content}) => ({content: content + '.'}))
     }, speed)
   }

   componentWillUnmount() {
    window.clearInterval(this.interval)
   }

   render() {
     return(
       <p className='loader'>
        {this.state.content}
       </p>
     )
   }
}

Loading.defaultProps = {
  text: "Loading",
  speed: 300
}