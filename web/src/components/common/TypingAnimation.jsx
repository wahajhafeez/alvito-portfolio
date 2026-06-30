import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const TypingAnimation = ({ className = '' }) => {
  const { t, i18n } = useTranslation();
  const roles = t('hero.typing', { returnObjects: true });

  const [displayed, setDisplayed] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Restart the cycle cleanly when the language switches
  useEffect(() => {
    setDisplayed('');
    setRoleIndex(0);
    setCharIndex(0);
    setIsDeleting(false);
  }, [i18n.language]);

  useEffect(() => {
    const current = roles[roleIndex] ?? '';
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
          setRoleIndex((i) => (i + 1) % roles.length);
        }
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex, roles]);

  return (
    <span className={className}>
      {displayed}
      <span className="ml-0.5 inline-block w-0.5 animate-pulse bg-primary">&nbsp;</span>
    </span>
  );
};

export default TypingAnimation;
