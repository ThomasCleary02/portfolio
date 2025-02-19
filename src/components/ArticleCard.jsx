import React from 'react';
import { motion } from 'framer-motion';
import { effects } from '../styles/animationVariants.js';

export const ArticlePlaceholder = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 400 300"
    className="w-full h-full text-gray-200"
    fill="currentColor"
  >
    <rect width="100%" height="100%" fill="currentColor" />
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="gray" fontSize="24">
      No Image
    </text>
  </svg>
);

const ArticleCard = ({ article }) => {
  return (
    <motion.a
      variants={effects}
      whileHover="cardHover"
      className="border rounded-xl shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-full"
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {/* Article Image Container */}
      <div className="h-40 flex items-center justify-center p-4">
        <div className="w-full h-full flex items-center justify-center bg-white rounded-lg overflow-hidden">
          {article.img_url ? (
            <img
              src={article.img_url}
              alt={article.title}
              className="w-full h-full object-cover"
              style={{ maxWidth: '150%', maxHeight: '150%' }}
            />
          ) : (
            <ArticlePlaceholder />
          )}
        </div>
      </div>

      {/* Content Container */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Article Header */}
        <div className="mb-2">
          <h2 className="text-xl font-semibold">{article.title}</h2>
          {article.subtitle && (
            <p className="text-sm text-gray-600 mt-1">{article.subtitle}</p>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm flex-grow">{article.top_highlight}</p>

        {/* Published Date */}
        <p className="text-xs text-gray-500 self-start">{article.published_date}</p>
      </div>
    </motion.a>
  );
};

export default ArticleCard;
