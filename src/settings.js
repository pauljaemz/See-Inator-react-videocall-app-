import{ createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";
const appId = "280b75f1304e4004a53afceab0fa4bc6 "
const token = "006280b75f1304e4004a53afceab0fa4bc6IADPFgZzcrQIt+QvfORnsYodRn1bmskgrKI093YIHYyfSWTNKL8AAAAAEADjpwys9oFtYQEAAQD2gW1h"
export const config = {mode:"rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";
