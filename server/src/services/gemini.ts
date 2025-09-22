import dotenv from "dotenv";
dotenv.config();

const MODEL = "gemini-2.5-flash";
const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;

export async function getGeminiPosts() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error("GEMINI_API_KEY not set in .env");

  const prompt =
  `Give me **1 latest short tech or current event update from the Philippines (2025)** in Tagalog.  
Return **only a JSON array** with exactly 1 object, like this:

{
  "title": "...",
  "date": "YYYY-MM-DD",
  "content": "..."
}

Requirements:
- The "date" must be **today’s date** in YYYY-MM-DD format.  
- Keep "title" short (max 60 characters) and "content" concise (1–2 sentences).  
- Do not include any text outside the JSON array.  
- Ensure the JSON is **valid and parseable**.  
`;

  const body = {
    contents: [{ role: "user", parts: [{ text: prompt }] }],
    generationConfig: {
      responseMimeType: "application/json"
    }
  };

  const res = await fetch(`${ENDPOINT}?key=${apiKey}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": apiKey
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`Gemini API error ${res.status}: ${txt}`);
  }

  const data = await res.json();

  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error("Unexpected Gemini response format");

  try {
    return JSON.parse(text);
  } catch (err) {
    throw new Error(`Failed to parse Gemini response as JSON: ${text}`);
  }
}
