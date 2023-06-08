import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAIApi(process.env.OPENAI_API_KEY);

app.get('/', async (req, res) => {
  res.status(200).send({
    message: 'Hello from Timur!'
  });
});

app.post('/', async (req, res) => {
  try {
    const prompt = req.body.prompt;

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${prompt}`,
      temperature: 0.7,
      max_tokens: 100,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });

    const { choices } = response.data;
    const botResponse = choices[0].text.trim();

    res.status(200).send({
      bot: botResponse
    });

  } catch (error) {
    console.error(error);
    res.status(500).send(error || 'Kao TIMUR AI, primjecujem grešku??');
  }
});

app.listen(5000, () => console.log('AI server started on http://localhost:5000'));
