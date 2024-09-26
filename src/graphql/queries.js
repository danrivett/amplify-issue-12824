/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getContractorJobInfo = /* GraphQL */ `
  query GetContractorJobInfo($id: ID!) {
    getContractorJobInfo(id: $id) {
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
export const listContractorJobInfos = /* GraphQL */ `
  query ListContractorJobInfos(
    $filter: ModelContractorJobInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContractorJobInfos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        contractorId
        cognitoUserId
        jobId
        createdBy
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncContractorJobInfos = /* GraphQL */ `
  query SyncContractorJobInfos(
    $filter: ModelContractorJobInfoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncContractorJobInfos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        contractorId
        cognitoUserId
        jobId
        createdBy
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
