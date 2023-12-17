/* eslint-disable react/prop-types */
import { Image, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const MainScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <Image
        // eslint-disable-next-line no-undef
        source={require('../../assets/KakaoTalk_20231208_234441758.jpg')}
        style={[
          styles.image,
          {
            width: '90%',
            height: '85%',
            marginBottom: 110,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainScreen;
