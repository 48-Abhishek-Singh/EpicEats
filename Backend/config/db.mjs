import mongoose from "mongoose";


export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://vikkikmr2003:87566633@cluster0.zwpwti6.mongodb.net/food-del').then(() => console.log('DB Connected'));
}