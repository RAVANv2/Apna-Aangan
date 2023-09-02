import "./ChatBot.css";
import { BlackPillButton } from "../components/Buttons";


const ChatBot = ()  => {

    const handelOnclick = () => {

        // TODO:: Add business contact number here
        const whatsAppLink = 'https://api.whatsapp.com/send?phone=7976016059';
        window.open(whatsAppLink, '_blank');
    }

    return (
        <div className="whatsapp-icon" onClick={handelOnclick}>
            <img 
                src="./images/whats-app.png"
                alt="whats app"
                className="w-full md:w-2/3 xl:w-full"
            />
        </div>
    )
}

export default ChatBot;