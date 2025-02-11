import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ImgHelper({
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

  return (
    <>
      {imgSrc ? (
        <>
          {link ? (
            <Link to={link ? link : ""}>
              <img
                src={imgSrc}
                alt={`${title} img`}
                className={` ${
                  bigWidth
                    ? "w-[55px] h-[55px] rounded-[5px] cursor-pointer mb-[10px]"
                    : "mr-[4px] size-[25px] rounded-full"
                }`}
              />
            </Link>
          ) : (
            <img
              src={imgSrc}
              alt={`${title} img`}
              className={` ${
                bigWidth
                  ? "w-[55px] h-[55px] rounded-[5px] cursor-pointer"
                  : "mr-[4px] size-[25px] rounded-full"
              }`}
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
                  ? "w-[55px] h-[55px] rounded-[5px] cursor-pointer text-[20px] p-[20px] font-bold mb-[10px]"
                  : "w-[25px] h-[25px] text-[10px] rounded-full"
              }    cursor-pointer flex items-center justify-center`}
              style={{
                backgroundColor: fallback.bgColor,
                color: color ? color : "white",
              }}
            >
              {fallback.initials}
            </Link>
          ) : (
            <div
              className="w-[25px] h-[25px] text-[10px] rounded-full flex items-center justify-center "
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

export default ImgHelper;

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
