import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

import { areYouBeingAnAssholeElon } from './services/are-you-being-an-asshole'

export const isElonBeingAnAsshole = async (
  event: APIGatewayProxyEvent
  ): Promise<APIGatewayProxyResult> => {
    
    const areYou = await areYouBeingAnAssholeElon()
    console.log('areYou: ', areYou);

    return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Meh',
        input: event,
      },
      null,
      2
    ),
  };
};
