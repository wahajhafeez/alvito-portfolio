import { useState, useEffect } from 'react';

const ROLES = [
  'high-converting websites',
  'brands that sell',
  'apps that scale',
  'marketing that works',
  'designs that wow',
];

const TypingAnimation = ({ className = '' }) => {
  const [displayed, setDisplayed] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    const delay = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < current.length) {
          setDisplayed(current.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (charIndex > 0) {
          setDisplayed(current.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        } else {
          setIsDeleting(false);
          setRoleIndex((i) => (i + 1) % ROLES.length);
        }
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <span className={className}>
      {displayed}
      <span className="ml-0.5 inline-block w-0.5 animate-pulse bg-primary">&nbsp;</span>
    </span>
  );
};

export default TypingAnimation;
