import { NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import prisma from '@/utils/prisma/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { submissionLink, userId } = body;

    // If userId is provided (from UploadThing callback), use it
    // Otherwise, get user from auth
    let currentUserId = userId;

    if (!currentUserId) {
      const cookieStore = await cookies();
      const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
          cookies: {
            getAll() {
              return cookieStore.getAll();
            },
            setAll(cookiesToSet) {
              cookiesToSet.forEach(({ name, value, options }) => {
                cookieStore.set(name, value, options);
              });
            },
          },
        }
      );
      
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError || !user) {
        return NextResponse.json(
          { error: 'Authentication failed' },
          { status: 401 }
        );
      }

      currentUserId = user.id;
    }

    // Update user's submissionLink in database
    const updatedUser = await prisma.user.update({
      where: { id: currentUserId },
      data: { submissionLink },
      select: {
        id: true,
        submissionLink: true,
      },
    });

    return NextResponse.json(
      { 
        success: true,
        user: updatedUser
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error updating submission link:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}