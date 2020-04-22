import React  from 'react';
export class PersonalDetails extends  React.Component{
    render(){
        return(
            <h1>
                {this.props.name} <br/>
                {this.props.age}  <br/>
                {this.props.about} <br/>
            </h1>
        );
    }
}