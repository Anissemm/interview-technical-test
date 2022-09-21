import React, { createContext, PropsWithChildren, useMemo } from 'react'
import { useResizeObserver } from '../hooks/useResizeObserver'

export const BreakpointContext = createContext('sm')

const BreakpointProvider = ({ children }: PropsWithChildren) => {
    const [setTargetRef, entry] = useResizeObserver()

    const breakpoint = useMemo(() => {
        if (entry?.borderBoxSize[0]?.inlineSize >= 768) {
            return 'lg'
        } else {
            return 'sm'
        }
    }, [entry?.borderBoxSize[0]?.inlineSize])

    return (
        <BreakpointContext.Provider value={breakpoint}>
            <div ref={setTargetRef}>
                {children}
            </div>
        </BreakpointContext.Provider>
    )
}

export default BreakpointProvider