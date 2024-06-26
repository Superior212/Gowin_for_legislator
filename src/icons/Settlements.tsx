import * as React from "react";

function Settlements(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 13" fill="none" {...props}>
      <g clipPath="url(#prefix__clip0_97297_709)" fill="#213F7D">
        <path
          opacity={0.4}
          d="M13.6 2.4v7.2h-6a.4.4 0 00-.4.4v.8a2 2 0 01-4 0V1.625A1.625 1.625 0 001.575 0H11.2a2.403 2.403 0 012.4 2.4z"
        />
        <path d="M1.6 0A1.6 1.6 0 000 1.6v1.2a.4.4 0 00.4.4h2.8V1.625A1.625 1.625 0 001.6 0zm3.2 12.8h.4c-.065 0-.128-.003-.192-.01-.068.007-.138.01-.208.01zm10.8-3.2h-8a.4.4 0 00-.4.4v.8a2 2 0 01-2 2h8A2.8 2.8 0 0016 9.998a.4.4 0 00-.4-.398z" />
      </g>
      <defs>
        <clipPath id="prefix__clip0_97297_709">
          <path fill="#fff" d="M0 0h16v12.8H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

const MemoSettlements = React.memo(Settlements);
export default MemoSettlements;
