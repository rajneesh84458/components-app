import React, { useEffect, useState, memo } from 'react';
import { Text, View, Modal, StyleSheet } from 'react-native';
import CodePush from 'react-native-code-push';
const codePushOptions = {
  checkFrequency: CodePush.CheckFrequency.MANUAL,
  // checkFrequency: CodePush.CheckFrequency.ON_APP_START,
};

const withCodePush = (WrappedComponent) => {
  const WrappedApp = () => {
    const [progress, setProgress] = useState(false);

    const codePushStatusDidChange = (status) => {
      switch (status) {
        case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
          console.log('Checking for update.');
          break;
        case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
          console.log('Downloading package.');
          break;
        case CodePush.SyncStatus.AWAITING_USER_ACTION:
          console.log('Awaiting user action.');
          break;
        case CodePush.SyncStatus.INSTALLING_UPDATE:
          console.log('Installing update.');
          break;
        case CodePush.SyncStatus.UP_TO_DATE:
          console.log('App up to date.');
          setProgress(false);
          break;
        case CodePush.SyncStatus.UPDATE_IGNORED:
          console.log('Update cancelled by user.');
          setProgress(false);
          break;
        case CodePush.SyncStatus.UPDATE_INSTALLED:
          console.log('Update installed and will be applied on restart.');
          setProgress(false);
          break;
        case CodePush.SyncStatus.UNKNOWN_ERROR:
          console.log('An unknown error occurred.');
          setProgress(false);
          break;
      }
    };

    const codePushDownloadDidProgress = (progress) => {
      setProgress(progress);
    };

    const showProgressView = () => {
      console.log('calling');
      return (
        <Modal visible={true} transparent>
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              <Text>In Progress</Text>
              <View>
                <Text style={styles.messages}>
                  {`${(Number(progress?.receivedBytes) / 1048576).toFixed(
                    2
                  )}MB/${(Number(progress?.totalBytes) / 1048576).toFixed(2)}`}
                </Text>
                <Text style={styles.messages}>
                  {(
                    (Number(progress?.receivedBytes) /
                      Number(progress?.totalBytes)) *
                    100
                  ).toFixed(0)}
                  %
                </Text>
              </View>
            </View>
          </View>
        </Modal>
      );
    };

    useEffect(() => {
      CodePush.notifyAppReady();
      CodePush.sync(
        {
          updateDialog: true,
          installMode: CodePush.InstallMode.IMMEDIATE,
        },
        codePushStatusDidChange, // syncStatusChangedCallback
        codePushDownloadDidProgress // download progress
      );
    }, []);

    console.log('progress ====', progress);
    return (
      <WrappedComponent>
        <View>{progress ? showProgressView() : null}</View>
      </WrappedComponent>
    );
  };
  return memo(CodePush(codePushOptions)(WrappedApp));
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'while',
    borderRadius: 8,
    padding: 16,
  },
  messages: {
    marginTop: 30,
    textAlign: 'center',
  },
});
export default withCodePush;
