import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



 class App extends React.Component {
     constructor(props){
         super(props);
         this.state={
             count:0
         }
      console.log("constructor");
     }

 incCount = () =>{
     this.setState({
         count:this.state.count +1
     })
 }

 componentWillMount(){
    console.log("will mount");
 }



 shouldComponentUpdate(){
     if(this.state.count > 10) {
         return false;
     }
     return true;
 }

 componentDidMount(){
    console.log("mounted");
 }



  render() {
    console.log("renderring");
    return (
      <section>
          {this.state.count}
           <button onClick={this.incCount} > increment </button>
      </section>
    )
  }
}














ReactDOM.render(<App />, document.getElementById('root'));

