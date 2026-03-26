export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  try {

    const { question } = req.body;

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-oss-20b",
        messages: [
          {
            role: "system",
            content: "You are an AI project manager assistant that helps manage software projects, generate tasks, and answer project questions."
          },
          {
            role: "user",
            content: question
          }
        ]
      })
    });

    const data = await response.json();

    const answer =
      data?.choices?.[0]?.message?.content ||
      "AI could not generate a response.";

    return res.status(200).json({ answer });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      error: "AI request failed"
    });

  }
}
