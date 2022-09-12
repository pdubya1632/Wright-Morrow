const { Employee } = require('../../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { ApolloError } = require('apollo-server');

module.exports = {
  Mutation: {
    async registerUser(_, { registerInput: { firstName, lastName, phone, email, password } }) {

      // see if user exists
      const oldUser = await Employee.findOne({ email });

      //no no buddy, not allowed. 😡
      if (oldUser) {
        throw new ApolloError('no no buddy, not allowed. 😡 Email already exists', 'USER_ALREADY_EXISTS');
      }

      // encrypt password 🔐
      const hashedPassword = await bcrypt.hash(password, 12);
      // build mongoose model 🦡
      const newUser = new Employee({
        firstName,
        lastName,
        phone,
        email: email.toLowerCase(),
        password: hashedPassword
      });
      // Create JWT token 🍪 (attach to user model)
      const token = jwt.sign(
        {
          user_id: newUser._id,
          email
        },
        process.env.JWT_SECRET, {
        expiresIn: '2h'
      }
      )
      newUser.token = token;
      //save user to db 📝
      const res = await newUser.save();
      // return user 🤓
      return {
        id: res.id,
        ...res._doc,
      }
    },
    // loginUser 🏠
    async loginUser(_, { loginInput: { email, password } }) {

      // see if user exists - if so, save user to variable
      const user = await Employee.findOne({ email });

      //check if password is correct
      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      if (user && isPasswordCorrect) {
        // Create JWT token 🍪 (attach to user model)
        const token = jwt.sign(
          {
            user_id: user._id,
            email
          },
          process.env.JWT_SECRET, {
          expiresIn: '2h'
        }
        );
        user.token = token;

        // return user 🤓
        return {
          id: user.id,
          ...user._doc,
        }
      } else { // if user doesn't exist, throw error
        throw new ApolloError('Login Failed', 'PASSWORD_INCORRECT');
      }
    },
  },
  Query: {
    employee: (_, { ID }) => Employee.findById(ID)
  }
}