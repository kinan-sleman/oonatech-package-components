import React, { useEffect, useState } from "react";
import "../styles/AvatarGroup.scss";

function AvatarGroup({
  data,
  handleAvatarGroupClick,
}: {
  data: any[];
  handleAvatarGroupClick?: () => void;
}) {
  const limitedData = data?.slice(0, 2);
  return (
    <div className="wraper-avatar">
      {data?.length === 0 ? (
        <div>--</div>
      ) : (
        <div className="avatar-group">
          {limitedData.map((avatar, index) => (
            <IndAvatar
              key={index}
              src={avatar.url} 
              name={avatar.name}
              color={"#fff"}
              backgroundColor={avatar.color}
            />
          ))}
          {data.length > 2 && (
            <button className="ball-number" onClick={handleAvatarGroupClick}>
              +{data.length - 2}
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default AvatarGroup;

const IndAvatar = ({
  src,
  name,
  color="#fff",
  backgroundColor,
}: {
  src?: string;
  name: string;
  color?: string;
  backgroundColor?: string;
}) => {
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [fallback, setFallback] = useState<{ initials: string; bgColor: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!src) {
      setFallback({
        initials: extractInitials(name),
        bgColor: backgroundColor || generateRandomColor(),
      });
      setLoading(false);
      return;
    }

    validateImage(src).then((validUrl) => {
      if (validUrl) {
        setImgSrc(validUrl);
      } else {
        setFallback({
          initials: extractInitials(name),
          bgColor: backgroundColor || generateRandomColor(),
        });
      }
      setLoading(false);
    });
  }, [src, name]);

  return (
    <div className="flow">
      {loading ? (
        <span>...</span>
      ) : imgSrc ? (
        <img src={imgSrc} alt="Avatar" className="w-[25px] h-[25px] rounded-full" />
      ) : fallback ? (
        <div
          className="w-[25px] h-[25px] text-xs rounded-full flex items-center justify-center"
          style={{
            backgroundColor: fallback.bgColor,
            color: color || "white",
          }}
        >
          {fallback.initials}
        </div>
      ) : null}
    </div>
  );
};


function validateImage(url: string): Promise<string | null> {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = url;
    img.onload = () => resolve(url); 
    img.onerror = () => resolve(null); 
  });
}
const extractInitials = (name: string): string => {
  if (!name) return "";
  const words = name.trim().toUpperCase().split(/\s+/);
  return words.length > 1 ? words[0][0] + words[1][0] : words[0].slice(0, 2);
};
const generateRandomColor = (): string => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
