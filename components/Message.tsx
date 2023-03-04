/* eslint-disable @next/next/no-img-element */
import { DocumentData } from 'firebase/firestore';
import Typewriter from 'typewriter-effect';

type Props = {
  message: DocumentData;
};
function Message({ message }: Props) {
  const isChatDM = message.user.name === 'ChatDM';
  return (
    <div className={`py-5 text-white ${isChatDM && 'bg-[#434654]'}`}>
      <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
        <img referrerPolicy="no-referrer" src={message.user.avatar} alt="avatar" className="h-10 w-10 rounded-full" />
        <p className="pt-1 text-sm">
          {isChatDM ? (
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString(message.text).start();
              }}
              options={{
                autoStart: true,
                loop: false,
                delay: 0.05,
              }}
            />
          ) : (
            message.text
          )}
        </p>
      </div>
    </div>
  );
}

export default Message;
