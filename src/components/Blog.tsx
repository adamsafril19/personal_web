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
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">
          Latest Articles
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar size={16} className="mr-2" />
                  <span>{post.date}</span>
                  <Clock size={16} className="ml-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4 drop-shadow-sm">
                  {post.excerpt}
                </p>

                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 font-medium"
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
