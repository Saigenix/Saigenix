import React from "react";

export default function Tags({ tags }) {
  return (
    <div className="px-6 pt-4 pb-2">
      {tags.map((tag) => (
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {tag}
        </span>
      ))}
    </div>
  );
}
