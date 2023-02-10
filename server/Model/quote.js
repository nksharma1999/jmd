import mongoose from  'mongoose';

const QuoteSchemma = new mongoose.Schema({
    carType:{
        manufacturer:{type:String, required: true,},
        model:{type:String, required: true,},
        fuel:{type:String, required: true,},
        
    },
    userNumber:{type:Number,required: true,},
    Date:{type:Date , default: Date.now(),},
    status: {
        type: String,
        enum: {
          values: ["open", "inprogress", "completed"],
          message: `{VALUE} is not supported`,
        },
      },
});

export const QuoteModel = mongoose.model("Quote",QuoteSchemma);