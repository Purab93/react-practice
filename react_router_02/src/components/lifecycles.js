import React,{PureComponent} from 'react';

class Life extends PureComponent {
    //1 get default props

    //2  set default state
    state = {
        title: 'Life cycles'
    }


    // //5 after render
    // componentDidMount(){
    //     console.log('5 after render');
    //     document.querySelector('h3').style.color = 'red';
    // }
    
    // //3 before render
    // componentWillMount(){
    //     console.log('3 before render');
    // }

    // componentWillUpdate(){
    //     console.log('before update');
    // }

    // componentDidUpdate(){
    //     console.log('after update');
    // }

    // shouldComponentUpdate(nextProps,nextState){
    //     if(nextState.title === this.state.title){
    //         return false;
    //     }
    
    //     return true;
    // }

    //4 after render
    render() {
        console.log('Render')
        return (
            <div>
                <h3>{this.state.title}</h3>
                <div onClick={ () => {
                    this.setState({
                        title:'something else'
                    })
                }}>Click to Change</div>
            </div>
        )
    }

}

export default Life;