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
    <motion.div
      variants={effects}
      whileHover="cardHover"
      className="border rounded-xl shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-full"
    >
      {/* Article Image Container */}
      <div className="h-40 flex items-center justify-center p-4">
        <div className="w-full h-full flex items-center justify-center bg-white rounded-lg overflow-hidden">
          {article.image_url ? (
            <img
              src={article.image_url}
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
        <p className="text-gray-600 mb-4 text-sm flex-grow">{article.top_highlight}</p>

        {/* Links */}
        <div className="flex space-x-4 mt-auto">
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primaryBlue hover:text-lightBlue transition-colors flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" strokeWidth="0">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Read Full Article
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ArticleCard;
