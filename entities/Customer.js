'use strict';

 class Customer{
    constructor(id,nationalId,firstName,lastName,password,email){
        this.id=id;
        this.nationalId=nationalId;
        this.firstName=firstName;
        this.lastName=lastName;
        this.password=password;
        this.email=email;
    }
    
}

module.exports=Customer;