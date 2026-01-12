"use client";

import { useState, useEffect } from 'react';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="text-center p-4 text-xs text-muted-foreground">
      &copy; {currentYear} John Oliver Martillos. All rights reserved.
    </footer>
  );
};

export default Footer;
