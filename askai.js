
import axios from "axios"

export default async function handler(req,res){

const {question,data} = req.body

const prompt = `
You are an AI Project Manager assistant.

Dataset:
${JSON.stringify(data)}

Answer the question:
${question}

If project number requested return basecamp link.

After answering ask:
Anything else you want to check?
`

const response = await axios.post(
"https://openrouter.ai/api/v1/chat/completions",
{
model:"gpt-oss-20b",
messages:[
{
role:"user",
content:prompt
}
]
},
{
headers:{
Authorization:`Bearer ${process.env.OPENROUTER_API_KEY}`,
"Content-Type":"application/json"
}
}
)

res.json({
answer:response.data.choices[0].message.content
})

}
