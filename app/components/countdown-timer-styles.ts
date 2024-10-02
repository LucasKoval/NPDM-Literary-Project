"use client";

import styled from "styled-components";
import { device } from "@/app/lib/breakpoints";

export const CountdownSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const CountdownTitle = styled.h3`
  font-size: 28px;
  font-weight: bold;
  padding: 2rem;
`;

export const BigTimer = styled.h3`
  font-size: 78px;
  padding: 1rem;

  @media only screen and ${device.sm} {
    font-size: 32px;
  }
`;
