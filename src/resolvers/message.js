var ObjectId = require('mongodb').ObjectID;

const resolvers = {
    Query: {
      messages: (parent, args, { models }) => {
        return models.MessageModel.find({}).populate('user');       
      },
      message: (parent, { id }, { models }) => {
        return models.MessageModel.findById({ "_id": ObjectId(id) }).populate('user');
      },
    },
    Mutation: {
      createMessage: async (parent, { text }, { me, models }) => {
        let createdMessage = await models.MessageModel.create({ text: text, user: ObjectId(me.id) });       

        me.messages.push(ObjectId(createdMessage.id));
        await me.save();

        return createdMessage;
      },
      deleteMessage: async (parent, { id }, { models }) => {
        let res = await models.MessageModel.findOneAndDelete({ "_id": ObjectId(id) });
        if(!res) return false;

        let user = await models.UserModel.findOne({ "messages": ObjectId(id) });
        user.messages = user.messages.filter(item => item = ObjectId(id));
        await user.save();

        return true;
      },
      updateMessage: async (parent, { message }, { models }) => {
        let res = await models.MessageModel.findOneAndUpdate( {"_id": ObjectId(message.id) }, { "text": message.text }, { new: true });
        if(!res) return null;

        return res;
      },
    },
  };

  module.exports = resolvers;