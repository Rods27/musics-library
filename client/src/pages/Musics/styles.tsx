import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  gap: 40px;
  padding-top: 40px;
  padding-bottom: 0px;
  max-width: 90%;
  grid-template-rows: 300px 350px;
`;

export const TopWrapper = styled.div`
  height: 25vh;
  width: 100%;
  overflow: hidden;
  position: relative;
  padding-bottom: 40px;
`;

export const BottomWrapper = styled.div`
  height: 50vh;
  width: 100%;
  overflow: hidden;
  position: relative;
  padding-bottom: 40px;
`;

export const LoaderDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  height: 100vh;
  width: 100vh;
`;
