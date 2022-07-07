export const slidesFromLeftLeaveToRight = {
    hidden: { opacity: 0, x: -300 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: 300 },
  };


  export const slidesFromRightftLeaveToRight = {
    hidden: { opacity: 0, x: 300 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: 300 },
  };

  export const slidesFromLeftLeaveToLeft = {
    hidden: { opacity: 0, x: -300 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: -300 },
  };
  