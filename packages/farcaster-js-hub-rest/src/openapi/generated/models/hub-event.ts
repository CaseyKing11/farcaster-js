/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster Hub REST API
 * Perform basic queries of Farcaster state via the REST API of a Farcaster hub. See the [Farcaster docs](https://www.thehubble.xyz/docs/httpapi/httpapi.html) for more details. Some client libraries:   - [TypeScript](https://www.npmjs.com/package/@standard-crypto/farcaster-js-hub-rest) 
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { HubEventMergeMessage } from './hub-event-merge-message.js';
// May contain unused imports in some cases
// @ts-ignore
import { HubEventMergeOnChainEvent } from './hub-event-merge-on-chain-event.js';
// May contain unused imports in some cases
// @ts-ignore
import { HubEventMergeUsernameProof } from './hub-event-merge-username-proof.js';
// May contain unused imports in some cases
// @ts-ignore
import { HubEventPruneMessage } from './hub-event-prune-message.js';
// May contain unused imports in some cases
// @ts-ignore
import { HubEventRevokeMessage } from './hub-event-revoke-message.js';
// May contain unused imports in some cases
// @ts-ignore
import { MergeMessageBody } from './merge-message-body.js';
// May contain unused imports in some cases
// @ts-ignore
import { MergeOnChainEventBody } from './merge-on-chain-event-body.js';
// May contain unused imports in some cases
// @ts-ignore
import { MergeUserNameProofBody } from './merge-user-name-proof-body.js';
// May contain unused imports in some cases
// @ts-ignore
import { PruneMessageBody } from './prune-message-body.js';
// May contain unused imports in some cases
// @ts-ignore
import { RevokeMessageBody } from './revoke-message-body.js';

/**
 * @type HubEvent
 * @export
 */
export type HubEvent = { type: 'HUB_EVENT_TYPE_MERGE_MESSAGE' } & HubEventMergeMessage | { type: 'HUB_EVENT_TYPE_MERGE_ON_CHAIN_EVENT' } & HubEventMergeOnChainEvent | { type: 'HUB_EVENT_TYPE_MERGE_USERNAME_PROOF' } & HubEventMergeUsernameProof | { type: 'HUB_EVENT_TYPE_PRUNE_MESSAGE' } & HubEventPruneMessage | { type: 'HUB_EVENT_TYPE_REVOKE_MESSAGE' } & HubEventRevokeMessage;


