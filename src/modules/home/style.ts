import styled from "styled-components";

export const Homebody = styled.div`
  margin-top: -5%;
  padding: 0 6%;
`;

export const Gallery = styled.div`
  margin: 0 0.65rem;

  @media (min-width: 960px) {
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(3, auto-flow);
  }

  @media (min-width: 640px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 300px);
    grid-auto-flow: row dense;
  }
`;

export const Galleryitem = styled.div`
  height: auto;
  margin: 0.5rem;

  @media (min-width: 960px) {
    ::first-child,
    :nth-child(7),
    :nth-child(8) {
      grid-column: span 2;
      grid-row: span 1;
    }

    :nth-child(2) {
      grid-column: span 2;
      grid-row: span 2;
    }
  }

  @media (min-width: 640px) {
    margin: 0.7rem;

    ::first-child {
      grid-row: span 1;
    }

    :nth-child(2) {
      grid-row: span 2;
      grid-column: 2/3;
    }

    :nth-child(6),
    :nth-child(8) {
      grid-row: span 2;
    }
  }
`;

export const Galleryimg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
