import { Card, CardContent } from '@/components/ui/card';
import { ThumbsUp } from 'lucide-react';
import React from 'react';

export default function MotivationalBox({ text }: { text: string }) {
  return (
    <div className="alert alert-info shadow-lg mt-4 bg-[#202d46] text-white">
      <div>
        <Card className="flex items-center justify-between bg-[#22354e] border border-blue-500 text-right text-white p-4">
          <CardContent className="p-0 flex-1 flex flex-col ">
            <div className=' flex flex-row items-center'>

              <div className="ml-4 shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-white/10">
                <ThumbsUp className="text-white w-5 h-5" />
              </div>
              <div className="text-base font-bold">הגעת לחצי אל התורן!</div>
            </div>
            <div className="text-sm text-muted-foreground">טיפ: עשה תרגילים כדי להעלות ניקוד</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}