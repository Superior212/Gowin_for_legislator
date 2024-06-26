import * as React from "react";

function FilterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" {...props}>
      <path
        d="M6.222 13.333h3.556v-1.777H6.222v1.777zM0 2.667v1.777h16V2.667H0zm2.667 6.222h10.666V7.11H2.667V8.89z"
        fill="#545F7D"
      />
    </svg>
  );
}

const MemoFilterIcon = React.memo(FilterIcon);
export default MemoFilterIcon;
