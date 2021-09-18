import{ createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";
const appId = "280b75f1304e4004a53afceab0fa4bc6 "
const token = "006280b75f1304e4004a53afceab0fa4bc6IACQ0Vth2h5+7VggmH54ZGnSZ7bQY+nYBGRDTumo7zBS1GTNKL8AAAAAEACI9+RezO1GYQEAAQDL7UZh"
export const config = {mode:"rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";