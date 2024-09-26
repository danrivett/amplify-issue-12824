/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateContractorJobInfo = /* GraphQL */ `
  subscription OnCreateContractorJobInfo(
    $filter: ModelSubscriptionContractorJobInfoFilterInput
  ) {
    onCreateContractorJobInfo(filter: $filter) {
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
export const onUpdateContractorJobInfo = /* GraphQL */ `
  subscription OnUpdateContractorJobInfo(
    $filter: ModelSubscriptionContractorJobInfoFilterInput
  ) {
    onUpdateContractorJobInfo(filter: $filter) {
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
export const onDeleteContractorJobInfo = /* GraphQL */ `
  subscription OnDeleteContractorJobInfo(
    $filter: ModelSubscriptionContractorJobInfoFilterInput
  ) {
    onDeleteContractorJobInfo(filter: $filter) {
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
