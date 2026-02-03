import * as React from "react";
import { MouseEvent } from "react";

export const ICON_TYPE = {
  arrow: "arrow",
  nested: "nested",
  sort: "sort",
  collapse: "collapse",
  expand: "expand",
  tags: "tags",
  moveUp: "moveUp",
  moveDown: "moveDown",
  trash: "trash",
  save: "save",
  pin: "pin",
  close: "close",
  plus: "plus",
};
Object.freeze(ICON_TYPE);

export const Icon = ({
  iconType,
  onClick,
  className,
  label,
  active,
  disabled,
}: {
  iconType: string;
  onClick?: (e: MouseEvent) => void;
  className: string;
  label?: string;
  active?: boolean;
  disabled?: boolean;
}) => {
  let classes = `custom-icon ${className}`;
  if (active) {
    classes += " is-active";
  }
  if (disabled) {
    classes += " is-disabled";
  }
  return (
    <div
      aria-label={label}
      className={classes}
      onClick={
        onClick
          ? (e: MouseEvent) => {
              if (!disabled) {
                onClick(e);
              }
            }
          : undefined
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={iconType === ICON_TYPE.pin && active ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`svg-icon-icon ${className}-svg`}
      >
        {iconType === ICON_TYPE.arrow ? (
          <path d="M3 8L12 17L21 8"></path>
        ) : iconType === ICON_TYPE.sort ? (
          <>
            <path d="M11 11h4"></path>
            <path d="M11 15h7"></path>
            <path d="M11 19h10"></path>
            <path d="M9 7 6 4 3 7"></path>
            <path d="M6 6v14"></path>
          </>
        ) : iconType === ICON_TYPE.nested ? (
          <>
            <path d="M13 10h7a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"></path>
            <path d="M13 21h7a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.88a1 1 0 0 1-.9-.55l-.44-.9a1 1 0 0 0-.9-.55H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"></path>
            <path d="M3 3v2c0 1.1.9 2 2 2h3"></path>
            <path d="M3 3v13c0 1.1.9 2 2 2h3"></path>
          </>
        ) : iconType === ICON_TYPE.collapse ? (
          <>
            <path d="m7 20 5-5 5 5"></path>
            <path d="m7 4 5 5 5-5"></path>
          </>
        ) : iconType === ICON_TYPE.moveUp ? (
          <>
            {/* <path d="M8 6L12 2L16 6" />
            <path d="M12 2V22" />
             */}
            <path d="m5 12 7-7 7 7" />
            <path d="M12 19V5" />
          </>
        ) : iconType === ICON_TYPE.moveDown ? (
          <>
            {/* <path d="M8 18L12 22L16 18" />
            <path d="M12 2V22" /> */}
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </>
        ) : iconType === ICON_TYPE.trash ? (
          <>
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
            <line x1="10" x2="10" y1="11" y2="17" />
            <line x1="14" x2="14" y1="11" y2="17" />
          </>
        ) : iconType === ICON_TYPE.tags ? (
          <>
            <path d="M9 5H2v7l6.29 6.29c.94.94 2.48.94 3.42 0l3.58-3.58c.94-.94.94-2.48 0-3.42L9 5Z"></path>
            <path d="M6 9.01V9"></path>
            <path d="m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19"></path>
          </>
        ) : iconType === ICON_TYPE.save ? (
          <>
            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
            <polyline points="17 21 17 13 7 13 7 21" />
            <polyline points="7 3 7 8 15 8" />
          </>
        ) : iconType === ICON_TYPE.pin ? (
          <>
            <line x1="12" y1="17" x2="12" y2="22"></line>
            <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"></path>
          </>
        ) : iconType === ICON_TYPE.close ? (
          <>
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </>
        ) : iconType === ICON_TYPE.plus ? (
          <>
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </>
        ) : (
          <>
            <path d="m7 15 5 5 5-5"></path>
            <path d="m7 9 5-5 5 5"></path>
          </>
        )}
      </svg>
    </div>
  );
};
