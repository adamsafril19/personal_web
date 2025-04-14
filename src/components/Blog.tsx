import React from "react";
import { Calendar, Clock } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React Hooks",
    excerpt:
      "Learn how to use React Hooks to manage state and side effects in your applications",
    date: "2024-03-15",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
  },
  {
    id: 2,
    title: "Building Scalable APIs with Node.js",
    excerpt:
      "Best practices for creating maintainable and scalable REST APIs using Node.js",
    date: "2024-03-10",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
  },
  {
    id: 3,
    title: "Modern CSS Techniques",
    excerpt: "Exploring modern CSS features and how to use them effectively",
    date: "2024-03-05",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2",
  },
];

const Blog = () => {
  return (
    <section
      id="blog"
      className="py-20 bg-abyssal-base text-white relative overflow-hidden"
    >
      {" "}
      {/* Apply base bg and text color */}
      <div className="container mx-auto px-6">
        {/* Adjusted header gradient */}
        <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-abyssal-accent to-orange-400 bg-clip-text text-transparent">
          Latest Articles
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              // Adjusted card style: background, border, hover effect
              className="group bg-abyssal-base/50 rounded-lg shadow-lg overflow-hidden border border-abyssal-accent/20 hover:border-abyssal-accent/50 hover:shadow-glow-inner transition-all duration-300 backdrop-blur-sm"
            >
              <div className="overflow-hidden">
                {" "}
                {/* Added container for image zoom effect */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" // Image zoom on hover
                />
              </div>
              <div className="p-6">
                {/* Adjusted meta text color */}
                <div className="flex items-center text-sm text-white/70 mb-4">
                  <Calendar size={16} className="mr-2 text-abyssal-accent" />{" "}
                  {/* Accent color for icon */}
                  <span>{post.date}</span>
                  <Clock
                    size={16}
                    className="ml-4 mr-2 text-abyssal-accent"
                  />{" "}
                  {/* Accent color for icon */}
                  <span>{post.readTime}</span>
                </div>

                {/* Ensure title text is white */}
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {post.title}
                </h3>
                {/* Ensure excerpt text is white */}
                <p className="text-white/80 mb-4 drop-shadow-sm">
                  {post.excerpt}
                </p>

                {/* Adjusted link color */}
                <a
                  href="#"
                  className="text-abyssal-accent hover:text-orange-400 font-medium"
                >
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
