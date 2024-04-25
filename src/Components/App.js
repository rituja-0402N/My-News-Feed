import News from './News';
import React,{Component} from 'react';
import './App.css';
import SideNews from './SideNews';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        item1: {
          type: 'top-headlines',
          query : 'country=us&category=business'
        },
        item2: {
          type: 'everything',
          query: 'q=apple&from=2024-04-24&to=2024-04-24&sortBy=popularity'
        },
        item3: {
          type: 'everything',
          query:'q=tesla&from=2024-03-25&sortBy=publishedAt'
        }

    }

  }
  render(){
  return (
    
    <div className="row">
      <h1> My Feed </h1>
      <div className="col s8">
      
    
       <News news = {this.state.item2} />
       <News news = {this.state.item3} />
      
      </div>
       <div className="col s4">
      
       <SideNews news = {this.state.item1} />
      
      </div>
    </div>
  );
}
}


export default App;
