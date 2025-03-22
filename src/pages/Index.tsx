
import React from 'react';
import Calculator from '@/components/Calculator';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="w-full max-w-md animate-fade-up">
        <Calculator />
        <div className="text-center mt-8 text-white/60 text-sm">
          <p>Premium scientific calculator experience</p>
          <div className="mt-4">
            <Button asChild variant="outline" className="text-white border-white/20 hover:bg-white/10">
              <Link to="/portfolio">View My Portfolio</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
