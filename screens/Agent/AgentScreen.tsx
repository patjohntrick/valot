import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {
  StyledLayout,
  StyledLoader,
  StyledParagraph,
  StyledSubTitle,
} from '../../components';
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

  // const {
  //   displayName,
  //   background,
  //   fullPortrait,
  //   role,
  //   description,
  //   abilities,
  // } = data?.data;

  if (isLoading) return <StyledLoader />;

  return (
    <StyledLayout>
      <Text style={styles.textStyle}>{data.data.displayName}</Text>
      <View style={styles.heroContainer}>
        <Image
          style={styles.imgBackgroundStyle}
          source={{ uri: data.data.background }}
          resizeMode='cover'
        />
        <Image
          style={styles.imgStyle}
          source={{ uri: data.data.fullPortrait }}
          resizeMode='contain'
        />
      </View>
      <StyledSubTitle text={data.data.role.displayName} />
      <StyledParagraph text={data.data.description} />
      <View style={styles.skillContainer}>
        <StyledSubTitle text={'Skills'} style={styles.titleStyle} />
        <View style={styles.skillInnerContainer}>
          {data.data.abilities.map((ability: any, index: number) => {
            return (
              <TouchableOpacity key={index}>
                <Image
                  resizeMode='cover'
                  style={styles.skillImg}
                  source={{ uri: ability.displayIcon }}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </StyledLayout>
  );
};

const styles = StyleSheet.create({
  container: {},
  textStyle: {
    color: appColor.sunburntCyclopsRed,
    textAlign: 'center',
    fontFamily: 'Oswald-Medium',
    fontSize: 40,
    textTransform: 'uppercase',
    marginTop: -5,
  },
  titleStyle: {
    color: appColor.eerieBlack,
    textAlign: 'center',
  },
  heroContainer: {
    position: 'relative',
    // borderWidth: 1,
    // borderColor: 'red',
    height: 300,
  },
  imgStyle: {
    width: '100%',
    // height: '100%',
    // width: 300,
    height: 290,
    position: 'absolute',
    // bottom: 0,
    // left: '-5%',
    // borderWidth: 1,
    // borderColor: 'red',
  },
  imgBackgroundStyle: {
    width: '100%',
    // width: 300,
    height: 300,
    position: 'absolute',
    // bottom: 0,
    // left: '-5%',
    opacity: 0.1,
    // borderWidth: 1,
    // borderColor: 'red',
  },
  skillContainer: {
    backgroundColor: appColor.sunburntCyclopsRed,
    borderRadius: 5,
    marginTop: 20,
    paddingBottom: 15,
  },
  skillInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  skillImg: {
    width: 60,
    height: 60,
    // borderWidth: 1,
    // borderColor: appColor.milkWhite,
    borderRadius: 5,
    marginHorizontal: 10,
  },
});
