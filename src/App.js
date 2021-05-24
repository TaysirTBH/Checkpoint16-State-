import React, { Component } from 'react'
import './style.css';

class App extends Component {
  // eslint-disable-next-line
  constructor(props){
    console.log('i am the contructor method')
    super(props)
    this.state={
      persons:[{fullname:"Cyril Lignac",bio:"Born 5 November 1977. He is owner and chef of the gourmet restaurant Le Quinzième (1 Michelin star), also of Le Chardenoux, a Parisian bistro located in the 11th arrondissement of Paris, another bistro located in the Saint-Germain des Près district.",imgSrc:"http://www.atabula.com/wp-content/uploads/2015/09/Cyril-Lignac.jpg",profession:"Chef"},
               {fullname:"Billie Eilish",bio:"Born December 18, 2001. She first gained attention in 2015 when she uploaded the song Ocean Eyes to SoundCloud, which was subsequently released by the Interscope Records subsidiary Darkroom.",imgSrc:"https://tse4.mm.bing.net/th?id=OIP.u9bT-R8H7LLDb5f8WmOzegHaLH&pid=Api&P=0&w=300&h=300",profession:"Singer and Songwriter"},
               {fullname:"Zendaya",bio:"Born September 1, 1996. She began her career as a child model and backup dancer before gaining prominence for her role as Rocky Blue on the Disney Channel sitcom Shake It Up",imgSrc:"https://tse1.mm.bing.net/th?id=OIP.GC5SXFqri8dDMu2GCLv3OgHaJ4&pid=Api&P=0&w=300&h=300",profession:"Actress, singer, dancer and model"}
              ],
      show:true,
      time: new Date().toLocaleString()
    }
  }
  componentDidMount() {
    console.log('APP will Mount')
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleString()
    });
  }

 render() {
   return (
    
     <div className="App">
        {console.log('i am render methods')}
        <button onClick={()=>this.setState({
                                              show:!this.state.show
                                           })}> Toggle </button>  
        <hr></hr>
        {this.state.show && this.state.persons.map(person=><div> 
                                            <h1>{person.fullname}</h1>
                                            <img src={person.imgSrc} alt="photo"/>
                                            <p>{person.bio}</p>
                                            <h4>{person.profession}</h4>
                                            <hr></hr>
                                            </div>)}
        <p className="App-clock">
           The time is {this.state.time}.
        </p>
     </div>
   )
 }
}

export default App;
