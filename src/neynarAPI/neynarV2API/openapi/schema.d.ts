/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/farcaster/signer": {
    /**
     * Fetches the status of a signer
     * @description Gets information status of a signer by passing in a signer_uuid (Use post API to generate a signer)
     */
    get: operations["signer"];
    /**
     * Creates a signer and returns the signer status
     * @description Creates a signer and returns the signer status. \
     * **Note**: While testing please reuse the signer, it costs money to approve a signer.
     */
    post: operations["create-signer"];
  };
  "/farcaster/signer/signed_key": {
    /**
     * Register Signed Key
     * @description Registers an app fid, deadline and a signature. Returns the signer status with an approval url.
     */
    post: operations["register-signed-key"];
  };
  "/farcaster/user/search": {
    /**
     * Search for Usernames
     * @description Search for Usernames
     */
    get: operations["user-search"];
  };
  "/farcaster/user": {
    /**
     * Update user profile
     * @description Update user profile \
     * (In order to update user's profile `signer_uuid` must be approved)
     */
    patch: operations["update-user"];
  };
  "/farcaster/cast": {
    /**
     * Retrieve cast for a given hash
     * @description Gets information about an individual cast by passing in a web URL or cast hash
     */
    get: operations["cast"];
    /**
     * Posts a cast
     * @description Posts a cast or cast reply. Works with mentions and embeds.
     * (In order to post a cast `signer_uuid` must be approved)
     */
    post: operations["post-cast"];
    /**
     * Delete a cast
     * @description Delete an existing cast. \
     * (In order to delete a cast `signer_uuid` must be approved)
     */
    delete: operations["delete-cast"];
  };
  "/farcaster/casts": {
    /**
     * Gets information about an array of casts
     * @description Retrieve multiple casts using their respective hashes.
     */
    get: operations["casts"];
  };
  "/farcaster/feed": {
    /** Retrieve casts based on filters */
    get: operations["feed"];
  };
  "/farcaster/reaction": {
    /**
     * Posts a reaction
     * @description Post a reaction (like or recast) to a given cast \
     * (In order to post a reaction `signer_uuid` must be approved)
     */
    post: operations["post-reaction"];
    /**
     * Delete a reaction
     * @description Delete a reaction (like or recast) to a given cast \
     * (In order to delete a reaction `signer_uuid` must be approved)
     */
    delete: operations["delete-reaction"];
  };
  "/farcaster/user/follow": {
    /**
     * Follow a user
     * @description Follow a user \
     * (In order to follow a user `signer_uuid` must be approved)
     */
    post: operations["follow-user"];
    /**
     * Unfollow a user
     * @description Unfollow a user \
     * (In order to unfollow a user `signer_uuid` must be approved)
     */
    delete: operations["unfollow-user"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    /** @description Ethereum address */
    Address: string;
    /**
     * Format: int32
     * @description User identifier (unsigned integer)
     * @default 3
     */
    Fid: number;
    /** @description UUID of the signer */
    SignerUUID: string;
    /**
     * @description The status of a user.
     *   - active: The user is currently active.
     *   - inactive: The user is not currently active.
     *
     * @enum {string}
     */
    ActiveStatus: "active" | "inactive";
    /** @enum {string} */
    ReactionType: "like" | "recast";
    /** @description Returns next cursor */
    NextCursor: {
      cursor: string | null;
    };
    /**
     * @description The notification type of a cast.
     *
     * @enum {string}
     */
    CastNotificationType: "cast-mention" | "cast-reply";
    /**
     * @description The query param accepted by the API. Sent along with identifier param.
     * url - Cast identifier is a url
     * hash - Cast identifier is a hash
     *
     * @enum {string}
     */
    CastParamType: "url" | "hash";
    /** @description Returns ErrorRes metadata */
    ErrorRes: {
      code?: string;
      message: string;
      property?: string;
      /** Format: int32 */
      status?: number;
    };
    /** Format: date-time */
    Timestamp: string;
    IndividualHashObj: {
      hash: string;
    };
    EmbedUrl: {
      url: string;
    };
    CastId: {
      /** Format: int64 */
      fid: number;
      hash: string;
    };
    EmbedCastId: {
      cast_id: components["schemas"]["CastId"];
    };
    ReactionLike: {
      fid: components["schemas"]["Fid"];
    };
    ReactionRecast: {
      fid: components["schemas"]["Fid"];
      fname: string;
    };
    User: {
      fid: components["schemas"]["Fid"];
      username: string;
      display_name: string;
      custody_address?: components["schemas"]["Address"];
      /** @description The URL of the user's profile picture */
      pfp_url: string;
      profile: {
        bio: {
          text: string;
        };
      };
      /**
       * Format: int32
       * @description The number of followers the user has.
       */
      follower_count: number;
      /**
       * Format: int32
       * @description The number of users the user is following.
       */
      following_count: number;
      verifications: components["schemas"]["Address"][];
      activeStatus: components["schemas"]["ActiveStatus"];
    };
    EmbeddedCast:
      | components["schemas"]["EmbedUrl"]
      | components["schemas"]["EmbedCastId"];
    Cast: {
      hash: string;
      parent_hash: string | null;
      parent_url: string | null;
      parent_author: components["schemas"]["Fid"] & {
        fid: string | null;
      };
      author: components["schemas"]["User"];
      text: string;
      timestamp: components["schemas"]["Timestamp"];
      embeds: components["schemas"]["EmbeddedCast"][];
      type?: components["schemas"]["CastNotificationType"];
    };
    ProfileUrl: {
      pfp: {
        url: string;
      };
    };
    SearchedUser: components["schemas"]["User"] &
      components["schemas"]["ProfileUrl"];
    RegisterSignerKeyReqBody: {
      signer_uuid: components["schemas"]["SignerUUID"];
      /** @description Signature generated by the custody address of the app. Signed data includes app_fid, deadline, signer’s public key */
      signature: string;
      /** @description Application FID */
      app_fid: number;
      /** @description unix timestamp in seconds that controls how long the signed key request is valid for. (24 hours from now is recommended) */
      deadline: number;
    };
    /** @description Parent URL or Cast Hash */
    CastParent: string;
    PostCastReqBody: {
      signer_uuid: components["schemas"]["SignerUUID"];
      text: string;
      embeds?: components["schemas"]["EmbeddedCast"][];
      parent?: components["schemas"]["CastParent"];
    };
    ReactionReqBody: {
      signer_uuid: components["schemas"]["SignerUUID"];
      reaction_type: components["schemas"]["ReactionType"];
      target: string;
    };
    GetCastsReqBody: {
      casts?: components["schemas"]["IndividualHashObj"][];
    };
    DeleteCastReqBody: {
      signer_uuid: components["schemas"]["SignerUUID"];
      target_hash: components["schemas"]["Address"];
    };
    FollowReqBody: {
      signer_uuid: components["schemas"]["SignerUUID"];
      target_fids: components["schemas"]["Fid"][];
    };
    UpdateUserReqBody: {
      signer_uuid: components["schemas"]["SignerUUID"];
      bio?: string;
      pfp_url?: string;
      url?: string;
      username?: string;
      display_name?: string;
    };
    CastWithInteractionsReactions: {
      likes: components["schemas"]["ReactionLike"][];
      recasts: components["schemas"]["ReactionRecast"][];
    };
    CastWithInteractionsReplies: {
      /** Format: int32 */
      count: number;
    };
    CastWithInteractions: components["schemas"]["Cast"] & {
      reactions: components["schemas"]["CastWithInteractionsReactions"];
      replies: components["schemas"]["CastWithInteractionsReplies"];
      thread_hash: string | null;
    };
    Signer: {
      signer_uuid: components["schemas"]["SignerUUID"];
      public_key: string;
      /** @enum {string} */
      status: "generated" | "pending_approval" | "approved" | "revoked";
      signer_approval_url?: string;
      fid?: string;
    };
    CastResponse: {
      cast: components["schemas"]["CastWithInteractions"];
    };
    UserSearchResponse: {
      result: {
        users: components["schemas"]["SearchedUser"][];
      };
    };
    CastsResponse: {
      result: {
        casts: components["schemas"]["CastWithInteractions"][];
      };
    };
    FeedResponse: {
      casts: components["schemas"]["CastWithInteractions"][];
      next: components["schemas"]["NextCursor"];
    };
    PostCastResponse: {
      success: boolean;
      cast: {
        hash: components["schemas"]["Address"];
        author: {
          fid: components["schemas"]["Fid"];
        };
        text: string;
      };
    };
    OperationResponse: {
      success: boolean;
    };
    FollowResponse: {
      success: boolean;
      target_fid: components["schemas"]["Fid"];
    };
    BulkFollowResponse: {
      success: boolean;
      details: components["schemas"]["FollowResponse"][];
    };
  };
  responses: {
    /** @description Resource not found */
    "404Response": {
      content: {
        "application/json": components["schemas"]["ErrorRes"];
      };
    };
    /** @description Bad Request */
    "400Response": {
      content: {
        "application/json": components["schemas"]["ErrorRes"];
      };
    };
    /** @description Forbidden */
    "403Response": {
      content: {
        "application/json": components["schemas"]["ErrorRes"];
      };
    };
    /** @description Server Error */
    "500Response": {
      content: {
        "application/json": components["schemas"]["ErrorRes"];
      };
    };
  };
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {
  /**
   * Fetches the status of a signer
   * @description Gets information status of a signer by passing in a signer_uuid (Use post API to generate a signer)
   */
  signer: {
    parameters: {
      query: {
        /** @example 19d0c5fd-9b33-4a48-a0e2-bc7b0555baec */
        signer_uuid: components["schemas"]["SignerUUID"];
      };
    };
    responses: {
      /** @description Successful operation. */
      200: {
        content: {
          "application/json": components["schemas"]["Signer"];
        };
      };
      400: components["responses"]["400Response"];
      403: components["responses"]["403Response"];
      404: components["responses"]["404Response"];
      500: components["responses"]["500Response"];
    };
  };
  /**
   * Creates a signer and returns the signer status
   * @description Creates a signer and returns the signer status. \
   * **Note**: While testing please reuse the signer, it costs money to approve a signer.
   */
  "create-signer": {
    responses: {
      /** @description Successful operation. */
      200: {
        content: {
          "application/json": components["schemas"]["Signer"];
        };
      };
      500: components["responses"]["500Response"];
    };
  };
  /**
   * Register Signed Key
   * @description Registers an app fid, deadline and a signature. Returns the signer status with an approval url.
   */
  "register-signed-key": {
    requestBody: {
      content: {
        /**
         * @example {
         *   "signer_uuid": "19d0c5fd-9b33-4a48-a0e2-bc7b0555baec",
         *   "app_fid": 18949,
         *   "deadline": 1693627665,
         *   "signature": "0xe5d95c391e165dac8efea373efe301d3ea823e1f41713f8943713cbe2850566672e33ff3e17e19abb89703f650a2597f62b4fda0ce28ca15d59eb6d4e971ee531b"
         * }
         */
        "application/json": components["schemas"]["RegisterSignerKeyReqBody"];
      };
    };
    responses: {
      /** @description Successful operation */
      200: {
        content: {
          "application/json": components["schemas"]["Signer"];
        };
      };
      400: components["responses"]["400Response"];
      403: components["responses"]["403Response"];
      404: components["responses"]["404Response"];
      500: components["responses"]["500Response"];
    };
  };
  /**
   * Search for Usernames
   * @description Search for Usernames
   */
  "user-search": {
    parameters: {
      query: {
        /** @example 3 */
        viewer_fid: components["schemas"]["Fid"];
        /** @example r */
        q: string;
      };
    };
    responses: {
      /** @description Successful operation. */
      200: {
        content: {
          "application/json": components["schemas"]["UserSearchResponse"];
        };
      };
      400: components["responses"]["400Response"];
    };
  };
  /**
   * Update user profile
   * @description Update user profile \
   * (In order to update user's profile `signer_uuid` must be approved)
   */
  "update-user": {
    requestBody: {
      content: {
        /**
         * @example {
         *   "signer_uuid": "19d0c5fd-9b33-4a48-a0e2-bc7b0555baec",
         *   "bio": "Hey there..!!!",
         *   "pfp_url": "https://i.imgur.com/keIWEYM.jpg",
         *   "username": "dan",
         *   "display_name": "Dan Romero"
         * }
         */
        "application/json": components["schemas"]["UpdateUserReqBody"];
      };
    };
    responses: {
      /** @description Successful operation. */
      200: {
        content: {
          "application/json": components["schemas"]["OperationResponse"];
        };
      };
      400: components["responses"]["400Response"];
      403: components["responses"]["403Response"];
      404: components["responses"]["404Response"];
      500: components["responses"]["500Response"];
    };
  };
  /**
   * Retrieve cast for a given hash
   * @description Gets information about an individual cast by passing in a web URL or cast hash
   */
  cast: {
    parameters: {
      query: {
        /** @example url */
        type: components["schemas"]["CastParamType"];
        /**
         * @description Cast identifier (Its either a url or a hash)
         * @example https://warpcast.com/rish/0x9288c1
         */
        identifier: string;
      };
    };
    responses: {
      /** @description Successful operation. */
      200: {
        content: {
          "application/json": components["schemas"]["CastResponse"];
        };
      };
      400: components["responses"]["400Response"];
    };
  };
  /**
   * Posts a cast
   * @description Posts a cast or cast reply. Works with mentions and embeds.
   * (In order to post a cast `signer_uuid` must be approved)
   */
  "post-cast": {
    requestBody: {
      content: {
        /**
         * @example {
         *   "signer_uuid": "19d0c5fd-9b33-4a48-a0e2-bc7b0555baec",
         *   "text": "Writing to @farcaster via the @neynar APIs 🪐"
         * }
         */
        "application/json": components["schemas"]["PostCastReqBody"];
      };
    };
    responses: {
      /** @description Successful operation. */
      200: {
        content: {
          "application/json": components["schemas"]["PostCastResponse"];
        };
      };
      400: components["responses"]["400Response"];
      403: components["responses"]["403Response"];
      404: components["responses"]["404Response"];
      500: components["responses"]["500Response"];
    };
  };
  /**
   * Delete a cast
   * @description Delete an existing cast. \
   * (In order to delete a cast `signer_uuid` must be approved)
   */
  "delete-cast": {
    requestBody: {
      content: {
        /**
         * @example {
         *   "signer_uuid": "19d0c5fd-9b33-4a48-a0e2-bc7b0555baec",
         *   "target_hash": "0x1ea99cbed57e4020314ba3fadd7c692d2de34d5f"
         * }
         */
        "application/json": components["schemas"]["DeleteCastReqBody"];
      };
    };
    responses: {
      /** @description Successful operation. */
      200: {
        content: {
          "application/json": components["schemas"]["OperationResponse"];
        };
      };
      400: components["responses"]["400Response"];
      403: components["responses"]["403Response"];
      404: components["responses"]["404Response"];
      500: components["responses"]["500Response"];
    };
  };
  /**
   * Gets information about an array of casts
   * @description Retrieve multiple casts using their respective hashes.
   */
  casts: {
    requestBody: {
      content: {
        /**
         * @example {
         *   "casts": [
         *     {
         *       "hash": "0xa896906a5e397b4fec247c3ee0e9e4d4990b8004"
         *     },
         *     {
         *       "hash": "0x27ff810f7f718afd8c40be236411f017982e0994"
         *     }
         *   ]
         * }
         */
        "application/json": components["schemas"]["GetCastsReqBody"];
      };
    };
    responses: {
      /** @description Successful operation. */
      200: {
        content: {
          "application/json": components["schemas"]["CastsResponse"];
        };
      };
      400: components["responses"]["400Response"];
    };
  };
  /** Retrieve casts based on filters */
  feed: {
    parameters: {
      query: {
        /**
         * @description Defaults to following (requires fid or address). If set to filter (requires filter_type)
         * @example filter
         */
        feed_type?: "filter" | "following";
        /**
         * @description Used when feed_type=filter. Can be set to fids (requires fids) or parent_url (requires parent_url)
         * @example fids
         */
        filter_type?: "fids" | "parent_url";
        /** @description (Optional) fid of user whose feed you want to create. By default, the API expects this field, except if you pass a filter_type */
        fid: components["schemas"]["Fid"];
        /**
         * @description Used when filter_type=fids . Create a feed based on a list of fids. Max array size is 250. Requires feed_type and filter_type.
         * @example 3,4,194
         */
        fids?: string;
        /** @description Used when filter_type=parent_url can be used to fetch content under any parent url e.g. FIP-2 channels on Warpcast. Requires feed_type and filter_type */
        parent_url?: string;
        /** @description Pagination cursor. */
        cursor?: string;
        /** @description Number of results to retrieve (default 25, max 150) */
        limit?: number;
      };
    };
    responses: {
      /** @description Successful operation. */
      200: {
        content: {
          "application/json": components["schemas"]["FeedResponse"];
        };
      };
      400: components["responses"]["400Response"];
    };
  };
  /**
   * Posts a reaction
   * @description Post a reaction (like or recast) to a given cast \
   * (In order to post a reaction `signer_uuid` must be approved)
   */
  "post-reaction": {
    requestBody: {
      content: {
        /**
         * @example {
         *   "signer_uuid": "19d0c5fd-9b33-4a48-a0e2-bc7b0555baec",
         *   "target": "0x1ea99cbed57e4020314ba3fadd7c692d2de34d5f",
         *   "reaction_type": "like"
         * }
         */
        "application/json": components["schemas"]["ReactionReqBody"];
      };
    };
    responses: {
      /** @description Successful operation. */
      200: {
        content: {
          "application/json": components["schemas"]["OperationResponse"];
        };
      };
      400: components["responses"]["400Response"];
      403: components["responses"]["403Response"];
      404: components["responses"]["404Response"];
      500: components["responses"]["500Response"];
    };
  };
  /**
   * Delete a reaction
   * @description Delete a reaction (like or recast) to a given cast \
   * (In order to delete a reaction `signer_uuid` must be approved)
   */
  "delete-reaction": {
    requestBody: {
      content: {
        /**
         * @example {
         *   "signer_uuid": "19d0c5fd-9b33-4a48-a0e2-bc7b0555baec",
         *   "target": "0x1ea99cbed57e4020314ba3fadd7c692d2de34d5f",
         *   "reaction_type": "like"
         * }
         */
        "application/json": components["schemas"]["ReactionReqBody"];
      };
    };
    responses: {
      /** @description Successful operation. */
      200: {
        content: {
          "application/json": components["schemas"]["OperationResponse"];
        };
      };
      400: components["responses"]["400Response"];
      403: components["responses"]["403Response"];
      404: components["responses"]["404Response"];
      500: components["responses"]["500Response"];
    };
  };
  /**
   * Follow a user
   * @description Follow a user \
   * (In order to follow a user `signer_uuid` must be approved)
   */
  "follow-user": {
    requestBody: {
      content: {
        /**
         * @example {
         *   "signer_uuid": "19d0c5fd-9b33-4a48-a0e2-bc7b0555baec",
         *   "target_fids": [
         *     3,
         *     194
         *   ]
         * }
         */
        "application/json": components["schemas"]["FollowReqBody"];
      };
    };
    responses: {
      /** @description Successful operation. */
      200: {
        content: {
          "application/json": components["schemas"]["BulkFollowResponse"];
        };
      };
      400: components["responses"]["400Response"];
      403: components["responses"]["403Response"];
      404: components["responses"]["404Response"];
      500: components["responses"]["500Response"];
    };
  };
  /**
   * Unfollow a user
   * @description Unfollow a user \
   * (In order to unfollow a user `signer_uuid` must be approved)
   */
  "unfollow-user": {
    requestBody: {
      content: {
        /**
         * @example {
         *   "signer_uuid": "19d0c5fd-9b33-4a48-a0e2-bc7b0555baec",
         *   "target_fids": [
         *     3,
         *     194
         *   ]
         * }
         */
        "application/json": components["schemas"]["FollowReqBody"];
      };
    };
    responses: {
      /** @description Successful operation. */
      200: {
        content: {
          "application/json": components["schemas"]["BulkFollowResponse"];
        };
      };
      400: components["responses"]["400Response"];
      403: components["responses"]["403Response"];
      404: components["responses"]["404Response"];
      500: components["responses"]["500Response"];
    };
  };
}
