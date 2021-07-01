import styled from "styled-components";

export const Container = styled.div`
  max-width: 80%;
  margin: 0 auto;

  @media only screen and (min-width: 576px) and (max-width: 767px) {
    max-width: 540px;
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    max-width: 720px;
  }

  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    max-width: 960px;
  }

  @media only screen and (min-width: 1200px) {
    max-width: 1140px;
  }
`;

export const TimeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const EntriesButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  margin-top: 46px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
