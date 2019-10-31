import React,{Component} from 'react';

class Counter extends Component{

    constructor(props){
        super(props);
        console.log("constructor","props:",props);
    }

    componentWillMount(){
        //This get fired before render methods
        console.log("componentWilMount fired");
    }

    componentDidMount(){
        //For setState and Fetch data for api or our json file
        console.log("componentDidMount fired");
    }

    componentWillReceiveProps(nextProps){
        //When component will receive new props from parents
        console.log("componentWillReceiveProps fired,nextProps:",nextProps);
    }

    shouldComponentUpdate(nextProps,nextState){
        // LET REACT KNOW IF A COMPONENT'S 
        //OUTPUT IS NOT AFFECTED BY THE CURRENT CHANGE
        // IN STATE/PROPS
        console.log("shouldComponentUpdate fired");
        return true;
    }

    componentWillUpdate(nextProps,nextState){
     //// WHEN THERE IS A CHANGE IN STATE AND THE 
     //COMPONENT WILL RE-RENDER AND CAN COMPARE 
     //NEW PROPS/STATE WITH CURRENT STATE/PROPS  
     
     console.log("componentWillUpdate, nextProps:",nextProps,"nextState:",nextState);
    }

    componentDidUpdate(prevProps,prevState){
    //WHEN THE COMPONENT RE-RENDERED AND CAN COMPARE PREVIOUS 
    //PROPS/STATE WITH NEW STATE/PROPS
    console.log(
        "componentDidUpdate, prevProps:",
        prevProps,
        " prevState:",
        prevState
      );
    }
    render(){
        console.log("render fired");

        return(
            <div>
                Counter Value:{this.props.count}
            </div>
        )
    }
}

export default Counter;