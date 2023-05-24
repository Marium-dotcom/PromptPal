import Prompt from "@/models/prompt";
import { connectToDB } from "@/utils/database";

// get

export const GET = async (request, {params}) => {

try {
    await connectToDB()

    const prompt = await Prompt.findById(params.id).populate("creator")
    if (!prompt) return new Response("Prompt Not Found", { status: 404 });

    return new Response(JSON.stringify(prompt), { status: 200 })
} catch (error) {
    return new Response("Internal Server Error", { status: 500 });
}
}






export const PATCH = async (req, {params})=>{
const {prompt, tag} = await req.json()

try {
    await connectToDB()

    const currentPrompt = await Prompt.findById(params.id);

           if (!currentPrompt) {
            return new Response("Prompt not found", { status: 404 });
        }


    currentPrompt.prompt = prompt
    currentPrompt.tag = tag

    await currentPrompt.save()
    return new Response("done", {status:200})
} catch (error) {
    return new Response("ERROR", {status:500})

}
}



//DELETE

export const DELETE = async(request, {params})=>{
    try {
        await connectToDB()
        await Prompt.findByIdAndDelete(params.id)
        return new Response("deleted" , {status:200})
    } catch (error) {
        return new Response("failed to delete", {status: 500})
    }

}
