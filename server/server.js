import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
  res.status(200).send({
    message: 'Hello from Timur!'
  });
});

app.post('/', async (req, res) => {
  try {
    const prompt = req.body.prompt;

    // Provjera pitanja o vlasniku
    if (prompt.toLowerCase().includes('ko je tvoj vlasnik?')) {
      const response = {
        message: 'Moj vlasnik je Timur.'
      };
      return res.status(200).json(response);
    }

    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: prompt },
      ],
      temperature: 0.6,
      max_tokens: 100,
    });

    const answer = response.choices[0].message.content;
    res.status(200).json({ message: answer });
  } catch (error) {
    console.error(error);
    res.status(500).send(error || 'Something went wrong');
  }
});

app.listen(5000, () => console.log('AI server started on http://localhost:5000'));