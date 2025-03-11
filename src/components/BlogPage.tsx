'use client'
import React, { useState } from 'react';
import { ThumbsUp, MessageCircle, Share2, Bookmark } from 'lucide-react';

const BlogPage = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Getting Started with Web Development",
      content: "Web development is an exciting journey that combines creativity and technical skills...",
      author: "Jane Doe",
      date: "2025-02-11",
      likes: 42,
      comments: [
        { id: 1, author: "John Smith", content: "Great article! Very helpful.", likes: 5 },
        { id: 2, author: "Alice Brown", content: "Thanks for sharing these insights!", likes: 3 }
      ],
      saved: false
    },
    {
      id: 2,
      title: "The Future of AI",
      content: "Artificial Intelligence is revolutionizing how we interact with technology...",
      author: "Bob Wilson",
      date: "2025-02-10",
      likes: 38,
      comments: [
        { id: 1, author: "Sarah Johnson", content: "Fascinating perspective!", likes: 4 }
      ],
      saved: false
    }
  ]);

  const [newComment, setNewComment] = useState('');
  const [activeCommentId, setActiveCommentId] = useState(null);

  const handleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  const handleSave = (postId) => {
    setPosts(posts.map(post =>
      post.id === postId ? { ...post, saved: !post.saved } : post
    ));
  };

  const handleComment = (postId) => {
    if (newComment.trim()) {
      setPosts(posts.map(post =>
        post.id === postId ? {
          ...post,
          comments: [...post.comments, {
            id: post.comments.length + 1,
            author: "Current User",
            content: newComment,
            likes: 0
          }]
        } : post
      ));
      setNewComment('');
      setActiveCommentId(null);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold mb-8">My Blog</h1>
      
      {posts.map(post => (
        <div key={post.id} className="mb-6">
          <div>
            <div>{post.title}</div>
            <div className="text-sm text-gray-500">
              By {post.author} • {new Date(post.date).toLocaleDateString()}
            </div>
          </div>
          
          <div>
            <p className="mb-4">{post.content}</p>
            
            <div className="flex gap-4 mb-4">
              <button 
                variant="ghost" 
                size="sm" 
                onClick={() => handleLike(post.id)}
                className="flex items-center gap-2"
              >
                <ThumbsUp className="w-4 h-4" />
                {post.likes}
              </button>
              
              <button 
                variant="ghost" 
                size="sm" 
                onClick={() => setActiveCommentId(activeCommentId === post.id ? null : post.id)}
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                {post.comments.length}
              </button>
              
              <button 
                variant="ghost" 
                size="sm"
                className="flex items-center gap-2"
              >
                <Share2 className="w-4 h-4" />
                Share
              </button>
              
              <button 
                variant="ghost" 
                size="sm" 
                onClick={() => handleSave(post.id)}
                className={`flex items-center gap-2 ${post.saved ? 'text-blue-600' : ''}`}
              >
                <Bookmark className="w-4 h-4" />
                {post.saved ? 'Saved' : 'Save'}
              </button>
            </div>

            {activeCommentId === post.id && (
              <div className="space-y-2">
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Write a comment..."
                  className="w-full"
                />
                <button 
                  onClick={() => handleComment(post.id)}
                  size="sm"
                >
                  Post Comment
                </button>
              </div>
            )}

            {post.comments.length > 0 && (
              <div className="mt-4 space-y-3">
                {post.comments.map(comment => (
                  <div key={comment.id} className="bg-gray-50">
                    <div className="p-3">
                      <div className="font-medium text-sm">{comment.author}</div>
                      <p className="text-sm mt-1">{comment.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;