/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createContractorJobInfo = /* GraphQL */ `
  mutation CreateContractorJobInfo(
    $input: CreateContractorJobInfoInput!
    $condition: ModelContractorJobInfoConditionInput
  ) {
    createContractorJobInfo(input: $input, condition: $condition) {
      id
      contractorId
      cognitoUserId
      jobId
      createdBy
      lastEdited {
        cognitoUserId
        at
        versionEdited
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateContractorJobInfo = /* GraphQL */ `
  mutation UpdateContractorJobInfo(
    $input: UpdateContractorJobInfoInput!
    $condition: ModelContractorJobInfoConditionInput
  ) {
    updateContractorJobInfo(input: $input, condition: $condition) {
      id
      contractorId
      cognitoUserId
      jobId
      createdBy
      lastEdited {
        cognitoUserId
        at
        versionEdited
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteContractorJobInfo = /* GraphQL */ `
  mutation DeleteContractorJobInfo(
    $input: DeleteContractorJobInfoInput!
    $condition: ModelContractorJobInfoConditionInput
  ) {
    deleteContractorJobInfo(input: $input, condition: $condition) {
      id
      contractorId
      cognitoUserId
      jobId
      createdBy
      lastEdited {
        cognitoUserId
        at
        versionEdited
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
