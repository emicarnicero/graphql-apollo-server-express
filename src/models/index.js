import mongoose from 'mongoose';

var mongoDB = 'mongodb+srv://emicarnicero:kTcvowUssvSsB8MJ@cluster0-vxs1e.gcp.mongodb.net/test?retryWrites=true';

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: String,
    email: String,
    messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }]
});

var UserModel = mongoose.model('User', userSchema);

var messageSchema = new Schema({
    text: String,
    user: { type: Schema.Types.ObjectId, ref: 'User' }
});

var MessageModel = mongoose.model('Message', messageSchema);

export default {
    UserModel,
    MessageModel
}