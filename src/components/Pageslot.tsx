// Pageslot.tsx
import React from "react";

interface PageslotProps {
  title: string;
  description: string;
  imageUrl: string;
  className?: string; // Make className optional
}

const Pageslot: React.FC<PageslotProps> = ({
  title,
  description,
  imageUrl,
  className,
}) => {
  return (
    <div className={`flex-shrink-0 ${className}`}>
      <div className="flex flex-col items-center mx-auto">
        <img src={imageUrl} alt={title} className=" w-10 h-10 mx-auto" />
        {/* Set width and height to 40x40 pixels */}
        <div className="flex items-center mx-auto">
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-gray-600 mx-auto">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pageslot;
