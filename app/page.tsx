import * as React from "react";
import { BeakerIcon } from "@heroicons/react/24/solid";

export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      <h1 className="text-5xl font-bold mb-20">CHAT DM</h1>

      <div className="flex">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <BeakerIcon className="h-6 w-6 text-blue-500" />
            <h2>Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">{"Explain REST API's to me"}</p>
            <p className="infoText">{"What is the difference between Java and JavaScript?"}</p>
            <p className="infoText">{"Was this a bug or a feature?"}</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Sun Icon */}
            <h2>Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">{"Explain REST API's to me"}</p>
            <p className="infoText">{"What is the difference between Java and JavaScript?"}</p>
            <p className="infoText">{"Was this a bug or a feature?"}</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Sun Icon */}
            <h2>Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">{"Explain REST API's to me"}</p>
            <p className="infoText">{"What is the difference between Java and JavaScript?"}</p>
            <p className="infoText">{"Was this a bug or a feature?"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
