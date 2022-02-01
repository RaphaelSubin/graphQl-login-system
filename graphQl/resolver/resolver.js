const { User } = require("../../models");
const bcrypt = require("bcrypt");


const resolvers = {
  Mutation: {
    userRegistration: async (_, { name, username, email, password }) => {
      const user = await User.create({
        name,
        username,
        email,
         password
         // await bcrypt.hash(password, 5),
      });

      return "user Registered Successfully...";
    },

    userLogin: async (_, { username, password }) => {
      const user = await User.findOne({ where: { username } });
      if (!user) {
        throw new Error("this user is not registered..");
      }
         const passwordCheck = await User.findOne({ where: { password } });
      if (!passwordCheck) {
        return "Password is invalid";
      }
       return "Logged In"
      

    }
    // async userLogin(_, { username, password }) {
    //   const usernameCheck = await User.findOne({ where: { username } });
    //   if (!usernameCheck) {
    //     return "Username is not exists";
    //   }
    //   const passwordCheck = await User.findOne({ where: { password } });
    //   if (!passwordCheck) {
    //     return "Password is invalid";
    //   }

    //   return "Logged";
    // },
  },

    Query : {
        getUsers : async(_,{args}) => {
             const details = await User.findAll({raw:true})
             return details;
        },

        getSomeUsers : async (parent,args) => {
            const someDetails = await User.findAll(args)
            return someDetails;
        },
        getUserCount : async (parent,args) => {
          const count  = await User.findAndCountAll({raw:true},args).then((result)=> {
            console.log(result);
            
          });
          return count;
          
        }
     
        
    }


};


module.exports = resolvers;
