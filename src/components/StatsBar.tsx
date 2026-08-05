import React, { useEffect, useState, useRef } from 'react';

export const StatsBar: React.FC = () => {
  const [count100, setCount100] = useState(0);
  const [count24, setCount24] = useState(0);
  const [count10, setCount10] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate 100%
          let c1 = 0;
          const interval1 = setInterval(() => {
            c1 += 2;
            if (c1 >= 100) {
              setCount100(100);
              clearInterval(interval1);
            } else {
              setCount100(c1);
            }
          }, 20);

          // Animate 24/7
          let c2 = 0;
          const interval2 = setInterval(() => {
            c2 += 1;
            if (c2 >= 24) {
              setCount24(24);
              clearInterval(interval2);
            } else {
              setCount24(c2);
            }
          }, 40);

          // Animate 10x
          let c3 = 0;
          const interval3 = setInterval(() => {
            c3 += 1;
            if (c3 >= 10) {
              setCount10(10);
              clearInterval(interval3);
            } else {
              setCount10(c3);
            }
          }, 100);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="bg-white border-y border-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-1">
            <div className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              <span>{count100}</span>%
            </div>
            <div className="text-sm font-medium text-slate-500">Manual Input Eliminated</div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              <span>{count24}</span>/7
            </div>
            <div className="text-sm font-medium text-slate-500">Real-Time Cloud Monitoring</div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight flex justify-center items-center">
              <span>{count10}</span>x
            </div>
            <div className="text-sm font-medium text-slate-500">Faster Data Processing</div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight text-blue-600">
              Postgres
            </div>
            <div className="text-sm font-medium text-slate-500">Production-Grade Reliability</div>
          </div>
        </div>
      </div>
    </section>
  );
};
