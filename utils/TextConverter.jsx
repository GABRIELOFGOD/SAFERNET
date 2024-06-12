// utils/TextConverter.js
import LinkifyIt from 'linkify-it';
import DOMPurify from 'dompurify';

const linkify = new LinkifyIt();

export const convertTextToHTML = (text) => {
  // Replace {sub title} with <span> tags
  text = text.replace(/\{([^}]+)\}/g, '<span class="subtitle">$1</span>');

  const matches = linkify.match(text);
  if (!matches) return text;

  let result = '';
  let lastIndex = 0;

  matches.forEach(match => {
    // Append text before the match
    result += text.slice(lastIndex, match.index);

    // Append the linkified text with custom class
    const url = match.url;
    result += `<a href="${DOMPurify.sanitize(url)}" target="_blank" rel="noopener noreferrer" class="custom-link">${DOMPurify.sanitize(url)}</a>`;

    // Update the last index
    lastIndex = match.lastIndex;
  });

  // Append any remaining text after the last match
  result += text.slice(lastIndex);

  return result;
};
