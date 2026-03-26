export default async function handler(req, res) {

  const { question } = req.body;

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`
    },
    body: JSON.stringify({
      model: "openai/gpt-oss-20b",
      messages: [
        {
          role: "system",
          content: "You are an AI project manager assistant. Answer questions about project status, managers, and timelines."
        },
        {
          role: "user",
          content: question
        }
      ]
    })
  });

  const data = await response.json();

  res.status(200).json({
    answer: data.choices?.[0]?.message?.content || "No response"
  });

}
