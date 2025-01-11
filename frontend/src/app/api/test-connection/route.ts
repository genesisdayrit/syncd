import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET() {
  try {
    const result = await query('SELECT NOW()');
    return NextResponse.json({
      success: true,
      message: 'Database connection successful!',
      timestamp: result[0].now, // Assuming query returns rows directly
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to connect to the database',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

