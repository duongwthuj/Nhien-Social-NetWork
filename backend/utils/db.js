import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://duongthu5104:MhlJswckSgHbQ7pp@cluster0.ljnoc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log('mongodb connected successfully.');
    } catch (error) {
        console.log(error);
    }
}
export default connectDB;