import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ApplicationView({
  img,
  title = "",
  bigWidth,
  link,
  color,
  backgroundColor,
}: {
  img?: any;
  title: string;
  bigWidth?: boolean;
  link?: string;
  color?: string;
  backgroundColor?: string;
}) {
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [fallback, setFallback] = useState<{
    initials: string;
    bgColor: string;
  } | null>(null);

  useEffect(() => {
    validateImage(img, title).then((validUrl) => {
      if (validUrl) {
        setImgSrc(validUrl);
      } else {
        const initials = extractInitials(title);
        const bgColor = backgroundColor
          ? backgroundColor
          : generateRandomColor();
        setFallback({ initials, bgColor });
      }
    });
  }, [img, title]);
  // console.log(title);

  return (
    <>
      {imgSrc ? (
        <>
          {link ? (
            <Link to={link ? link : ""}>
              <img
                src={imgSrc}
                alt={`${title} img`}
                className={`${
                  bigWidth
                    ? "w-[20px] h-[20px] cursor-pointer mb-[10px]"
                    : "size-[20px]"
                } `}
              />
            </Link>
          ) : (
            <img
              src={imgSrc}
              alt={`${title} img`}
              className={` ${
                bigWidth ? "w-[20px] h-[20px] cursor-pointer" : "size-[25px]"
              } `}
            />
          )}
        </>
      ) : fallback ? (
        <>
          {link ? (
            <Link
              to={link ? link : ""}
              className={`${
                bigWidth
                  ? "w-[32px] h-[32px] cursor-pointer text-[20px] p-[20px] font-bold mb-[10px]"
                  : "w-[32px] h-[32px] text-[10px]"
              } cursor-pointer flex items-center justify-center `}
              style={{
                backgroundColor: fallback.bgColor,
                color: color ? color : "white",
              }}
            >
              {fallback.initials}
            </Link>
          ) : (
            <div
              className="w-[32px] h-[32px] text-[11px] rounded-lg flex items-center justify-center"
              style={{
                backgroundColor: fallback.bgColor,
                color: color ? color : "white",
              }}
            >
              {fallback.initials}
            </div>
          )}
        </>
      ) : (
        <span>...</span>
      )}
    </>
  );
}

export default ApplicationView;

function validateImage(url: string, name: string): Promise<string | null> {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = url;
    img.onload = () => {
      resolve(url); // URL is valid
    };
    img.onerror = () => {
      resolve(null); // URL is not valid
    };
  });
}
const extractInitials = (name: string): string => {
  const words = name.toUpperCase().split(" ");
  if (words.length === 1) {
    return words[0].slice(0, 2);
  } else if (words.length >= 2) {
    return words[0][0] + words[1][0];
  }
  return name.slice(0, 2);
};

const generateRandomColor = (): string => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
