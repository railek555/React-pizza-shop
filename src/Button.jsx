import React from 'react';



class Button extends React.Component {
    //componentDidMount() {
    //    console.log('Компонент отоборазился')
    //}
    render() {
        return <button className="button ">{this.props.children}</button>
    }
}

export default Button;