import React, { useEffect } from 'react'


function useClickOutside(ref, setUnroll) {
    useEffect(() => {
        function handleOutsideClick(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setUnroll(false)
            }
        }
        document.addEventListener("click", handleOutsideClick);
    }, [ref]);
}
export {useClickOutside}