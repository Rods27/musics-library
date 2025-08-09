import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const BodyContainer = styled.div<{ $withSidebar?: boolean }>`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 20px;
  padding-top: 40px;
  padding-bottom: 0px;
  max-width: 90%;
`;

export const TopWrapper = styled.div`
  padding: 24px;
  height: 25vh;
  width: 100%;
  overflow: hidden;
  position: relative;
  padding-bottom: 40px;
`;

export const BottomWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  padding-bottom: 40px;
  height: calc(85vh - 100px);
`;

export const MainColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`;

export const LoaderDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  height: calc(100vh - 50px);
  width: 100%;
`;
