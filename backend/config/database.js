import mongoose from "mongoose";

export const connectDB = () => {
    mongoose.connect('mongodb+srv://slakshya826:appointybackend@appointy-data.nlzstth.mongodb.net/?retryWrites=true&w=majority&appName=appointy-data')
    .then(() => console.log('DB connected'))
    .catch((err) => console.log(err))
}
 