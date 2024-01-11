// import { gapi } from "gapi-script";
import { useEffect } from "react";

export const useGoogle = () => {
  // const clientId = "924967037695-3tbr2l92qj7l84sosjft20mt38hipt84.apps.googleusercontent.com";
  //   const clientId = "170585267274-b3omd7gue8h8qugrbmqh7k8f2lti41pm.apps.googleusercontent.com";
  const clientId =
    "36160483358-ii5rm604q4ha8m00ks2k639tn3mbiua7.apps.googleusercontent.com";

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
