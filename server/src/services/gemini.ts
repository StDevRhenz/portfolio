// src/services/gemini.ts
import dotenv from "dotenv";
dotenv.config();

const MODEL = "gemini-2.5-flash";
const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;

export async function getGeminiPosts() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error("❌ GEMINI_API_KEY not set in .env");

  const prompt = `Give me the latest 1 short Philippine tech update in Tagalog.
  Return an array of objects in strict JSON format.
  Each object must be like this:
  {
    "title": "...",
    "date": "YYYY-MM-DD",
    "content": "..."
  }
  Do not include any text outside of the JSON array.`;

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
