const { create } = require("domain");
const fs = require("fs")
// const { all } = require("../routes/main")


const User={
    filename:"src/data/usersData.json",

    getData : function(){
        return JSON.parse( fs.readFileSync(this.filename,'utf-8'))
    },
    generateId: function(){
        let allUsers = this.findAll();
        let lastUser = allUsers.pop()
        if(lastUser){
            return lastUser.id +1
        }
        return 1 // si no tengo ningun usuario 
        
    },
    
    findAll: function(){
        return this.getData();
    },
    findByPk: function(id){
        let allUsers = this.findAll()
        let userFound = allUsers.find(oneUser => oneUser.id == id);
        return userFound
    },
    findByField: function(field, text){
        let allUsers = this.findAll()
        let userFound = allUsers.find(oneUser => oneUser[field] == text);
        return userFound
    },
    create: function(UserData){
        let allUsers = this.findAll()
        let newUser = {
            id: this.generateId(),
            ...UserData 
        }
        allUsers.push(newUser)
        fs.writeFileSync(this.filename,JSON.stringify(allUsers,null,' '))
        return newUser
    },
    

    
}


module.exports = User
