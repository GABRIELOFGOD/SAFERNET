// // utils/TextConverter.js
import LinkifyIt from 'linkify-it';
import DOMPurify from 'dompurify';

const linkify = new LinkifyIt();

export const convertTextToHTML = (text) => {
  // Replace {sub title} with <span> tags
  text = text.replace(/\{([^}]+)\}/g, '<span class="subtitle">$1</span>');

  // Add a class to the images
  text = text.replace(/<img /g, '<img class="blog-content-img" ');

  // Convert double line breaks to paragraph tags
  text = text.replace(/\n\s*\n/g, '</p><p>');

  // Ensure the text starts and ends with paragraph tags
  text = `<p>${text}</p>`;

  // Linkify URLs
  const matches = linkify.match(text);
  if (!matches) return text;

  let result = '';
  let lastIndex = 0;

  matches.forEach(match => {
    // Append text before the match
    result += text.slice(lastIndex, match.index);

    // Append the linkified text with custom class
    const url = match.url;
    
    // Check if the URL starts with a protocol; if not, do not add http
    const sanitizedUrl = DOMPurify.sanitize(url);
    const linkUrl = sanitizedUrl.startsWith('http') ? sanitizedUrl : `https://${sanitizedUrl}`;
    
    result += `<a href="${linkUrl}" target="_blank" rel="noopener noreferrer" class="custom-link">${sanitizedUrl}</a>`;

    // Update the last index
    lastIndex = match.lastIndex;
  });

  // Append any remaining text after the last match
  result += text.slice(lastIndex);

  return result;
};


// const linkify = new LinkifyIt();

// export const convertTextToHTML = (text) => {
//   // Replace {sub title} with <span> tags
//   text = text.replace(/\{([^}]+)\}/g, '<span class="subtitle">$1</span>');

//   // Add a class to the images
//   text = text.replace(/<img /g, '<img class="blog-content-img" ');

//   // Convert double line breaks to paragraph tags
//   text = text.replace(/\n\s*\n/g, '</p><p>');

//   // Ensure the text starts and ends with paragraph tags
//   text = `<p>${text}</p>`;

//   // Linkify URLs
//   const matches = linkify.match(text);
//   if (!matches) return text;

//   let result = '';
//   let lastIndex = 0;

//   matches.forEach(match => {
//     // Append text before the match
//     result += text.slice(lastIndex, match.index);

//     // Append the linkified text with custom class
//     const url = match.url;
//     result += `<a href="${DOMPurify.sanitize(url)}" target="_blank" rel="noopener noreferrer" class="custom-link">${DOMPurify.sanitize(url)}</a>`;

//     // Update the last index
//     lastIndex = match.lastIndex;
//   });

//   // Append any remaining text after the last match
//   result += text.slice(lastIndex);

//   return result;
// };
