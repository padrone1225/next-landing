import { useEffect, useState } from "react"
import { WindowSize } from "../types/types"

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: typeof document !== 'undefined' ? document.body?.clientWidth : undefined,
        height: typeof document !== 'undefined' ? document?.body?.clientHeight : undefined
    })

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: document?.body.clientWidth || window.innerWidth || undefined,
                height: document?.body.clientHeight || window.innerHeight || undefined
            })
        }

        handleResize()

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return windowSize
}

export default useWindowSize