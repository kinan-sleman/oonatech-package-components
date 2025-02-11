import React, { useEffect, useState } from "react";
import "../styles/AvatarGroup.scss";
function AvatarGruop({
  data,
  handleAvatarGroupClick,
}: {
  data: any;
  handleAvatarGroupClick?: (any: any) => void;
}) {
  const limitedData = data?.slice(0, 2);

  return (
    <div className="wraper-avatar">
      {data?.length <= 0 ? (
        <div>--</div>
      ) : (
        <div className="avatar-group">
          {limitedData?.map((avatar: any, index: any) => (
            <IndAvatar
              key={index}
              src={avatar.src}
              name={avatar.name}
              index={index}
              color={avatar?.color}
              backgroundColor={avatar?.backgroundColor}
            />
          ))}
          {data?.length > 2 && (
            <button className="ball-number" onClick={handleAvatarGroupClick}>
              +{data?.length - 2}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
export default AvatarGruop;
const IndAvatar = ({
  src,
  index,
  name,
  color,
  backgroundColor,
}: {
  src: any;
  index: number;
  name: string;
  color?: string;
  backgroundColor?: string;
}) => {
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [fallback, setFallback] = useState<{
    initials: string;
    bgColor: string;
  } | null>(null);

  useEffect(() => {
    validateImage(src, name).then((validUrl) => {
      if (validUrl) {
        setImgSrc(validUrl);
      } else {
        const initials = extractInitials(name);
        const bgColor = backgroundColor
          ? backgroundColor
          : generateRandomColor();
        setFallback({ initials, bgColor });
      }
    });
  }, [src, name]);

  return (
    <div key={index} className={`flow`}>
      {imgSrc ? (
        <img
          src={imgSrc}
          alt={`Avatar ${index + 1}`} // Provide meaningful alt text
          className=" w-[25px] h-[25px] rounded-full"
        />
      ) : fallback ? (
        <div
          className="w-[25px] h-[25px] text-xs rounded-full flex items-center justify-center "
          style={{
            backgroundColor: fallback.bgColor,
            color: color ? color : "white",
          }}
        >
          {fallback.initials}
        </div>
      ) : (
        <span>...</span>
      )}
    </div>
  );
};
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
