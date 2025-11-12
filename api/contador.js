import { kv } from '@vercel/kv';

export default async function handler(request, response) {
  try {
    // Usa o nome do seu banco para a chave, para ficar organizado
    const currentCount = await kv.incr('contadorNutriBot_views');
    return response.status(200).json({ value: currentCount });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error: 'Falha ao buscar o contador.' });
  }
}
