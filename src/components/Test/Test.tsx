'use client';

import { useEffect } from 'react';

export default function Test({ projects }: { projects?: any[] }) {
  useEffect(() => {
    if (projects) {
      console.log('Projects data:', projects);
    } else {
      console.log('No projects data available.');
    }
  }, [projects]);
  return (
    <div>
      <h1>Test Component</h1>
      <p>This is a test component to verify the code structure.</p>
    </div>
  );
}
