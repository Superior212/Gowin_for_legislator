import * as React from "react";

function Whitelist(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 13" fill="none" {...props}>
      <g clipPath="url(#prefix__clip0_97297_836)" fill="#213F7D">
        <path
          opacity={0.4}
          d="M15.915 3.99a.3.3 0 01-.002.42L12.38 7.915a.297.297 0 01-.42-.003L9.917 5.855a.296.296 0 01.003-.42l.703-.698a.297.297 0 01.42.003l1.137 1.145 2.62-2.6a.297.297 0 01.42.002l.695.703z"
        />
        <path d="M5.6 6.4a3.2 3.2 0 100-6.4 3.2 3.2 0 000 6.4zm2.24.8h-.417a4.352 4.352 0 01-3.646 0H3.36A3.36 3.36 0 000 10.56v1.04a1.2 1.2 0 001.2 1.2H10a1.2 1.2 0 001.2-1.2v-1.04A3.361 3.361 0 007.84 7.2z" />
      </g>
      <defs>
        <clipPath id="prefix__clip0_97297_836">
          <path fill="#fff" d="M0 0h16v12.8H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

const MemoWhitelist = React.memo(Whitelist);
export default MemoWhitelist;
