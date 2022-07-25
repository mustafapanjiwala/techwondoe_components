// import React, { HTMLAttributes } from "react";
// import {
//   MainContainer,
//   LeftContainer,
//   RightContainer,
//   StyledHeading,
//   StyledParagraph,
// } from "./styled";

// export interface CardProps {
//   className?: string;
//   paragraph?: string;
//   heading?: string;
// }

// const Card: React.ForwardRefRenderFunction<HTMLDivElement, CardProps> = (
//   props
// ) => {
//   const { heading, paragraph, className } = props;

//   return (
//     <MainContainer className={className}>
//       <LeftContainer>
//         <svg
//           width="18"
//           height="13"
//           viewBox="0 0 18 13"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M17 1L6 12L1 7"
//             stroke="#E6692E"
//             stroke-width="2"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//           />
//         </svg>
//       </LeftContainer>
//       <RightContainer>
//         <StyledHeading>{heading}</StyledHeading>
//         <StyledParagraph>{paragraph}</StyledParagraph>
//       </RightContainer>
//     </MainContainer>
//   );
// };
import React, { ElementType, HTMLAttributes, ReactNode } from "react";
import {
  StyledLink,
  MainContainer,
  LeftContainer,
  RightContainer,
  StyledHeading,
  StyledParagraph,
} from "./styled";

export interface CardProps
  extends Omit<HTMLAttributes<HTMLAnchorElement>, "as" | "disabled"> {
  disabled?: boolean;
  className?: string;
  children: ReactNode;
  as?: ElementType;
  href?: string;
  paragraph?: string;
}

const Card: React.ForwardRefRenderFunction<HTMLAnchorElement, CardProps> = (
  props,
  ref
) => {
  const {
    className,
    disabled = false,
    children,
    as = "a",
    href,
    paragraph,
  } = props;

  return (
    <StyledLink
      ref={ref}
      className={className}
      as={disabled ? "p" : as}
      href={href}
      disabled={disabled}
    >
      <MainContainer>
        <LeftContainer>
          <svg
            width="18"
            height="13"
            viewBox="0 0 18 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 1L6 12L1 7"
              stroke="#E6692E"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </LeftContainer>
        <RightContainer>
          <StyledHeading>{children}</StyledHeading>
          <StyledParagraph>{paragraph}</StyledParagraph>
        </RightContainer>
      </MainContainer>
    </StyledLink>
  );
};

export default React.forwardRef<HTMLAnchorElement, CardProps>(Card);
