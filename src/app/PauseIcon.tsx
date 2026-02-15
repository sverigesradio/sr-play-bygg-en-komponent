export function PauseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <mask
        id="a"
        width="24"
        height="24"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#d9d9d9" d="M0 0h24v24H0z" />
      </mask>
      <g mask="url(#a)">
        <path fill="#3c4c69" d="M14 18.5v-13h3.75v13zm-7.75 0v-13H10v13z" />
      </g>
    </svg>
  );
}
