import { gapi } from "gapi-script";
import { useEffect } from "react";



export const useGoogle = () => {

  const clientId = "36160483358-ii5rm604q4ha8m00ks2k639tn3mbiua7.apps.googleusercontent.com"

  useEffect(() => {
    const start = async () => {
      await gapi.load("client:auth2");
      await gapi.auth2.init({
        clientId: clientId,
      });
    };

    start();
  }, []);

  const onSuccess = (res) => {
    console.log(res);
  };

  const onFailure = (err) => {
    console.log(err);
  };

  return { onSuccess, onFailure, clientId };
};
