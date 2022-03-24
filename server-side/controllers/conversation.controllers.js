import Conversation from "../models/Conversation.js";



//create convo
export const createConversation= async(req,res)=>{
    const newConversation = new Conversation({
        members:[req.body.senderId,req.body.receiverId],
    });
    try{
       const savedConversation= await newConversation.save();
       res.status(200).json(savedConversation);
    }
    catch(err)
    {
        console.log(err);
    }
}


//get Convo of a user

export const getConversationFromUser= async(req,res)=>{
    try {
        const conversation= await Conversation.find({
            members:{$in:[req.params.userId]},
        });
        res.status(200).json(conversation);
    } catch (error) {
        res.status(500).json(error);
    }
}