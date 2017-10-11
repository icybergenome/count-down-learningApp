import React, { Component } from 'react';
import './App.css';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  /* It Runs before the component is completely renedered on the page*/
  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }
/* This one will run once component is completely rendered on the app*/
  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000); //JS builtin function
  }

  leadingZero(num) {
    return num < 10? "0" + num : num;
  }

  getTimeUntil(deadline){
    const time= Date.parse(deadline) - Date.parse(new Date());
    console.log(time);
    const seconds = Math.floor((time/1000) % 60);
    const minutes = Math.floor((time/1000/60) % 60);
    const hours = Math.floor(time/(1000*60*60) % 24);
    const days = Math.floor(time/(1000*60*60*24));

    this.setState({days, hours, minutes, seconds});//days refer to days:days
  }

  render() {
   return (
     <div>
       <div className="Clock-days">{this.leadingZero(this.state.days)} days</div>
       <div className="Clock-hours">{this.leadingZero(this.state.hours)} hours</div>
       <div className="Clock-minutes">{this.leadingZero(this.state.minutes)} minutes</div>
       <div className="Clock-seconds">{this.leadingZero(this.state.seconds)} seconds</div>
     </div>
   )
 }
}

export default Clock;
