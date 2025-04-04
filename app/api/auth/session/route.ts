import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
    const cookieStore = await cookies();
    const session = cookieStore.get('session')?.value;

    if (!session) {
        return NextResponse.json({ isAuthenticated: false, user: null });
    }

    // Validate session (e.g., decode JWT or check DB)
    try {
        const user = await validateSession(session); // Replace with your logic
        return NextResponse.json({ isAuthenticated: true, user });
    } catch {
        return NextResponse.json({ isAuthenticated: false, user: null });
    }
}

async function validateSession(session: string) {
    // Example implementation: Decode a JWT token and verify its validity
    const secretKey = process.env.JWT_SECRET_KEY;
    if (!secretKey) {
        throw new Error('JWT secret key is not defined');
    }

    try {
        const jwt = await import('jsonwebtoken');
        const decoded = jwt.verify(session, secretKey) as { id: string; email: string };
        return { id: decoded.id, email: decoded.email };
    } catch {
        throw new Error('Invalid session token');
    }
}