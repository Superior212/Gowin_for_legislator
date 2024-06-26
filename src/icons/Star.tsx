import * as React from "react";

function Star(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.986 1.288a.32.32 0 00-.292.22L6.188 6.18 1.28 6.17a.32.32 0 00-.188.58l3.976 2.877-1.527 4.666a.32.32 0 00.493.358L8 11.758l3.966 2.893a.32.32 0 00.492-.358l-1.527-4.666 3.977-2.877a.32.32 0 00-.188-.58l-4.907.01-1.51-4.67v-.001a.32.32 0 00-.317-.221z"
        fill="#E9B200"
      />
    </svg>
  );
}

const MemoStar = React.memo(Star);
export default MemoStar;
