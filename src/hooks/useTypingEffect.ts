import { useState, useEffect } from 'react';

export const useTypingEffect = (texts: string[], typingSpeed = 150, deletingSpeed = 100, pauseTime = 2000) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    let timer: number;
    const currentText = texts[loopNum % texts.length];

    if (isDeleting) {
      timer = setTimeout(() => {
        setText(currentText.substring(0, text.length - 1));
      }, deletingSpeed) as unknown as number;
    } else {
      timer = setTimeout(() => {
        setText(currentText.substring(0, text.length + 1));
      }, typingSpeed) as unknown as number;
    }

    if (!isDeleting && text === currentText) {
      timer = setTimeout(() => setIsDeleting(true), pauseTime) as unknown as number;
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, texts, typingSpeed, deletingSpeed, pauseTime]);

  return text;
};
