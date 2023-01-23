import { useEffect, RefObject } from "react";

export const useOutsideClick = (ref: RefObject<HTMLElement>, handler:() => void) => {

    useEffect(() => {
        const onClickoutside = (event:Event) => {
            if (ref.current && !ref.current.contains(event.target as Element)) {
                handler()
            }
        }

        document.addEventListener('click', onClickoutside);
        return () => document.addEventListener('click', onClickoutside);
    }, [ref, handler])
}