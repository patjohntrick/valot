import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRoute } from '@react-navigation/native';

import {
  StyledLayout,
  StyledLoader,
  StyledParagraph,
  StyledSubTitle,
} from '../../components';
import { getAgent } from '../../api/Api';
import { Strings, appColor } from '../../constant';

type AgentScreenProps = {
  navigation: any;
};

export const AgentScreen = ({ navigation }: AgentScreenProps) => {
  const { params } = useRoute();
  const { data, error, isLoading } = getAgent(params?.agentId);

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
        <StyledSubTitle text={Strings.ABILITIES} style={styles.titleStyle} />
        <StyledParagraph
          text={Strings.AGENTS_ABILITY_DESC}
          style={styles.abilityDescStyle}
        />
        <View style={styles.skillInnerContainer}>
          {data.data.abilities.map((ability: any, index: number) => {
            return (
              <TouchableOpacity key={index}>
                <StyledSubTitle
                  text={ability.displayName}
                  style={styles.abilityNameStyle}
                />
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
    textTransform: 'capitalize',
  },
  heroContainer: {
    position: 'relative',
    height: 300,
  },
  imgStyle: {
    width: '100%',
    height: 290,
    position: 'absolute',
  },
  imgBackgroundStyle: {
    width: '100%',
    height: 300,
    position: 'absolute',
    opacity: 0.1,
  },
  skillContainer: {
    backgroundColor: appColor.sunburntCyclopsRed,
    borderRadius: 5,
    marginTop: 20,
    paddingBottom: 15,
    paddingHorizontal: 15,
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
    borderRadius: 5,
    marginHorizontal: 10,
  },
  abilityDescStyle: {
    color: appColor.eerieBlack,
    marginBottom: 10,
  },
  abilityNameStyle: {
    color: appColor.milkWhite,
    fontSize: 10,
    textAlign: 'center',
    marginBottom: 10,
  },
});
