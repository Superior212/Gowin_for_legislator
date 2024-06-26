import * as React from "react";

function Briefcase(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" {...props}>
      <path
        opacity={0.4}
        d="M10 9h6v4.5c0 .8-.7 1.5-1.5 1.5h-13C.7 15 0 14.3 0 13.5V9h6v1.5a.5.5 0 00.5.5h3a.5.5 0 00.5-.5V9z"
        fill="#213F7D"
      />
      <path
        d="M14.5 4H12V2.5c0-.8-.7-1.5-1.5-1.5h-5C4.7 1 4 1.7 4 2.5V4H1.5C.7 4 0 4.7 0 5.5V8h16V5.5c0-.8-.7-1.5-1.5-1.5zM10 4H6V3h4v1z"
        fill="#213F7D"
      />
    </svg>
  );
}

const MemoBriefcase = React.memo(Briefcase);
export default MemoBriefcase;
