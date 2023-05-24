import Prompt from "@/models/prompt";
import { connectToDB } from "@/utils/database";


export const GET = async (request, {params})=>{

try {
    await connectToDB()


    const prompts = await Prompt.find({
        tag: { $regex: new RegExp(params.tag + '|' + params.searchTerm, 'i') } // case-insensitive search for tag or search term
      }).populate('creator');
      
    return new Response(JSON.stringify(prompts),{
status:200
    })
} catch (error) {
    return new Response("failed",{
        status:500
            })
}
}