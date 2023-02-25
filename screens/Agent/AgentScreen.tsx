import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StyledLayout, StyledLoader } from '../../components';
import { useSelector } from 'react-redux';
import { appColor } from '../../constant';
import {
  NavigationHelpers,
  NavigationProp,
  NavigationState,
  useRoute,
} from '@react-navigation/native';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setAgent, removeAgent } from '../../redux/slice/AgentSlice';
import { SCREEN_NAMES } from '../../constant';
import { getAgent } from '../../api/Api';

type AgentScreenProps = {
  navigation: any;
};

export const AgentScreen = ({ navigation }: AgentScreenProps) => {
  const { params } = useRoute();
  const { data, error, isLoading } = getAgent(params?.agentId);

  if (isLoading) return <StyledLoader />;

  return (
    <StyledLayout>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.textStyle}>{data.data.displayName}</Text>
      </TouchableOpacity>
    </StyledLayout>
  );
};

const styles = StyleSheet.create({
  container: {},
  textStyle: {
    color: appColor.milkWhite,
  },
});
