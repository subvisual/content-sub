interface IconProperties {
  x?: string;
  y?: string;
  width?: string;
  height?: string;
  color?: string;
}

export function MagnifyingGlass({
                                  x,
                                  y,
                                  width = "24",
                                  height = "24",
                                  color = "var(--dark-rock-800)",
                                }: IconProperties) {
  return (
    <svg
      x={x}
      y={y}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.927 17.0401L20.4001 20.4001M19.2801 11.4401C19.2801 15.77 15.77 19.2801 11.4401 19.2801C7.11019 19.2801 3.6001 15.77 3.6001 11.4401C3.6001 7.11019 7.11019 3.6001 11.4401 3.6001C15.77 3.6001 19.2801 7.11019 19.2801 11.4401Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function AllIcon({
                          x,
                          y,
                          width = "24",
                          height = "24",
                          color = "var(--dark-rock-800)",
                        }: IconProperties) {
  return (
    <svg
      x={x}
      y={y}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 3C20.1046 3 21 3.88316 21 4.9726L21 8.33992C21 9.42936 20.1046 10.3125 19 10.3125H16C14.8954 10.3125 14 9.42936 14 8.33992L14 4.9726C14 3.88316 14.8954 3 16 3L19 3Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 3C3.89543 3 3 3.88316 3 4.9726L3.00001 8.33992C3.00001 9.42936 3.89544 10.3125 5.00001 10.3125H8.00001C9.10458 10.3125 10 9.42936 10 8.33992L10 4.9726C10 3.88316 9.10457 3 8 3L5 3Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 13.6875C20.1046 13.6875 21 14.5707 21 15.6601V19.0274C21 20.1168 20.1046 21 19 21H16C14.8954 21 14 20.1168 14 19.0274L14 15.6601C14 14.5707 14.8954 13.6875 16 13.6875H19Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.00001 13.6875C3.89544 13.6875 3.00001 14.5707 3.00001 15.6601L3.00001 19.0274C3.00001 20.1168 3.89544 21 5.00001 21H8.00001C9.10458 21 10 20.1168 10 19.0274L10 15.6601C10 14.5707 9.10458 13.6875 8.00001 13.6875H5.00001Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BlogpostIcon({
                               x,
                               y,
                               width = "24",
                               height = "24",
                               color = "var(--dark-rock-800)",
                             }: IconProperties) {
  return (
    <svg
      x={x}
      y={y}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.55718 21.5574H4.75717C3.43168 21.5574 2.35717 20.4828 2.35718 19.1574L2.35727 4.75741C2.35728 3.43193 3.43179 2.35742 4.75727 2.35742H15.5575C16.883 2.35742 17.9575 3.43194 17.9575 4.75742V9.55742M6.55755 7.15742H13.7576M6.55755 10.7574H13.7576M6.55755 14.3574H10.1576M13.1574 18.2484L18.2485 13.1573L21.6427 16.5514L16.5515 21.6426H13.1574V18.2484Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PodcastIcon({
                              x,
                              y,
                              width = "24",
                              height = "24",
                              color = "var(--dark-rock-800)",
                            }: IconProperties) {
  return (
    <svg
      x={x}
      y={y}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.39795 11.177C4.66378 13.0035 5.57833 14.6733 6.9743 15.8808C8.37026 17.0883 10.1543 17.7528 12.0001 17.7528M12.0001 17.7528C13.8458 17.7528 15.6298 17.0883 17.0258 15.8808C18.4218 14.6733 19.3363 13.0035 19.6022 11.177M12.0001 17.7528V21.5999M12.0011 2.3999C11.1282 2.3999 10.291 2.74668 9.67376 3.36394C9.05649 3.9812 8.70972 4.81839 8.70972 5.69133V10.0799C8.70972 10.9528 9.05649 11.79 9.67376 12.4073C10.291 13.0246 11.1282 13.3713 12.0011 13.3713C12.8741 13.3713 13.7113 13.0246 14.3285 12.4073C14.9458 11.79 15.2926 10.9528 15.2926 10.0799V5.69133C15.2926 4.81839 14.9458 3.9812 14.3285 3.36394C13.7113 2.74668 12.8741 2.3999 12.0011 2.3999Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CaseStudiesIcon({
                                  x,
                                  y,
                                  width = "24",
                                  height = "24",
                                  color = "var(--dark-rock-800)",
                                }: IconProperties) {
  return (
    <svg
      x={x}
      y={y}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.6 21.5999H14.4M10.2 9.5999H13.8M6 8.3999C6 5.08619 8.68629 2.3999 12 2.3999C15.3137 2.3999 18 5.08619 18 8.3999C18 10.8603 16.5191 12.874 14.4 13.7999V17.3999C14.4 18.0626 13.8627 18.5999 13.2 18.5999H10.8C10.1373 18.5999 9.6 18.0626 9.6 17.3999V13.9006C7.48091 12.9748 6 10.8603 6 8.3999Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TalksIcon({
                            x,
                            y,
                            width = "24",
                            height = "24",
                            color = "var(--dark-rock-800)",
                          }: IconProperties) {
  return (
    <svg
      x={x}
      y={y}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.5993 12.8093L15.0538 11.9713L15.0398 11.9803L15.0262 11.9899L15.5993 12.8093ZM15.5993 11.4332L15.0064 12.2384L15.051 12.2712L15.099 12.299L15.5993 11.4332ZM10.0839 7.37187L10.6769 6.56662L10.6487 6.54585L10.6191 6.52709L10.0839 7.37187ZM8.92766 7.97847L9.92765 7.97557L9.92763 7.96682L9.92745 7.95807L8.92766 7.97847ZM8.95078 15.9562L7.95079 15.9591L7.95087 15.9874L7.95255 16.0156L8.95078 15.9562ZM10.1494 16.621L10.6337 17.4959L10.6796 17.4705L10.7226 17.4405L10.1494 16.621ZM5.9999 3.3999H17.9999V1.3999H5.9999V3.3999ZM20.5999 5.9999V17.9999H22.5999V5.9999H20.5999ZM17.9999 20.5999H5.9999V22.5999H17.9999V20.5999ZM3.3999 17.9999V5.9999H1.3999V17.9999H3.3999ZM5.9999 20.5999C4.56396 20.5999 3.3999 19.4358 3.3999 17.9999H1.3999C1.3999 20.5404 3.45939 22.5999 5.9999 22.5999V20.5999ZM20.5999 17.9999C20.5999 19.4358 19.4358 20.5999 17.9999 20.5999V22.5999C20.5404 22.5999 22.5999 20.5404 22.5999 17.9999H20.5999ZM17.9999 3.3999C19.4358 3.3999 20.5999 4.56396 20.5999 5.9999H22.5999C22.5999 3.45939 20.5404 1.3999 17.9999 1.3999V3.3999ZM5.9999 1.3999C3.45939 1.3999 1.3999 3.45939 1.3999 5.9999H3.3999C3.3999 4.56396 4.56396 3.3999 5.9999 3.3999V1.3999ZM16.1449 13.6474C16.5793 13.3646 17.1284 12.8602 17.1274 12.1C17.1263 11.3173 16.5491 10.827 16.0997 10.5673L15.099 12.299C15.2036 12.3595 15.2229 12.3909 15.2083 12.3723C15.1867 12.3448 15.1276 12.2501 15.1274 12.1027C15.1272 11.9591 15.1833 11.8745 15.192 11.8627C15.1963 11.8569 15.1655 11.8985 15.0538 11.9713L16.1449 13.6474ZM16.1923 10.6279L10.6769 6.56662L9.49098 8.17711L15.0064 12.2384L16.1923 10.6279ZM10.6191 6.52709C10.1484 6.22898 9.48756 6.05818 8.86255 6.35001C8.1823 6.66763 7.91466 7.35185 7.92786 7.99888L9.92745 7.95807C9.92625 7.89951 9.93844 7.91844 9.90768 7.97728C9.87303 8.04359 9.80534 8.11708 9.70869 8.1622C9.52273 8.24903 9.4477 8.1526 9.5488 8.21664L10.6191 6.52709ZM7.92766 7.98137L7.95079 15.9591L9.95078 15.9533L9.92765 7.97557L7.92766 7.98137ZM7.95255 16.0156C7.98436 16.5499 8.17011 17.2622 8.84054 17.6203C9.50063 17.9728 10.1879 17.7426 10.6337 17.4959L9.66523 15.746C9.56611 15.8009 9.52715 15.804 9.5428 15.8018C9.56646 15.7985 9.66412 15.7928 9.78273 15.8561C9.90301 15.9204 9.95507 16.0077 9.96769 16.0346C9.976 16.0523 9.95623 16.018 9.94901 15.8968L7.95255 16.0156ZM10.7226 17.4405L16.1725 13.6288L15.0262 11.9899L9.57631 15.8015L10.7226 17.4405Z"
        fill={color}
      />
    </svg>
  );
}

export function SpectaclesIcon({
                                 x,
                                 y,
                                 width = "24",
                                 height = "24",
                                 color = "var(--dark-rock-800)",
                               }: IconProperties) {
  return (
    <svg
      x={x}
      y={y}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.1199 11.9999C8.1199 13.3033 7.06329 14.3599 5.7599 14.3599V16.3599C8.16786 16.3599 10.1199 14.4079 10.1199 11.9999H8.1199ZM5.7599 14.3599C4.45651 14.3599 3.3999 13.3033 3.3999 11.9999H1.3999C1.3999 14.4079 3.35194 16.3599 5.7599 16.3599V14.3599ZM3.3999 11.9999C3.3999 10.6965 4.45651 9.63989 5.7599 9.63989V7.63989C3.35194 7.63989 1.3999 9.59193 1.3999 11.9999H3.3999ZM5.7599 9.63989C7.06329 9.63989 8.1199 10.6965 8.1199 11.9999H10.1199C10.1199 9.59193 8.16786 7.63989 5.7599 7.63989V9.63989ZM9.95504 11.7806C10.3646 11.0726 11.1277 10.5999 11.9999 10.5999V8.59989C10.3848 8.59989 8.97618 9.47857 8.22383 10.7792L9.95504 11.7806ZM11.9999 10.5999C12.8722 10.5999 13.6352 11.0726 14.0448 11.7806L15.776 10.7792C15.0237 9.47857 13.615 8.59989 11.9999 8.59989V10.5999ZM20.5999 11.9999C20.5999 13.3033 19.5433 14.3599 18.2399 14.3599V16.3599C20.6479 16.3599 22.5999 14.4079 22.5999 11.9999H20.5999ZM18.2399 14.3599C16.9365 14.3599 15.8799 13.3033 15.8799 11.9999H13.8799C13.8799 14.4079 15.8319 16.3599 18.2399 16.3599V14.3599ZM15.8799 11.9999C15.8799 10.6965 16.9365 9.63989 18.2399 9.63989V7.63989C15.8319 7.63989 13.8799 9.59193 13.8799 11.9999H15.8799ZM18.2399 9.63989C19.5433 9.63989 20.5999 10.6965 20.5999 11.9999H22.5999C22.5999 9.59193 20.6479 7.63989 18.2399 7.63989V9.63989Z"
        fill={color}
      />
    </svg>
  );
}

export function ShareIcon({
                            x,
                            y,
                            width = "24",
                            height = "24",
                            color = "var(--dark-rock-800)",
                          }: IconProperties) {
  return (
    <svg
      x={x}
      y={y}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 12V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V12M16 6L12 2M12 2L8 6M12 2V15"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function XIcon({
                        x,
                        y,
                        width = "24",
                        height = "24",
                        color = "var(--dark-rock-800)",
                      }: IconProperties) {
  return (
    <svg
      x={x}
      y={y}
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17 1L1 17M17 17L1 1" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function ChevronUpIcon({
                                x,
                                y,
                                width = "24",
                                height = "24",
                                color = "var(--dark-rock-800)",
                              }: IconProperties) {
  return (
    <svg
      x={x}
      y={y}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 14.5834L12.0008 10L17 14.5834"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronDownIcon({
                                  x,
                                  y,
                                  width = "24",
                                  height = "24",
                                  color = "var(--dark-rock-800)",
                                }: IconProperties) {
  return (
    <svg
      x={x}
      y={y}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 10L12.0008 14.58L17 10"
        stroke="#0A090B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function RSSIcon({
                          x,
                          y,
                          width = "24",
                          height = "24",
                          color = "var(--dark-rock-800)",
                        }: IconProperties) {
  return (
    <svg
      x={x}
      y={y}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4C12.8366 4 20 11.1634 20 20M4 12C8.41828 12 12 15.5817 12 20M4 20H4.04688"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MuteIcon({
                           x,
                           y,
                           width = "24",
                           height = "24",
                           color = "var(--dark-rock-800)",
                         }: IconProperties) {
  return (
    <svg
      x={x}
      y={y}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.8827 8.5V4L12.2315 8.65121L5.5 8.65121V15.3481H9.54584M16.8827 13V20L13 16.1173M6 18.5L9.54584 15.3481M19.5 6.5L9.54584 15.3481"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LowerVolume({
                              x,
                              y,
                              width = "24",
                              height = "24",
                              color = "var(--dark-rock-800)",
                            }: IconProperties) {
  return (
    <svg
      x={x}
      y={y}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.7692 9.34474C20.2486 11.1677 20.4575 13.5939 19.0503 15.7409M13.9598 5L9.07702 9.0698H4V14.9296L9.07702 14.9282L13.9598 19V5Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


export function PlayIcon({
                           x,
                           y,
                           width = "24",
                           height = "24",
                           color = "var(--dark-rock-800)",
                         }: IconProperties) {
  return (
    <svg
      x={x}
      y={y}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.9733 10.9373C19.3397 11.6988 19.3447 12.6568 17.9733 13.5177L7.37627 20.6645C6.04478 21.3751 5.14046 20.9556 5.04553 19.418L5.00057 4.45982C4.97059 3.04355 6.13721 2.6434 7.24887 3.32244L17.9733 10.9373Z"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  );
}

export function HeadphonesIcon({
                                 x,
                                 y,
                                 width = "24",
                                 height = "24",
                                 color = "var(--dark-rock-800)",
                               }: IconProperties) {
  return (
    <svg
      x={x}
      y={y}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.6001 15.6001H6.0001C6.66284 15.6001 7.2001 16.1374 7.2001 16.8001V19.2001C7.2001 19.8628 6.66284 20.4001 6.0001 20.4001H3.6001V12.0001C3.6001 7.36091 7.36091 3.6001 12.0001 3.6001C16.6393 3.6001 20.4001 7.36091 20.4001 12.0001V20.4001H18.0001C17.3374 20.4001 16.8001 19.8628 16.8001 19.2001V16.8001C16.8001 16.1374 17.3374 15.6001 18.0001 15.6001H20.4001"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LinkIcon({
                           x,
                           y,
                           width = "24",
                           height = "24",
                           color = "var(--dark-rock-800)",
                         }: IconProperties) {
  return (
    <svg
      x={x}
      y={y}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.37851 10.1905L5.14505 12.424C4.31092 13.2581 3.83124 14.3931 3.84001 15.5859C3.84877 16.7787 4.31796 17.9206 5.19167 18.7673C6.03836 19.641 7.18048 20.1102 8.3731 20.119C9.59293 20.1279 10.701 19.6753 11.5352 18.8411L13.7687 16.6077M16.6215 13.8094L18.8549 11.576C19.6891 10.7418 20.1688 9.60687 20.16 8.41406C20.1512 7.22124 19.682 6.07936 18.8083 5.23262C17.9618 4.38614 16.8199 3.91693 15.6271 3.90816C14.4343 3.8994 13.2992 4.35185 12.465 5.18601L10.2315 7.41946M8.6131 15.3271L15.3135 8.62676"
        stroke="var(--dark-rock-800)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function CodeIcon({ x, y, width = "24", height = "24", color = "var(--dark-rock-800)" }: IconProperties) {
  return (
    <svg x={x} y={y} width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.1999 16.7999L2.3999 12L7.1999 7.19995M16.7999 7.19995L21.5999 12L16.7999 16.7999" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>


  );
}

export function CloseIcon({ x, y, width = "24", height = "24", color = "var(--dark-rock-800)" }: IconProperties) {
  return (
    <svg x={x} y={y} width={width} height={height} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 1L1 17M17 17L1 1" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>

  );
}
