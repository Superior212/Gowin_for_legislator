import * as React from "react";

function Preferences(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" {...props}>
      <g clipPath="url(#prefix__clip0_97297_690)" fill="#213F7D">
        <path
          opacity={0.4}
          d="M15.5 2H9v2h6.5a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5zM.5 4H6V2H.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5zm0 5H10V7H.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5zm15-2H13v2h2.5a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5zm0 5H5v2h10.5a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5zM0 12.5v1a.5.5 0 00.5.5H2v-2H.5a.5.5 0 00-.5.5z"
        />
        <path d="M8.5 1h-1a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5zm4 5h-1a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5zm-8 5h-1a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5z" />
      </g>
      <defs>
        <clipPath id="prefix__clip0_97297_690">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

const MemoPreferences = React.memo(Preferences);
export default MemoPreferences;
