import React, { forwardRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { formatPublishedDate, toMediaUrl } from "@/lib/blogFormat";

interface LatestPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  cover_image_url: string | null;
  category: string | null;
  read_time: string | null;
  published_at: string | null;
}

// Blog articles are paused site-wide. Flip this to true once new posts are published
// to bring the "Latest Insights" section back on every page that uses it.
export const SHOW_BLOG_SECTION = false;

export const BlogSection = forwardRef<HTMLElement, { dark?: boolean }>(({ dark = false }, ref) => {
  const [blogs, setBlogs] = useState<LatestPost[]>([]);

  useEffect(() => {
    if (!SHOW_BLOG_SECTION) return;
    let active = true;
    supabase
      .from("blogs")
      .select("id, slug, title, excerpt, cover_image_url, category, read_time, published_at")
      .eq("status", "published")
      .order("published_at", { ascending: false })
      .limit(3)
      .then(({ data }) => {
        if (active) setBlogs((data as LatestPost[]) ?? []);
      });
    return () => {
      active = false;
    };
  }, []);

  // Blog articles are paused; flip SHOW_BLOG_SECTION back to true to restore the section.
  if (!SHOW_BLOG_SECTION) return null;

  // Only real published articles are shown; the section stays hidden until one exists.
  if (blogs.length === 0) return null;

  return (
    <section ref={ref} className={`py-8 md:py-14 lg:py-20 relative overflow-hidden ${dark ? "bg-foreground" : "bg-background"}`}>
      {/* Subtle background */}
      {!dark && <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />}

      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl lg:max-w-4xl mx-auto mb-5 md:mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand"> Blog</p>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${dark ? "text-primary-foreground" : "text-foreground"}`}>
            Latest Insights
          </h2>
          <p className={`text-lg ${dark ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
            Stay ahead with the latest trends in AI-based digital marketing, performance strategies, and business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-8 mb-5 md:mb-10">
          {blogs.map((blog) => (
            <Link key={blog.id} to={`/blog/${blog.slug}`} className="block">
              <Card
                className={`overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group cursor-pointer h-full ${dark ? "bg-primary-foreground/5 border-primary-foreground/15" : "bg-background/80 backdrop-blur-sm border-border/50"}`}
              >
                <div className="relative overflow-hidden">
                  {blog.cover_image_url ? (
                    <img 
                      src={toMediaUrl(blog.cover_image_url)} 
                      alt={blog.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="h-48 w-full bg-muted" aria-hidden />
                  )}
                  {blog.category && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                        {blog.category}
                      </span>
                    </div>
                  )}
                </div>
                <CardContent className="p-4 md:p-6">
                  <div className={`flex items-center gap-4 text-sm mb-3 ${dark ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                    {blog.published_at && (
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatPublishedDate(blog.published_at)}
                      </div>
                    )}
                    {blog.read_time && (
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {blog.read_time}
                      </div>
                    )}
                  </div>
                  <h3 className={`text-lg font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2 ${dark ? "text-primary-foreground" : "text-foreground"}`}>
                    {blog.title}
                  </h3>
                  <p className={`text-sm line-clamp-3 mb-4 ${dark ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button 
            asChild
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-accent hover:border-primary"
          >
            <Link to="/blog">
              Explore All Blogs
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
});

BlogSection.displayName = "BlogSection";
