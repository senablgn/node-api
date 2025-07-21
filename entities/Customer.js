'use strict';

 class User{
    constructor(nationalId,firstName,lastName,email,phoneNumber){
        this.nationalId=nationalId;
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.phoneNumber=phoneNumber;
    }
    
}

module.exports=User;