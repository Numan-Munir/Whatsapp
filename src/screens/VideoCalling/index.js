import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  PermissionsAndroid,
  Image,
} from 'react-native';
import RtcEngine, {
  VideoRenderMode,
  RtcLocalView,
  RtcRemoteView,
} from 'react-native-agora';
import {theme} from '../../ui';

const appId = '11b7eebe4e8e4990bfc9010429f3b251';
const agora_token =
  '007eJxTYBDyXOsYtNKkSaP9nIXzZo5AiXc2V4wWfxQ4l76v2PPOy+8KDIaGSeapqUmpJqkWqSaWlgZJacmWBoYGJkaWacZJRqaGrgErkxsCGRkst29hZWSAQBBfkMGxNCUzPywzJTXfOTEnJzMvnYEBAM/CI/s=';
const channel = 'AudioVideoCalling';

const VideoCalling = ({navigation}) => {
  const [joinSucceed, setJoinSucceed] = useState(false);
  const [uid, setUid] = useState();
  const [engine, setEngine] = useState();

  // console.log('========>>', uid);

  const [callStatus, setCallStatus] = useState({
    cancelCall: false,
    startCall: false,
    isRinging: false,
  });

  const backgroundStyle = {
    flex: 1,
    backgroundColor: '#1D262B',
  };

  useEffect(() => {
    initializeSDK();
    requestCameraAndAudioPermission();
    // console.log('============>>', engine);
  }, []);
  //   useEffect(() => {
  //     console.log('.....................>>', engine);
  //     if (engine) {
  //       console.log('============>>', engine);
  //       handleCalling();
  //     }
  //   }, []);
  const requestCameraAndAudioPermission = async () => {
    try {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.CAMERA,
      ]);
      if (
        granted['android.permission.CAMERA'] ===
        PermissionsAndroid.RESULTS.GRANTED
      ) {
        console.log('You can use the cameras & mic');
      } else {
        console.log('Permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const initializeSDK = async () => {
    let engine = await RtcEngine.create(appId);
    setEngine(engine);
    // console.log('[engineRef ---->>>>>>>>>>>>>>>>>>> ', engine);
    // Enable the audio module.
    let audioEnabled = await engine.enableAudio();
    let videoEnabled = await engine.enableVideo();

    let isSpeaker = await engine.isSpeakerphoneEnabled();
    console.log(
      '[isSpeakerEnable ---->>> ]',
      isSpeaker,
      audioEnabled,
      videoEnabled,
    );

    // This callback occurs when the remote user successfully joins the channel.
    engine.addListener('UserJoined', (uid, elapsed) => {
      setUid(uid);
      setCallStatus({
        cancelCall: false,
        startCall: true,
        isRinging: false,
      });
      console.log('[remote-user-join-room]', uid, elapsed);
    });
    // This callback occurs when the remote user leaves the channel or drops offline.
    engine.addListener('UserOffline', (uid, reason) => {
      setCallStatus({
        cancelCall: false,
        startCall: false,
        isRinging: false,
      });
      resetStates();
      setJoinSucceed(true);
      navigation.goBack();
      console.log('[User-leave-call-receiver]', Platform.OS, reason);
    });
    // This callback occurs when the local user successfully joins the channel.
    engine.addListener('JoinChannelSuccess', (channel, uid, elapse) => {
      console.log('[local-user-join-call-receiver]', Platform.OS, channel);
      setJoinSucceed(true);
    });

    // console.log('[engine --->>> ]', engine);
  };

  const handleCalling = async () => {
    // console.log('[status ---->>>> ]', callStatus);
    if (engine && !callStatus.startCall) {
      try {
        engine
          ?.joinChannel(agora_token, channel, null, 0)
          .then(() => {
            setCallStatus({
              cancelCall: false,
              startCall: false,
              isRinging: true,
            });
            console.log('[local-user-join-the-channel(call)-successfully]');
          })
          .catch(async error => {
            console.log('[Join-channel-ERROR]', error?.message);
          });
      } catch (error) {
        console.log('[error --->>> ]', error);
      }
    } else {
      // console.log('[leave-room ---------------->>>>>>>>>>>>> ]');
      await engine?.leaveChannel();
      await engine?.unsubscribeAll();
      setCallStatus({
        cancelCall: true,
        startCall: false,
        isRinging: false,
      });
      resetStates();
    }
  };

  const resetStates = () => {
    setTimeout(() => {
      setCallStatus({
        cancelCall: false,
        startCall: false,
        isRinging: false,
      });
    }, 1500);
  };

  const CallDropped = async () => {
    let engine = await (await RtcEngine.create(appId)).leaveChannel();
    console.log('disableAudio', engine);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View
        style={{
          flex: 1,
          paddingTop: 30,
          alignItems: 'center',
          paddingHorizontal: 50,
        }}>
        <Image
          style={{
            height: 90,
            width: 90,
            marginTop: 40,
            marginHorizontal: 20,
            resizeMode: 'contain',
          }}
          source={require('../../assets/images/wellcome_image.png')}
        />
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            fontWeight: '500',
            textAlign: 'center',
            paddingVertical: 15,
          }}>
          Name
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            fontWeight: '500',
            textAlign: 'center',
            paddingVertical: 15,
          }}>
          {callStatus.isRinging
            ? 'RINGING'
            : callStatus.startCall
            ? 'CALL STARTED!'
            : callStatus.cancelCall
            ? 'CALL DROPED'
            : 'Do you want to connect with Squire live agent?'}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 60,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={() => handleCalling()}
          style={{
            height: 60,
            width: 60,
            alignSelf: 'center',
            borderRadius: 50,
            backgroundColor: theme.colors.btnGreen,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 80,
          }}>
          <Image
            style={{
              height: 29,
              width: 20,
              marginVertical: 5,
              marginHorizontal: 20,
              resizeMode: 'contain',
            }}
            source={require('../../assets/icons/phone.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => CallDropped()}
          style={{
            height: 60,
            width: 60,
            alignSelf: 'center',
            borderRadius: 50,
            backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 80,
          }}>
          <Image
            style={{
              height: 29,
              width: 20,
              marginVertical: 5,
              marginHorizontal: 20,
              resizeMode: 'contain',
            }}
            source={require('../../assets/icons/phone.png')}
          />
        </TouchableOpacity>
      </View>
      {callStatus.isRinging ||
        (callStatus.startCall && (
          <View style={{flex: 1, flexDirection: 'row'}}>
            {joinSucceed && (
              <RtcLocalView.SurfaceView
                style={{flex: 1, backgroundColor: 'red'}}
                channelId={channel}
                VideoRenderMode={VideoRenderMode.Hidden}
              />
            )}
            {uid && (
              <RtcRemoteView.SurfaceView
                style={{flex: 1, backgroundColor: 'red'}}
                uid={uid}
                channelId={channel}
                VideoRenderMode={VideoRenderMode.Hidden}
              />
            )}
          </View>
        ))}
    </SafeAreaView>
  );
};

export default VideoCalling;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
