import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";



type EagerLastEdited = {
  readonly cognitoUserId: string;
  readonly at: string;
  readonly versionEdited: number;
}

type LazyLastEdited = {
  readonly cognitoUserId: string;
  readonly at: string;
  readonly versionEdited: number;
}

export declare type LastEdited = LazyLoading extends LazyLoadingDisabled ? EagerLastEdited : LazyLastEdited

export declare const LastEdited: (new (init: ModelInit<LastEdited>) => LastEdited)

type EagerContractorJobInfo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ContractorJobInfo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly contractorId: string;
  readonly cognitoUserId: string;
  readonly jobId: string;
  readonly createdBy?: string | null;
  readonly lastEdited?: LastEdited | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyContractorJobInfo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ContractorJobInfo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly contractorId: string;
  readonly cognitoUserId: string;
  readonly jobId: string;
  readonly createdBy?: string | null;
  readonly lastEdited?: LastEdited | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ContractorJobInfo = LazyLoading extends LazyLoadingDisabled ? EagerContractorJobInfo : LazyContractorJobInfo

export declare const ContractorJobInfo: (new (init: ModelInit<ContractorJobInfo>) => ContractorJobInfo) & {
  copyOf(source: ContractorJobInfo, mutator: (draft: MutableModel<ContractorJobInfo>) => MutableModel<ContractorJobInfo> | void): ContractorJobInfo;
}