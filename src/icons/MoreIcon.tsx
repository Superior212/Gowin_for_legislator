import * as React from "react";

function MoreIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" {...props}>
      <g clipPath="url(#prefix__clip0_5530_2613)">
        <path
          d="M10 6.111c.922 0 1.667-.744 1.667-1.667 0-.922-.745-1.666-1.667-1.666s-1.667.744-1.667 1.666c0 .923.745 1.667 1.667 1.667zm0 2.222c-.922 0-1.667.745-1.667 1.667s.745 1.667 1.667 1.667 1.667-.745 1.667-1.667S10.922 8.333 10 8.333zm0 5.556c-.922 0-1.667.744-1.667 1.667 0 .922.745 1.666 1.667 1.666s1.667-.744 1.667-1.667c0-.922-.745-1.666-1.667-1.666z"
          fill="#545F7D"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_5530_2613">
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

const MemoMoreIcon = React.memo(MoreIcon);
export default MemoMoreIcon;
