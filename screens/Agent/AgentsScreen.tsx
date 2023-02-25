import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { StyledLayout } from '../../components/StyledLayout';
import { StyledParagraph, StyledTitle } from '../../components';
import { DRAWER_STRINGS, Strings } from '../../constant';
import { appColor, SCREEN_NAMES } from '../../constant';
import { Agents } from '../../api/Agents';
import { getAgents } from '../../api/Api';
import { useNavigation } from '@react-navigation/native';

export const AgentsScreen = ({ navigation }: { navigation: any }) => {
  const { data, error, isLoading } = getAgents();
  // const navigation = useNavigation();

  if (isLoading) return <Text>Loading...</Text>;

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <StyledTitle title={DRAWER_STRINGS.AGENTS} />
        <StyledParagraph text={Strings.AGENTS_DESC} />
      </View>
      <FlatList
        data={data.data}
        renderItem={({ item }) => {
          return (
            item.isPlayableCharacter && (
              <TouchableOpacity
                style={[
                  styles.cardContainer,
                  { backgroundColor: `#${item.backgroundGradientColors[2]}` },
                ]}
                onPress={() => navigation.navigate(SCREEN_NAMES.AGENT_SCREEN)}
              >
                <Image
                  style={styles.imgBackgroundStyle}
                  source={{ uri: item.background }}
                  // resizeMode='contain'
                />
                <Image
                  source={{
                    uri: item.fullPortrait,
                  }}
                  style={styles.imgStyle}
                  resizeMode='cover'
                />
                <View style={styles.descContainer}>
                  <Text style={styles.agentName}>{item.displayName}</Text>
                  <Text style={styles.roleStyle}>{item.role.displayName}</Text>
                  <View style={styles.abilityIconContainer}>
                    {item.abilities.map((ability: any, index: number) => {
                      return (
                        <Image
                          source={{ uri: ability.displayIcon }}
                          key={index}
                          style={styles.abilityIconStyle}
                          resizeMode='cover'
                        />
                      );
                    })}
                  </View>
                </View>
              </TouchableOpacity>
            )
          );
        }}
        keyExtractor={(agent) => agent.uuid}
        style={styles.agentContainer}
      />
    </View>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColor.eerieBlack,
    // paddingHorizontal: 20,
    paddingTop: 15,
  },
  textContainer: {
    paddingHorizontal: 20,
  },
  // listContainer: {
  //   marginBottom: 200,
  // },
  agentContainer: {
    marginTop: 10,
    // justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 30,
    paddingLeft: 20,
    // borderWidth: 1,
    // borderColor: 'red',
    // flex: 1,
  },
  descContainer: {
    position: 'absolute',
    width: 230,
    left: 150,
    top: 40,
    // borderWidth: 1,
    // borderColor: 'red',
  },
  agentName: {
    fontFamily: 'Valorant-Font',
    color: appColor.sunburntCyclopsRed,
    fontSize: 34,
  },
  roleStyle: {
    fontFamily: 'Oswald-Light',
    fontSize: 16,
    color: appColor.milkWhite,
    marginTop: -5,
    marginBottom: 5,
  },
  abilityIconContainer: {
    flexDirection: 'row',
  },
  abilityIconStyle: {
    width: 20,
    height: 20,
    marginRight: 3,
  },
  cardContainer: {
    // backgroundColor: appColor.eerieBlack,
    // borderWidth: 1,
    // borderColor: appColor.milkWhite,
    height: 150,
    width: 380,
    marginTop: 40,
    borderRadius: 10,
    // marginVertical: 7,
    // borderWidth: 1,
    // borderColor: 'red',
    overflow: 'visible',
    position: 'relative',
  },
  imgStyle: {
    // width: '100%',
    // height: '100%',
    width: 200,
    height: 200,
    position: 'absolute',
    bottom: 0,
    left: '-5%',
  },
  imgBackgroundStyle: {
    width: 200,
    height: 150,
    position: 'absolute',
    bottom: 0,
    left: '-5%',
    opacity: 0.1,
  },
});
