// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ContractorJobInfo, LastEdited } = initSchema(schema);

export {
  ContractorJobInfo,
  LastEdited
};