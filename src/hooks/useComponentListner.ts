import { useEffect, useRef } from "react";

const useComponentListener = (type: keyof HTMLElementEventMap, callBack: (e: any) => any) => {
  const elmRef = useRef<HTMLElement>();

  console.log(elmRef);

  useEffect(() => {
    if (elmRef.current) return;

    elmRef.current!.addEventListener(type, callBack);
    const delElmCurrent = elmRef.current!;
    return () => {
      delElmCurrent!.removeEventListener(type, callBack);
    };
  }, [elmRef, type, callBack]);

  return elmRef;
};

export { useComponentListener };
