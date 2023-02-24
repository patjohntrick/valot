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
import { appColor } from '../../constant';
import { Agents } from '../../api/Agents';
import { getAgents } from '../../api/Api';

export const AgentsScreen = () => {
  const { data, error, isLoading } = getAgents();

  if (isLoading) return <Text>Loading...</Text>;

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <StyledTitle title={DRAWER_STRINGS.AGENTS} />
        <StyledParagraph text={Strings.AGENTS_DESC} />
      </View>
      {/* <View style={styles.listContainer}> */}
      <FlatList
        data={data.data}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.cardContainer}>
              <Image
                source={{
                  uri: item.fullPortrait,
                }}
                style={styles.imgStyle}
                resizeMode='cover'
              />
            </TouchableOpacity>
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
  cardContainer: {
    backgroundColor: appColor.milkWhite,
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
});
