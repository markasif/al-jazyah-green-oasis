import { useState, useRef, useEffect } from 'react';
import { MoveHorizontal } from 'lucide-react';

interface BeforeAfterProps {
    beforeImage: string;
    afterImage: string;
    beforeLabel?: string;
    afterLabel?: string;
}

const BeforeAfter = ({
    beforeImage,
    afterImage,
    beforeLabel = "Before",
    afterLabel = "After"
}: BeforeAfterProps) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
        if (!containerRef.current) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;

        const position = ((clientX - containerRect.left) / containerRect.width) * 100;
        setSliderPosition(Math.min(Math.max(position, 0), 100));
    };

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);

    // Global event listeners for smooth dragging outside the component
    useEffect(() => {
        const handleGlobalMouseUp = () => setIsDragging(false);
        const handleGlobalMouseMove = (e: MouseEvent) => {
            if (isDragging && containerRef.current) {
                const containerRect = containerRef.current.getBoundingClientRect();
                const position = ((e.clientX - containerRect.left) / containerRect.width) * 100;
                setSliderPosition(Math.min(Math.max(position, 0), 100));
            }
        };

        if (isDragging) {
            window.addEventListener('mouseup', handleGlobalMouseUp);
            window.addEventListener('mousemove', handleGlobalMouseMove);
        }

        return () => {
            window.removeEventListener('mouseup', handleGlobalMouseUp);
            window.removeEventListener('mousemove', handleGlobalMouseMove);
        };
    }, [isDragging]);

    return (
        <div
            ref={containerRef}
            className="relative w-full aspect-video md:aspect-[21/9] overflow-hidden rounded-3xl cursor-ew-resize select-none shadow-2xl"
            onMouseDown={handleMouseDown}
            onTouchMove={handleMove}
            onTouchStart={handleMouseDown}
        >
            {/* After Image (Background) */}
            <img
                src={afterImage}
                alt="After transformation"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider pointer-events-none z-10">
                {afterLabel}
            </div>

            {/* Before Image (Foreground - Clipped) */}
            <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
            >
                <img
                    src={beforeImage}
                    alt="Before transformation"
                    className="absolute top-0 left-0 w-full h-full object-cover max-w-none"
                    // We set width to container width (100vw or similar) to ensure aspect ratio match
                    // But simpler is 'w-full h-full' relative to parent, wait.
                    // If parent is clipped, child img needs to be full size of CONTAINER, not clipped parent.
                    // Fixing CSS:
                    style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-black px-4 py-1 rounded-full text-xs font-bold tracking-wider z-10 shadow-sm">
                    {beforeLabel}
                </div>
                {/* Darker overlay on "Before" to emphasize the "After" brightness */}
                <div className="absolute inset-0 bg-black/20 pointer-events-none" />
            </div>

            {/* Slider Handle */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
                    <MoveHorizontal className="w-6 h-6 text-primary" />
                </div>
            </div>
        </div>
    );
};

export default BeforeAfter;
