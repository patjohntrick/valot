// import {
//   FlatList,
//   Image,
//   ImageSourcePropType,
//   StyleSheet,
//   Text,
//   TouchableHighlight,
//   View,
// } from 'react-native';
// import { appColor } from '../constant';

// type StyledAgentCardProps = {
//   agentData: any;
// };

// export const StyledAgentCard = ({ agentData }: StyledAgentCardProps) => {
//   // console.log(agentData[3].uuid);
//   return (
//     // <FlatList style={styles.container} key={keyProp}>
//     //   <Text>{agentName}</Text>
//     //   <Image
//     //     source={{
//     //       uri: agentImg,
//     //     }}
//     //     style={styles.imgStyle}
//     //     resizeMode='cover'
//     //   />
//     // </FlatList>;
//     <FlatList
//       data={agentData}
//       keyExtractor={(agent) => String(agent.uuid)}
//       renderItem={({ agentData }: { agentData: any }, index: any) => (
//         <TouchableHighlight style={styles.container} key={index}>
//           <Text>{agentData.displayName}</Text>
//           <Image
//             source={{
//               uri: agentData.fullPortrait,
//             }}
//             style={styles.imgStyle}
//             resizeMode='cover'
//           />
//         </TouchableHighlight>
//       )}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: appColor.milkWhite,
//     height: 200,
//     width: 170,
//     borderRadius: 10,
//     marginVertical: 7,
//   },
//   imgStyle: {
//     width: 100,
//     height: 100,
//   },
// });
