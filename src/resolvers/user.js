var ObjectId = require('mongodb').ObjectID;

const resolvers = {
    Query: {
      users: (parent, args, { models }) => {
        return models.UserModel.find({}).populate('messages');
      },
      user: (parent, { id }, { models }) => {
        return models.UserModel.findById({ "_id": ObjectId(id) }).populate('messages');
      },
      me: (parent, args, { me }) => {
        return me;
      },
    },
    Mutation: {
      createUser: async (parent, { user }, { models }) => {
        return await models.UserModel.create(user);
      },
      deleteUser: async (parent, { id }, { models }) => {
        let user = await models.UserModel.findOneAndDelete({ "_id": ObjectId(id) });
        if(!user) return false;

        if(!await models.MessageModel.remove({ "_id": { $in: user.messages } })) return false;
        
        return true;
      }
    }
  };

  module.exports = resolvers;