import React ,{Fragment}  from 'react';
import {ContactInfo} from './ContactInfo';
import {PersonalDetails} from'./PersonalDetails';

export class Assigment1app extends  React.Component{
    render(){
        return(
            <Fragment>
                <PersonalDetails name="mostafa"
                                 age="30" 
                                 about="mechatronices enginner"/>
                <ContactInfo     email="eng_mostafa_fathi@yahoo.com"
                                 phone="01123605754" 
                                 facebook="https://www.facebook.com"/>
            </Fragment>
        );
    }
}