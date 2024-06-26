import * as React from "react";

interface LogoProps {
  width?: number;
  height?: number;
  viewBox?: string;
  fill?: string;
  className?: string;
}
const Logo: React.FC<LogoProps> = ({
  width,
  height,
  viewBox,
  fill,
  className,
  ...props
}) => {
  return (
    <svg
      width={width ?? "1em"}
      height={height ?? "1em"}
      viewBox={viewBox ?? "0 0 174 36"}
      fill={fill ?? "none"}
      className={className}
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 2.665c0-.552.443-1 .99-1h2.97c.547 0 .99.448.99 1v18.003c0 .553.443 1 .99 1h12.87c.547 0 .99-.447.99-1v-3c0-.553-.443-1-.99-1h-5.94c-1.64 0-2.97-1.344-2.97-3V4.665c0-1.657 1.33-3 2.97-3h8.91c1.64 0 2.97 1.343 2.97 3v19.003c0 1.657-1.33 3-2.97 3H2.97c-1.64 0-2.97-1.343-2.97-3V2.665zm19.8 5.001c0-.552-.443-1-.99-1h-3.96v4c0 .553.443 1 .99 1h3.96v-4z"
        fill="url(#prefix__paint0_linear_6819_58335)"
      />
      <path
        d="M35.325 0v27.805h4.764V0h-4.764zM63.539 19.73c.748-8.075-3.308-12.132-9.805-12.132-6.3 0-10.316 4.296-10.316 10.263 0 6.285 3.977 10.462 10.67 10.462 2.954 0 6.3-1.035 8.348-3.183l-3.071-3.063c-1.102 1.154-3.426 1.83-5.198 1.83-3.386 0-5.473-1.75-5.788-4.177h15.16zm-15.08-4.017c.708-2.546 2.834-3.82 5.433-3.82 2.756 0 4.725 1.274 5.04 3.82H48.458zM86.337 27.805V17.503c0-6.166-3.662-9.627-8.23-9.627-2.44 0-4.41.995-6.378 2.944l-.315-2.665h-4.292v19.65h4.765V17.781c0-2.983 2.008-5.49 4.96-5.49 3.072 0 4.686 2.268 4.686 5.252v10.262h4.804zM99.876 12.252c3.032 0 5.631 2.307 5.631 5.728 0 3.54-2.599 5.768-5.631 5.768-3.071 0-5.513-2.347-5.513-5.768 0-3.54 2.442-5.728 5.513-5.728zM105.822 0v10.86c-1.142-2.03-4.332-3.143-6.38-3.143-5.67 0-9.882 3.5-9.882 10.263 0 6.444 4.292 10.263 10.001 10.263 2.363 0 4.764-.795 6.261-3.142l.315 2.704h4.488V0h-4.803zM130.162 10.223c-2.245-1.989-4.528-2.585-7.56-2.585-3.544 0-8.19 1.59-8.19 6.126 0 4.455 4.37 5.807 8.032 6.086 2.757.159 3.859.716 3.859 2.068 0 1.432-1.693 2.387-3.504 2.347-2.166-.04-5.316-1.193-6.694-2.745l-2.363 3.461c2.835 2.984 5.907 3.5 8.978 3.5 5.552 0 8.347-2.983 8.347-6.443 0-5.212-4.646-6.047-8.308-6.286-2.48-.159-3.622-.875-3.622-2.148 0-1.233 1.26-1.949 3.544-1.949 1.85 0 3.425.438 4.803 1.75l2.678-3.182zM143.518 23.589c-3.268 0-5.512-2.506-5.512-5.57 0-3.062 2.047-5.568 5.512-5.568 3.465 0 5.513 2.506 5.513 5.569s-2.245 5.569-5.513 5.569zM154.268 36V8.194h-4.489l-.315 2.705c-1.496-2.187-4.095-3.142-6.3-3.142-5.985 0-9.962 4.495-9.962 10.263 0 5.728 3.583 10.263 9.804 10.263 2.048 0 5.08-.637 6.458-2.785V36h4.804zM158.487 8.194v19.611h4.804V17.463c0-3.62 2.323-4.972 4.843-4.972 1.575 0 2.481.437 3.465 1.273l2.166-4.217c-1.063-1.074-2.993-1.87-5.001-1.87-1.969 0-3.977.358-5.473 2.785l-.354-2.268h-4.45z"
        fill="#213F7D"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear_6819_58335"
          x1={0}
          y1={38.921}
          x2={26.253}
          y2={-4.224}
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#213F7D" />
          <stop offset={1} stopColor="#39CDCC" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const MemoLogo = React.memo(Logo);
export default MemoLogo;
