import { useEffect } from 'react';

export default function useOnClickOutside(ref, handler) {
    useEffect(() => {
        const listener = (event) => {
            // Check if the keydown event is not the escape key
            if (event.type === 'keydown' && event.key !== 'Escape') {
                return;
            }
            // Do nothing if clicking ref's element or descendent elements
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        };

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);
        document.addEventListener('keydown', listener);

        // Cleanup function to remove listeners
        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
            document.removeEventListener('keydown', listener);
        };
    }, [ref, handler]);
}
