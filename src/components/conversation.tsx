import { useState } from "react";
import { IConversation } from "../interfaces/main.interface";
import { answers } from "../data/answers";
import { selectRandomProperty } from "../utils/helperMethods";

export default function Conversation(){

    const [conversation, setConversation] = useState<IConversation[]>([]);
    const [currentQuery, setCurrentQuery] = useState<string>("");

    function handleQuery (e : React.KeyboardEvent) {
        if(currentQuery && e.key === "Enter"){
            setConversation((prevConversations) => {
                const currentConv : IConversation = {
                    queryId : self.crypto.randomUUID(),
                    query : currentQuery,
                    timestamp : (new Date()).toLocaleTimeString(),
                    response: selectRandomProperty(answers),
                }
                return [...prevConversations, currentConv];
            })
            
            setCurrentQuery("");
        }
    }

    return (
        <>
            <div className="conversation-wrapper">
                {
                    conversation?.map((item) => (
                        <div key={item.queryId} className="qna">
                            <div className="query">
                                <div>Q : {item.query}</div>
                            </div>
                            <div className="response">
                                <div>TBot : {item.response ?? "Loading ..."}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="conversation-footer">
                <div className="input-handler">
                    <input
                        className="qinput"
                        name="queryInput" 
                        value={currentQuery}
                        onChange={(e) => setCurrentQuery(e.currentTarget.value)}
                        onKeyDown={(e) => handleQuery(e)}
                        placeholder="Please type a query and press Enter"
                    />
                    <button 
                        style={{ border : "1px solid #fff", fontSize: "12px"}}
                        tabIndex={-1}
                        onClick={() => setConversation([])}
                    >
                        &#x21bb; Reset Conversation
                    </button>
                </div>
            </div>
        </> 
    );
}