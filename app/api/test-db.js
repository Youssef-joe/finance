import { connectToDatabase } from '../../lib/mongodb.js';

export default async function handler(req, res) {
  try {
    const { db } = await connectToDatabase();
    const data = await db.collection('users').find({}).toArray();
    res.status(200).json({ message: 'Connected successfully', data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Database connection error', error: error.message });
  }
}
