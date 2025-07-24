'use strict';

const User = require("../entities/Customer");



const customerService=require("../service/CustomerService")

async function createCustomer(req, res) {
    const { firstName, lastName, email, phoneNumber,course } = req.body;

    const createdCustomer = {  firstName, lastName, phoneNumber, email,course };

    try {
        const newUser = await customerService.createCustomer(createdCustomer); // ID'yi al
        
        res.status(201).json({ 
            message: "Customer created successfully",
            userId: newUser.id,  // ID'yi döndür
            user: newUser        // İsteğe bağlı: tüm kullanıcı bilgisi
        });

    } catch (error) {
        console.error("Hata:", error.message); 
        res.status(500).json({ error: "Server error." });
    }
}

async function addCourseToUser(req, res) {
  const userId = req.params.id;
  const { course } = req.body;

  if (!course) {
    return res.status(400).json({ error: "Course name is required." });
  }

  try {
    await customerService.addCourse(userId, course);
    res.status(200).json({ message: "Course added successfully." });
  } catch (err) {
    console.error("Kurs eklenirken hata:", err);
    res.status(500).json({ error: "Something went wrong." });
  }
}


function getCustomerById(request, response) {
    const { id } = request.params;
    console.log("x")

    customerService.getCustomerById(id)
        .then(customer => {
            if (customer) {
                response.json(customer);
            } else {
                response.status(404).json({ message: "Customer not found" });
            }
        })
        .catch(err => {
            console.error(err);
            response.status(500).json({ message: "Internal server error" });
        });
}


function getCustomerByName(request,response) {
    const firstName=request.query.firstName;

    customerService.getCustomerByName(firstName).then(customer=>{
        if(customer){
            response.json({"customers listed ":customer})
        }else{
            response.status(404).json({message:"customer not found"});
        }
    }).catch(error=>{
        console.log(error);
        response.status(500).json({message:"Internal server error"})
    });
}

function getCustomerByName(request,response) {
    const firstName=request.query.firstName;

    customerService.getCustomerByName(firstName).then(customer=>{
        if(customer){
            response.json({"customers listed ":customer})
        }else{
            response.status(404).json({message:"customer not found"});
        }
    }).catch(error=>{
        console.log(error);
        response.status(500).json({message:"Internal server error"})
    });
}




function updateCustomer(request,response) {
    const {field,value}=request.body;
    
    const {id}=request.params;
    customerService.updateCustomer(id,field,value).then(customer => {
            if (customer) {
                response.json(customer);
            } else {
                response.status(404).json({ message: "Customer not found" });
            }
        })
        .catch(err => {
            console.error(err);
            response.status(500).json({ message: "Internal server error" });
        });
}
    



function deleteCustomer(request,response) {
    const {id}=request.params;
    customerService.deleteCustomer(id).then(customer=>{
        if(customer){
            response.json('customer deleted',customer);
        }else{
            response.status(404).json({message:"Customer not found"})
        }
    })
    .catch(error=>{
        console.error(error);
        response.status(500).json({message:"Server Error"});
    });

}
1
async function getAllUsers(request, response) {
    try {
        const customers = await customerService.getAllUsers();

        response.status(200).json(customers);

    } catch (error) {
        console.error(error);
        response.status(500).json({ message: "Server Error" });
    }
}

module.exports = { createCustomer, getCustomerById ,updateCustomer,deleteCustomer,getAllUsers,getCustomerByName,addCourseToUser}
