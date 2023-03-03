import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

import { StyledLoader, StyledParagraph, StyledTitle } from '../../components';
import { getAgents } from '../../api/Api';
import {
  DRAWER_STRINGS,
  Strings,
  appColor,
  SCREEN_NAMES,
} from '../../constant';

export const AgentsScreen = ({ navigation }: { navigation: any }) => {
  const { data, error, isLoading } = getAgents();

  const handleClick = (agentId: string) => {
    const agent = data.data.filter((agent: any) => agent.uuid === agentId);
    navigation.navigate(SCREEN_NAMES.AGENT_SCREEN, { agent: agent[0] });
  };

  if (isLoading) return <StyledLoader />;

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
                onPress={() => handleClick(item.uuid)}
              >
                <Image
                  style={styles.imgBackgroundStyle}
                  source={{ uri: item.background }}
                />
                <Image
                  style={styles.imgRoleBackgroundStyle}
                  source={{ uri: item.role.displayIcon }}
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
        contentContainerStyle={{ alignItems: 'center', paddingBottom: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColor.eerieBlack,
    paddingTop: 15,
  },
  textContainer: {
    paddingHorizontal: 20,
  },
  agentContainer: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 30,
    paddingLeft: 20,
  },
  descContainer: {
    position: 'absolute',
    width: 230,
    left: 150,
    top: 40,
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
    height: 150,
    width: 380,
    marginTop: 40,
    borderRadius: 10,
    overflow: 'visible',
    position: 'relative',
  },
  imgStyle: {
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
  imgRoleBackgroundStyle: {
    width: 80,
    height: 80,
    position: 'absolute',
    bottom: 36,
    right: '5%',
    opacity: 0.1,
  },
});
