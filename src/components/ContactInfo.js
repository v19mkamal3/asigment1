import React  from 'react';
export class ContactInfo extends React.Component{
    render(){
        return(
            <h1>
                {this.props.email} <br/>
                {this.props.phone} <br/>
                {this.props.facebook}<br/>
            </h1>
        );
    }
}