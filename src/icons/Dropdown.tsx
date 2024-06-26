import * as React from "react";

function Dropdown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.392 12.052a.802.802 0 001.216 0l2.875-3.195c.336-.373.202-.675-.299-.675H6.816c-.501 0-.632.305-.299.675l2.875 3.195z"
        fill="#213F7D"
      />
    </svg>
  );
}

const MemoDropdown = React.memo(Dropdown);
export default MemoDropdown;
