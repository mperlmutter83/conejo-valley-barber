import { NextResponse } from 'next/server';
import { getAllPosts } from '@/lib/blog-data';

/**
 * GET /api/posts — machine-readable blog feed for the Yes Crew CRM.
 *
 * The yescrew-dashboard content sync polls this endpoint on every Vercel
 * provider site and mirrors the posts into provider_content (the /content
 * page). Shape matches the rest of the network:
 *   { slug, title, category, date, publishedAt, status, url }
 */

export const dynamic = 'force-dynamic';

/** Current date in America/Los_Angeles as YYYY-MM-DD. */
function getTodayLA(): string {
  return new Date().toLocaleDateString('en-CA', { timeZone: 'America/Los_Angeles' });
}

export async function GET() {
  const today = getTodayLA();

  const response = getAllPosts().map((post) => ({
    slug: post.slug,
    title: post.title,
    category: post.category,
    date: post.date,
    publishedAt: post.publishedAt,
    // Future-dated posts report as scheduled so the CRM matches intent.
    status: post.publishedAt <= today ? 'published' : 'scheduled',
    url: `https://www.conejovalleybarber.com/blog/${post.slug}`,
  }));

  return NextResponse.json(response);
}
