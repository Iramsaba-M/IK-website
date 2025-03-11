"use client"

import * as motion from "motion/react-client"
import { useEffect, useState } from "react"




export default function Reordering() {
    const [order, setOrder] = useState(initialOrder)

    useEffect(() => {
        const timeout = setTimeout(() => setOrder(shuffle(order)), 1000)
        return () => clearTimeout(timeout)
    }, [order])

    return (
        <ul style={container}>
            {order.map((shape) => (
                <motion.li
                key={shape.color}
                    layout
                    transition={spring}
                    style={{ ...item, backgroundColor: shape.color,
                        borderRadius: shape.type === 'circle' ? '50%' : '10px',
                        clipPath: shape.type === "triangle" ? "polygon(50% 0%, 0% 100%, 100% 100%)" : "none",
                       
                    }}
                />
            ))}
        </ul>
    )
}

const initialOrder = [
    { color: "#add7f5", type: "circle" },
    { color: "#add1f5", type: "square" },
    { color: "#adcbf5", type: "triangle" },
    { color: "#", type: "square" },
]

/**
 * ==============   Utils   ================
 */
function shuffle([...array]) {
    return array.sort(() => Math.random() - 0.5)
}

/**
 * ==============   Styles   ================
 */

const spring = {
    type: "spring",
    damping: 20,
    stiffness: 300,
}

const container: React.CSSProperties = {
    listStyle: "none",
    padding: 0,
    margin: 0,
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    gap: 20,
    width: 400,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
   opacity:"0.6"
   
    
}

const item: React.CSSProperties = {
    width: 130,
    height: 130,
    borderRadius: "10px",
   
}

