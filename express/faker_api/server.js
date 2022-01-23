const faker = require('@faker-js/faker');
const express = require("express");
const app = express();
const port = 8000;

class User{
    constructor(){
        this.id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company{
    constructor(){
        this.id = faker.datatype.uuid();
        this.companyName = faker.company.companyName();
        this.streetAddress = faker.address.streetAddress()
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.zipCode = faker.address.zipCodeByState();
        this.country = faker.address.countryCode();
    }
}

app.get("/api/user/new", (req, res)=>{
    let newUser = new User()
    res.json({result:newUser})
})

app.get("/api/companies/new", (req, res)=>{
    let newCompany = new Company()
    res.json({result:newCompany})
})

app.get("/api/user/company", (req, res)=>{
    let newUser = new User()
    let newCompany = new Company()
    res.json({result:newUser, results:newCompany})

})

app.listen( port, () => console.log(`Listening on port: ${port}`) );