import styles from "./Cursor.module.scss"
import { RefObject, useEffect, useState } from "react"
import { useSpring, motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "react-feather"

type TCursor = {
    containerRef: RefObject<HTMLElement>
  }
  
  function Cursor({containerRef}: TCursor) {
  
    const [ onHover, setOnHover] = useState(false)
    
    const position = {
      x: useSpring(0, {damping: 15}),
      y: useSpring(0, {damping: 15}),
    }
  
    const varients = {
      appear: {
        opacity: 1
      },
      disappear: {
        opacity: 0
      },
    }
  
    const cursorSize = 35
  
    function handlePointerMove(e: MouseEvent) {
      const { clientX, clientY } = e;
      position.x.set(clientX - cursorSize)
      position.y.set(clientY - cursorSize)
    }
  
    useEffect(() => {
      containerRef.current?.addEventListener("mouseover", () => setOnHover(true))
      containerRef.current?.addEventListener("mouseleave", () => setOnHover(false))
      window.addEventListener("pointermove", handlePointerMove);
      return () => window.removeEventListener("pointermove", handlePointerMove);
    }, []);
  
    return (
      <motion.div
        initial={{opacity: 0}}
        animate={onHover ? "appear" : "diappear"}
        variants={varients}
        className={styles.cursor}
        style={{ left: position.x, top: position.y }}
      >
        <ChevronLeft size={18} color="white" />
        <ChevronRight size={18} color="white" />
      </motion.div>
    );
  }

export default Cursor