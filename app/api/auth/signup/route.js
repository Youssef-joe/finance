import { NextResponse } from 'next/server';
import { connectToDatabase } from './../../../../lib/mongodb.js';
import bcrypt from 'bcryptjs';

export async function POST(request) {
  const { name, email, password } = await request.json();

  try {
    const { db } = await connectToDatabase();
    const existingUser = await db.collection('users').findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 400 });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await db.collection('users').insertOne({ name, email, password: hashedPassword });
    return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error creating user' }, { status: 500 });
  }
}
