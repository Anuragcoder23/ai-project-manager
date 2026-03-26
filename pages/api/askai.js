export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  try {

    const { question } = req.body;

    // get data from your sheet API
    const sheetRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/sheet`);
    const sheetData = await sheetRes.json();

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
            content: `Answer ONLY using this project database: ${JSON.stringify(sheetData)}`
          },
          {
            role: "user",
            content: question
          }
        ]
      })
    });

    const data = await response.json();

    const answer = data?.choices?.[0]?.message?.content || "No answer found";

    return res.status(200).json({ answer });

  } catch (error) {

    console.error(error);

    return res.status(500).json({ error: "AI request failed" });

  }
}
