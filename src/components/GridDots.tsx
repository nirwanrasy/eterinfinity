import { useMemo } from 'react';

interface GridDotsProps {
    count?: number;
    color?: string;
}

export default function GridDots({ count = 30, color = 'bg-white' }: GridDotsProps) {
    const dots = useMemo(() => {
        return Array.from({ length: count }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 100,
            size: Math.random() * 2 + 1,
            opacity: 0.7,
        }));
    }, [count]);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {dots.map((dot) => (
                <div
                    key={dot.id}
                    className={`absolute rounded-full ${color}`}
                    style={{
                        left: `${dot.left}%`,
                        top: `${dot.top}%`,
                        width: `${dot.size}px`,
                        height: `${dot.size}px`,
                        opacity: dot.opacity,
                    }}
                />
            ))}
        </div>
    );
}
