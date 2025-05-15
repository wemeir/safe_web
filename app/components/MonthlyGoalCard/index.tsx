import React from 'react';
import Title from './Title';
import ProgressBar from './ProgressBar';
import MotivationalBox from './MotivationalBox';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export default function MonthlyGoalCard() {
  const progress = 50;
  const motivationalText = 'עבודה נהדרת! המשך כך כדי להגיע ליעד החודשי שלך!';

  return (
    <div className='h-full w-full'>
      <Card className='bg-[#202d46]'>
        <CardHeader>
          <Title />
        </CardHeader>
        <CardContent>
          <ProgressBar progress={progress} />
        </CardContent>
        <MotivationalBox text={motivationalText} />
      </Card>
    </div>
  );
}
