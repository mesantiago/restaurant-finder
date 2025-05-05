import { ChatCompletionTool, ChatCompletionToolChoiceOption } from "openai/resources/chat";

interface Config {
    apiKey: string;
    systemPrompt: string;
    tool_choice: ChatCompletionToolChoiceOption;
    tools: Array<ChatCompletionTool>;
}

const config: Config = {
    apiKey: process.env.OPENAI_API_KEY || '',
    systemPrompt: 'You are a restaurant finder machine. Analyze the user prompt and derive a response object. Response object contains the following properties: query, near, min_price, max_price, open_now.',
    tool_choice: { 
        type: "function", 
        function: { 
          name: "analyze_user_input" 
        }
    },
    tools: [
        {
            type: "function",
            function: {
                name: "analyze_user_input",
                description: "Analyzes user input and returns response object",
                parameters: {
                    type: "object",
                    properties: {
                        query: {
                            type: "string",
                            description: "Can be the name, category or taste of the restaurant"
                        },
                        near: {
                            type: "string",
                            description: "Restaurant location that is a locality in the world"
                        },
                        min_price: {
                            type: "number",
                            description: "The minimum price of the food the user is looking for with 1 being the most affordable and 4 as most expensive"
                        },
                        max_price: {
                            type: "number",
                            description: "The maximum price of the food the user is looking for with 1 being the most affordable and 4 as most expensive"
                        },
                        open_now: {
                            type: "boolean",
                            description: "Determines if user is looking for currently open restaurants"
                        }
                    },
                    required: [
                        "query"
                    ]
                }
            }
        }
    ]
};

export default config;
