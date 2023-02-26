import React, { ReactNode } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { appColor } from '../constant';
import { StyledDot } from './StyledDot';

type StyledLayoutProps = {
  children: ReactNode;
};

export const StyledLayout = ({ children }: StyledLayoutProps) => {
  return (
    <ScrollView style={styles.container}>
      <StyledDot />
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColor.eerieBlack,
    paddingHorizontal: 20,
    paddingTop: 15,
    position: 'relative',
  },
});
