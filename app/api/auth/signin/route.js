import { connectToDatabase } from '../../../lib/mongodb.js';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs'; // Assuming you are using bcrypt for hashing

export async function POST(request) {
  const { email, password } = await request.json();

  try {
    const { db } = await connectToDatabase();

    const user = await db.collection('users').findOne({ email });
    if (!user) {
      return NextResponse.json({ message: 'No user found' }, { status: 404 });
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    // Further actions like generating a JWT token...

    return NextResponse.json({ message: 'Sign in successful' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error signing in', error: error.message }, { status: 500 });
  }
}
