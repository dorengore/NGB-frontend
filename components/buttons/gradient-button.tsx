// import React, { forwardRef } from "react";
// import {
//   useButton,
//   ButtonProps as BaseButtonProps
// } from "@heroui/button";

// export interface GradientButtonProps extends BaseButtonProps {
//   gradientStart?: string;
//   gradientEnd?: string;
// }

// const GradientBorderButton = forwardRef<HTMLButtonElement, GradientButtonProps>((props, ref) => {
//   const {
//     domRef,
//     children,
//     spinnerSize,
//     spinner = <Spinner color="currentColor" size={spinnerSize} />,
//     spinnerPlacement,
//     startContent,
//     endContent,
//     isLoading,
//     disableRipple,
//     getButtonProps,
//     getRippleProps,
//     gradientStart = "#ff00e0",
//     gradientEnd = "#00ffff",
//     ...otherProps
//   } = useButton({
//     ref,
//     ...props,
//   });

//   const { ripples, onClear } = getRippleProps();

//   return (
//     <>
//       <button
//         ref={domRef}
//         {...getButtonProps()}
//         className={`gradient-border-button ${otherProps.className || ""}`}
//       >
//         {startContent}
//         {isLoading && spinnerPlacement === "start" && spinner}
//         {children}
//         {isLoading && spinnerPlacement === "end" && spinner}
//         {endContent}
//         {!disableRipple && <Ripple ripples={ripples} onClear={onClear} />}
//       </button>
//       <style jsx>{`
//         .gradient-border-button {
//           background-color: transparent;
//           color: white;
//           font-weight: 600;
//           position: relative;
//           isolation: isolate;
//           overflow: hidden;
//         }
//         .gradient-border-button::before {
//           content: '';
//           position: absolute;
//           inset: 0;
//           border-radius: inherit;
//           padding: 2px;
//           background: linear-gradient(45deg, ${gradientStart}, ${gradientEnd});
//           -webkit-mask:
//             linear-gradient(#fff 0 0) content-box,
//             linear-gradient(#fff 0 0);
//           mask:
//             linear-gradient(#fff 0 0) content-box,
//             linear-gradient(#fff 0 0);
//           -webkit-mask-composite: xor;
//           mask-composite: exclude;
//           z-index: -1;
//         }
//         .gradient-border-button:hover::before {
//           background: linear-gradient(45deg, ${gradientEnd}, ${gradientStart});
//         }
//       `}</style>
//     </>
//   );
// });

// GradientBorderButton.displayName = "GradientBorderButton";

// export default GradientBorderButton;
