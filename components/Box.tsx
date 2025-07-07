import React from "react";

const BoxComponent = ({ description, StyleInput }: { description: string, StyleInput : string}) => {
  return (
    // The main element for the box.
    // - flex-1: Makes both boxes take up equal space in the flex container on larger screens.
    // - p-8: Adds padding inside the box.
    // - rounded-3xl: Creates large, rounded corners.
    // - text-white: Sets the text color to white.
    // - bg-gradient-to-br from-purple-500/80 to-violet-700/80: Creates the purple gradient background.
    //   The '/80' makes the colors 80% opaque, allowing the background waves to subtly show through.
    // - shadow-lg: Adds a standard drop shadow for a lifting effect.
    // - shadow-black/20: Makes the shadow color a semi-transparent black.
    // - backdrop-blur-sm: Adds a blur effect to whatever is behind the component.
    // - border border-white/20: Adds a subtle white border.
    <div className="{Style}">
      {/* Description Block */}
      <p className="text-base leading-relaxed">{description}</p>
    </div>
  );
};

export default BoxComponent;
