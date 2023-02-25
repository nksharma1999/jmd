import mongoose from "mongoose";
const ourServiceSchema = new mongoose.Schema({
    os_id: {
      type: String,
      required: true,
      unique: true,
    },
    serviceType: {
      type: String,
      required:true,
    },
    serviceName: {
      type: String,
      required: true,
    },
    about:[],
    carType:[{
      manufacturer:{type:String,required:true},
      model:{type:String,required:true},
      priceDetails:[{
        fuel:{type:String,required:true},
        price:{type:Number,required:true},
        discount: {
          type: Number,
          default: 0,
        },
        location: [
          {
            type: String,
            required: true,
          },
        ],
        }]
      }
    ],
    
    location: [
      {
        type: String,
        required: true,
      },
    ],
    country: [
      {
        type: String,
        default: "India",
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  });
  
  export const ourServiceModel = mongoose.model("ourService", ourServiceSchema);