
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model Contestant
 * 
 */
export type Contestant = $Result.DefaultSelection<Prisma.$ContestantPayload>
/**
 * Model ContestantImage
 * 
 */
export type ContestantImage = $Result.DefaultSelection<Prisma.$ContestantImagePayload>
/**
 * Model Competition
 * 
 */
export type Competition = $Result.DefaultSelection<Prisma.$CompetitionPayload>
/**
 * Model CompetitionEntry
 * 
 */
export type CompetitionEntry = $Result.DefaultSelection<Prisma.$CompetitionEntryPayload>
/**
 * Model Vote
 * 
 */
export type Vote = $Result.DefaultSelection<Prisma.$VotePayload>
/**
 * Model ScoreResult
 * 
 */
export type ScoreResult = $Result.DefaultSelection<Prisma.$ScoreResultPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  CONTESTANT: 'CONTESTANT',
  PUBLIC: 'PUBLIC'
};

export type Role = (typeof Role)[keyof typeof Role]


export const CompetitionType: {
  JURY: 'JURY',
  PUBLIC_VOTING: 'PUBLIC_VOTING'
};

export type CompetitionType = (typeof CompetitionType)[keyof typeof CompetitionType]


export const CompetitionStatus: {
  UPCOMING: 'UPCOMING',
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED'
};

export type CompetitionStatus = (typeof CompetitionStatus)[keyof typeof CompetitionStatus]


export const ImageType: {
  FACE: 'FACE',
  FULL_BODY: 'FULL_BODY'
};

export type ImageType = (typeof ImageType)[keyof typeof ImageType]


export const EntryStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type EntryStatus = (typeof EntryStatus)[keyof typeof EntryStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type CompetitionType = $Enums.CompetitionType

export const CompetitionType: typeof $Enums.CompetitionType

export type CompetitionStatus = $Enums.CompetitionStatus

export const CompetitionStatus: typeof $Enums.CompetitionStatus

export type ImageType = $Enums.ImageType

export const ImageType: typeof $Enums.ImageType

export type EntryStatus = $Enums.EntryStatus

export const EntryStatus: typeof $Enums.EntryStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contestant`: Exposes CRUD operations for the **Contestant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contestants
    * const contestants = await prisma.contestant.findMany()
    * ```
    */
  get contestant(): Prisma.ContestantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contestantImage`: Exposes CRUD operations for the **ContestantImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContestantImages
    * const contestantImages = await prisma.contestantImage.findMany()
    * ```
    */
  get contestantImage(): Prisma.ContestantImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.competition`: Exposes CRUD operations for the **Competition** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Competitions
    * const competitions = await prisma.competition.findMany()
    * ```
    */
  get competition(): Prisma.CompetitionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.competitionEntry`: Exposes CRUD operations for the **CompetitionEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompetitionEntries
    * const competitionEntries = await prisma.competitionEntry.findMany()
    * ```
    */
  get competitionEntry(): Prisma.CompetitionEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vote`: Exposes CRUD operations for the **Vote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Votes
    * const votes = await prisma.vote.findMany()
    * ```
    */
  get vote(): Prisma.VoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scoreResult`: Exposes CRUD operations for the **ScoreResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScoreResults
    * const scoreResults = await prisma.scoreResult.findMany()
    * ```
    */
  get scoreResult(): Prisma.ScoreResultDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Account: 'Account',
    Session: 'Session',
    VerificationToken: 'VerificationToken',
    Contestant: 'Contestant',
    ContestantImage: 'ContestantImage',
    Competition: 'Competition',
    CompetitionEntry: 'CompetitionEntry',
    Vote: 'Vote',
    ScoreResult: 'ScoreResult'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "account" | "session" | "verificationToken" | "contestant" | "contestantImage" | "competition" | "competitionEntry" | "vote" | "scoreResult"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Contestant: {
        payload: Prisma.$ContestantPayload<ExtArgs>
        fields: Prisma.ContestantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContestantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContestantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestantPayload>
          }
          findFirst: {
            args: Prisma.ContestantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContestantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestantPayload>
          }
          findMany: {
            args: Prisma.ContestantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestantPayload>[]
          }
          create: {
            args: Prisma.ContestantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestantPayload>
          }
          createMany: {
            args: Prisma.ContestantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContestantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestantPayload>[]
          }
          delete: {
            args: Prisma.ContestantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestantPayload>
          }
          update: {
            args: Prisma.ContestantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestantPayload>
          }
          deleteMany: {
            args: Prisma.ContestantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContestantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContestantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestantPayload>[]
          }
          upsert: {
            args: Prisma.ContestantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestantPayload>
          }
          aggregate: {
            args: Prisma.ContestantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContestant>
          }
          groupBy: {
            args: Prisma.ContestantGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContestantGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContestantCountArgs<ExtArgs>
            result: $Utils.Optional<ContestantCountAggregateOutputType> | number
          }
        }
      }
      ContestantImage: {
        payload: Prisma.$ContestantImagePayload<ExtArgs>
        fields: Prisma.ContestantImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContestantImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestantImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContestantImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestantImagePayload>
          }
          findFirst: {
            args: Prisma.ContestantImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestantImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContestantImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestantImagePayload>
          }
          findMany: {
            args: Prisma.ContestantImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestantImagePayload>[]
          }
          create: {
            args: Prisma.ContestantImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestantImagePayload>
          }
          createMany: {
            args: Prisma.ContestantImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContestantImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestantImagePayload>[]
          }
          delete: {
            args: Prisma.ContestantImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestantImagePayload>
          }
          update: {
            args: Prisma.ContestantImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestantImagePayload>
          }
          deleteMany: {
            args: Prisma.ContestantImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContestantImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContestantImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestantImagePayload>[]
          }
          upsert: {
            args: Prisma.ContestantImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestantImagePayload>
          }
          aggregate: {
            args: Prisma.ContestantImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContestantImage>
          }
          groupBy: {
            args: Prisma.ContestantImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContestantImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContestantImageCountArgs<ExtArgs>
            result: $Utils.Optional<ContestantImageCountAggregateOutputType> | number
          }
        }
      }
      Competition: {
        payload: Prisma.$CompetitionPayload<ExtArgs>
        fields: Prisma.CompetitionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompetitionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompetitionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload>
          }
          findFirst: {
            args: Prisma.CompetitionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompetitionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload>
          }
          findMany: {
            args: Prisma.CompetitionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload>[]
          }
          create: {
            args: Prisma.CompetitionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload>
          }
          createMany: {
            args: Prisma.CompetitionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompetitionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload>[]
          }
          delete: {
            args: Prisma.CompetitionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload>
          }
          update: {
            args: Prisma.CompetitionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload>
          }
          deleteMany: {
            args: Prisma.CompetitionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompetitionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompetitionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload>[]
          }
          upsert: {
            args: Prisma.CompetitionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload>
          }
          aggregate: {
            args: Prisma.CompetitionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompetition>
          }
          groupBy: {
            args: Prisma.CompetitionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompetitionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompetitionCountArgs<ExtArgs>
            result: $Utils.Optional<CompetitionCountAggregateOutputType> | number
          }
        }
      }
      CompetitionEntry: {
        payload: Prisma.$CompetitionEntryPayload<ExtArgs>
        fields: Prisma.CompetitionEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompetitionEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompetitionEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionEntryPayload>
          }
          findFirst: {
            args: Prisma.CompetitionEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompetitionEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionEntryPayload>
          }
          findMany: {
            args: Prisma.CompetitionEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionEntryPayload>[]
          }
          create: {
            args: Prisma.CompetitionEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionEntryPayload>
          }
          createMany: {
            args: Prisma.CompetitionEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompetitionEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionEntryPayload>[]
          }
          delete: {
            args: Prisma.CompetitionEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionEntryPayload>
          }
          update: {
            args: Prisma.CompetitionEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionEntryPayload>
          }
          deleteMany: {
            args: Prisma.CompetitionEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompetitionEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompetitionEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionEntryPayload>[]
          }
          upsert: {
            args: Prisma.CompetitionEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionEntryPayload>
          }
          aggregate: {
            args: Prisma.CompetitionEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompetitionEntry>
          }
          groupBy: {
            args: Prisma.CompetitionEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompetitionEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompetitionEntryCountArgs<ExtArgs>
            result: $Utils.Optional<CompetitionEntryCountAggregateOutputType> | number
          }
        }
      }
      Vote: {
        payload: Prisma.$VotePayload<ExtArgs>
        fields: Prisma.VoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          findFirst: {
            args: Prisma.VoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          findMany: {
            args: Prisma.VoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>[]
          }
          create: {
            args: Prisma.VoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          createMany: {
            args: Prisma.VoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>[]
          }
          delete: {
            args: Prisma.VoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          update: {
            args: Prisma.VoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          deleteMany: {
            args: Prisma.VoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>[]
          }
          upsert: {
            args: Prisma.VoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          aggregate: {
            args: Prisma.VoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVote>
          }
          groupBy: {
            args: Prisma.VoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<VoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.VoteCountArgs<ExtArgs>
            result: $Utils.Optional<VoteCountAggregateOutputType> | number
          }
        }
      }
      ScoreResult: {
        payload: Prisma.$ScoreResultPayload<ExtArgs>
        fields: Prisma.ScoreResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScoreResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScoreResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreResultPayload>
          }
          findFirst: {
            args: Prisma.ScoreResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScoreResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreResultPayload>
          }
          findMany: {
            args: Prisma.ScoreResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreResultPayload>[]
          }
          create: {
            args: Prisma.ScoreResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreResultPayload>
          }
          createMany: {
            args: Prisma.ScoreResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScoreResultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreResultPayload>[]
          }
          delete: {
            args: Prisma.ScoreResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreResultPayload>
          }
          update: {
            args: Prisma.ScoreResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreResultPayload>
          }
          deleteMany: {
            args: Prisma.ScoreResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScoreResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScoreResultUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreResultPayload>[]
          }
          upsert: {
            args: Prisma.ScoreResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreResultPayload>
          }
          aggregate: {
            args: Prisma.ScoreResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScoreResult>
          }
          groupBy: {
            args: Prisma.ScoreResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScoreResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScoreResultCountArgs<ExtArgs>
            result: $Utils.Optional<ScoreResultCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    account?: AccountOmit
    session?: SessionOmit
    verificationToken?: VerificationTokenOmit
    contestant?: ContestantOmit
    contestantImage?: ContestantImageOmit
    competition?: CompetitionOmit
    competitionEntry?: CompetitionEntryOmit
    vote?: VoteOmit
    scoreResult?: ScoreResultOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
    votes: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    votes?: boolean | UserCountOutputTypeCountVotesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteWhereInput
  }


  /**
   * Count Type ContestantCountOutputType
   */

  export type ContestantCountOutputType = {
    images: number
    entries: number
  }

  export type ContestantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | ContestantCountOutputTypeCountImagesArgs
    entries?: boolean | ContestantCountOutputTypeCountEntriesArgs
  }

  // Custom InputTypes
  /**
   * ContestantCountOutputType without action
   */
  export type ContestantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestantCountOutputType
     */
    select?: ContestantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContestantCountOutputType without action
   */
  export type ContestantCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContestantImageWhereInput
  }

  /**
   * ContestantCountOutputType without action
   */
  export type ContestantCountOutputTypeCountEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompetitionEntryWhereInput
  }


  /**
   * Count Type CompetitionCountOutputType
   */

  export type CompetitionCountOutputType = {
    entries: number
    votes: number
  }

  export type CompetitionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entries?: boolean | CompetitionCountOutputTypeCountEntriesArgs
    votes?: boolean | CompetitionCountOutputTypeCountVotesArgs
  }

  // Custom InputTypes
  /**
   * CompetitionCountOutputType without action
   */
  export type CompetitionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionCountOutputType
     */
    select?: CompetitionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompetitionCountOutputType without action
   */
  export type CompetitionCountOutputTypeCountEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompetitionEntryWhereInput
  }

  /**
   * CompetitionCountOutputType without action
   */
  export type CompetitionCountOutputTypeCountVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    passwordHash: number
    role: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    passwordHash?: true
    role?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    passwordHash?: true
    role?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    emailVerified: Date | null
    image: string | null
    passwordHash: string | null
    role: $Enums.Role
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    contestant?: boolean | User$contestantArgs<ExtArgs>
    votes?: boolean | User$votesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "passwordHash" | "role" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    contestant?: boolean | User$contestantArgs<ExtArgs>
    votes?: boolean | User$votesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      contestant: Prisma.$ContestantPayload<ExtArgs> | null
      votes: Prisma.$VotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      emailVerified: Date | null
      image: string | null
      passwordHash: string | null
      role: $Enums.Role
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contestant<T extends User$contestantArgs<ExtArgs> = {}>(args?: Subset<T, User$contestantArgs<ExtArgs>>): Prisma__ContestantClient<$Result.GetResult<Prisma.$ContestantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    votes<T extends User$votesArgs<ExtArgs> = {}>(args?: Subset<T, User$votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.contestant
   */
  export type User$contestantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contestant
     */
    select?: ContestantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contestant
     */
    omit?: ContestantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestantInclude<ExtArgs> | null
    where?: ContestantWhereInput
  }

  /**
   * User.votes
   */
  export type User$votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    where?: VoteWhereInput
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    cursor?: VoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model Contestant
   */

  export type AggregateContestant = {
    _count: ContestantCountAggregateOutputType | null
    _avg: ContestantAvgAggregateOutputType | null
    _sum: ContestantSumAggregateOutputType | null
    _min: ContestantMinAggregateOutputType | null
    _max: ContestantMaxAggregateOutputType | null
  }

  export type ContestantAvgAggregateOutputType = {
    age: number | null
    height: Decimal | null
    weight: Decimal | null
  }

  export type ContestantSumAggregateOutputType = {
    age: number | null
    height: Decimal | null
    weight: Decimal | null
  }

  export type ContestantMinAggregateOutputType = {
    id: string | null
    userId: string | null
    fullName: string | null
    age: number | null
    gender: string | null
    country: string | null
    height: Decimal | null
    weight: Decimal | null
    bodyType: string | null
    eyeColor: string | null
    hairColor: string | null
    bio: string | null
    instagram: string | null
    portfolioUrl: string | null
    profileImage: string | null
    createdAt: Date | null
  }

  export type ContestantMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    fullName: string | null
    age: number | null
    gender: string | null
    country: string | null
    height: Decimal | null
    weight: Decimal | null
    bodyType: string | null
    eyeColor: string | null
    hairColor: string | null
    bio: string | null
    instagram: string | null
    portfolioUrl: string | null
    profileImage: string | null
    createdAt: Date | null
  }

  export type ContestantCountAggregateOutputType = {
    id: number
    userId: number
    fullName: number
    age: number
    gender: number
    country: number
    height: number
    weight: number
    bodyType: number
    eyeColor: number
    hairColor: number
    bio: number
    instagram: number
    portfolioUrl: number
    profileImage: number
    createdAt: number
    _all: number
  }


  export type ContestantAvgAggregateInputType = {
    age?: true
    height?: true
    weight?: true
  }

  export type ContestantSumAggregateInputType = {
    age?: true
    height?: true
    weight?: true
  }

  export type ContestantMinAggregateInputType = {
    id?: true
    userId?: true
    fullName?: true
    age?: true
    gender?: true
    country?: true
    height?: true
    weight?: true
    bodyType?: true
    eyeColor?: true
    hairColor?: true
    bio?: true
    instagram?: true
    portfolioUrl?: true
    profileImage?: true
    createdAt?: true
  }

  export type ContestantMaxAggregateInputType = {
    id?: true
    userId?: true
    fullName?: true
    age?: true
    gender?: true
    country?: true
    height?: true
    weight?: true
    bodyType?: true
    eyeColor?: true
    hairColor?: true
    bio?: true
    instagram?: true
    portfolioUrl?: true
    profileImage?: true
    createdAt?: true
  }

  export type ContestantCountAggregateInputType = {
    id?: true
    userId?: true
    fullName?: true
    age?: true
    gender?: true
    country?: true
    height?: true
    weight?: true
    bodyType?: true
    eyeColor?: true
    hairColor?: true
    bio?: true
    instagram?: true
    portfolioUrl?: true
    profileImage?: true
    createdAt?: true
    _all?: true
  }

  export type ContestantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contestant to aggregate.
     */
    where?: ContestantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contestants to fetch.
     */
    orderBy?: ContestantOrderByWithRelationInput | ContestantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContestantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contestants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contestants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contestants
    **/
    _count?: true | ContestantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContestantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContestantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContestantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContestantMaxAggregateInputType
  }

  export type GetContestantAggregateType<T extends ContestantAggregateArgs> = {
        [P in keyof T & keyof AggregateContestant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContestant[P]>
      : GetScalarType<T[P], AggregateContestant[P]>
  }




  export type ContestantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContestantWhereInput
    orderBy?: ContestantOrderByWithAggregationInput | ContestantOrderByWithAggregationInput[]
    by: ContestantScalarFieldEnum[] | ContestantScalarFieldEnum
    having?: ContestantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContestantCountAggregateInputType | true
    _avg?: ContestantAvgAggregateInputType
    _sum?: ContestantSumAggregateInputType
    _min?: ContestantMinAggregateInputType
    _max?: ContestantMaxAggregateInputType
  }

  export type ContestantGroupByOutputType = {
    id: string
    userId: string
    fullName: string
    age: number
    gender: string
    country: string
    height: Decimal
    weight: Decimal
    bodyType: string
    eyeColor: string
    hairColor: string
    bio: string
    instagram: string | null
    portfolioUrl: string | null
    profileImage: string | null
    createdAt: Date
    _count: ContestantCountAggregateOutputType | null
    _avg: ContestantAvgAggregateOutputType | null
    _sum: ContestantSumAggregateOutputType | null
    _min: ContestantMinAggregateOutputType | null
    _max: ContestantMaxAggregateOutputType | null
  }

  type GetContestantGroupByPayload<T extends ContestantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContestantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContestantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContestantGroupByOutputType[P]>
            : GetScalarType<T[P], ContestantGroupByOutputType[P]>
        }
      >
    >


  export type ContestantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fullName?: boolean
    age?: boolean
    gender?: boolean
    country?: boolean
    height?: boolean
    weight?: boolean
    bodyType?: boolean
    eyeColor?: boolean
    hairColor?: boolean
    bio?: boolean
    instagram?: boolean
    portfolioUrl?: boolean
    profileImage?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    images?: boolean | Contestant$imagesArgs<ExtArgs>
    entries?: boolean | Contestant$entriesArgs<ExtArgs>
    _count?: boolean | ContestantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contestant"]>

  export type ContestantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fullName?: boolean
    age?: boolean
    gender?: boolean
    country?: boolean
    height?: boolean
    weight?: boolean
    bodyType?: boolean
    eyeColor?: boolean
    hairColor?: boolean
    bio?: boolean
    instagram?: boolean
    portfolioUrl?: boolean
    profileImage?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contestant"]>

  export type ContestantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fullName?: boolean
    age?: boolean
    gender?: boolean
    country?: boolean
    height?: boolean
    weight?: boolean
    bodyType?: boolean
    eyeColor?: boolean
    hairColor?: boolean
    bio?: boolean
    instagram?: boolean
    portfolioUrl?: boolean
    profileImage?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contestant"]>

  export type ContestantSelectScalar = {
    id?: boolean
    userId?: boolean
    fullName?: boolean
    age?: boolean
    gender?: boolean
    country?: boolean
    height?: boolean
    weight?: boolean
    bodyType?: boolean
    eyeColor?: boolean
    hairColor?: boolean
    bio?: boolean
    instagram?: boolean
    portfolioUrl?: boolean
    profileImage?: boolean
    createdAt?: boolean
  }

  export type ContestantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "fullName" | "age" | "gender" | "country" | "height" | "weight" | "bodyType" | "eyeColor" | "hairColor" | "bio" | "instagram" | "portfolioUrl" | "profileImage" | "createdAt", ExtArgs["result"]["contestant"]>
  export type ContestantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    images?: boolean | Contestant$imagesArgs<ExtArgs>
    entries?: boolean | Contestant$entriesArgs<ExtArgs>
    _count?: boolean | ContestantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ContestantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ContestantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ContestantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contestant"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      images: Prisma.$ContestantImagePayload<ExtArgs>[]
      entries: Prisma.$CompetitionEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      fullName: string
      age: number
      gender: string
      country: string
      height: Prisma.Decimal
      weight: Prisma.Decimal
      bodyType: string
      eyeColor: string
      hairColor: string
      bio: string
      instagram: string | null
      portfolioUrl: string | null
      profileImage: string | null
      createdAt: Date
    }, ExtArgs["result"]["contestant"]>
    composites: {}
  }

  type ContestantGetPayload<S extends boolean | null | undefined | ContestantDefaultArgs> = $Result.GetResult<Prisma.$ContestantPayload, S>

  type ContestantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContestantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContestantCountAggregateInputType | true
    }

  export interface ContestantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contestant'], meta: { name: 'Contestant' } }
    /**
     * Find zero or one Contestant that matches the filter.
     * @param {ContestantFindUniqueArgs} args - Arguments to find a Contestant
     * @example
     * // Get one Contestant
     * const contestant = await prisma.contestant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContestantFindUniqueArgs>(args: SelectSubset<T, ContestantFindUniqueArgs<ExtArgs>>): Prisma__ContestantClient<$Result.GetResult<Prisma.$ContestantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contestant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContestantFindUniqueOrThrowArgs} args - Arguments to find a Contestant
     * @example
     * // Get one Contestant
     * const contestant = await prisma.contestant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContestantFindUniqueOrThrowArgs>(args: SelectSubset<T, ContestantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContestantClient<$Result.GetResult<Prisma.$ContestantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contestant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestantFindFirstArgs} args - Arguments to find a Contestant
     * @example
     * // Get one Contestant
     * const contestant = await prisma.contestant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContestantFindFirstArgs>(args?: SelectSubset<T, ContestantFindFirstArgs<ExtArgs>>): Prisma__ContestantClient<$Result.GetResult<Prisma.$ContestantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contestant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestantFindFirstOrThrowArgs} args - Arguments to find a Contestant
     * @example
     * // Get one Contestant
     * const contestant = await prisma.contestant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContestantFindFirstOrThrowArgs>(args?: SelectSubset<T, ContestantFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContestantClient<$Result.GetResult<Prisma.$ContestantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contestants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contestants
     * const contestants = await prisma.contestant.findMany()
     * 
     * // Get first 10 Contestants
     * const contestants = await prisma.contestant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contestantWithIdOnly = await prisma.contestant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContestantFindManyArgs>(args?: SelectSubset<T, ContestantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContestantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contestant.
     * @param {ContestantCreateArgs} args - Arguments to create a Contestant.
     * @example
     * // Create one Contestant
     * const Contestant = await prisma.contestant.create({
     *   data: {
     *     // ... data to create a Contestant
     *   }
     * })
     * 
     */
    create<T extends ContestantCreateArgs>(args: SelectSubset<T, ContestantCreateArgs<ExtArgs>>): Prisma__ContestantClient<$Result.GetResult<Prisma.$ContestantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contestants.
     * @param {ContestantCreateManyArgs} args - Arguments to create many Contestants.
     * @example
     * // Create many Contestants
     * const contestant = await prisma.contestant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContestantCreateManyArgs>(args?: SelectSubset<T, ContestantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contestants and returns the data saved in the database.
     * @param {ContestantCreateManyAndReturnArgs} args - Arguments to create many Contestants.
     * @example
     * // Create many Contestants
     * const contestant = await prisma.contestant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contestants and only return the `id`
     * const contestantWithIdOnly = await prisma.contestant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContestantCreateManyAndReturnArgs>(args?: SelectSubset<T, ContestantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContestantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contestant.
     * @param {ContestantDeleteArgs} args - Arguments to delete one Contestant.
     * @example
     * // Delete one Contestant
     * const Contestant = await prisma.contestant.delete({
     *   where: {
     *     // ... filter to delete one Contestant
     *   }
     * })
     * 
     */
    delete<T extends ContestantDeleteArgs>(args: SelectSubset<T, ContestantDeleteArgs<ExtArgs>>): Prisma__ContestantClient<$Result.GetResult<Prisma.$ContestantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contestant.
     * @param {ContestantUpdateArgs} args - Arguments to update one Contestant.
     * @example
     * // Update one Contestant
     * const contestant = await prisma.contestant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContestantUpdateArgs>(args: SelectSubset<T, ContestantUpdateArgs<ExtArgs>>): Prisma__ContestantClient<$Result.GetResult<Prisma.$ContestantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contestants.
     * @param {ContestantDeleteManyArgs} args - Arguments to filter Contestants to delete.
     * @example
     * // Delete a few Contestants
     * const { count } = await prisma.contestant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContestantDeleteManyArgs>(args?: SelectSubset<T, ContestantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contestants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contestants
     * const contestant = await prisma.contestant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContestantUpdateManyArgs>(args: SelectSubset<T, ContestantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contestants and returns the data updated in the database.
     * @param {ContestantUpdateManyAndReturnArgs} args - Arguments to update many Contestants.
     * @example
     * // Update many Contestants
     * const contestant = await prisma.contestant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contestants and only return the `id`
     * const contestantWithIdOnly = await prisma.contestant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContestantUpdateManyAndReturnArgs>(args: SelectSubset<T, ContestantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContestantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contestant.
     * @param {ContestantUpsertArgs} args - Arguments to update or create a Contestant.
     * @example
     * // Update or create a Contestant
     * const contestant = await prisma.contestant.upsert({
     *   create: {
     *     // ... data to create a Contestant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contestant we want to update
     *   }
     * })
     */
    upsert<T extends ContestantUpsertArgs>(args: SelectSubset<T, ContestantUpsertArgs<ExtArgs>>): Prisma__ContestantClient<$Result.GetResult<Prisma.$ContestantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contestants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestantCountArgs} args - Arguments to filter Contestants to count.
     * @example
     * // Count the number of Contestants
     * const count = await prisma.contestant.count({
     *   where: {
     *     // ... the filter for the Contestants we want to count
     *   }
     * })
    **/
    count<T extends ContestantCountArgs>(
      args?: Subset<T, ContestantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContestantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contestant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContestantAggregateArgs>(args: Subset<T, ContestantAggregateArgs>): Prisma.PrismaPromise<GetContestantAggregateType<T>>

    /**
     * Group by Contestant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContestantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContestantGroupByArgs['orderBy'] }
        : { orderBy?: ContestantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContestantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContestantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contestant model
   */
  readonly fields: ContestantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contestant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContestantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    images<T extends Contestant$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Contestant$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContestantImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    entries<T extends Contestant$entriesArgs<ExtArgs> = {}>(args?: Subset<T, Contestant$entriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitionEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Contestant model
   */
  interface ContestantFieldRefs {
    readonly id: FieldRef<"Contestant", 'String'>
    readonly userId: FieldRef<"Contestant", 'String'>
    readonly fullName: FieldRef<"Contestant", 'String'>
    readonly age: FieldRef<"Contestant", 'Int'>
    readonly gender: FieldRef<"Contestant", 'String'>
    readonly country: FieldRef<"Contestant", 'String'>
    readonly height: FieldRef<"Contestant", 'Decimal'>
    readonly weight: FieldRef<"Contestant", 'Decimal'>
    readonly bodyType: FieldRef<"Contestant", 'String'>
    readonly eyeColor: FieldRef<"Contestant", 'String'>
    readonly hairColor: FieldRef<"Contestant", 'String'>
    readonly bio: FieldRef<"Contestant", 'String'>
    readonly instagram: FieldRef<"Contestant", 'String'>
    readonly portfolioUrl: FieldRef<"Contestant", 'String'>
    readonly profileImage: FieldRef<"Contestant", 'String'>
    readonly createdAt: FieldRef<"Contestant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contestant findUnique
   */
  export type ContestantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contestant
     */
    select?: ContestantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contestant
     */
    omit?: ContestantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestantInclude<ExtArgs> | null
    /**
     * Filter, which Contestant to fetch.
     */
    where: ContestantWhereUniqueInput
  }

  /**
   * Contestant findUniqueOrThrow
   */
  export type ContestantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contestant
     */
    select?: ContestantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contestant
     */
    omit?: ContestantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestantInclude<ExtArgs> | null
    /**
     * Filter, which Contestant to fetch.
     */
    where: ContestantWhereUniqueInput
  }

  /**
   * Contestant findFirst
   */
  export type ContestantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contestant
     */
    select?: ContestantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contestant
     */
    omit?: ContestantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestantInclude<ExtArgs> | null
    /**
     * Filter, which Contestant to fetch.
     */
    where?: ContestantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contestants to fetch.
     */
    orderBy?: ContestantOrderByWithRelationInput | ContestantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contestants.
     */
    cursor?: ContestantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contestants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contestants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contestants.
     */
    distinct?: ContestantScalarFieldEnum | ContestantScalarFieldEnum[]
  }

  /**
   * Contestant findFirstOrThrow
   */
  export type ContestantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contestant
     */
    select?: ContestantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contestant
     */
    omit?: ContestantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestantInclude<ExtArgs> | null
    /**
     * Filter, which Contestant to fetch.
     */
    where?: ContestantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contestants to fetch.
     */
    orderBy?: ContestantOrderByWithRelationInput | ContestantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contestants.
     */
    cursor?: ContestantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contestants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contestants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contestants.
     */
    distinct?: ContestantScalarFieldEnum | ContestantScalarFieldEnum[]
  }

  /**
   * Contestant findMany
   */
  export type ContestantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contestant
     */
    select?: ContestantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contestant
     */
    omit?: ContestantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestantInclude<ExtArgs> | null
    /**
     * Filter, which Contestants to fetch.
     */
    where?: ContestantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contestants to fetch.
     */
    orderBy?: ContestantOrderByWithRelationInput | ContestantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contestants.
     */
    cursor?: ContestantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contestants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contestants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contestants.
     */
    distinct?: ContestantScalarFieldEnum | ContestantScalarFieldEnum[]
  }

  /**
   * Contestant create
   */
  export type ContestantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contestant
     */
    select?: ContestantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contestant
     */
    omit?: ContestantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestantInclude<ExtArgs> | null
    /**
     * The data needed to create a Contestant.
     */
    data: XOR<ContestantCreateInput, ContestantUncheckedCreateInput>
  }

  /**
   * Contestant createMany
   */
  export type ContestantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contestants.
     */
    data: ContestantCreateManyInput | ContestantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contestant createManyAndReturn
   */
  export type ContestantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contestant
     */
    select?: ContestantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contestant
     */
    omit?: ContestantOmit<ExtArgs> | null
    /**
     * The data used to create many Contestants.
     */
    data: ContestantCreateManyInput | ContestantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contestant update
   */
  export type ContestantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contestant
     */
    select?: ContestantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contestant
     */
    omit?: ContestantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestantInclude<ExtArgs> | null
    /**
     * The data needed to update a Contestant.
     */
    data: XOR<ContestantUpdateInput, ContestantUncheckedUpdateInput>
    /**
     * Choose, which Contestant to update.
     */
    where: ContestantWhereUniqueInput
  }

  /**
   * Contestant updateMany
   */
  export type ContestantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contestants.
     */
    data: XOR<ContestantUpdateManyMutationInput, ContestantUncheckedUpdateManyInput>
    /**
     * Filter which Contestants to update
     */
    where?: ContestantWhereInput
    /**
     * Limit how many Contestants to update.
     */
    limit?: number
  }

  /**
   * Contestant updateManyAndReturn
   */
  export type ContestantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contestant
     */
    select?: ContestantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contestant
     */
    omit?: ContestantOmit<ExtArgs> | null
    /**
     * The data used to update Contestants.
     */
    data: XOR<ContestantUpdateManyMutationInput, ContestantUncheckedUpdateManyInput>
    /**
     * Filter which Contestants to update
     */
    where?: ContestantWhereInput
    /**
     * Limit how many Contestants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contestant upsert
   */
  export type ContestantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contestant
     */
    select?: ContestantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contestant
     */
    omit?: ContestantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestantInclude<ExtArgs> | null
    /**
     * The filter to search for the Contestant to update in case it exists.
     */
    where: ContestantWhereUniqueInput
    /**
     * In case the Contestant found by the `where` argument doesn't exist, create a new Contestant with this data.
     */
    create: XOR<ContestantCreateInput, ContestantUncheckedCreateInput>
    /**
     * In case the Contestant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContestantUpdateInput, ContestantUncheckedUpdateInput>
  }

  /**
   * Contestant delete
   */
  export type ContestantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contestant
     */
    select?: ContestantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contestant
     */
    omit?: ContestantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestantInclude<ExtArgs> | null
    /**
     * Filter which Contestant to delete.
     */
    where: ContestantWhereUniqueInput
  }

  /**
   * Contestant deleteMany
   */
  export type ContestantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contestants to delete
     */
    where?: ContestantWhereInput
    /**
     * Limit how many Contestants to delete.
     */
    limit?: number
  }

  /**
   * Contestant.images
   */
  export type Contestant$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestantImage
     */
    select?: ContestantImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestantImage
     */
    omit?: ContestantImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestantImageInclude<ExtArgs> | null
    where?: ContestantImageWhereInput
    orderBy?: ContestantImageOrderByWithRelationInput | ContestantImageOrderByWithRelationInput[]
    cursor?: ContestantImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContestantImageScalarFieldEnum | ContestantImageScalarFieldEnum[]
  }

  /**
   * Contestant.entries
   */
  export type Contestant$entriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionEntry
     */
    select?: CompetitionEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionEntry
     */
    omit?: CompetitionEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionEntryInclude<ExtArgs> | null
    where?: CompetitionEntryWhereInput
    orderBy?: CompetitionEntryOrderByWithRelationInput | CompetitionEntryOrderByWithRelationInput[]
    cursor?: CompetitionEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompetitionEntryScalarFieldEnum | CompetitionEntryScalarFieldEnum[]
  }

  /**
   * Contestant without action
   */
  export type ContestantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contestant
     */
    select?: ContestantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contestant
     */
    omit?: ContestantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestantInclude<ExtArgs> | null
  }


  /**
   * Model ContestantImage
   */

  export type AggregateContestantImage = {
    _count: ContestantImageCountAggregateOutputType | null
    _min: ContestantImageMinAggregateOutputType | null
    _max: ContestantImageMaxAggregateOutputType | null
  }

  export type ContestantImageMinAggregateOutputType = {
    id: string | null
    contestantId: string | null
    imageUrl: string | null
    imageType: $Enums.ImageType | null
    createdAt: Date | null
  }

  export type ContestantImageMaxAggregateOutputType = {
    id: string | null
    contestantId: string | null
    imageUrl: string | null
    imageType: $Enums.ImageType | null
    createdAt: Date | null
  }

  export type ContestantImageCountAggregateOutputType = {
    id: number
    contestantId: number
    imageUrl: number
    imageType: number
    createdAt: number
    _all: number
  }


  export type ContestantImageMinAggregateInputType = {
    id?: true
    contestantId?: true
    imageUrl?: true
    imageType?: true
    createdAt?: true
  }

  export type ContestantImageMaxAggregateInputType = {
    id?: true
    contestantId?: true
    imageUrl?: true
    imageType?: true
    createdAt?: true
  }

  export type ContestantImageCountAggregateInputType = {
    id?: true
    contestantId?: true
    imageUrl?: true
    imageType?: true
    createdAt?: true
    _all?: true
  }

  export type ContestantImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContestantImage to aggregate.
     */
    where?: ContestantImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContestantImages to fetch.
     */
    orderBy?: ContestantImageOrderByWithRelationInput | ContestantImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContestantImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContestantImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContestantImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContestantImages
    **/
    _count?: true | ContestantImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContestantImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContestantImageMaxAggregateInputType
  }

  export type GetContestantImageAggregateType<T extends ContestantImageAggregateArgs> = {
        [P in keyof T & keyof AggregateContestantImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContestantImage[P]>
      : GetScalarType<T[P], AggregateContestantImage[P]>
  }




  export type ContestantImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContestantImageWhereInput
    orderBy?: ContestantImageOrderByWithAggregationInput | ContestantImageOrderByWithAggregationInput[]
    by: ContestantImageScalarFieldEnum[] | ContestantImageScalarFieldEnum
    having?: ContestantImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContestantImageCountAggregateInputType | true
    _min?: ContestantImageMinAggregateInputType
    _max?: ContestantImageMaxAggregateInputType
  }

  export type ContestantImageGroupByOutputType = {
    id: string
    contestantId: string
    imageUrl: string
    imageType: $Enums.ImageType
    createdAt: Date
    _count: ContestantImageCountAggregateOutputType | null
    _min: ContestantImageMinAggregateOutputType | null
    _max: ContestantImageMaxAggregateOutputType | null
  }

  type GetContestantImageGroupByPayload<T extends ContestantImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContestantImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContestantImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContestantImageGroupByOutputType[P]>
            : GetScalarType<T[P], ContestantImageGroupByOutputType[P]>
        }
      >
    >


  export type ContestantImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contestantId?: boolean
    imageUrl?: boolean
    imageType?: boolean
    createdAt?: boolean
    contestant?: boolean | ContestantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contestantImage"]>

  export type ContestantImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contestantId?: boolean
    imageUrl?: boolean
    imageType?: boolean
    createdAt?: boolean
    contestant?: boolean | ContestantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contestantImage"]>

  export type ContestantImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contestantId?: boolean
    imageUrl?: boolean
    imageType?: boolean
    createdAt?: boolean
    contestant?: boolean | ContestantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contestantImage"]>

  export type ContestantImageSelectScalar = {
    id?: boolean
    contestantId?: boolean
    imageUrl?: boolean
    imageType?: boolean
    createdAt?: boolean
  }

  export type ContestantImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contestantId" | "imageUrl" | "imageType" | "createdAt", ExtArgs["result"]["contestantImage"]>
  export type ContestantImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contestant?: boolean | ContestantDefaultArgs<ExtArgs>
  }
  export type ContestantImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contestant?: boolean | ContestantDefaultArgs<ExtArgs>
  }
  export type ContestantImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contestant?: boolean | ContestantDefaultArgs<ExtArgs>
  }

  export type $ContestantImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContestantImage"
    objects: {
      contestant: Prisma.$ContestantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      contestantId: string
      imageUrl: string
      imageType: $Enums.ImageType
      createdAt: Date
    }, ExtArgs["result"]["contestantImage"]>
    composites: {}
  }

  type ContestantImageGetPayload<S extends boolean | null | undefined | ContestantImageDefaultArgs> = $Result.GetResult<Prisma.$ContestantImagePayload, S>

  type ContestantImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContestantImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContestantImageCountAggregateInputType | true
    }

  export interface ContestantImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContestantImage'], meta: { name: 'ContestantImage' } }
    /**
     * Find zero or one ContestantImage that matches the filter.
     * @param {ContestantImageFindUniqueArgs} args - Arguments to find a ContestantImage
     * @example
     * // Get one ContestantImage
     * const contestantImage = await prisma.contestantImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContestantImageFindUniqueArgs>(args: SelectSubset<T, ContestantImageFindUniqueArgs<ExtArgs>>): Prisma__ContestantImageClient<$Result.GetResult<Prisma.$ContestantImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContestantImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContestantImageFindUniqueOrThrowArgs} args - Arguments to find a ContestantImage
     * @example
     * // Get one ContestantImage
     * const contestantImage = await prisma.contestantImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContestantImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ContestantImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContestantImageClient<$Result.GetResult<Prisma.$ContestantImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContestantImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestantImageFindFirstArgs} args - Arguments to find a ContestantImage
     * @example
     * // Get one ContestantImage
     * const contestantImage = await prisma.contestantImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContestantImageFindFirstArgs>(args?: SelectSubset<T, ContestantImageFindFirstArgs<ExtArgs>>): Prisma__ContestantImageClient<$Result.GetResult<Prisma.$ContestantImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContestantImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestantImageFindFirstOrThrowArgs} args - Arguments to find a ContestantImage
     * @example
     * // Get one ContestantImage
     * const contestantImage = await prisma.contestantImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContestantImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ContestantImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContestantImageClient<$Result.GetResult<Prisma.$ContestantImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContestantImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestantImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContestantImages
     * const contestantImages = await prisma.contestantImage.findMany()
     * 
     * // Get first 10 ContestantImages
     * const contestantImages = await prisma.contestantImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contestantImageWithIdOnly = await prisma.contestantImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContestantImageFindManyArgs>(args?: SelectSubset<T, ContestantImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContestantImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContestantImage.
     * @param {ContestantImageCreateArgs} args - Arguments to create a ContestantImage.
     * @example
     * // Create one ContestantImage
     * const ContestantImage = await prisma.contestantImage.create({
     *   data: {
     *     // ... data to create a ContestantImage
     *   }
     * })
     * 
     */
    create<T extends ContestantImageCreateArgs>(args: SelectSubset<T, ContestantImageCreateArgs<ExtArgs>>): Prisma__ContestantImageClient<$Result.GetResult<Prisma.$ContestantImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContestantImages.
     * @param {ContestantImageCreateManyArgs} args - Arguments to create many ContestantImages.
     * @example
     * // Create many ContestantImages
     * const contestantImage = await prisma.contestantImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContestantImageCreateManyArgs>(args?: SelectSubset<T, ContestantImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContestantImages and returns the data saved in the database.
     * @param {ContestantImageCreateManyAndReturnArgs} args - Arguments to create many ContestantImages.
     * @example
     * // Create many ContestantImages
     * const contestantImage = await prisma.contestantImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContestantImages and only return the `id`
     * const contestantImageWithIdOnly = await prisma.contestantImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContestantImageCreateManyAndReturnArgs>(args?: SelectSubset<T, ContestantImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContestantImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContestantImage.
     * @param {ContestantImageDeleteArgs} args - Arguments to delete one ContestantImage.
     * @example
     * // Delete one ContestantImage
     * const ContestantImage = await prisma.contestantImage.delete({
     *   where: {
     *     // ... filter to delete one ContestantImage
     *   }
     * })
     * 
     */
    delete<T extends ContestantImageDeleteArgs>(args: SelectSubset<T, ContestantImageDeleteArgs<ExtArgs>>): Prisma__ContestantImageClient<$Result.GetResult<Prisma.$ContestantImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContestantImage.
     * @param {ContestantImageUpdateArgs} args - Arguments to update one ContestantImage.
     * @example
     * // Update one ContestantImage
     * const contestantImage = await prisma.contestantImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContestantImageUpdateArgs>(args: SelectSubset<T, ContestantImageUpdateArgs<ExtArgs>>): Prisma__ContestantImageClient<$Result.GetResult<Prisma.$ContestantImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContestantImages.
     * @param {ContestantImageDeleteManyArgs} args - Arguments to filter ContestantImages to delete.
     * @example
     * // Delete a few ContestantImages
     * const { count } = await prisma.contestantImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContestantImageDeleteManyArgs>(args?: SelectSubset<T, ContestantImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContestantImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestantImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContestantImages
     * const contestantImage = await prisma.contestantImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContestantImageUpdateManyArgs>(args: SelectSubset<T, ContestantImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContestantImages and returns the data updated in the database.
     * @param {ContestantImageUpdateManyAndReturnArgs} args - Arguments to update many ContestantImages.
     * @example
     * // Update many ContestantImages
     * const contestantImage = await prisma.contestantImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContestantImages and only return the `id`
     * const contestantImageWithIdOnly = await prisma.contestantImage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContestantImageUpdateManyAndReturnArgs>(args: SelectSubset<T, ContestantImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContestantImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContestantImage.
     * @param {ContestantImageUpsertArgs} args - Arguments to update or create a ContestantImage.
     * @example
     * // Update or create a ContestantImage
     * const contestantImage = await prisma.contestantImage.upsert({
     *   create: {
     *     // ... data to create a ContestantImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContestantImage we want to update
     *   }
     * })
     */
    upsert<T extends ContestantImageUpsertArgs>(args: SelectSubset<T, ContestantImageUpsertArgs<ExtArgs>>): Prisma__ContestantImageClient<$Result.GetResult<Prisma.$ContestantImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContestantImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestantImageCountArgs} args - Arguments to filter ContestantImages to count.
     * @example
     * // Count the number of ContestantImages
     * const count = await prisma.contestantImage.count({
     *   where: {
     *     // ... the filter for the ContestantImages we want to count
     *   }
     * })
    **/
    count<T extends ContestantImageCountArgs>(
      args?: Subset<T, ContestantImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContestantImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContestantImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestantImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContestantImageAggregateArgs>(args: Subset<T, ContestantImageAggregateArgs>): Prisma.PrismaPromise<GetContestantImageAggregateType<T>>

    /**
     * Group by ContestantImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestantImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContestantImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContestantImageGroupByArgs['orderBy'] }
        : { orderBy?: ContestantImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContestantImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContestantImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContestantImage model
   */
  readonly fields: ContestantImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContestantImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContestantImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contestant<T extends ContestantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContestantDefaultArgs<ExtArgs>>): Prisma__ContestantClient<$Result.GetResult<Prisma.$ContestantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContestantImage model
   */
  interface ContestantImageFieldRefs {
    readonly id: FieldRef<"ContestantImage", 'String'>
    readonly contestantId: FieldRef<"ContestantImage", 'String'>
    readonly imageUrl: FieldRef<"ContestantImage", 'String'>
    readonly imageType: FieldRef<"ContestantImage", 'ImageType'>
    readonly createdAt: FieldRef<"ContestantImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContestantImage findUnique
   */
  export type ContestantImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestantImage
     */
    select?: ContestantImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestantImage
     */
    omit?: ContestantImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestantImageInclude<ExtArgs> | null
    /**
     * Filter, which ContestantImage to fetch.
     */
    where: ContestantImageWhereUniqueInput
  }

  /**
   * ContestantImage findUniqueOrThrow
   */
  export type ContestantImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestantImage
     */
    select?: ContestantImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestantImage
     */
    omit?: ContestantImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestantImageInclude<ExtArgs> | null
    /**
     * Filter, which ContestantImage to fetch.
     */
    where: ContestantImageWhereUniqueInput
  }

  /**
   * ContestantImage findFirst
   */
  export type ContestantImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestantImage
     */
    select?: ContestantImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestantImage
     */
    omit?: ContestantImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestantImageInclude<ExtArgs> | null
    /**
     * Filter, which ContestantImage to fetch.
     */
    where?: ContestantImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContestantImages to fetch.
     */
    orderBy?: ContestantImageOrderByWithRelationInput | ContestantImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContestantImages.
     */
    cursor?: ContestantImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContestantImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContestantImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContestantImages.
     */
    distinct?: ContestantImageScalarFieldEnum | ContestantImageScalarFieldEnum[]
  }

  /**
   * ContestantImage findFirstOrThrow
   */
  export type ContestantImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestantImage
     */
    select?: ContestantImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestantImage
     */
    omit?: ContestantImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestantImageInclude<ExtArgs> | null
    /**
     * Filter, which ContestantImage to fetch.
     */
    where?: ContestantImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContestantImages to fetch.
     */
    orderBy?: ContestantImageOrderByWithRelationInput | ContestantImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContestantImages.
     */
    cursor?: ContestantImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContestantImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContestantImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContestantImages.
     */
    distinct?: ContestantImageScalarFieldEnum | ContestantImageScalarFieldEnum[]
  }

  /**
   * ContestantImage findMany
   */
  export type ContestantImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestantImage
     */
    select?: ContestantImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestantImage
     */
    omit?: ContestantImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestantImageInclude<ExtArgs> | null
    /**
     * Filter, which ContestantImages to fetch.
     */
    where?: ContestantImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContestantImages to fetch.
     */
    orderBy?: ContestantImageOrderByWithRelationInput | ContestantImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContestantImages.
     */
    cursor?: ContestantImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContestantImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContestantImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContestantImages.
     */
    distinct?: ContestantImageScalarFieldEnum | ContestantImageScalarFieldEnum[]
  }

  /**
   * ContestantImage create
   */
  export type ContestantImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestantImage
     */
    select?: ContestantImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestantImage
     */
    omit?: ContestantImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestantImageInclude<ExtArgs> | null
    /**
     * The data needed to create a ContestantImage.
     */
    data: XOR<ContestantImageCreateInput, ContestantImageUncheckedCreateInput>
  }

  /**
   * ContestantImage createMany
   */
  export type ContestantImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContestantImages.
     */
    data: ContestantImageCreateManyInput | ContestantImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContestantImage createManyAndReturn
   */
  export type ContestantImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestantImage
     */
    select?: ContestantImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContestantImage
     */
    omit?: ContestantImageOmit<ExtArgs> | null
    /**
     * The data used to create many ContestantImages.
     */
    data: ContestantImageCreateManyInput | ContestantImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestantImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContestantImage update
   */
  export type ContestantImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestantImage
     */
    select?: ContestantImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestantImage
     */
    omit?: ContestantImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestantImageInclude<ExtArgs> | null
    /**
     * The data needed to update a ContestantImage.
     */
    data: XOR<ContestantImageUpdateInput, ContestantImageUncheckedUpdateInput>
    /**
     * Choose, which ContestantImage to update.
     */
    where: ContestantImageWhereUniqueInput
  }

  /**
   * ContestantImage updateMany
   */
  export type ContestantImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContestantImages.
     */
    data: XOR<ContestantImageUpdateManyMutationInput, ContestantImageUncheckedUpdateManyInput>
    /**
     * Filter which ContestantImages to update
     */
    where?: ContestantImageWhereInput
    /**
     * Limit how many ContestantImages to update.
     */
    limit?: number
  }

  /**
   * ContestantImage updateManyAndReturn
   */
  export type ContestantImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestantImage
     */
    select?: ContestantImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContestantImage
     */
    omit?: ContestantImageOmit<ExtArgs> | null
    /**
     * The data used to update ContestantImages.
     */
    data: XOR<ContestantImageUpdateManyMutationInput, ContestantImageUncheckedUpdateManyInput>
    /**
     * Filter which ContestantImages to update
     */
    where?: ContestantImageWhereInput
    /**
     * Limit how many ContestantImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestantImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContestantImage upsert
   */
  export type ContestantImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestantImage
     */
    select?: ContestantImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestantImage
     */
    omit?: ContestantImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestantImageInclude<ExtArgs> | null
    /**
     * The filter to search for the ContestantImage to update in case it exists.
     */
    where: ContestantImageWhereUniqueInput
    /**
     * In case the ContestantImage found by the `where` argument doesn't exist, create a new ContestantImage with this data.
     */
    create: XOR<ContestantImageCreateInput, ContestantImageUncheckedCreateInput>
    /**
     * In case the ContestantImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContestantImageUpdateInput, ContestantImageUncheckedUpdateInput>
  }

  /**
   * ContestantImage delete
   */
  export type ContestantImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestantImage
     */
    select?: ContestantImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestantImage
     */
    omit?: ContestantImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestantImageInclude<ExtArgs> | null
    /**
     * Filter which ContestantImage to delete.
     */
    where: ContestantImageWhereUniqueInput
  }

  /**
   * ContestantImage deleteMany
   */
  export type ContestantImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContestantImages to delete
     */
    where?: ContestantImageWhereInput
    /**
     * Limit how many ContestantImages to delete.
     */
    limit?: number
  }

  /**
   * ContestantImage without action
   */
  export type ContestantImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestantImage
     */
    select?: ContestantImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContestantImage
     */
    omit?: ContestantImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestantImageInclude<ExtArgs> | null
  }


  /**
   * Model Competition
   */

  export type AggregateCompetition = {
    _count: CompetitionCountAggregateOutputType | null
    _min: CompetitionMinAggregateOutputType | null
    _max: CompetitionMaxAggregateOutputType | null
  }

  export type CompetitionMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    competitionType: $Enums.CompetitionType | null
    startDate: Date | null
    endDate: Date | null
    status: $Enums.CompetitionStatus | null
    createdAt: Date | null
  }

  export type CompetitionMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    competitionType: $Enums.CompetitionType | null
    startDate: Date | null
    endDate: Date | null
    status: $Enums.CompetitionStatus | null
    createdAt: Date | null
  }

  export type CompetitionCountAggregateOutputType = {
    id: number
    title: number
    description: number
    competitionType: number
    startDate: number
    endDate: number
    status: number
    createdAt: number
    _all: number
  }


  export type CompetitionMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    competitionType?: true
    startDate?: true
    endDate?: true
    status?: true
    createdAt?: true
  }

  export type CompetitionMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    competitionType?: true
    startDate?: true
    endDate?: true
    status?: true
    createdAt?: true
  }

  export type CompetitionCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    competitionType?: true
    startDate?: true
    endDate?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type CompetitionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Competition to aggregate.
     */
    where?: CompetitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competitions to fetch.
     */
    orderBy?: CompetitionOrderByWithRelationInput | CompetitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompetitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Competitions
    **/
    _count?: true | CompetitionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompetitionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompetitionMaxAggregateInputType
  }

  export type GetCompetitionAggregateType<T extends CompetitionAggregateArgs> = {
        [P in keyof T & keyof AggregateCompetition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompetition[P]>
      : GetScalarType<T[P], AggregateCompetition[P]>
  }




  export type CompetitionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompetitionWhereInput
    orderBy?: CompetitionOrderByWithAggregationInput | CompetitionOrderByWithAggregationInput[]
    by: CompetitionScalarFieldEnum[] | CompetitionScalarFieldEnum
    having?: CompetitionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompetitionCountAggregateInputType | true
    _min?: CompetitionMinAggregateInputType
    _max?: CompetitionMaxAggregateInputType
  }

  export type CompetitionGroupByOutputType = {
    id: string
    title: string
    description: string
    competitionType: $Enums.CompetitionType
    startDate: Date
    endDate: Date
    status: $Enums.CompetitionStatus
    createdAt: Date
    _count: CompetitionCountAggregateOutputType | null
    _min: CompetitionMinAggregateOutputType | null
    _max: CompetitionMaxAggregateOutputType | null
  }

  type GetCompetitionGroupByPayload<T extends CompetitionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompetitionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompetitionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompetitionGroupByOutputType[P]>
            : GetScalarType<T[P], CompetitionGroupByOutputType[P]>
        }
      >
    >


  export type CompetitionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    competitionType?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    createdAt?: boolean
    entries?: boolean | Competition$entriesArgs<ExtArgs>
    votes?: boolean | Competition$votesArgs<ExtArgs>
    _count?: boolean | CompetitionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["competition"]>

  export type CompetitionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    competitionType?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["competition"]>

  export type CompetitionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    competitionType?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["competition"]>

  export type CompetitionSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    competitionType?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type CompetitionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "competitionType" | "startDate" | "endDate" | "status" | "createdAt", ExtArgs["result"]["competition"]>
  export type CompetitionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entries?: boolean | Competition$entriesArgs<ExtArgs>
    votes?: boolean | Competition$votesArgs<ExtArgs>
    _count?: boolean | CompetitionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompetitionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CompetitionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CompetitionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Competition"
    objects: {
      entries: Prisma.$CompetitionEntryPayload<ExtArgs>[]
      votes: Prisma.$VotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      competitionType: $Enums.CompetitionType
      startDate: Date
      endDate: Date
      status: $Enums.CompetitionStatus
      createdAt: Date
    }, ExtArgs["result"]["competition"]>
    composites: {}
  }

  type CompetitionGetPayload<S extends boolean | null | undefined | CompetitionDefaultArgs> = $Result.GetResult<Prisma.$CompetitionPayload, S>

  type CompetitionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompetitionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompetitionCountAggregateInputType | true
    }

  export interface CompetitionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Competition'], meta: { name: 'Competition' } }
    /**
     * Find zero or one Competition that matches the filter.
     * @param {CompetitionFindUniqueArgs} args - Arguments to find a Competition
     * @example
     * // Get one Competition
     * const competition = await prisma.competition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompetitionFindUniqueArgs>(args: SelectSubset<T, CompetitionFindUniqueArgs<ExtArgs>>): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Competition that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompetitionFindUniqueOrThrowArgs} args - Arguments to find a Competition
     * @example
     * // Get one Competition
     * const competition = await prisma.competition.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompetitionFindUniqueOrThrowArgs>(args: SelectSubset<T, CompetitionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Competition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionFindFirstArgs} args - Arguments to find a Competition
     * @example
     * // Get one Competition
     * const competition = await prisma.competition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompetitionFindFirstArgs>(args?: SelectSubset<T, CompetitionFindFirstArgs<ExtArgs>>): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Competition that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionFindFirstOrThrowArgs} args - Arguments to find a Competition
     * @example
     * // Get one Competition
     * const competition = await prisma.competition.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompetitionFindFirstOrThrowArgs>(args?: SelectSubset<T, CompetitionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Competitions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Competitions
     * const competitions = await prisma.competition.findMany()
     * 
     * // Get first 10 Competitions
     * const competitions = await prisma.competition.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const competitionWithIdOnly = await prisma.competition.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompetitionFindManyArgs>(args?: SelectSubset<T, CompetitionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Competition.
     * @param {CompetitionCreateArgs} args - Arguments to create a Competition.
     * @example
     * // Create one Competition
     * const Competition = await prisma.competition.create({
     *   data: {
     *     // ... data to create a Competition
     *   }
     * })
     * 
     */
    create<T extends CompetitionCreateArgs>(args: SelectSubset<T, CompetitionCreateArgs<ExtArgs>>): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Competitions.
     * @param {CompetitionCreateManyArgs} args - Arguments to create many Competitions.
     * @example
     * // Create many Competitions
     * const competition = await prisma.competition.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompetitionCreateManyArgs>(args?: SelectSubset<T, CompetitionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Competitions and returns the data saved in the database.
     * @param {CompetitionCreateManyAndReturnArgs} args - Arguments to create many Competitions.
     * @example
     * // Create many Competitions
     * const competition = await prisma.competition.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Competitions and only return the `id`
     * const competitionWithIdOnly = await prisma.competition.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompetitionCreateManyAndReturnArgs>(args?: SelectSubset<T, CompetitionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Competition.
     * @param {CompetitionDeleteArgs} args - Arguments to delete one Competition.
     * @example
     * // Delete one Competition
     * const Competition = await prisma.competition.delete({
     *   where: {
     *     // ... filter to delete one Competition
     *   }
     * })
     * 
     */
    delete<T extends CompetitionDeleteArgs>(args: SelectSubset<T, CompetitionDeleteArgs<ExtArgs>>): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Competition.
     * @param {CompetitionUpdateArgs} args - Arguments to update one Competition.
     * @example
     * // Update one Competition
     * const competition = await prisma.competition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompetitionUpdateArgs>(args: SelectSubset<T, CompetitionUpdateArgs<ExtArgs>>): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Competitions.
     * @param {CompetitionDeleteManyArgs} args - Arguments to filter Competitions to delete.
     * @example
     * // Delete a few Competitions
     * const { count } = await prisma.competition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompetitionDeleteManyArgs>(args?: SelectSubset<T, CompetitionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Competitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Competitions
     * const competition = await prisma.competition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompetitionUpdateManyArgs>(args: SelectSubset<T, CompetitionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Competitions and returns the data updated in the database.
     * @param {CompetitionUpdateManyAndReturnArgs} args - Arguments to update many Competitions.
     * @example
     * // Update many Competitions
     * const competition = await prisma.competition.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Competitions and only return the `id`
     * const competitionWithIdOnly = await prisma.competition.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompetitionUpdateManyAndReturnArgs>(args: SelectSubset<T, CompetitionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Competition.
     * @param {CompetitionUpsertArgs} args - Arguments to update or create a Competition.
     * @example
     * // Update or create a Competition
     * const competition = await prisma.competition.upsert({
     *   create: {
     *     // ... data to create a Competition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Competition we want to update
     *   }
     * })
     */
    upsert<T extends CompetitionUpsertArgs>(args: SelectSubset<T, CompetitionUpsertArgs<ExtArgs>>): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Competitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionCountArgs} args - Arguments to filter Competitions to count.
     * @example
     * // Count the number of Competitions
     * const count = await prisma.competition.count({
     *   where: {
     *     // ... the filter for the Competitions we want to count
     *   }
     * })
    **/
    count<T extends CompetitionCountArgs>(
      args?: Subset<T, CompetitionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompetitionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Competition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompetitionAggregateArgs>(args: Subset<T, CompetitionAggregateArgs>): Prisma.PrismaPromise<GetCompetitionAggregateType<T>>

    /**
     * Group by Competition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompetitionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompetitionGroupByArgs['orderBy'] }
        : { orderBy?: CompetitionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompetitionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompetitionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Competition model
   */
  readonly fields: CompetitionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Competition.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompetitionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    entries<T extends Competition$entriesArgs<ExtArgs> = {}>(args?: Subset<T, Competition$entriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitionEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    votes<T extends Competition$votesArgs<ExtArgs> = {}>(args?: Subset<T, Competition$votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Competition model
   */
  interface CompetitionFieldRefs {
    readonly id: FieldRef<"Competition", 'String'>
    readonly title: FieldRef<"Competition", 'String'>
    readonly description: FieldRef<"Competition", 'String'>
    readonly competitionType: FieldRef<"Competition", 'CompetitionType'>
    readonly startDate: FieldRef<"Competition", 'DateTime'>
    readonly endDate: FieldRef<"Competition", 'DateTime'>
    readonly status: FieldRef<"Competition", 'CompetitionStatus'>
    readonly createdAt: FieldRef<"Competition", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Competition findUnique
   */
  export type CompetitionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionInclude<ExtArgs> | null
    /**
     * Filter, which Competition to fetch.
     */
    where: CompetitionWhereUniqueInput
  }

  /**
   * Competition findUniqueOrThrow
   */
  export type CompetitionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionInclude<ExtArgs> | null
    /**
     * Filter, which Competition to fetch.
     */
    where: CompetitionWhereUniqueInput
  }

  /**
   * Competition findFirst
   */
  export type CompetitionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionInclude<ExtArgs> | null
    /**
     * Filter, which Competition to fetch.
     */
    where?: CompetitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competitions to fetch.
     */
    orderBy?: CompetitionOrderByWithRelationInput | CompetitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Competitions.
     */
    cursor?: CompetitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Competitions.
     */
    distinct?: CompetitionScalarFieldEnum | CompetitionScalarFieldEnum[]
  }

  /**
   * Competition findFirstOrThrow
   */
  export type CompetitionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionInclude<ExtArgs> | null
    /**
     * Filter, which Competition to fetch.
     */
    where?: CompetitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competitions to fetch.
     */
    orderBy?: CompetitionOrderByWithRelationInput | CompetitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Competitions.
     */
    cursor?: CompetitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Competitions.
     */
    distinct?: CompetitionScalarFieldEnum | CompetitionScalarFieldEnum[]
  }

  /**
   * Competition findMany
   */
  export type CompetitionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionInclude<ExtArgs> | null
    /**
     * Filter, which Competitions to fetch.
     */
    where?: CompetitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competitions to fetch.
     */
    orderBy?: CompetitionOrderByWithRelationInput | CompetitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Competitions.
     */
    cursor?: CompetitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Competitions.
     */
    distinct?: CompetitionScalarFieldEnum | CompetitionScalarFieldEnum[]
  }

  /**
   * Competition create
   */
  export type CompetitionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionInclude<ExtArgs> | null
    /**
     * The data needed to create a Competition.
     */
    data: XOR<CompetitionCreateInput, CompetitionUncheckedCreateInput>
  }

  /**
   * Competition createMany
   */
  export type CompetitionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Competitions.
     */
    data: CompetitionCreateManyInput | CompetitionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Competition createManyAndReturn
   */
  export type CompetitionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * The data used to create many Competitions.
     */
    data: CompetitionCreateManyInput | CompetitionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Competition update
   */
  export type CompetitionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionInclude<ExtArgs> | null
    /**
     * The data needed to update a Competition.
     */
    data: XOR<CompetitionUpdateInput, CompetitionUncheckedUpdateInput>
    /**
     * Choose, which Competition to update.
     */
    where: CompetitionWhereUniqueInput
  }

  /**
   * Competition updateMany
   */
  export type CompetitionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Competitions.
     */
    data: XOR<CompetitionUpdateManyMutationInput, CompetitionUncheckedUpdateManyInput>
    /**
     * Filter which Competitions to update
     */
    where?: CompetitionWhereInput
    /**
     * Limit how many Competitions to update.
     */
    limit?: number
  }

  /**
   * Competition updateManyAndReturn
   */
  export type CompetitionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * The data used to update Competitions.
     */
    data: XOR<CompetitionUpdateManyMutationInput, CompetitionUncheckedUpdateManyInput>
    /**
     * Filter which Competitions to update
     */
    where?: CompetitionWhereInput
    /**
     * Limit how many Competitions to update.
     */
    limit?: number
  }

  /**
   * Competition upsert
   */
  export type CompetitionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionInclude<ExtArgs> | null
    /**
     * The filter to search for the Competition to update in case it exists.
     */
    where: CompetitionWhereUniqueInput
    /**
     * In case the Competition found by the `where` argument doesn't exist, create a new Competition with this data.
     */
    create: XOR<CompetitionCreateInput, CompetitionUncheckedCreateInput>
    /**
     * In case the Competition was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompetitionUpdateInput, CompetitionUncheckedUpdateInput>
  }

  /**
   * Competition delete
   */
  export type CompetitionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionInclude<ExtArgs> | null
    /**
     * Filter which Competition to delete.
     */
    where: CompetitionWhereUniqueInput
  }

  /**
   * Competition deleteMany
   */
  export type CompetitionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Competitions to delete
     */
    where?: CompetitionWhereInput
    /**
     * Limit how many Competitions to delete.
     */
    limit?: number
  }

  /**
   * Competition.entries
   */
  export type Competition$entriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionEntry
     */
    select?: CompetitionEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionEntry
     */
    omit?: CompetitionEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionEntryInclude<ExtArgs> | null
    where?: CompetitionEntryWhereInput
    orderBy?: CompetitionEntryOrderByWithRelationInput | CompetitionEntryOrderByWithRelationInput[]
    cursor?: CompetitionEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompetitionEntryScalarFieldEnum | CompetitionEntryScalarFieldEnum[]
  }

  /**
   * Competition.votes
   */
  export type Competition$votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    where?: VoteWhereInput
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    cursor?: VoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Competition without action
   */
  export type CompetitionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionInclude<ExtArgs> | null
  }


  /**
   * Model CompetitionEntry
   */

  export type AggregateCompetitionEntry = {
    _count: CompetitionEntryCountAggregateOutputType | null
    _avg: CompetitionEntryAvgAggregateOutputType | null
    _sum: CompetitionEntrySumAggregateOutputType | null
    _min: CompetitionEntryMinAggregateOutputType | null
    _max: CompetitionEntryMaxAggregateOutputType | null
  }

  export type CompetitionEntryAvgAggregateOutputType = {
    overallScore: Decimal | null
    voteCount: number | null
    rank: number | null
  }

  export type CompetitionEntrySumAggregateOutputType = {
    overallScore: Decimal | null
    voteCount: number | null
    rank: number | null
  }

  export type CompetitionEntryMinAggregateOutputType = {
    id: string | null
    competitionId: string | null
    contestantId: string | null
    status: $Enums.EntryStatus | null
    overallScore: Decimal | null
    voteCount: number | null
    rank: number | null
    createdAt: Date | null
  }

  export type CompetitionEntryMaxAggregateOutputType = {
    id: string | null
    competitionId: string | null
    contestantId: string | null
    status: $Enums.EntryStatus | null
    overallScore: Decimal | null
    voteCount: number | null
    rank: number | null
    createdAt: Date | null
  }

  export type CompetitionEntryCountAggregateOutputType = {
    id: number
    competitionId: number
    contestantId: number
    status: number
    overallScore: number
    voteCount: number
    rank: number
    createdAt: number
    _all: number
  }


  export type CompetitionEntryAvgAggregateInputType = {
    overallScore?: true
    voteCount?: true
    rank?: true
  }

  export type CompetitionEntrySumAggregateInputType = {
    overallScore?: true
    voteCount?: true
    rank?: true
  }

  export type CompetitionEntryMinAggregateInputType = {
    id?: true
    competitionId?: true
    contestantId?: true
    status?: true
    overallScore?: true
    voteCount?: true
    rank?: true
    createdAt?: true
  }

  export type CompetitionEntryMaxAggregateInputType = {
    id?: true
    competitionId?: true
    contestantId?: true
    status?: true
    overallScore?: true
    voteCount?: true
    rank?: true
    createdAt?: true
  }

  export type CompetitionEntryCountAggregateInputType = {
    id?: true
    competitionId?: true
    contestantId?: true
    status?: true
    overallScore?: true
    voteCount?: true
    rank?: true
    createdAt?: true
    _all?: true
  }

  export type CompetitionEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompetitionEntry to aggregate.
     */
    where?: CompetitionEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompetitionEntries to fetch.
     */
    orderBy?: CompetitionEntryOrderByWithRelationInput | CompetitionEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompetitionEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompetitionEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompetitionEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompetitionEntries
    **/
    _count?: true | CompetitionEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompetitionEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompetitionEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompetitionEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompetitionEntryMaxAggregateInputType
  }

  export type GetCompetitionEntryAggregateType<T extends CompetitionEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateCompetitionEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompetitionEntry[P]>
      : GetScalarType<T[P], AggregateCompetitionEntry[P]>
  }




  export type CompetitionEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompetitionEntryWhereInput
    orderBy?: CompetitionEntryOrderByWithAggregationInput | CompetitionEntryOrderByWithAggregationInput[]
    by: CompetitionEntryScalarFieldEnum[] | CompetitionEntryScalarFieldEnum
    having?: CompetitionEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompetitionEntryCountAggregateInputType | true
    _avg?: CompetitionEntryAvgAggregateInputType
    _sum?: CompetitionEntrySumAggregateInputType
    _min?: CompetitionEntryMinAggregateInputType
    _max?: CompetitionEntryMaxAggregateInputType
  }

  export type CompetitionEntryGroupByOutputType = {
    id: string
    competitionId: string
    contestantId: string
    status: $Enums.EntryStatus
    overallScore: Decimal | null
    voteCount: number
    rank: number | null
    createdAt: Date
    _count: CompetitionEntryCountAggregateOutputType | null
    _avg: CompetitionEntryAvgAggregateOutputType | null
    _sum: CompetitionEntrySumAggregateOutputType | null
    _min: CompetitionEntryMinAggregateOutputType | null
    _max: CompetitionEntryMaxAggregateOutputType | null
  }

  type GetCompetitionEntryGroupByPayload<T extends CompetitionEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompetitionEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompetitionEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompetitionEntryGroupByOutputType[P]>
            : GetScalarType<T[P], CompetitionEntryGroupByOutputType[P]>
        }
      >
    >


  export type CompetitionEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    competitionId?: boolean
    contestantId?: boolean
    status?: boolean
    overallScore?: boolean
    voteCount?: boolean
    rank?: boolean
    createdAt?: boolean
    competition?: boolean | CompetitionDefaultArgs<ExtArgs>
    contestant?: boolean | ContestantDefaultArgs<ExtArgs>
    scoreResult?: boolean | CompetitionEntry$scoreResultArgs<ExtArgs>
  }, ExtArgs["result"]["competitionEntry"]>

  export type CompetitionEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    competitionId?: boolean
    contestantId?: boolean
    status?: boolean
    overallScore?: boolean
    voteCount?: boolean
    rank?: boolean
    createdAt?: boolean
    competition?: boolean | CompetitionDefaultArgs<ExtArgs>
    contestant?: boolean | ContestantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["competitionEntry"]>

  export type CompetitionEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    competitionId?: boolean
    contestantId?: boolean
    status?: boolean
    overallScore?: boolean
    voteCount?: boolean
    rank?: boolean
    createdAt?: boolean
    competition?: boolean | CompetitionDefaultArgs<ExtArgs>
    contestant?: boolean | ContestantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["competitionEntry"]>

  export type CompetitionEntrySelectScalar = {
    id?: boolean
    competitionId?: boolean
    contestantId?: boolean
    status?: boolean
    overallScore?: boolean
    voteCount?: boolean
    rank?: boolean
    createdAt?: boolean
  }

  export type CompetitionEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "competitionId" | "contestantId" | "status" | "overallScore" | "voteCount" | "rank" | "createdAt", ExtArgs["result"]["competitionEntry"]>
  export type CompetitionEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    competition?: boolean | CompetitionDefaultArgs<ExtArgs>
    contestant?: boolean | ContestantDefaultArgs<ExtArgs>
    scoreResult?: boolean | CompetitionEntry$scoreResultArgs<ExtArgs>
  }
  export type CompetitionEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    competition?: boolean | CompetitionDefaultArgs<ExtArgs>
    contestant?: boolean | ContestantDefaultArgs<ExtArgs>
  }
  export type CompetitionEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    competition?: boolean | CompetitionDefaultArgs<ExtArgs>
    contestant?: boolean | ContestantDefaultArgs<ExtArgs>
  }

  export type $CompetitionEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompetitionEntry"
    objects: {
      competition: Prisma.$CompetitionPayload<ExtArgs>
      contestant: Prisma.$ContestantPayload<ExtArgs>
      scoreResult: Prisma.$ScoreResultPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      competitionId: string
      contestantId: string
      status: $Enums.EntryStatus
      overallScore: Prisma.Decimal | null
      voteCount: number
      rank: number | null
      createdAt: Date
    }, ExtArgs["result"]["competitionEntry"]>
    composites: {}
  }

  type CompetitionEntryGetPayload<S extends boolean | null | undefined | CompetitionEntryDefaultArgs> = $Result.GetResult<Prisma.$CompetitionEntryPayload, S>

  type CompetitionEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompetitionEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompetitionEntryCountAggregateInputType | true
    }

  export interface CompetitionEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompetitionEntry'], meta: { name: 'CompetitionEntry' } }
    /**
     * Find zero or one CompetitionEntry that matches the filter.
     * @param {CompetitionEntryFindUniqueArgs} args - Arguments to find a CompetitionEntry
     * @example
     * // Get one CompetitionEntry
     * const competitionEntry = await prisma.competitionEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompetitionEntryFindUniqueArgs>(args: SelectSubset<T, CompetitionEntryFindUniqueArgs<ExtArgs>>): Prisma__CompetitionEntryClient<$Result.GetResult<Prisma.$CompetitionEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CompetitionEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompetitionEntryFindUniqueOrThrowArgs} args - Arguments to find a CompetitionEntry
     * @example
     * // Get one CompetitionEntry
     * const competitionEntry = await prisma.competitionEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompetitionEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, CompetitionEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompetitionEntryClient<$Result.GetResult<Prisma.$CompetitionEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompetitionEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionEntryFindFirstArgs} args - Arguments to find a CompetitionEntry
     * @example
     * // Get one CompetitionEntry
     * const competitionEntry = await prisma.competitionEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompetitionEntryFindFirstArgs>(args?: SelectSubset<T, CompetitionEntryFindFirstArgs<ExtArgs>>): Prisma__CompetitionEntryClient<$Result.GetResult<Prisma.$CompetitionEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompetitionEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionEntryFindFirstOrThrowArgs} args - Arguments to find a CompetitionEntry
     * @example
     * // Get one CompetitionEntry
     * const competitionEntry = await prisma.competitionEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompetitionEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, CompetitionEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompetitionEntryClient<$Result.GetResult<Prisma.$CompetitionEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CompetitionEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompetitionEntries
     * const competitionEntries = await prisma.competitionEntry.findMany()
     * 
     * // Get first 10 CompetitionEntries
     * const competitionEntries = await prisma.competitionEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const competitionEntryWithIdOnly = await prisma.competitionEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompetitionEntryFindManyArgs>(args?: SelectSubset<T, CompetitionEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitionEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CompetitionEntry.
     * @param {CompetitionEntryCreateArgs} args - Arguments to create a CompetitionEntry.
     * @example
     * // Create one CompetitionEntry
     * const CompetitionEntry = await prisma.competitionEntry.create({
     *   data: {
     *     // ... data to create a CompetitionEntry
     *   }
     * })
     * 
     */
    create<T extends CompetitionEntryCreateArgs>(args: SelectSubset<T, CompetitionEntryCreateArgs<ExtArgs>>): Prisma__CompetitionEntryClient<$Result.GetResult<Prisma.$CompetitionEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CompetitionEntries.
     * @param {CompetitionEntryCreateManyArgs} args - Arguments to create many CompetitionEntries.
     * @example
     * // Create many CompetitionEntries
     * const competitionEntry = await prisma.competitionEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompetitionEntryCreateManyArgs>(args?: SelectSubset<T, CompetitionEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CompetitionEntries and returns the data saved in the database.
     * @param {CompetitionEntryCreateManyAndReturnArgs} args - Arguments to create many CompetitionEntries.
     * @example
     * // Create many CompetitionEntries
     * const competitionEntry = await prisma.competitionEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CompetitionEntries and only return the `id`
     * const competitionEntryWithIdOnly = await prisma.competitionEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompetitionEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, CompetitionEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitionEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CompetitionEntry.
     * @param {CompetitionEntryDeleteArgs} args - Arguments to delete one CompetitionEntry.
     * @example
     * // Delete one CompetitionEntry
     * const CompetitionEntry = await prisma.competitionEntry.delete({
     *   where: {
     *     // ... filter to delete one CompetitionEntry
     *   }
     * })
     * 
     */
    delete<T extends CompetitionEntryDeleteArgs>(args: SelectSubset<T, CompetitionEntryDeleteArgs<ExtArgs>>): Prisma__CompetitionEntryClient<$Result.GetResult<Prisma.$CompetitionEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CompetitionEntry.
     * @param {CompetitionEntryUpdateArgs} args - Arguments to update one CompetitionEntry.
     * @example
     * // Update one CompetitionEntry
     * const competitionEntry = await prisma.competitionEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompetitionEntryUpdateArgs>(args: SelectSubset<T, CompetitionEntryUpdateArgs<ExtArgs>>): Prisma__CompetitionEntryClient<$Result.GetResult<Prisma.$CompetitionEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CompetitionEntries.
     * @param {CompetitionEntryDeleteManyArgs} args - Arguments to filter CompetitionEntries to delete.
     * @example
     * // Delete a few CompetitionEntries
     * const { count } = await prisma.competitionEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompetitionEntryDeleteManyArgs>(args?: SelectSubset<T, CompetitionEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompetitionEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompetitionEntries
     * const competitionEntry = await prisma.competitionEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompetitionEntryUpdateManyArgs>(args: SelectSubset<T, CompetitionEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompetitionEntries and returns the data updated in the database.
     * @param {CompetitionEntryUpdateManyAndReturnArgs} args - Arguments to update many CompetitionEntries.
     * @example
     * // Update many CompetitionEntries
     * const competitionEntry = await prisma.competitionEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CompetitionEntries and only return the `id`
     * const competitionEntryWithIdOnly = await prisma.competitionEntry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompetitionEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, CompetitionEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitionEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CompetitionEntry.
     * @param {CompetitionEntryUpsertArgs} args - Arguments to update or create a CompetitionEntry.
     * @example
     * // Update or create a CompetitionEntry
     * const competitionEntry = await prisma.competitionEntry.upsert({
     *   create: {
     *     // ... data to create a CompetitionEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompetitionEntry we want to update
     *   }
     * })
     */
    upsert<T extends CompetitionEntryUpsertArgs>(args: SelectSubset<T, CompetitionEntryUpsertArgs<ExtArgs>>): Prisma__CompetitionEntryClient<$Result.GetResult<Prisma.$CompetitionEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CompetitionEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionEntryCountArgs} args - Arguments to filter CompetitionEntries to count.
     * @example
     * // Count the number of CompetitionEntries
     * const count = await prisma.competitionEntry.count({
     *   where: {
     *     // ... the filter for the CompetitionEntries we want to count
     *   }
     * })
    **/
    count<T extends CompetitionEntryCountArgs>(
      args?: Subset<T, CompetitionEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompetitionEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompetitionEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompetitionEntryAggregateArgs>(args: Subset<T, CompetitionEntryAggregateArgs>): Prisma.PrismaPromise<GetCompetitionEntryAggregateType<T>>

    /**
     * Group by CompetitionEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionEntryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompetitionEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompetitionEntryGroupByArgs['orderBy'] }
        : { orderBy?: CompetitionEntryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompetitionEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompetitionEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompetitionEntry model
   */
  readonly fields: CompetitionEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompetitionEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompetitionEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    competition<T extends CompetitionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompetitionDefaultArgs<ExtArgs>>): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    contestant<T extends ContestantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContestantDefaultArgs<ExtArgs>>): Prisma__ContestantClient<$Result.GetResult<Prisma.$ContestantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    scoreResult<T extends CompetitionEntry$scoreResultArgs<ExtArgs> = {}>(args?: Subset<T, CompetitionEntry$scoreResultArgs<ExtArgs>>): Prisma__ScoreResultClient<$Result.GetResult<Prisma.$ScoreResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CompetitionEntry model
   */
  interface CompetitionEntryFieldRefs {
    readonly id: FieldRef<"CompetitionEntry", 'String'>
    readonly competitionId: FieldRef<"CompetitionEntry", 'String'>
    readonly contestantId: FieldRef<"CompetitionEntry", 'String'>
    readonly status: FieldRef<"CompetitionEntry", 'EntryStatus'>
    readonly overallScore: FieldRef<"CompetitionEntry", 'Decimal'>
    readonly voteCount: FieldRef<"CompetitionEntry", 'Int'>
    readonly rank: FieldRef<"CompetitionEntry", 'Int'>
    readonly createdAt: FieldRef<"CompetitionEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CompetitionEntry findUnique
   */
  export type CompetitionEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionEntry
     */
    select?: CompetitionEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionEntry
     */
    omit?: CompetitionEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionEntryInclude<ExtArgs> | null
    /**
     * Filter, which CompetitionEntry to fetch.
     */
    where: CompetitionEntryWhereUniqueInput
  }

  /**
   * CompetitionEntry findUniqueOrThrow
   */
  export type CompetitionEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionEntry
     */
    select?: CompetitionEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionEntry
     */
    omit?: CompetitionEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionEntryInclude<ExtArgs> | null
    /**
     * Filter, which CompetitionEntry to fetch.
     */
    where: CompetitionEntryWhereUniqueInput
  }

  /**
   * CompetitionEntry findFirst
   */
  export type CompetitionEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionEntry
     */
    select?: CompetitionEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionEntry
     */
    omit?: CompetitionEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionEntryInclude<ExtArgs> | null
    /**
     * Filter, which CompetitionEntry to fetch.
     */
    where?: CompetitionEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompetitionEntries to fetch.
     */
    orderBy?: CompetitionEntryOrderByWithRelationInput | CompetitionEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompetitionEntries.
     */
    cursor?: CompetitionEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompetitionEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompetitionEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompetitionEntries.
     */
    distinct?: CompetitionEntryScalarFieldEnum | CompetitionEntryScalarFieldEnum[]
  }

  /**
   * CompetitionEntry findFirstOrThrow
   */
  export type CompetitionEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionEntry
     */
    select?: CompetitionEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionEntry
     */
    omit?: CompetitionEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionEntryInclude<ExtArgs> | null
    /**
     * Filter, which CompetitionEntry to fetch.
     */
    where?: CompetitionEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompetitionEntries to fetch.
     */
    orderBy?: CompetitionEntryOrderByWithRelationInput | CompetitionEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompetitionEntries.
     */
    cursor?: CompetitionEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompetitionEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompetitionEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompetitionEntries.
     */
    distinct?: CompetitionEntryScalarFieldEnum | CompetitionEntryScalarFieldEnum[]
  }

  /**
   * CompetitionEntry findMany
   */
  export type CompetitionEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionEntry
     */
    select?: CompetitionEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionEntry
     */
    omit?: CompetitionEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionEntryInclude<ExtArgs> | null
    /**
     * Filter, which CompetitionEntries to fetch.
     */
    where?: CompetitionEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompetitionEntries to fetch.
     */
    orderBy?: CompetitionEntryOrderByWithRelationInput | CompetitionEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompetitionEntries.
     */
    cursor?: CompetitionEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompetitionEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompetitionEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompetitionEntries.
     */
    distinct?: CompetitionEntryScalarFieldEnum | CompetitionEntryScalarFieldEnum[]
  }

  /**
   * CompetitionEntry create
   */
  export type CompetitionEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionEntry
     */
    select?: CompetitionEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionEntry
     */
    omit?: CompetitionEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a CompetitionEntry.
     */
    data: XOR<CompetitionEntryCreateInput, CompetitionEntryUncheckedCreateInput>
  }

  /**
   * CompetitionEntry createMany
   */
  export type CompetitionEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompetitionEntries.
     */
    data: CompetitionEntryCreateManyInput | CompetitionEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompetitionEntry createManyAndReturn
   */
  export type CompetitionEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionEntry
     */
    select?: CompetitionEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionEntry
     */
    omit?: CompetitionEntryOmit<ExtArgs> | null
    /**
     * The data used to create many CompetitionEntries.
     */
    data: CompetitionEntryCreateManyInput | CompetitionEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompetitionEntry update
   */
  export type CompetitionEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionEntry
     */
    select?: CompetitionEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionEntry
     */
    omit?: CompetitionEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a CompetitionEntry.
     */
    data: XOR<CompetitionEntryUpdateInput, CompetitionEntryUncheckedUpdateInput>
    /**
     * Choose, which CompetitionEntry to update.
     */
    where: CompetitionEntryWhereUniqueInput
  }

  /**
   * CompetitionEntry updateMany
   */
  export type CompetitionEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompetitionEntries.
     */
    data: XOR<CompetitionEntryUpdateManyMutationInput, CompetitionEntryUncheckedUpdateManyInput>
    /**
     * Filter which CompetitionEntries to update
     */
    where?: CompetitionEntryWhereInput
    /**
     * Limit how many CompetitionEntries to update.
     */
    limit?: number
  }

  /**
   * CompetitionEntry updateManyAndReturn
   */
  export type CompetitionEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionEntry
     */
    select?: CompetitionEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionEntry
     */
    omit?: CompetitionEntryOmit<ExtArgs> | null
    /**
     * The data used to update CompetitionEntries.
     */
    data: XOR<CompetitionEntryUpdateManyMutationInput, CompetitionEntryUncheckedUpdateManyInput>
    /**
     * Filter which CompetitionEntries to update
     */
    where?: CompetitionEntryWhereInput
    /**
     * Limit how many CompetitionEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionEntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompetitionEntry upsert
   */
  export type CompetitionEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionEntry
     */
    select?: CompetitionEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionEntry
     */
    omit?: CompetitionEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the CompetitionEntry to update in case it exists.
     */
    where: CompetitionEntryWhereUniqueInput
    /**
     * In case the CompetitionEntry found by the `where` argument doesn't exist, create a new CompetitionEntry with this data.
     */
    create: XOR<CompetitionEntryCreateInput, CompetitionEntryUncheckedCreateInput>
    /**
     * In case the CompetitionEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompetitionEntryUpdateInput, CompetitionEntryUncheckedUpdateInput>
  }

  /**
   * CompetitionEntry delete
   */
  export type CompetitionEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionEntry
     */
    select?: CompetitionEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionEntry
     */
    omit?: CompetitionEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionEntryInclude<ExtArgs> | null
    /**
     * Filter which CompetitionEntry to delete.
     */
    where: CompetitionEntryWhereUniqueInput
  }

  /**
   * CompetitionEntry deleteMany
   */
  export type CompetitionEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompetitionEntries to delete
     */
    where?: CompetitionEntryWhereInput
    /**
     * Limit how many CompetitionEntries to delete.
     */
    limit?: number
  }

  /**
   * CompetitionEntry.scoreResult
   */
  export type CompetitionEntry$scoreResultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreResult
     */
    select?: ScoreResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreResult
     */
    omit?: ScoreResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreResultInclude<ExtArgs> | null
    where?: ScoreResultWhereInput
  }

  /**
   * CompetitionEntry without action
   */
  export type CompetitionEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionEntry
     */
    select?: CompetitionEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionEntry
     */
    omit?: CompetitionEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionEntryInclude<ExtArgs> | null
  }


  /**
   * Model Vote
   */

  export type AggregateVote = {
    _count: VoteCountAggregateOutputType | null
    _min: VoteMinAggregateOutputType | null
    _max: VoteMaxAggregateOutputType | null
  }

  export type VoteMinAggregateOutputType = {
    id: string | null
    competitionId: string | null
    contestantId: string | null
    voterId: string | null
    ipHash: string | null
    createdAt: Date | null
  }

  export type VoteMaxAggregateOutputType = {
    id: string | null
    competitionId: string | null
    contestantId: string | null
    voterId: string | null
    ipHash: string | null
    createdAt: Date | null
  }

  export type VoteCountAggregateOutputType = {
    id: number
    competitionId: number
    contestantId: number
    voterId: number
    ipHash: number
    createdAt: number
    _all: number
  }


  export type VoteMinAggregateInputType = {
    id?: true
    competitionId?: true
    contestantId?: true
    voterId?: true
    ipHash?: true
    createdAt?: true
  }

  export type VoteMaxAggregateInputType = {
    id?: true
    competitionId?: true
    contestantId?: true
    voterId?: true
    ipHash?: true
    createdAt?: true
  }

  export type VoteCountAggregateInputType = {
    id?: true
    competitionId?: true
    contestantId?: true
    voterId?: true
    ipHash?: true
    createdAt?: true
    _all?: true
  }

  export type VoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vote to aggregate.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Votes
    **/
    _count?: true | VoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VoteMaxAggregateInputType
  }

  export type GetVoteAggregateType<T extends VoteAggregateArgs> = {
        [P in keyof T & keyof AggregateVote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVote[P]>
      : GetScalarType<T[P], AggregateVote[P]>
  }




  export type VoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteWhereInput
    orderBy?: VoteOrderByWithAggregationInput | VoteOrderByWithAggregationInput[]
    by: VoteScalarFieldEnum[] | VoteScalarFieldEnum
    having?: VoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VoteCountAggregateInputType | true
    _min?: VoteMinAggregateInputType
    _max?: VoteMaxAggregateInputType
  }

  export type VoteGroupByOutputType = {
    id: string
    competitionId: string
    contestantId: string
    voterId: string
    ipHash: string | null
    createdAt: Date
    _count: VoteCountAggregateOutputType | null
    _min: VoteMinAggregateOutputType | null
    _max: VoteMaxAggregateOutputType | null
  }

  type GetVoteGroupByPayload<T extends VoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VoteGroupByOutputType[P]>
            : GetScalarType<T[P], VoteGroupByOutputType[P]>
        }
      >
    >


  export type VoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    competitionId?: boolean
    contestantId?: boolean
    voterId?: boolean
    ipHash?: boolean
    createdAt?: boolean
    competition?: boolean | CompetitionDefaultArgs<ExtArgs>
    voter?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vote"]>

  export type VoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    competitionId?: boolean
    contestantId?: boolean
    voterId?: boolean
    ipHash?: boolean
    createdAt?: boolean
    competition?: boolean | CompetitionDefaultArgs<ExtArgs>
    voter?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vote"]>

  export type VoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    competitionId?: boolean
    contestantId?: boolean
    voterId?: boolean
    ipHash?: boolean
    createdAt?: boolean
    competition?: boolean | CompetitionDefaultArgs<ExtArgs>
    voter?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vote"]>

  export type VoteSelectScalar = {
    id?: boolean
    competitionId?: boolean
    contestantId?: boolean
    voterId?: boolean
    ipHash?: boolean
    createdAt?: boolean
  }

  export type VoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "competitionId" | "contestantId" | "voterId" | "ipHash" | "createdAt", ExtArgs["result"]["vote"]>
  export type VoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    competition?: boolean | CompetitionDefaultArgs<ExtArgs>
    voter?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    competition?: boolean | CompetitionDefaultArgs<ExtArgs>
    voter?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    competition?: boolean | CompetitionDefaultArgs<ExtArgs>
    voter?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vote"
    objects: {
      competition: Prisma.$CompetitionPayload<ExtArgs>
      voter: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      competitionId: string
      contestantId: string
      voterId: string
      ipHash: string | null
      createdAt: Date
    }, ExtArgs["result"]["vote"]>
    composites: {}
  }

  type VoteGetPayload<S extends boolean | null | undefined | VoteDefaultArgs> = $Result.GetResult<Prisma.$VotePayload, S>

  type VoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VoteCountAggregateInputType | true
    }

  export interface VoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vote'], meta: { name: 'Vote' } }
    /**
     * Find zero or one Vote that matches the filter.
     * @param {VoteFindUniqueArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VoteFindUniqueArgs>(args: SelectSubset<T, VoteFindUniqueArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VoteFindUniqueOrThrowArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VoteFindUniqueOrThrowArgs>(args: SelectSubset<T, VoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteFindFirstArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VoteFindFirstArgs>(args?: SelectSubset<T, VoteFindFirstArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteFindFirstOrThrowArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VoteFindFirstOrThrowArgs>(args?: SelectSubset<T, VoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Votes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Votes
     * const votes = await prisma.vote.findMany()
     * 
     * // Get first 10 Votes
     * const votes = await prisma.vote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const voteWithIdOnly = await prisma.vote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VoteFindManyArgs>(args?: SelectSubset<T, VoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vote.
     * @param {VoteCreateArgs} args - Arguments to create a Vote.
     * @example
     * // Create one Vote
     * const Vote = await prisma.vote.create({
     *   data: {
     *     // ... data to create a Vote
     *   }
     * })
     * 
     */
    create<T extends VoteCreateArgs>(args: SelectSubset<T, VoteCreateArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Votes.
     * @param {VoteCreateManyArgs} args - Arguments to create many Votes.
     * @example
     * // Create many Votes
     * const vote = await prisma.vote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VoteCreateManyArgs>(args?: SelectSubset<T, VoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Votes and returns the data saved in the database.
     * @param {VoteCreateManyAndReturnArgs} args - Arguments to create many Votes.
     * @example
     * // Create many Votes
     * const vote = await prisma.vote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Votes and only return the `id`
     * const voteWithIdOnly = await prisma.vote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VoteCreateManyAndReturnArgs>(args?: SelectSubset<T, VoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vote.
     * @param {VoteDeleteArgs} args - Arguments to delete one Vote.
     * @example
     * // Delete one Vote
     * const Vote = await prisma.vote.delete({
     *   where: {
     *     // ... filter to delete one Vote
     *   }
     * })
     * 
     */
    delete<T extends VoteDeleteArgs>(args: SelectSubset<T, VoteDeleteArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vote.
     * @param {VoteUpdateArgs} args - Arguments to update one Vote.
     * @example
     * // Update one Vote
     * const vote = await prisma.vote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VoteUpdateArgs>(args: SelectSubset<T, VoteUpdateArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Votes.
     * @param {VoteDeleteManyArgs} args - Arguments to filter Votes to delete.
     * @example
     * // Delete a few Votes
     * const { count } = await prisma.vote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VoteDeleteManyArgs>(args?: SelectSubset<T, VoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Votes
     * const vote = await prisma.vote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VoteUpdateManyArgs>(args: SelectSubset<T, VoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Votes and returns the data updated in the database.
     * @param {VoteUpdateManyAndReturnArgs} args - Arguments to update many Votes.
     * @example
     * // Update many Votes
     * const vote = await prisma.vote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Votes and only return the `id`
     * const voteWithIdOnly = await prisma.vote.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VoteUpdateManyAndReturnArgs>(args: SelectSubset<T, VoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vote.
     * @param {VoteUpsertArgs} args - Arguments to update or create a Vote.
     * @example
     * // Update or create a Vote
     * const vote = await prisma.vote.upsert({
     *   create: {
     *     // ... data to create a Vote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vote we want to update
     *   }
     * })
     */
    upsert<T extends VoteUpsertArgs>(args: SelectSubset<T, VoteUpsertArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteCountArgs} args - Arguments to filter Votes to count.
     * @example
     * // Count the number of Votes
     * const count = await prisma.vote.count({
     *   where: {
     *     // ... the filter for the Votes we want to count
     *   }
     * })
    **/
    count<T extends VoteCountArgs>(
      args?: Subset<T, VoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VoteAggregateArgs>(args: Subset<T, VoteAggregateArgs>): Prisma.PrismaPromise<GetVoteAggregateType<T>>

    /**
     * Group by Vote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VoteGroupByArgs['orderBy'] }
        : { orderBy?: VoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vote model
   */
  readonly fields: VoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    competition<T extends CompetitionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompetitionDefaultArgs<ExtArgs>>): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    voter<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vote model
   */
  interface VoteFieldRefs {
    readonly id: FieldRef<"Vote", 'String'>
    readonly competitionId: FieldRef<"Vote", 'String'>
    readonly contestantId: FieldRef<"Vote", 'String'>
    readonly voterId: FieldRef<"Vote", 'String'>
    readonly ipHash: FieldRef<"Vote", 'String'>
    readonly createdAt: FieldRef<"Vote", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vote findUnique
   */
  export type VoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote findUniqueOrThrow
   */
  export type VoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote findFirst
   */
  export type VoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Votes.
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Votes.
     */
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Vote findFirstOrThrow
   */
  export type VoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Votes.
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Votes.
     */
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Vote findMany
   */
  export type VoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Votes to fetch.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Votes.
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Votes.
     */
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Vote create
   */
  export type VoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * The data needed to create a Vote.
     */
    data: XOR<VoteCreateInput, VoteUncheckedCreateInput>
  }

  /**
   * Vote createMany
   */
  export type VoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Votes.
     */
    data: VoteCreateManyInput | VoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vote createManyAndReturn
   */
  export type VoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * The data used to create many Votes.
     */
    data: VoteCreateManyInput | VoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vote update
   */
  export type VoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * The data needed to update a Vote.
     */
    data: XOR<VoteUpdateInput, VoteUncheckedUpdateInput>
    /**
     * Choose, which Vote to update.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote updateMany
   */
  export type VoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Votes.
     */
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyInput>
    /**
     * Filter which Votes to update
     */
    where?: VoteWhereInput
    /**
     * Limit how many Votes to update.
     */
    limit?: number
  }

  /**
   * Vote updateManyAndReturn
   */
  export type VoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * The data used to update Votes.
     */
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyInput>
    /**
     * Filter which Votes to update
     */
    where?: VoteWhereInput
    /**
     * Limit how many Votes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vote upsert
   */
  export type VoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * The filter to search for the Vote to update in case it exists.
     */
    where: VoteWhereUniqueInput
    /**
     * In case the Vote found by the `where` argument doesn't exist, create a new Vote with this data.
     */
    create: XOR<VoteCreateInput, VoteUncheckedCreateInput>
    /**
     * In case the Vote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VoteUpdateInput, VoteUncheckedUpdateInput>
  }

  /**
   * Vote delete
   */
  export type VoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter which Vote to delete.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote deleteMany
   */
  export type VoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Votes to delete
     */
    where?: VoteWhereInput
    /**
     * Limit how many Votes to delete.
     */
    limit?: number
  }

  /**
   * Vote without action
   */
  export type VoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
  }


  /**
   * Model ScoreResult
   */

  export type AggregateScoreResult = {
    _count: ScoreResultCountAggregateOutputType | null
    _avg: ScoreResultAvgAggregateOutputType | null
    _sum: ScoreResultSumAggregateOutputType | null
    _min: ScoreResultMinAggregateOutputType | null
    _max: ScoreResultMaxAggregateOutputType | null
  }

  export type ScoreResultAvgAggregateOutputType = {
    presentationScore: Decimal | null
    confidenceScore: Decimal | null
    stylingScore: Decimal | null
    profileScore: Decimal | null
    professionalismScore: Decimal | null
    overallScore: Decimal | null
  }

  export type ScoreResultSumAggregateOutputType = {
    presentationScore: Decimal | null
    confidenceScore: Decimal | null
    stylingScore: Decimal | null
    profileScore: Decimal | null
    professionalismScore: Decimal | null
    overallScore: Decimal | null
  }

  export type ScoreResultMinAggregateOutputType = {
    id: string | null
    entryId: string | null
    presentationScore: Decimal | null
    confidenceScore: Decimal | null
    stylingScore: Decimal | null
    profileScore: Decimal | null
    professionalismScore: Decimal | null
    overallScore: Decimal | null
    createdAt: Date | null
  }

  export type ScoreResultMaxAggregateOutputType = {
    id: string | null
    entryId: string | null
    presentationScore: Decimal | null
    confidenceScore: Decimal | null
    stylingScore: Decimal | null
    profileScore: Decimal | null
    professionalismScore: Decimal | null
    overallScore: Decimal | null
    createdAt: Date | null
  }

  export type ScoreResultCountAggregateOutputType = {
    id: number
    entryId: number
    presentationScore: number
    confidenceScore: number
    stylingScore: number
    profileScore: number
    professionalismScore: number
    overallScore: number
    createdAt: number
    _all: number
  }


  export type ScoreResultAvgAggregateInputType = {
    presentationScore?: true
    confidenceScore?: true
    stylingScore?: true
    profileScore?: true
    professionalismScore?: true
    overallScore?: true
  }

  export type ScoreResultSumAggregateInputType = {
    presentationScore?: true
    confidenceScore?: true
    stylingScore?: true
    profileScore?: true
    professionalismScore?: true
    overallScore?: true
  }

  export type ScoreResultMinAggregateInputType = {
    id?: true
    entryId?: true
    presentationScore?: true
    confidenceScore?: true
    stylingScore?: true
    profileScore?: true
    professionalismScore?: true
    overallScore?: true
    createdAt?: true
  }

  export type ScoreResultMaxAggregateInputType = {
    id?: true
    entryId?: true
    presentationScore?: true
    confidenceScore?: true
    stylingScore?: true
    profileScore?: true
    professionalismScore?: true
    overallScore?: true
    createdAt?: true
  }

  export type ScoreResultCountAggregateInputType = {
    id?: true
    entryId?: true
    presentationScore?: true
    confidenceScore?: true
    stylingScore?: true
    profileScore?: true
    professionalismScore?: true
    overallScore?: true
    createdAt?: true
    _all?: true
  }

  export type ScoreResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScoreResult to aggregate.
     */
    where?: ScoreResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScoreResults to fetch.
     */
    orderBy?: ScoreResultOrderByWithRelationInput | ScoreResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScoreResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScoreResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScoreResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScoreResults
    **/
    _count?: true | ScoreResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScoreResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScoreResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScoreResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScoreResultMaxAggregateInputType
  }

  export type GetScoreResultAggregateType<T extends ScoreResultAggregateArgs> = {
        [P in keyof T & keyof AggregateScoreResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScoreResult[P]>
      : GetScalarType<T[P], AggregateScoreResult[P]>
  }




  export type ScoreResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScoreResultWhereInput
    orderBy?: ScoreResultOrderByWithAggregationInput | ScoreResultOrderByWithAggregationInput[]
    by: ScoreResultScalarFieldEnum[] | ScoreResultScalarFieldEnum
    having?: ScoreResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScoreResultCountAggregateInputType | true
    _avg?: ScoreResultAvgAggregateInputType
    _sum?: ScoreResultSumAggregateInputType
    _min?: ScoreResultMinAggregateInputType
    _max?: ScoreResultMaxAggregateInputType
  }

  export type ScoreResultGroupByOutputType = {
    id: string
    entryId: string
    presentationScore: Decimal
    confidenceScore: Decimal
    stylingScore: Decimal
    profileScore: Decimal
    professionalismScore: Decimal
    overallScore: Decimal
    createdAt: Date
    _count: ScoreResultCountAggregateOutputType | null
    _avg: ScoreResultAvgAggregateOutputType | null
    _sum: ScoreResultSumAggregateOutputType | null
    _min: ScoreResultMinAggregateOutputType | null
    _max: ScoreResultMaxAggregateOutputType | null
  }

  type GetScoreResultGroupByPayload<T extends ScoreResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScoreResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScoreResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScoreResultGroupByOutputType[P]>
            : GetScalarType<T[P], ScoreResultGroupByOutputType[P]>
        }
      >
    >


  export type ScoreResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entryId?: boolean
    presentationScore?: boolean
    confidenceScore?: boolean
    stylingScore?: boolean
    profileScore?: boolean
    professionalismScore?: boolean
    overallScore?: boolean
    createdAt?: boolean
    entry?: boolean | CompetitionEntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scoreResult"]>

  export type ScoreResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entryId?: boolean
    presentationScore?: boolean
    confidenceScore?: boolean
    stylingScore?: boolean
    profileScore?: boolean
    professionalismScore?: boolean
    overallScore?: boolean
    createdAt?: boolean
    entry?: boolean | CompetitionEntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scoreResult"]>

  export type ScoreResultSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entryId?: boolean
    presentationScore?: boolean
    confidenceScore?: boolean
    stylingScore?: boolean
    profileScore?: boolean
    professionalismScore?: boolean
    overallScore?: boolean
    createdAt?: boolean
    entry?: boolean | CompetitionEntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scoreResult"]>

  export type ScoreResultSelectScalar = {
    id?: boolean
    entryId?: boolean
    presentationScore?: boolean
    confidenceScore?: boolean
    stylingScore?: boolean
    profileScore?: boolean
    professionalismScore?: boolean
    overallScore?: boolean
    createdAt?: boolean
  }

  export type ScoreResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "entryId" | "presentationScore" | "confidenceScore" | "stylingScore" | "profileScore" | "professionalismScore" | "overallScore" | "createdAt", ExtArgs["result"]["scoreResult"]>
  export type ScoreResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entry?: boolean | CompetitionEntryDefaultArgs<ExtArgs>
  }
  export type ScoreResultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entry?: boolean | CompetitionEntryDefaultArgs<ExtArgs>
  }
  export type ScoreResultIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entry?: boolean | CompetitionEntryDefaultArgs<ExtArgs>
  }

  export type $ScoreResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScoreResult"
    objects: {
      entry: Prisma.$CompetitionEntryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      entryId: string
      presentationScore: Prisma.Decimal
      confidenceScore: Prisma.Decimal
      stylingScore: Prisma.Decimal
      profileScore: Prisma.Decimal
      professionalismScore: Prisma.Decimal
      overallScore: Prisma.Decimal
      createdAt: Date
    }, ExtArgs["result"]["scoreResult"]>
    composites: {}
  }

  type ScoreResultGetPayload<S extends boolean | null | undefined | ScoreResultDefaultArgs> = $Result.GetResult<Prisma.$ScoreResultPayload, S>

  type ScoreResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScoreResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScoreResultCountAggregateInputType | true
    }

  export interface ScoreResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScoreResult'], meta: { name: 'ScoreResult' } }
    /**
     * Find zero or one ScoreResult that matches the filter.
     * @param {ScoreResultFindUniqueArgs} args - Arguments to find a ScoreResult
     * @example
     * // Get one ScoreResult
     * const scoreResult = await prisma.scoreResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScoreResultFindUniqueArgs>(args: SelectSubset<T, ScoreResultFindUniqueArgs<ExtArgs>>): Prisma__ScoreResultClient<$Result.GetResult<Prisma.$ScoreResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ScoreResult that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScoreResultFindUniqueOrThrowArgs} args - Arguments to find a ScoreResult
     * @example
     * // Get one ScoreResult
     * const scoreResult = await prisma.scoreResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScoreResultFindUniqueOrThrowArgs>(args: SelectSubset<T, ScoreResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScoreResultClient<$Result.GetResult<Prisma.$ScoreResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScoreResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreResultFindFirstArgs} args - Arguments to find a ScoreResult
     * @example
     * // Get one ScoreResult
     * const scoreResult = await prisma.scoreResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScoreResultFindFirstArgs>(args?: SelectSubset<T, ScoreResultFindFirstArgs<ExtArgs>>): Prisma__ScoreResultClient<$Result.GetResult<Prisma.$ScoreResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScoreResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreResultFindFirstOrThrowArgs} args - Arguments to find a ScoreResult
     * @example
     * // Get one ScoreResult
     * const scoreResult = await prisma.scoreResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScoreResultFindFirstOrThrowArgs>(args?: SelectSubset<T, ScoreResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScoreResultClient<$Result.GetResult<Prisma.$ScoreResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ScoreResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScoreResults
     * const scoreResults = await prisma.scoreResult.findMany()
     * 
     * // Get first 10 ScoreResults
     * const scoreResults = await prisma.scoreResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scoreResultWithIdOnly = await prisma.scoreResult.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScoreResultFindManyArgs>(args?: SelectSubset<T, ScoreResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScoreResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ScoreResult.
     * @param {ScoreResultCreateArgs} args - Arguments to create a ScoreResult.
     * @example
     * // Create one ScoreResult
     * const ScoreResult = await prisma.scoreResult.create({
     *   data: {
     *     // ... data to create a ScoreResult
     *   }
     * })
     * 
     */
    create<T extends ScoreResultCreateArgs>(args: SelectSubset<T, ScoreResultCreateArgs<ExtArgs>>): Prisma__ScoreResultClient<$Result.GetResult<Prisma.$ScoreResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ScoreResults.
     * @param {ScoreResultCreateManyArgs} args - Arguments to create many ScoreResults.
     * @example
     * // Create many ScoreResults
     * const scoreResult = await prisma.scoreResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScoreResultCreateManyArgs>(args?: SelectSubset<T, ScoreResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ScoreResults and returns the data saved in the database.
     * @param {ScoreResultCreateManyAndReturnArgs} args - Arguments to create many ScoreResults.
     * @example
     * // Create many ScoreResults
     * const scoreResult = await prisma.scoreResult.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ScoreResults and only return the `id`
     * const scoreResultWithIdOnly = await prisma.scoreResult.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScoreResultCreateManyAndReturnArgs>(args?: SelectSubset<T, ScoreResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScoreResultPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ScoreResult.
     * @param {ScoreResultDeleteArgs} args - Arguments to delete one ScoreResult.
     * @example
     * // Delete one ScoreResult
     * const ScoreResult = await prisma.scoreResult.delete({
     *   where: {
     *     // ... filter to delete one ScoreResult
     *   }
     * })
     * 
     */
    delete<T extends ScoreResultDeleteArgs>(args: SelectSubset<T, ScoreResultDeleteArgs<ExtArgs>>): Prisma__ScoreResultClient<$Result.GetResult<Prisma.$ScoreResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ScoreResult.
     * @param {ScoreResultUpdateArgs} args - Arguments to update one ScoreResult.
     * @example
     * // Update one ScoreResult
     * const scoreResult = await prisma.scoreResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScoreResultUpdateArgs>(args: SelectSubset<T, ScoreResultUpdateArgs<ExtArgs>>): Prisma__ScoreResultClient<$Result.GetResult<Prisma.$ScoreResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ScoreResults.
     * @param {ScoreResultDeleteManyArgs} args - Arguments to filter ScoreResults to delete.
     * @example
     * // Delete a few ScoreResults
     * const { count } = await prisma.scoreResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScoreResultDeleteManyArgs>(args?: SelectSubset<T, ScoreResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScoreResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScoreResults
     * const scoreResult = await prisma.scoreResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScoreResultUpdateManyArgs>(args: SelectSubset<T, ScoreResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScoreResults and returns the data updated in the database.
     * @param {ScoreResultUpdateManyAndReturnArgs} args - Arguments to update many ScoreResults.
     * @example
     * // Update many ScoreResults
     * const scoreResult = await prisma.scoreResult.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ScoreResults and only return the `id`
     * const scoreResultWithIdOnly = await prisma.scoreResult.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScoreResultUpdateManyAndReturnArgs>(args: SelectSubset<T, ScoreResultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScoreResultPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ScoreResult.
     * @param {ScoreResultUpsertArgs} args - Arguments to update or create a ScoreResult.
     * @example
     * // Update or create a ScoreResult
     * const scoreResult = await prisma.scoreResult.upsert({
     *   create: {
     *     // ... data to create a ScoreResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScoreResult we want to update
     *   }
     * })
     */
    upsert<T extends ScoreResultUpsertArgs>(args: SelectSubset<T, ScoreResultUpsertArgs<ExtArgs>>): Prisma__ScoreResultClient<$Result.GetResult<Prisma.$ScoreResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ScoreResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreResultCountArgs} args - Arguments to filter ScoreResults to count.
     * @example
     * // Count the number of ScoreResults
     * const count = await prisma.scoreResult.count({
     *   where: {
     *     // ... the filter for the ScoreResults we want to count
     *   }
     * })
    **/
    count<T extends ScoreResultCountArgs>(
      args?: Subset<T, ScoreResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScoreResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScoreResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScoreResultAggregateArgs>(args: Subset<T, ScoreResultAggregateArgs>): Prisma.PrismaPromise<GetScoreResultAggregateType<T>>

    /**
     * Group by ScoreResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreResultGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScoreResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScoreResultGroupByArgs['orderBy'] }
        : { orderBy?: ScoreResultGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScoreResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScoreResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScoreResult model
   */
  readonly fields: ScoreResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScoreResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScoreResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    entry<T extends CompetitionEntryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompetitionEntryDefaultArgs<ExtArgs>>): Prisma__CompetitionEntryClient<$Result.GetResult<Prisma.$CompetitionEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ScoreResult model
   */
  interface ScoreResultFieldRefs {
    readonly id: FieldRef<"ScoreResult", 'String'>
    readonly entryId: FieldRef<"ScoreResult", 'String'>
    readonly presentationScore: FieldRef<"ScoreResult", 'Decimal'>
    readonly confidenceScore: FieldRef<"ScoreResult", 'Decimal'>
    readonly stylingScore: FieldRef<"ScoreResult", 'Decimal'>
    readonly profileScore: FieldRef<"ScoreResult", 'Decimal'>
    readonly professionalismScore: FieldRef<"ScoreResult", 'Decimal'>
    readonly overallScore: FieldRef<"ScoreResult", 'Decimal'>
    readonly createdAt: FieldRef<"ScoreResult", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ScoreResult findUnique
   */
  export type ScoreResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreResult
     */
    select?: ScoreResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreResult
     */
    omit?: ScoreResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreResultInclude<ExtArgs> | null
    /**
     * Filter, which ScoreResult to fetch.
     */
    where: ScoreResultWhereUniqueInput
  }

  /**
   * ScoreResult findUniqueOrThrow
   */
  export type ScoreResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreResult
     */
    select?: ScoreResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreResult
     */
    omit?: ScoreResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreResultInclude<ExtArgs> | null
    /**
     * Filter, which ScoreResult to fetch.
     */
    where: ScoreResultWhereUniqueInput
  }

  /**
   * ScoreResult findFirst
   */
  export type ScoreResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreResult
     */
    select?: ScoreResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreResult
     */
    omit?: ScoreResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreResultInclude<ExtArgs> | null
    /**
     * Filter, which ScoreResult to fetch.
     */
    where?: ScoreResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScoreResults to fetch.
     */
    orderBy?: ScoreResultOrderByWithRelationInput | ScoreResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScoreResults.
     */
    cursor?: ScoreResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScoreResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScoreResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScoreResults.
     */
    distinct?: ScoreResultScalarFieldEnum | ScoreResultScalarFieldEnum[]
  }

  /**
   * ScoreResult findFirstOrThrow
   */
  export type ScoreResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreResult
     */
    select?: ScoreResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreResult
     */
    omit?: ScoreResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreResultInclude<ExtArgs> | null
    /**
     * Filter, which ScoreResult to fetch.
     */
    where?: ScoreResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScoreResults to fetch.
     */
    orderBy?: ScoreResultOrderByWithRelationInput | ScoreResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScoreResults.
     */
    cursor?: ScoreResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScoreResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScoreResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScoreResults.
     */
    distinct?: ScoreResultScalarFieldEnum | ScoreResultScalarFieldEnum[]
  }

  /**
   * ScoreResult findMany
   */
  export type ScoreResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreResult
     */
    select?: ScoreResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreResult
     */
    omit?: ScoreResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreResultInclude<ExtArgs> | null
    /**
     * Filter, which ScoreResults to fetch.
     */
    where?: ScoreResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScoreResults to fetch.
     */
    orderBy?: ScoreResultOrderByWithRelationInput | ScoreResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScoreResults.
     */
    cursor?: ScoreResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScoreResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScoreResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScoreResults.
     */
    distinct?: ScoreResultScalarFieldEnum | ScoreResultScalarFieldEnum[]
  }

  /**
   * ScoreResult create
   */
  export type ScoreResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreResult
     */
    select?: ScoreResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreResult
     */
    omit?: ScoreResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreResultInclude<ExtArgs> | null
    /**
     * The data needed to create a ScoreResult.
     */
    data: XOR<ScoreResultCreateInput, ScoreResultUncheckedCreateInput>
  }

  /**
   * ScoreResult createMany
   */
  export type ScoreResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScoreResults.
     */
    data: ScoreResultCreateManyInput | ScoreResultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScoreResult createManyAndReturn
   */
  export type ScoreResultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreResult
     */
    select?: ScoreResultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreResult
     */
    omit?: ScoreResultOmit<ExtArgs> | null
    /**
     * The data used to create many ScoreResults.
     */
    data: ScoreResultCreateManyInput | ScoreResultCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreResultIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScoreResult update
   */
  export type ScoreResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreResult
     */
    select?: ScoreResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreResult
     */
    omit?: ScoreResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreResultInclude<ExtArgs> | null
    /**
     * The data needed to update a ScoreResult.
     */
    data: XOR<ScoreResultUpdateInput, ScoreResultUncheckedUpdateInput>
    /**
     * Choose, which ScoreResult to update.
     */
    where: ScoreResultWhereUniqueInput
  }

  /**
   * ScoreResult updateMany
   */
  export type ScoreResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScoreResults.
     */
    data: XOR<ScoreResultUpdateManyMutationInput, ScoreResultUncheckedUpdateManyInput>
    /**
     * Filter which ScoreResults to update
     */
    where?: ScoreResultWhereInput
    /**
     * Limit how many ScoreResults to update.
     */
    limit?: number
  }

  /**
   * ScoreResult updateManyAndReturn
   */
  export type ScoreResultUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreResult
     */
    select?: ScoreResultSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreResult
     */
    omit?: ScoreResultOmit<ExtArgs> | null
    /**
     * The data used to update ScoreResults.
     */
    data: XOR<ScoreResultUpdateManyMutationInput, ScoreResultUncheckedUpdateManyInput>
    /**
     * Filter which ScoreResults to update
     */
    where?: ScoreResultWhereInput
    /**
     * Limit how many ScoreResults to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreResultIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScoreResult upsert
   */
  export type ScoreResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreResult
     */
    select?: ScoreResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreResult
     */
    omit?: ScoreResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreResultInclude<ExtArgs> | null
    /**
     * The filter to search for the ScoreResult to update in case it exists.
     */
    where: ScoreResultWhereUniqueInput
    /**
     * In case the ScoreResult found by the `where` argument doesn't exist, create a new ScoreResult with this data.
     */
    create: XOR<ScoreResultCreateInput, ScoreResultUncheckedCreateInput>
    /**
     * In case the ScoreResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScoreResultUpdateInput, ScoreResultUncheckedUpdateInput>
  }

  /**
   * ScoreResult delete
   */
  export type ScoreResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreResult
     */
    select?: ScoreResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreResult
     */
    omit?: ScoreResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreResultInclude<ExtArgs> | null
    /**
     * Filter which ScoreResult to delete.
     */
    where: ScoreResultWhereUniqueInput
  }

  /**
   * ScoreResult deleteMany
   */
  export type ScoreResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScoreResults to delete
     */
    where?: ScoreResultWhereInput
    /**
     * Limit how many ScoreResults to delete.
     */
    limit?: number
  }

  /**
   * ScoreResult without action
   */
  export type ScoreResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreResult
     */
    select?: ScoreResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreResult
     */
    omit?: ScoreResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreResultInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    passwordHash: 'passwordHash',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const ContestantScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    fullName: 'fullName',
    age: 'age',
    gender: 'gender',
    country: 'country',
    height: 'height',
    weight: 'weight',
    bodyType: 'bodyType',
    eyeColor: 'eyeColor',
    hairColor: 'hairColor',
    bio: 'bio',
    instagram: 'instagram',
    portfolioUrl: 'portfolioUrl',
    profileImage: 'profileImage',
    createdAt: 'createdAt'
  };

  export type ContestantScalarFieldEnum = (typeof ContestantScalarFieldEnum)[keyof typeof ContestantScalarFieldEnum]


  export const ContestantImageScalarFieldEnum: {
    id: 'id',
    contestantId: 'contestantId',
    imageUrl: 'imageUrl',
    imageType: 'imageType',
    createdAt: 'createdAt'
  };

  export type ContestantImageScalarFieldEnum = (typeof ContestantImageScalarFieldEnum)[keyof typeof ContestantImageScalarFieldEnum]


  export const CompetitionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    competitionType: 'competitionType',
    startDate: 'startDate',
    endDate: 'endDate',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type CompetitionScalarFieldEnum = (typeof CompetitionScalarFieldEnum)[keyof typeof CompetitionScalarFieldEnum]


  export const CompetitionEntryScalarFieldEnum: {
    id: 'id',
    competitionId: 'competitionId',
    contestantId: 'contestantId',
    status: 'status',
    overallScore: 'overallScore',
    voteCount: 'voteCount',
    rank: 'rank',
    createdAt: 'createdAt'
  };

  export type CompetitionEntryScalarFieldEnum = (typeof CompetitionEntryScalarFieldEnum)[keyof typeof CompetitionEntryScalarFieldEnum]


  export const VoteScalarFieldEnum: {
    id: 'id',
    competitionId: 'competitionId',
    contestantId: 'contestantId',
    voterId: 'voterId',
    ipHash: 'ipHash',
    createdAt: 'createdAt'
  };

  export type VoteScalarFieldEnum = (typeof VoteScalarFieldEnum)[keyof typeof VoteScalarFieldEnum]


  export const ScoreResultScalarFieldEnum: {
    id: 'id',
    entryId: 'entryId',
    presentationScore: 'presentationScore',
    confidenceScore: 'confidenceScore',
    stylingScore: 'stylingScore',
    profileScore: 'profileScore',
    professionalismScore: 'professionalismScore',
    overallScore: 'overallScore',
    createdAt: 'createdAt'
  };

  export type ScoreResultScalarFieldEnum = (typeof ScoreResultScalarFieldEnum)[keyof typeof ScoreResultScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'ImageType'
   */
  export type EnumImageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ImageType'>
    


  /**
   * Reference to a field of type 'ImageType[]'
   */
  export type ListEnumImageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ImageType[]'>
    


  /**
   * Reference to a field of type 'CompetitionType'
   */
  export type EnumCompetitionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CompetitionType'>
    


  /**
   * Reference to a field of type 'CompetitionType[]'
   */
  export type ListEnumCompetitionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CompetitionType[]'>
    


  /**
   * Reference to a field of type 'CompetitionStatus'
   */
  export type EnumCompetitionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CompetitionStatus'>
    


  /**
   * Reference to a field of type 'CompetitionStatus[]'
   */
  export type ListEnumCompetitionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CompetitionStatus[]'>
    


  /**
   * Reference to a field of type 'EntryStatus'
   */
  export type EnumEntryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EntryStatus'>
    


  /**
   * Reference to a field of type 'EntryStatus[]'
   */
  export type ListEnumEntryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EntryStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    contestant?: XOR<ContestantNullableScalarRelationFilter, ContestantWhereInput> | null
    votes?: VoteListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    contestant?: ContestantOrderByWithRelationInput
    votes?: VoteOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    contestant?: XOR<ContestantNullableScalarRelationFilter, ContestantWhereInput> | null
    votes?: VoteListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type ContestantWhereInput = {
    AND?: ContestantWhereInput | ContestantWhereInput[]
    OR?: ContestantWhereInput[]
    NOT?: ContestantWhereInput | ContestantWhereInput[]
    id?: StringFilter<"Contestant"> | string
    userId?: StringFilter<"Contestant"> | string
    fullName?: StringFilter<"Contestant"> | string
    age?: IntFilter<"Contestant"> | number
    gender?: StringFilter<"Contestant"> | string
    country?: StringFilter<"Contestant"> | string
    height?: DecimalFilter<"Contestant"> | Decimal | DecimalJsLike | number | string
    weight?: DecimalFilter<"Contestant"> | Decimal | DecimalJsLike | number | string
    bodyType?: StringFilter<"Contestant"> | string
    eyeColor?: StringFilter<"Contestant"> | string
    hairColor?: StringFilter<"Contestant"> | string
    bio?: StringFilter<"Contestant"> | string
    instagram?: StringNullableFilter<"Contestant"> | string | null
    portfolioUrl?: StringNullableFilter<"Contestant"> | string | null
    profileImage?: StringNullableFilter<"Contestant"> | string | null
    createdAt?: DateTimeFilter<"Contestant"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    images?: ContestantImageListRelationFilter
    entries?: CompetitionEntryListRelationFilter
  }

  export type ContestantOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    country?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    bodyType?: SortOrder
    eyeColor?: SortOrder
    hairColor?: SortOrder
    bio?: SortOrder
    instagram?: SortOrderInput | SortOrder
    portfolioUrl?: SortOrderInput | SortOrder
    profileImage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    images?: ContestantImageOrderByRelationAggregateInput
    entries?: CompetitionEntryOrderByRelationAggregateInput
  }

  export type ContestantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: ContestantWhereInput | ContestantWhereInput[]
    OR?: ContestantWhereInput[]
    NOT?: ContestantWhereInput | ContestantWhereInput[]
    fullName?: StringFilter<"Contestant"> | string
    age?: IntFilter<"Contestant"> | number
    gender?: StringFilter<"Contestant"> | string
    country?: StringFilter<"Contestant"> | string
    height?: DecimalFilter<"Contestant"> | Decimal | DecimalJsLike | number | string
    weight?: DecimalFilter<"Contestant"> | Decimal | DecimalJsLike | number | string
    bodyType?: StringFilter<"Contestant"> | string
    eyeColor?: StringFilter<"Contestant"> | string
    hairColor?: StringFilter<"Contestant"> | string
    bio?: StringFilter<"Contestant"> | string
    instagram?: StringNullableFilter<"Contestant"> | string | null
    portfolioUrl?: StringNullableFilter<"Contestant"> | string | null
    profileImage?: StringNullableFilter<"Contestant"> | string | null
    createdAt?: DateTimeFilter<"Contestant"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    images?: ContestantImageListRelationFilter
    entries?: CompetitionEntryListRelationFilter
  }, "id" | "userId">

  export type ContestantOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    country?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    bodyType?: SortOrder
    eyeColor?: SortOrder
    hairColor?: SortOrder
    bio?: SortOrder
    instagram?: SortOrderInput | SortOrder
    portfolioUrl?: SortOrderInput | SortOrder
    profileImage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ContestantCountOrderByAggregateInput
    _avg?: ContestantAvgOrderByAggregateInput
    _max?: ContestantMaxOrderByAggregateInput
    _min?: ContestantMinOrderByAggregateInput
    _sum?: ContestantSumOrderByAggregateInput
  }

  export type ContestantScalarWhereWithAggregatesInput = {
    AND?: ContestantScalarWhereWithAggregatesInput | ContestantScalarWhereWithAggregatesInput[]
    OR?: ContestantScalarWhereWithAggregatesInput[]
    NOT?: ContestantScalarWhereWithAggregatesInput | ContestantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Contestant"> | string
    userId?: StringWithAggregatesFilter<"Contestant"> | string
    fullName?: StringWithAggregatesFilter<"Contestant"> | string
    age?: IntWithAggregatesFilter<"Contestant"> | number
    gender?: StringWithAggregatesFilter<"Contestant"> | string
    country?: StringWithAggregatesFilter<"Contestant"> | string
    height?: DecimalWithAggregatesFilter<"Contestant"> | Decimal | DecimalJsLike | number | string
    weight?: DecimalWithAggregatesFilter<"Contestant"> | Decimal | DecimalJsLike | number | string
    bodyType?: StringWithAggregatesFilter<"Contestant"> | string
    eyeColor?: StringWithAggregatesFilter<"Contestant"> | string
    hairColor?: StringWithAggregatesFilter<"Contestant"> | string
    bio?: StringWithAggregatesFilter<"Contestant"> | string
    instagram?: StringNullableWithAggregatesFilter<"Contestant"> | string | null
    portfolioUrl?: StringNullableWithAggregatesFilter<"Contestant"> | string | null
    profileImage?: StringNullableWithAggregatesFilter<"Contestant"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Contestant"> | Date | string
  }

  export type ContestantImageWhereInput = {
    AND?: ContestantImageWhereInput | ContestantImageWhereInput[]
    OR?: ContestantImageWhereInput[]
    NOT?: ContestantImageWhereInput | ContestantImageWhereInput[]
    id?: StringFilter<"ContestantImage"> | string
    contestantId?: StringFilter<"ContestantImage"> | string
    imageUrl?: StringFilter<"ContestantImage"> | string
    imageType?: EnumImageTypeFilter<"ContestantImage"> | $Enums.ImageType
    createdAt?: DateTimeFilter<"ContestantImage"> | Date | string
    contestant?: XOR<ContestantScalarRelationFilter, ContestantWhereInput>
  }

  export type ContestantImageOrderByWithRelationInput = {
    id?: SortOrder
    contestantId?: SortOrder
    imageUrl?: SortOrder
    imageType?: SortOrder
    createdAt?: SortOrder
    contestant?: ContestantOrderByWithRelationInput
  }

  export type ContestantImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContestantImageWhereInput | ContestantImageWhereInput[]
    OR?: ContestantImageWhereInput[]
    NOT?: ContestantImageWhereInput | ContestantImageWhereInput[]
    contestantId?: StringFilter<"ContestantImage"> | string
    imageUrl?: StringFilter<"ContestantImage"> | string
    imageType?: EnumImageTypeFilter<"ContestantImage"> | $Enums.ImageType
    createdAt?: DateTimeFilter<"ContestantImage"> | Date | string
    contestant?: XOR<ContestantScalarRelationFilter, ContestantWhereInput>
  }, "id">

  export type ContestantImageOrderByWithAggregationInput = {
    id?: SortOrder
    contestantId?: SortOrder
    imageUrl?: SortOrder
    imageType?: SortOrder
    createdAt?: SortOrder
    _count?: ContestantImageCountOrderByAggregateInput
    _max?: ContestantImageMaxOrderByAggregateInput
    _min?: ContestantImageMinOrderByAggregateInput
  }

  export type ContestantImageScalarWhereWithAggregatesInput = {
    AND?: ContestantImageScalarWhereWithAggregatesInput | ContestantImageScalarWhereWithAggregatesInput[]
    OR?: ContestantImageScalarWhereWithAggregatesInput[]
    NOT?: ContestantImageScalarWhereWithAggregatesInput | ContestantImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContestantImage"> | string
    contestantId?: StringWithAggregatesFilter<"ContestantImage"> | string
    imageUrl?: StringWithAggregatesFilter<"ContestantImage"> | string
    imageType?: EnumImageTypeWithAggregatesFilter<"ContestantImage"> | $Enums.ImageType
    createdAt?: DateTimeWithAggregatesFilter<"ContestantImage"> | Date | string
  }

  export type CompetitionWhereInput = {
    AND?: CompetitionWhereInput | CompetitionWhereInput[]
    OR?: CompetitionWhereInput[]
    NOT?: CompetitionWhereInput | CompetitionWhereInput[]
    id?: StringFilter<"Competition"> | string
    title?: StringFilter<"Competition"> | string
    description?: StringFilter<"Competition"> | string
    competitionType?: EnumCompetitionTypeFilter<"Competition"> | $Enums.CompetitionType
    startDate?: DateTimeFilter<"Competition"> | Date | string
    endDate?: DateTimeFilter<"Competition"> | Date | string
    status?: EnumCompetitionStatusFilter<"Competition"> | $Enums.CompetitionStatus
    createdAt?: DateTimeFilter<"Competition"> | Date | string
    entries?: CompetitionEntryListRelationFilter
    votes?: VoteListRelationFilter
  }

  export type CompetitionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    competitionType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    entries?: CompetitionEntryOrderByRelationAggregateInput
    votes?: VoteOrderByRelationAggregateInput
  }

  export type CompetitionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CompetitionWhereInput | CompetitionWhereInput[]
    OR?: CompetitionWhereInput[]
    NOT?: CompetitionWhereInput | CompetitionWhereInput[]
    title?: StringFilter<"Competition"> | string
    description?: StringFilter<"Competition"> | string
    competitionType?: EnumCompetitionTypeFilter<"Competition"> | $Enums.CompetitionType
    startDate?: DateTimeFilter<"Competition"> | Date | string
    endDate?: DateTimeFilter<"Competition"> | Date | string
    status?: EnumCompetitionStatusFilter<"Competition"> | $Enums.CompetitionStatus
    createdAt?: DateTimeFilter<"Competition"> | Date | string
    entries?: CompetitionEntryListRelationFilter
    votes?: VoteListRelationFilter
  }, "id">

  export type CompetitionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    competitionType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: CompetitionCountOrderByAggregateInput
    _max?: CompetitionMaxOrderByAggregateInput
    _min?: CompetitionMinOrderByAggregateInput
  }

  export type CompetitionScalarWhereWithAggregatesInput = {
    AND?: CompetitionScalarWhereWithAggregatesInput | CompetitionScalarWhereWithAggregatesInput[]
    OR?: CompetitionScalarWhereWithAggregatesInput[]
    NOT?: CompetitionScalarWhereWithAggregatesInput | CompetitionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Competition"> | string
    title?: StringWithAggregatesFilter<"Competition"> | string
    description?: StringWithAggregatesFilter<"Competition"> | string
    competitionType?: EnumCompetitionTypeWithAggregatesFilter<"Competition"> | $Enums.CompetitionType
    startDate?: DateTimeWithAggregatesFilter<"Competition"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Competition"> | Date | string
    status?: EnumCompetitionStatusWithAggregatesFilter<"Competition"> | $Enums.CompetitionStatus
    createdAt?: DateTimeWithAggregatesFilter<"Competition"> | Date | string
  }

  export type CompetitionEntryWhereInput = {
    AND?: CompetitionEntryWhereInput | CompetitionEntryWhereInput[]
    OR?: CompetitionEntryWhereInput[]
    NOT?: CompetitionEntryWhereInput | CompetitionEntryWhereInput[]
    id?: StringFilter<"CompetitionEntry"> | string
    competitionId?: StringFilter<"CompetitionEntry"> | string
    contestantId?: StringFilter<"CompetitionEntry"> | string
    status?: EnumEntryStatusFilter<"CompetitionEntry"> | $Enums.EntryStatus
    overallScore?: DecimalNullableFilter<"CompetitionEntry"> | Decimal | DecimalJsLike | number | string | null
    voteCount?: IntFilter<"CompetitionEntry"> | number
    rank?: IntNullableFilter<"CompetitionEntry"> | number | null
    createdAt?: DateTimeFilter<"CompetitionEntry"> | Date | string
    competition?: XOR<CompetitionScalarRelationFilter, CompetitionWhereInput>
    contestant?: XOR<ContestantScalarRelationFilter, ContestantWhereInput>
    scoreResult?: XOR<ScoreResultNullableScalarRelationFilter, ScoreResultWhereInput> | null
  }

  export type CompetitionEntryOrderByWithRelationInput = {
    id?: SortOrder
    competitionId?: SortOrder
    contestantId?: SortOrder
    status?: SortOrder
    overallScore?: SortOrderInput | SortOrder
    voteCount?: SortOrder
    rank?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    competition?: CompetitionOrderByWithRelationInput
    contestant?: ContestantOrderByWithRelationInput
    scoreResult?: ScoreResultOrderByWithRelationInput
  }

  export type CompetitionEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    competitionId_contestantId?: CompetitionEntryCompetitionIdContestantIdCompoundUniqueInput
    AND?: CompetitionEntryWhereInput | CompetitionEntryWhereInput[]
    OR?: CompetitionEntryWhereInput[]
    NOT?: CompetitionEntryWhereInput | CompetitionEntryWhereInput[]
    competitionId?: StringFilter<"CompetitionEntry"> | string
    contestantId?: StringFilter<"CompetitionEntry"> | string
    status?: EnumEntryStatusFilter<"CompetitionEntry"> | $Enums.EntryStatus
    overallScore?: DecimalNullableFilter<"CompetitionEntry"> | Decimal | DecimalJsLike | number | string | null
    voteCount?: IntFilter<"CompetitionEntry"> | number
    rank?: IntNullableFilter<"CompetitionEntry"> | number | null
    createdAt?: DateTimeFilter<"CompetitionEntry"> | Date | string
    competition?: XOR<CompetitionScalarRelationFilter, CompetitionWhereInput>
    contestant?: XOR<ContestantScalarRelationFilter, ContestantWhereInput>
    scoreResult?: XOR<ScoreResultNullableScalarRelationFilter, ScoreResultWhereInput> | null
  }, "id" | "competitionId_contestantId">

  export type CompetitionEntryOrderByWithAggregationInput = {
    id?: SortOrder
    competitionId?: SortOrder
    contestantId?: SortOrder
    status?: SortOrder
    overallScore?: SortOrderInput | SortOrder
    voteCount?: SortOrder
    rank?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CompetitionEntryCountOrderByAggregateInput
    _avg?: CompetitionEntryAvgOrderByAggregateInput
    _max?: CompetitionEntryMaxOrderByAggregateInput
    _min?: CompetitionEntryMinOrderByAggregateInput
    _sum?: CompetitionEntrySumOrderByAggregateInput
  }

  export type CompetitionEntryScalarWhereWithAggregatesInput = {
    AND?: CompetitionEntryScalarWhereWithAggregatesInput | CompetitionEntryScalarWhereWithAggregatesInput[]
    OR?: CompetitionEntryScalarWhereWithAggregatesInput[]
    NOT?: CompetitionEntryScalarWhereWithAggregatesInput | CompetitionEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CompetitionEntry"> | string
    competitionId?: StringWithAggregatesFilter<"CompetitionEntry"> | string
    contestantId?: StringWithAggregatesFilter<"CompetitionEntry"> | string
    status?: EnumEntryStatusWithAggregatesFilter<"CompetitionEntry"> | $Enums.EntryStatus
    overallScore?: DecimalNullableWithAggregatesFilter<"CompetitionEntry"> | Decimal | DecimalJsLike | number | string | null
    voteCount?: IntWithAggregatesFilter<"CompetitionEntry"> | number
    rank?: IntNullableWithAggregatesFilter<"CompetitionEntry"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"CompetitionEntry"> | Date | string
  }

  export type VoteWhereInput = {
    AND?: VoteWhereInput | VoteWhereInput[]
    OR?: VoteWhereInput[]
    NOT?: VoteWhereInput | VoteWhereInput[]
    id?: StringFilter<"Vote"> | string
    competitionId?: StringFilter<"Vote"> | string
    contestantId?: StringFilter<"Vote"> | string
    voterId?: StringFilter<"Vote"> | string
    ipHash?: StringNullableFilter<"Vote"> | string | null
    createdAt?: DateTimeFilter<"Vote"> | Date | string
    competition?: XOR<CompetitionScalarRelationFilter, CompetitionWhereInput>
    voter?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type VoteOrderByWithRelationInput = {
    id?: SortOrder
    competitionId?: SortOrder
    contestantId?: SortOrder
    voterId?: SortOrder
    ipHash?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    competition?: CompetitionOrderByWithRelationInput
    voter?: UserOrderByWithRelationInput
  }

  export type VoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    competitionId_voterId?: VoteCompetitionIdVoterIdCompoundUniqueInput
    AND?: VoteWhereInput | VoteWhereInput[]
    OR?: VoteWhereInput[]
    NOT?: VoteWhereInput | VoteWhereInput[]
    competitionId?: StringFilter<"Vote"> | string
    contestantId?: StringFilter<"Vote"> | string
    voterId?: StringFilter<"Vote"> | string
    ipHash?: StringNullableFilter<"Vote"> | string | null
    createdAt?: DateTimeFilter<"Vote"> | Date | string
    competition?: XOR<CompetitionScalarRelationFilter, CompetitionWhereInput>
    voter?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "competitionId_voterId">

  export type VoteOrderByWithAggregationInput = {
    id?: SortOrder
    competitionId?: SortOrder
    contestantId?: SortOrder
    voterId?: SortOrder
    ipHash?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: VoteCountOrderByAggregateInput
    _max?: VoteMaxOrderByAggregateInput
    _min?: VoteMinOrderByAggregateInput
  }

  export type VoteScalarWhereWithAggregatesInput = {
    AND?: VoteScalarWhereWithAggregatesInput | VoteScalarWhereWithAggregatesInput[]
    OR?: VoteScalarWhereWithAggregatesInput[]
    NOT?: VoteScalarWhereWithAggregatesInput | VoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vote"> | string
    competitionId?: StringWithAggregatesFilter<"Vote"> | string
    contestantId?: StringWithAggregatesFilter<"Vote"> | string
    voterId?: StringWithAggregatesFilter<"Vote"> | string
    ipHash?: StringNullableWithAggregatesFilter<"Vote"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Vote"> | Date | string
  }

  export type ScoreResultWhereInput = {
    AND?: ScoreResultWhereInput | ScoreResultWhereInput[]
    OR?: ScoreResultWhereInput[]
    NOT?: ScoreResultWhereInput | ScoreResultWhereInput[]
    id?: StringFilter<"ScoreResult"> | string
    entryId?: StringFilter<"ScoreResult"> | string
    presentationScore?: DecimalFilter<"ScoreResult"> | Decimal | DecimalJsLike | number | string
    confidenceScore?: DecimalFilter<"ScoreResult"> | Decimal | DecimalJsLike | number | string
    stylingScore?: DecimalFilter<"ScoreResult"> | Decimal | DecimalJsLike | number | string
    profileScore?: DecimalFilter<"ScoreResult"> | Decimal | DecimalJsLike | number | string
    professionalismScore?: DecimalFilter<"ScoreResult"> | Decimal | DecimalJsLike | number | string
    overallScore?: DecimalFilter<"ScoreResult"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"ScoreResult"> | Date | string
    entry?: XOR<CompetitionEntryScalarRelationFilter, CompetitionEntryWhereInput>
  }

  export type ScoreResultOrderByWithRelationInput = {
    id?: SortOrder
    entryId?: SortOrder
    presentationScore?: SortOrder
    confidenceScore?: SortOrder
    stylingScore?: SortOrder
    profileScore?: SortOrder
    professionalismScore?: SortOrder
    overallScore?: SortOrder
    createdAt?: SortOrder
    entry?: CompetitionEntryOrderByWithRelationInput
  }

  export type ScoreResultWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    entryId?: string
    AND?: ScoreResultWhereInput | ScoreResultWhereInput[]
    OR?: ScoreResultWhereInput[]
    NOT?: ScoreResultWhereInput | ScoreResultWhereInput[]
    presentationScore?: DecimalFilter<"ScoreResult"> | Decimal | DecimalJsLike | number | string
    confidenceScore?: DecimalFilter<"ScoreResult"> | Decimal | DecimalJsLike | number | string
    stylingScore?: DecimalFilter<"ScoreResult"> | Decimal | DecimalJsLike | number | string
    profileScore?: DecimalFilter<"ScoreResult"> | Decimal | DecimalJsLike | number | string
    professionalismScore?: DecimalFilter<"ScoreResult"> | Decimal | DecimalJsLike | number | string
    overallScore?: DecimalFilter<"ScoreResult"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"ScoreResult"> | Date | string
    entry?: XOR<CompetitionEntryScalarRelationFilter, CompetitionEntryWhereInput>
  }, "id" | "entryId">

  export type ScoreResultOrderByWithAggregationInput = {
    id?: SortOrder
    entryId?: SortOrder
    presentationScore?: SortOrder
    confidenceScore?: SortOrder
    stylingScore?: SortOrder
    profileScore?: SortOrder
    professionalismScore?: SortOrder
    overallScore?: SortOrder
    createdAt?: SortOrder
    _count?: ScoreResultCountOrderByAggregateInput
    _avg?: ScoreResultAvgOrderByAggregateInput
    _max?: ScoreResultMaxOrderByAggregateInput
    _min?: ScoreResultMinOrderByAggregateInput
    _sum?: ScoreResultSumOrderByAggregateInput
  }

  export type ScoreResultScalarWhereWithAggregatesInput = {
    AND?: ScoreResultScalarWhereWithAggregatesInput | ScoreResultScalarWhereWithAggregatesInput[]
    OR?: ScoreResultScalarWhereWithAggregatesInput[]
    NOT?: ScoreResultScalarWhereWithAggregatesInput | ScoreResultScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ScoreResult"> | string
    entryId?: StringWithAggregatesFilter<"ScoreResult"> | string
    presentationScore?: DecimalWithAggregatesFilter<"ScoreResult"> | Decimal | DecimalJsLike | number | string
    confidenceScore?: DecimalWithAggregatesFilter<"ScoreResult"> | Decimal | DecimalJsLike | number | string
    stylingScore?: DecimalWithAggregatesFilter<"ScoreResult"> | Decimal | DecimalJsLike | number | string
    profileScore?: DecimalWithAggregatesFilter<"ScoreResult"> | Decimal | DecimalJsLike | number | string
    professionalismScore?: DecimalWithAggregatesFilter<"ScoreResult"> | Decimal | DecimalJsLike | number | string
    overallScore?: DecimalWithAggregatesFilter<"ScoreResult"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"ScoreResult"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    contestant?: ContestantCreateNestedOneWithoutUserInput
    votes?: VoteCreateNestedManyWithoutVoterInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    contestant?: ContestantUncheckedCreateNestedOneWithoutUserInput
    votes?: VoteUncheckedCreateNestedManyWithoutVoterInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    contestant?: ContestantUpdateOneWithoutUserNestedInput
    votes?: VoteUpdateManyWithoutVoterNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    contestant?: ContestantUncheckedUpdateOneWithoutUserNestedInput
    votes?: VoteUncheckedUpdateManyWithoutVoterNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContestantCreateInput = {
    id?: string
    fullName: string
    age: number
    gender: string
    country: string
    height: Decimal | DecimalJsLike | number | string
    weight: Decimal | DecimalJsLike | number | string
    bodyType: string
    eyeColor: string
    hairColor: string
    bio: string
    instagram?: string | null
    portfolioUrl?: string | null
    profileImage?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutContestantInput
    images?: ContestantImageCreateNestedManyWithoutContestantInput
    entries?: CompetitionEntryCreateNestedManyWithoutContestantInput
  }

  export type ContestantUncheckedCreateInput = {
    id?: string
    userId: string
    fullName: string
    age: number
    gender: string
    country: string
    height: Decimal | DecimalJsLike | number | string
    weight: Decimal | DecimalJsLike | number | string
    bodyType: string
    eyeColor: string
    hairColor: string
    bio: string
    instagram?: string | null
    portfolioUrl?: string | null
    profileImage?: string | null
    createdAt?: Date | string
    images?: ContestantImageUncheckedCreateNestedManyWithoutContestantInput
    entries?: CompetitionEntryUncheckedCreateNestedManyWithoutContestantInput
  }

  export type ContestantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bodyType?: StringFieldUpdateOperationsInput | string
    eyeColor?: StringFieldUpdateOperationsInput | string
    hairColor?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    portfolioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutContestantNestedInput
    images?: ContestantImageUpdateManyWithoutContestantNestedInput
    entries?: CompetitionEntryUpdateManyWithoutContestantNestedInput
  }

  export type ContestantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bodyType?: StringFieldUpdateOperationsInput | string
    eyeColor?: StringFieldUpdateOperationsInput | string
    hairColor?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    portfolioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ContestantImageUncheckedUpdateManyWithoutContestantNestedInput
    entries?: CompetitionEntryUncheckedUpdateManyWithoutContestantNestedInput
  }

  export type ContestantCreateManyInput = {
    id?: string
    userId: string
    fullName: string
    age: number
    gender: string
    country: string
    height: Decimal | DecimalJsLike | number | string
    weight: Decimal | DecimalJsLike | number | string
    bodyType: string
    eyeColor: string
    hairColor: string
    bio: string
    instagram?: string | null
    portfolioUrl?: string | null
    profileImage?: string | null
    createdAt?: Date | string
  }

  export type ContestantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bodyType?: StringFieldUpdateOperationsInput | string
    eyeColor?: StringFieldUpdateOperationsInput | string
    hairColor?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    portfolioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContestantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bodyType?: StringFieldUpdateOperationsInput | string
    eyeColor?: StringFieldUpdateOperationsInput | string
    hairColor?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    portfolioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContestantImageCreateInput = {
    id?: string
    imageUrl: string
    imageType: $Enums.ImageType
    createdAt?: Date | string
    contestant: ContestantCreateNestedOneWithoutImagesInput
  }

  export type ContestantImageUncheckedCreateInput = {
    id?: string
    contestantId: string
    imageUrl: string
    imageType: $Enums.ImageType
    createdAt?: Date | string
  }

  export type ContestantImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageType?: EnumImageTypeFieldUpdateOperationsInput | $Enums.ImageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contestant?: ContestantUpdateOneRequiredWithoutImagesNestedInput
  }

  export type ContestantImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contestantId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageType?: EnumImageTypeFieldUpdateOperationsInput | $Enums.ImageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContestantImageCreateManyInput = {
    id?: string
    contestantId: string
    imageUrl: string
    imageType: $Enums.ImageType
    createdAt?: Date | string
  }

  export type ContestantImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageType?: EnumImageTypeFieldUpdateOperationsInput | $Enums.ImageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContestantImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    contestantId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageType?: EnumImageTypeFieldUpdateOperationsInput | $Enums.ImageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitionCreateInput = {
    id?: string
    title: string
    description: string
    competitionType: $Enums.CompetitionType
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.CompetitionStatus
    createdAt?: Date | string
    entries?: CompetitionEntryCreateNestedManyWithoutCompetitionInput
    votes?: VoteCreateNestedManyWithoutCompetitionInput
  }

  export type CompetitionUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    competitionType: $Enums.CompetitionType
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.CompetitionStatus
    createdAt?: Date | string
    entries?: CompetitionEntryUncheckedCreateNestedManyWithoutCompetitionInput
    votes?: VoteUncheckedCreateNestedManyWithoutCompetitionInput
  }

  export type CompetitionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    competitionType?: EnumCompetitionTypeFieldUpdateOperationsInput | $Enums.CompetitionType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCompetitionStatusFieldUpdateOperationsInput | $Enums.CompetitionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entries?: CompetitionEntryUpdateManyWithoutCompetitionNestedInput
    votes?: VoteUpdateManyWithoutCompetitionNestedInput
  }

  export type CompetitionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    competitionType?: EnumCompetitionTypeFieldUpdateOperationsInput | $Enums.CompetitionType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCompetitionStatusFieldUpdateOperationsInput | $Enums.CompetitionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entries?: CompetitionEntryUncheckedUpdateManyWithoutCompetitionNestedInput
    votes?: VoteUncheckedUpdateManyWithoutCompetitionNestedInput
  }

  export type CompetitionCreateManyInput = {
    id?: string
    title: string
    description: string
    competitionType: $Enums.CompetitionType
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.CompetitionStatus
    createdAt?: Date | string
  }

  export type CompetitionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    competitionType?: EnumCompetitionTypeFieldUpdateOperationsInput | $Enums.CompetitionType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCompetitionStatusFieldUpdateOperationsInput | $Enums.CompetitionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    competitionType?: EnumCompetitionTypeFieldUpdateOperationsInput | $Enums.CompetitionType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCompetitionStatusFieldUpdateOperationsInput | $Enums.CompetitionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitionEntryCreateInput = {
    id?: string
    status?: $Enums.EntryStatus
    overallScore?: Decimal | DecimalJsLike | number | string | null
    voteCount?: number
    rank?: number | null
    createdAt?: Date | string
    competition: CompetitionCreateNestedOneWithoutEntriesInput
    contestant: ContestantCreateNestedOneWithoutEntriesInput
    scoreResult?: ScoreResultCreateNestedOneWithoutEntryInput
  }

  export type CompetitionEntryUncheckedCreateInput = {
    id?: string
    competitionId: string
    contestantId: string
    status?: $Enums.EntryStatus
    overallScore?: Decimal | DecimalJsLike | number | string | null
    voteCount?: number
    rank?: number | null
    createdAt?: Date | string
    scoreResult?: ScoreResultUncheckedCreateNestedOneWithoutEntryInput
  }

  export type CompetitionEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumEntryStatusFieldUpdateOperationsInput | $Enums.EntryStatus
    overallScore?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    voteCount?: IntFieldUpdateOperationsInput | number
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    competition?: CompetitionUpdateOneRequiredWithoutEntriesNestedInput
    contestant?: ContestantUpdateOneRequiredWithoutEntriesNestedInput
    scoreResult?: ScoreResultUpdateOneWithoutEntryNestedInput
  }

  export type CompetitionEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    competitionId?: StringFieldUpdateOperationsInput | string
    contestantId?: StringFieldUpdateOperationsInput | string
    status?: EnumEntryStatusFieldUpdateOperationsInput | $Enums.EntryStatus
    overallScore?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    voteCount?: IntFieldUpdateOperationsInput | number
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scoreResult?: ScoreResultUncheckedUpdateOneWithoutEntryNestedInput
  }

  export type CompetitionEntryCreateManyInput = {
    id?: string
    competitionId: string
    contestantId: string
    status?: $Enums.EntryStatus
    overallScore?: Decimal | DecimalJsLike | number | string | null
    voteCount?: number
    rank?: number | null
    createdAt?: Date | string
  }

  export type CompetitionEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumEntryStatusFieldUpdateOperationsInput | $Enums.EntryStatus
    overallScore?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    voteCount?: IntFieldUpdateOperationsInput | number
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitionEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    competitionId?: StringFieldUpdateOperationsInput | string
    contestantId?: StringFieldUpdateOperationsInput | string
    status?: EnumEntryStatusFieldUpdateOperationsInput | $Enums.EntryStatus
    overallScore?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    voteCount?: IntFieldUpdateOperationsInput | number
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteCreateInput = {
    id?: string
    contestantId: string
    ipHash?: string | null
    createdAt?: Date | string
    competition: CompetitionCreateNestedOneWithoutVotesInput
    voter: UserCreateNestedOneWithoutVotesInput
  }

  export type VoteUncheckedCreateInput = {
    id?: string
    competitionId: string
    contestantId: string
    voterId: string
    ipHash?: string | null
    createdAt?: Date | string
  }

  export type VoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contestantId?: StringFieldUpdateOperationsInput | string
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    competition?: CompetitionUpdateOneRequiredWithoutVotesNestedInput
    voter?: UserUpdateOneRequiredWithoutVotesNestedInput
  }

  export type VoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    competitionId?: StringFieldUpdateOperationsInput | string
    contestantId?: StringFieldUpdateOperationsInput | string
    voterId?: StringFieldUpdateOperationsInput | string
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteCreateManyInput = {
    id?: string
    competitionId: string
    contestantId: string
    voterId: string
    ipHash?: string | null
    createdAt?: Date | string
  }

  export type VoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    contestantId?: StringFieldUpdateOperationsInput | string
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    competitionId?: StringFieldUpdateOperationsInput | string
    contestantId?: StringFieldUpdateOperationsInput | string
    voterId?: StringFieldUpdateOperationsInput | string
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScoreResultCreateInput = {
    id?: string
    presentationScore: Decimal | DecimalJsLike | number | string
    confidenceScore: Decimal | DecimalJsLike | number | string
    stylingScore: Decimal | DecimalJsLike | number | string
    profileScore: Decimal | DecimalJsLike | number | string
    professionalismScore: Decimal | DecimalJsLike | number | string
    overallScore: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    entry: CompetitionEntryCreateNestedOneWithoutScoreResultInput
  }

  export type ScoreResultUncheckedCreateInput = {
    id?: string
    entryId: string
    presentationScore: Decimal | DecimalJsLike | number | string
    confidenceScore: Decimal | DecimalJsLike | number | string
    stylingScore: Decimal | DecimalJsLike | number | string
    profileScore: Decimal | DecimalJsLike | number | string
    professionalismScore: Decimal | DecimalJsLike | number | string
    overallScore: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type ScoreResultUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    presentationScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    confidenceScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stylingScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    profileScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    professionalismScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    overallScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entry?: CompetitionEntryUpdateOneRequiredWithoutScoreResultNestedInput
  }

  export type ScoreResultUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    entryId?: StringFieldUpdateOperationsInput | string
    presentationScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    confidenceScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stylingScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    profileScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    professionalismScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    overallScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScoreResultCreateManyInput = {
    id?: string
    entryId: string
    presentationScore: Decimal | DecimalJsLike | number | string
    confidenceScore: Decimal | DecimalJsLike | number | string
    stylingScore: Decimal | DecimalJsLike | number | string
    profileScore: Decimal | DecimalJsLike | number | string
    professionalismScore: Decimal | DecimalJsLike | number | string
    overallScore: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type ScoreResultUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    presentationScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    confidenceScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stylingScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    profileScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    professionalismScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    overallScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScoreResultUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    entryId?: StringFieldUpdateOperationsInput | string
    presentationScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    confidenceScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stylingScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    profileScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    professionalismScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    overallScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type ContestantNullableScalarRelationFilter = {
    is?: ContestantWhereInput | null
    isNot?: ContestantWhereInput | null
  }

  export type VoteListRelationFilter = {
    every?: VoteWhereInput
    some?: VoteWhereInput
    none?: VoteWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type ContestantImageListRelationFilter = {
    every?: ContestantImageWhereInput
    some?: ContestantImageWhereInput
    none?: ContestantImageWhereInput
  }

  export type CompetitionEntryListRelationFilter = {
    every?: CompetitionEntryWhereInput
    some?: CompetitionEntryWhereInput
    none?: CompetitionEntryWhereInput
  }

  export type ContestantImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompetitionEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContestantCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    country?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    bodyType?: SortOrder
    eyeColor?: SortOrder
    hairColor?: SortOrder
    bio?: SortOrder
    instagram?: SortOrder
    portfolioUrl?: SortOrder
    profileImage?: SortOrder
    createdAt?: SortOrder
  }

  export type ContestantAvgOrderByAggregateInput = {
    age?: SortOrder
    height?: SortOrder
    weight?: SortOrder
  }

  export type ContestantMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    country?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    bodyType?: SortOrder
    eyeColor?: SortOrder
    hairColor?: SortOrder
    bio?: SortOrder
    instagram?: SortOrder
    portfolioUrl?: SortOrder
    profileImage?: SortOrder
    createdAt?: SortOrder
  }

  export type ContestantMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    country?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    bodyType?: SortOrder
    eyeColor?: SortOrder
    hairColor?: SortOrder
    bio?: SortOrder
    instagram?: SortOrder
    portfolioUrl?: SortOrder
    profileImage?: SortOrder
    createdAt?: SortOrder
  }

  export type ContestantSumOrderByAggregateInput = {
    age?: SortOrder
    height?: SortOrder
    weight?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumImageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ImageType | EnumImageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ImageType[] | ListEnumImageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ImageType[] | ListEnumImageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumImageTypeFilter<$PrismaModel> | $Enums.ImageType
  }

  export type ContestantScalarRelationFilter = {
    is?: ContestantWhereInput
    isNot?: ContestantWhereInput
  }

  export type ContestantImageCountOrderByAggregateInput = {
    id?: SortOrder
    contestantId?: SortOrder
    imageUrl?: SortOrder
    imageType?: SortOrder
    createdAt?: SortOrder
  }

  export type ContestantImageMaxOrderByAggregateInput = {
    id?: SortOrder
    contestantId?: SortOrder
    imageUrl?: SortOrder
    imageType?: SortOrder
    createdAt?: SortOrder
  }

  export type ContestantImageMinOrderByAggregateInput = {
    id?: SortOrder
    contestantId?: SortOrder
    imageUrl?: SortOrder
    imageType?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumImageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ImageType | EnumImageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ImageType[] | ListEnumImageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ImageType[] | ListEnumImageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumImageTypeWithAggregatesFilter<$PrismaModel> | $Enums.ImageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumImageTypeFilter<$PrismaModel>
    _max?: NestedEnumImageTypeFilter<$PrismaModel>
  }

  export type EnumCompetitionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CompetitionType | EnumCompetitionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CompetitionType[] | ListEnumCompetitionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CompetitionType[] | ListEnumCompetitionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCompetitionTypeFilter<$PrismaModel> | $Enums.CompetitionType
  }

  export type EnumCompetitionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CompetitionStatus | EnumCompetitionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CompetitionStatus[] | ListEnumCompetitionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CompetitionStatus[] | ListEnumCompetitionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCompetitionStatusFilter<$PrismaModel> | $Enums.CompetitionStatus
  }

  export type CompetitionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    competitionType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type CompetitionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    competitionType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type CompetitionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    competitionType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumCompetitionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CompetitionType | EnumCompetitionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CompetitionType[] | ListEnumCompetitionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CompetitionType[] | ListEnumCompetitionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCompetitionTypeWithAggregatesFilter<$PrismaModel> | $Enums.CompetitionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCompetitionTypeFilter<$PrismaModel>
    _max?: NestedEnumCompetitionTypeFilter<$PrismaModel>
  }

  export type EnumCompetitionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CompetitionStatus | EnumCompetitionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CompetitionStatus[] | ListEnumCompetitionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CompetitionStatus[] | ListEnumCompetitionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCompetitionStatusWithAggregatesFilter<$PrismaModel> | $Enums.CompetitionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCompetitionStatusFilter<$PrismaModel>
    _max?: NestedEnumCompetitionStatusFilter<$PrismaModel>
  }

  export type EnumEntryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EntryStatus | EnumEntryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EntryStatus[] | ListEnumEntryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EntryStatus[] | ListEnumEntryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEntryStatusFilter<$PrismaModel> | $Enums.EntryStatus
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type CompetitionScalarRelationFilter = {
    is?: CompetitionWhereInput
    isNot?: CompetitionWhereInput
  }

  export type ScoreResultNullableScalarRelationFilter = {
    is?: ScoreResultWhereInput | null
    isNot?: ScoreResultWhereInput | null
  }

  export type CompetitionEntryCompetitionIdContestantIdCompoundUniqueInput = {
    competitionId: string
    contestantId: string
  }

  export type CompetitionEntryCountOrderByAggregateInput = {
    id?: SortOrder
    competitionId?: SortOrder
    contestantId?: SortOrder
    status?: SortOrder
    overallScore?: SortOrder
    voteCount?: SortOrder
    rank?: SortOrder
    createdAt?: SortOrder
  }

  export type CompetitionEntryAvgOrderByAggregateInput = {
    overallScore?: SortOrder
    voteCount?: SortOrder
    rank?: SortOrder
  }

  export type CompetitionEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    competitionId?: SortOrder
    contestantId?: SortOrder
    status?: SortOrder
    overallScore?: SortOrder
    voteCount?: SortOrder
    rank?: SortOrder
    createdAt?: SortOrder
  }

  export type CompetitionEntryMinOrderByAggregateInput = {
    id?: SortOrder
    competitionId?: SortOrder
    contestantId?: SortOrder
    status?: SortOrder
    overallScore?: SortOrder
    voteCount?: SortOrder
    rank?: SortOrder
    createdAt?: SortOrder
  }

  export type CompetitionEntrySumOrderByAggregateInput = {
    overallScore?: SortOrder
    voteCount?: SortOrder
    rank?: SortOrder
  }

  export type EnumEntryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EntryStatus | EnumEntryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EntryStatus[] | ListEnumEntryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EntryStatus[] | ListEnumEntryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEntryStatusWithAggregatesFilter<$PrismaModel> | $Enums.EntryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEntryStatusFilter<$PrismaModel>
    _max?: NestedEnumEntryStatusFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type VoteCompetitionIdVoterIdCompoundUniqueInput = {
    competitionId: string
    voterId: string
  }

  export type VoteCountOrderByAggregateInput = {
    id?: SortOrder
    competitionId?: SortOrder
    contestantId?: SortOrder
    voterId?: SortOrder
    ipHash?: SortOrder
    createdAt?: SortOrder
  }

  export type VoteMaxOrderByAggregateInput = {
    id?: SortOrder
    competitionId?: SortOrder
    contestantId?: SortOrder
    voterId?: SortOrder
    ipHash?: SortOrder
    createdAt?: SortOrder
  }

  export type VoteMinOrderByAggregateInput = {
    id?: SortOrder
    competitionId?: SortOrder
    contestantId?: SortOrder
    voterId?: SortOrder
    ipHash?: SortOrder
    createdAt?: SortOrder
  }

  export type CompetitionEntryScalarRelationFilter = {
    is?: CompetitionEntryWhereInput
    isNot?: CompetitionEntryWhereInput
  }

  export type ScoreResultCountOrderByAggregateInput = {
    id?: SortOrder
    entryId?: SortOrder
    presentationScore?: SortOrder
    confidenceScore?: SortOrder
    stylingScore?: SortOrder
    profileScore?: SortOrder
    professionalismScore?: SortOrder
    overallScore?: SortOrder
    createdAt?: SortOrder
  }

  export type ScoreResultAvgOrderByAggregateInput = {
    presentationScore?: SortOrder
    confidenceScore?: SortOrder
    stylingScore?: SortOrder
    profileScore?: SortOrder
    professionalismScore?: SortOrder
    overallScore?: SortOrder
  }

  export type ScoreResultMaxOrderByAggregateInput = {
    id?: SortOrder
    entryId?: SortOrder
    presentationScore?: SortOrder
    confidenceScore?: SortOrder
    stylingScore?: SortOrder
    profileScore?: SortOrder
    professionalismScore?: SortOrder
    overallScore?: SortOrder
    createdAt?: SortOrder
  }

  export type ScoreResultMinOrderByAggregateInput = {
    id?: SortOrder
    entryId?: SortOrder
    presentationScore?: SortOrder
    confidenceScore?: SortOrder
    stylingScore?: SortOrder
    profileScore?: SortOrder
    professionalismScore?: SortOrder
    overallScore?: SortOrder
    createdAt?: SortOrder
  }

  export type ScoreResultSumOrderByAggregateInput = {
    presentationScore?: SortOrder
    confidenceScore?: SortOrder
    stylingScore?: SortOrder
    profileScore?: SortOrder
    professionalismScore?: SortOrder
    overallScore?: SortOrder
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ContestantCreateNestedOneWithoutUserInput = {
    create?: XOR<ContestantCreateWithoutUserInput, ContestantUncheckedCreateWithoutUserInput>
    connectOrCreate?: ContestantCreateOrConnectWithoutUserInput
    connect?: ContestantWhereUniqueInput
  }

  export type VoteCreateNestedManyWithoutVoterInput = {
    create?: XOR<VoteCreateWithoutVoterInput, VoteUncheckedCreateWithoutVoterInput> | VoteCreateWithoutVoterInput[] | VoteUncheckedCreateWithoutVoterInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutVoterInput | VoteCreateOrConnectWithoutVoterInput[]
    createMany?: VoteCreateManyVoterInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ContestantUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ContestantCreateWithoutUserInput, ContestantUncheckedCreateWithoutUserInput>
    connectOrCreate?: ContestantCreateOrConnectWithoutUserInput
    connect?: ContestantWhereUniqueInput
  }

  export type VoteUncheckedCreateNestedManyWithoutVoterInput = {
    create?: XOR<VoteCreateWithoutVoterInput, VoteUncheckedCreateWithoutVoterInput> | VoteCreateWithoutVoterInput[] | VoteUncheckedCreateWithoutVoterInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutVoterInput | VoteCreateOrConnectWithoutVoterInput[]
    createMany?: VoteCreateManyVoterInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type ContestantUpdateOneWithoutUserNestedInput = {
    create?: XOR<ContestantCreateWithoutUserInput, ContestantUncheckedCreateWithoutUserInput>
    connectOrCreate?: ContestantCreateOrConnectWithoutUserInput
    upsert?: ContestantUpsertWithoutUserInput
    disconnect?: ContestantWhereInput | boolean
    delete?: ContestantWhereInput | boolean
    connect?: ContestantWhereUniqueInput
    update?: XOR<XOR<ContestantUpdateToOneWithWhereWithoutUserInput, ContestantUpdateWithoutUserInput>, ContestantUncheckedUpdateWithoutUserInput>
  }

  export type VoteUpdateManyWithoutVoterNestedInput = {
    create?: XOR<VoteCreateWithoutVoterInput, VoteUncheckedCreateWithoutVoterInput> | VoteCreateWithoutVoterInput[] | VoteUncheckedCreateWithoutVoterInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutVoterInput | VoteCreateOrConnectWithoutVoterInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutVoterInput | VoteUpsertWithWhereUniqueWithoutVoterInput[]
    createMany?: VoteCreateManyVoterInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutVoterInput | VoteUpdateWithWhereUniqueWithoutVoterInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutVoterInput | VoteUpdateManyWithWhereWithoutVoterInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type ContestantUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ContestantCreateWithoutUserInput, ContestantUncheckedCreateWithoutUserInput>
    connectOrCreate?: ContestantCreateOrConnectWithoutUserInput
    upsert?: ContestantUpsertWithoutUserInput
    disconnect?: ContestantWhereInput | boolean
    delete?: ContestantWhereInput | boolean
    connect?: ContestantWhereUniqueInput
    update?: XOR<XOR<ContestantUpdateToOneWithWhereWithoutUserInput, ContestantUpdateWithoutUserInput>, ContestantUncheckedUpdateWithoutUserInput>
  }

  export type VoteUncheckedUpdateManyWithoutVoterNestedInput = {
    create?: XOR<VoteCreateWithoutVoterInput, VoteUncheckedCreateWithoutVoterInput> | VoteCreateWithoutVoterInput[] | VoteUncheckedCreateWithoutVoterInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutVoterInput | VoteCreateOrConnectWithoutVoterInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutVoterInput | VoteUpsertWithWhereUniqueWithoutVoterInput[]
    createMany?: VoteCreateManyVoterInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutVoterInput | VoteUpdateWithWhereUniqueWithoutVoterInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutVoterInput | VoteUpdateManyWithWhereWithoutVoterInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutContestantInput = {
    create?: XOR<UserCreateWithoutContestantInput, UserUncheckedCreateWithoutContestantInput>
    connectOrCreate?: UserCreateOrConnectWithoutContestantInput
    connect?: UserWhereUniqueInput
  }

  export type ContestantImageCreateNestedManyWithoutContestantInput = {
    create?: XOR<ContestantImageCreateWithoutContestantInput, ContestantImageUncheckedCreateWithoutContestantInput> | ContestantImageCreateWithoutContestantInput[] | ContestantImageUncheckedCreateWithoutContestantInput[]
    connectOrCreate?: ContestantImageCreateOrConnectWithoutContestantInput | ContestantImageCreateOrConnectWithoutContestantInput[]
    createMany?: ContestantImageCreateManyContestantInputEnvelope
    connect?: ContestantImageWhereUniqueInput | ContestantImageWhereUniqueInput[]
  }

  export type CompetitionEntryCreateNestedManyWithoutContestantInput = {
    create?: XOR<CompetitionEntryCreateWithoutContestantInput, CompetitionEntryUncheckedCreateWithoutContestantInput> | CompetitionEntryCreateWithoutContestantInput[] | CompetitionEntryUncheckedCreateWithoutContestantInput[]
    connectOrCreate?: CompetitionEntryCreateOrConnectWithoutContestantInput | CompetitionEntryCreateOrConnectWithoutContestantInput[]
    createMany?: CompetitionEntryCreateManyContestantInputEnvelope
    connect?: CompetitionEntryWhereUniqueInput | CompetitionEntryWhereUniqueInput[]
  }

  export type ContestantImageUncheckedCreateNestedManyWithoutContestantInput = {
    create?: XOR<ContestantImageCreateWithoutContestantInput, ContestantImageUncheckedCreateWithoutContestantInput> | ContestantImageCreateWithoutContestantInput[] | ContestantImageUncheckedCreateWithoutContestantInput[]
    connectOrCreate?: ContestantImageCreateOrConnectWithoutContestantInput | ContestantImageCreateOrConnectWithoutContestantInput[]
    createMany?: ContestantImageCreateManyContestantInputEnvelope
    connect?: ContestantImageWhereUniqueInput | ContestantImageWhereUniqueInput[]
  }

  export type CompetitionEntryUncheckedCreateNestedManyWithoutContestantInput = {
    create?: XOR<CompetitionEntryCreateWithoutContestantInput, CompetitionEntryUncheckedCreateWithoutContestantInput> | CompetitionEntryCreateWithoutContestantInput[] | CompetitionEntryUncheckedCreateWithoutContestantInput[]
    connectOrCreate?: CompetitionEntryCreateOrConnectWithoutContestantInput | CompetitionEntryCreateOrConnectWithoutContestantInput[]
    createMany?: CompetitionEntryCreateManyContestantInputEnvelope
    connect?: CompetitionEntryWhereUniqueInput | CompetitionEntryWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type UserUpdateOneRequiredWithoutContestantNestedInput = {
    create?: XOR<UserCreateWithoutContestantInput, UserUncheckedCreateWithoutContestantInput>
    connectOrCreate?: UserCreateOrConnectWithoutContestantInput
    upsert?: UserUpsertWithoutContestantInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutContestantInput, UserUpdateWithoutContestantInput>, UserUncheckedUpdateWithoutContestantInput>
  }

  export type ContestantImageUpdateManyWithoutContestantNestedInput = {
    create?: XOR<ContestantImageCreateWithoutContestantInput, ContestantImageUncheckedCreateWithoutContestantInput> | ContestantImageCreateWithoutContestantInput[] | ContestantImageUncheckedCreateWithoutContestantInput[]
    connectOrCreate?: ContestantImageCreateOrConnectWithoutContestantInput | ContestantImageCreateOrConnectWithoutContestantInput[]
    upsert?: ContestantImageUpsertWithWhereUniqueWithoutContestantInput | ContestantImageUpsertWithWhereUniqueWithoutContestantInput[]
    createMany?: ContestantImageCreateManyContestantInputEnvelope
    set?: ContestantImageWhereUniqueInput | ContestantImageWhereUniqueInput[]
    disconnect?: ContestantImageWhereUniqueInput | ContestantImageWhereUniqueInput[]
    delete?: ContestantImageWhereUniqueInput | ContestantImageWhereUniqueInput[]
    connect?: ContestantImageWhereUniqueInput | ContestantImageWhereUniqueInput[]
    update?: ContestantImageUpdateWithWhereUniqueWithoutContestantInput | ContestantImageUpdateWithWhereUniqueWithoutContestantInput[]
    updateMany?: ContestantImageUpdateManyWithWhereWithoutContestantInput | ContestantImageUpdateManyWithWhereWithoutContestantInput[]
    deleteMany?: ContestantImageScalarWhereInput | ContestantImageScalarWhereInput[]
  }

  export type CompetitionEntryUpdateManyWithoutContestantNestedInput = {
    create?: XOR<CompetitionEntryCreateWithoutContestantInput, CompetitionEntryUncheckedCreateWithoutContestantInput> | CompetitionEntryCreateWithoutContestantInput[] | CompetitionEntryUncheckedCreateWithoutContestantInput[]
    connectOrCreate?: CompetitionEntryCreateOrConnectWithoutContestantInput | CompetitionEntryCreateOrConnectWithoutContestantInput[]
    upsert?: CompetitionEntryUpsertWithWhereUniqueWithoutContestantInput | CompetitionEntryUpsertWithWhereUniqueWithoutContestantInput[]
    createMany?: CompetitionEntryCreateManyContestantInputEnvelope
    set?: CompetitionEntryWhereUniqueInput | CompetitionEntryWhereUniqueInput[]
    disconnect?: CompetitionEntryWhereUniqueInput | CompetitionEntryWhereUniqueInput[]
    delete?: CompetitionEntryWhereUniqueInput | CompetitionEntryWhereUniqueInput[]
    connect?: CompetitionEntryWhereUniqueInput | CompetitionEntryWhereUniqueInput[]
    update?: CompetitionEntryUpdateWithWhereUniqueWithoutContestantInput | CompetitionEntryUpdateWithWhereUniqueWithoutContestantInput[]
    updateMany?: CompetitionEntryUpdateManyWithWhereWithoutContestantInput | CompetitionEntryUpdateManyWithWhereWithoutContestantInput[]
    deleteMany?: CompetitionEntryScalarWhereInput | CompetitionEntryScalarWhereInput[]
  }

  export type ContestantImageUncheckedUpdateManyWithoutContestantNestedInput = {
    create?: XOR<ContestantImageCreateWithoutContestantInput, ContestantImageUncheckedCreateWithoutContestantInput> | ContestantImageCreateWithoutContestantInput[] | ContestantImageUncheckedCreateWithoutContestantInput[]
    connectOrCreate?: ContestantImageCreateOrConnectWithoutContestantInput | ContestantImageCreateOrConnectWithoutContestantInput[]
    upsert?: ContestantImageUpsertWithWhereUniqueWithoutContestantInput | ContestantImageUpsertWithWhereUniqueWithoutContestantInput[]
    createMany?: ContestantImageCreateManyContestantInputEnvelope
    set?: ContestantImageWhereUniqueInput | ContestantImageWhereUniqueInput[]
    disconnect?: ContestantImageWhereUniqueInput | ContestantImageWhereUniqueInput[]
    delete?: ContestantImageWhereUniqueInput | ContestantImageWhereUniqueInput[]
    connect?: ContestantImageWhereUniqueInput | ContestantImageWhereUniqueInput[]
    update?: ContestantImageUpdateWithWhereUniqueWithoutContestantInput | ContestantImageUpdateWithWhereUniqueWithoutContestantInput[]
    updateMany?: ContestantImageUpdateManyWithWhereWithoutContestantInput | ContestantImageUpdateManyWithWhereWithoutContestantInput[]
    deleteMany?: ContestantImageScalarWhereInput | ContestantImageScalarWhereInput[]
  }

  export type CompetitionEntryUncheckedUpdateManyWithoutContestantNestedInput = {
    create?: XOR<CompetitionEntryCreateWithoutContestantInput, CompetitionEntryUncheckedCreateWithoutContestantInput> | CompetitionEntryCreateWithoutContestantInput[] | CompetitionEntryUncheckedCreateWithoutContestantInput[]
    connectOrCreate?: CompetitionEntryCreateOrConnectWithoutContestantInput | CompetitionEntryCreateOrConnectWithoutContestantInput[]
    upsert?: CompetitionEntryUpsertWithWhereUniqueWithoutContestantInput | CompetitionEntryUpsertWithWhereUniqueWithoutContestantInput[]
    createMany?: CompetitionEntryCreateManyContestantInputEnvelope
    set?: CompetitionEntryWhereUniqueInput | CompetitionEntryWhereUniqueInput[]
    disconnect?: CompetitionEntryWhereUniqueInput | CompetitionEntryWhereUniqueInput[]
    delete?: CompetitionEntryWhereUniqueInput | CompetitionEntryWhereUniqueInput[]
    connect?: CompetitionEntryWhereUniqueInput | CompetitionEntryWhereUniqueInput[]
    update?: CompetitionEntryUpdateWithWhereUniqueWithoutContestantInput | CompetitionEntryUpdateWithWhereUniqueWithoutContestantInput[]
    updateMany?: CompetitionEntryUpdateManyWithWhereWithoutContestantInput | CompetitionEntryUpdateManyWithWhereWithoutContestantInput[]
    deleteMany?: CompetitionEntryScalarWhereInput | CompetitionEntryScalarWhereInput[]
  }

  export type ContestantCreateNestedOneWithoutImagesInput = {
    create?: XOR<ContestantCreateWithoutImagesInput, ContestantUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ContestantCreateOrConnectWithoutImagesInput
    connect?: ContestantWhereUniqueInput
  }

  export type EnumImageTypeFieldUpdateOperationsInput = {
    set?: $Enums.ImageType
  }

  export type ContestantUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<ContestantCreateWithoutImagesInput, ContestantUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ContestantCreateOrConnectWithoutImagesInput
    upsert?: ContestantUpsertWithoutImagesInput
    connect?: ContestantWhereUniqueInput
    update?: XOR<XOR<ContestantUpdateToOneWithWhereWithoutImagesInput, ContestantUpdateWithoutImagesInput>, ContestantUncheckedUpdateWithoutImagesInput>
  }

  export type CompetitionEntryCreateNestedManyWithoutCompetitionInput = {
    create?: XOR<CompetitionEntryCreateWithoutCompetitionInput, CompetitionEntryUncheckedCreateWithoutCompetitionInput> | CompetitionEntryCreateWithoutCompetitionInput[] | CompetitionEntryUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: CompetitionEntryCreateOrConnectWithoutCompetitionInput | CompetitionEntryCreateOrConnectWithoutCompetitionInput[]
    createMany?: CompetitionEntryCreateManyCompetitionInputEnvelope
    connect?: CompetitionEntryWhereUniqueInput | CompetitionEntryWhereUniqueInput[]
  }

  export type VoteCreateNestedManyWithoutCompetitionInput = {
    create?: XOR<VoteCreateWithoutCompetitionInput, VoteUncheckedCreateWithoutCompetitionInput> | VoteCreateWithoutCompetitionInput[] | VoteUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutCompetitionInput | VoteCreateOrConnectWithoutCompetitionInput[]
    createMany?: VoteCreateManyCompetitionInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type CompetitionEntryUncheckedCreateNestedManyWithoutCompetitionInput = {
    create?: XOR<CompetitionEntryCreateWithoutCompetitionInput, CompetitionEntryUncheckedCreateWithoutCompetitionInput> | CompetitionEntryCreateWithoutCompetitionInput[] | CompetitionEntryUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: CompetitionEntryCreateOrConnectWithoutCompetitionInput | CompetitionEntryCreateOrConnectWithoutCompetitionInput[]
    createMany?: CompetitionEntryCreateManyCompetitionInputEnvelope
    connect?: CompetitionEntryWhereUniqueInput | CompetitionEntryWhereUniqueInput[]
  }

  export type VoteUncheckedCreateNestedManyWithoutCompetitionInput = {
    create?: XOR<VoteCreateWithoutCompetitionInput, VoteUncheckedCreateWithoutCompetitionInput> | VoteCreateWithoutCompetitionInput[] | VoteUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutCompetitionInput | VoteCreateOrConnectWithoutCompetitionInput[]
    createMany?: VoteCreateManyCompetitionInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type EnumCompetitionTypeFieldUpdateOperationsInput = {
    set?: $Enums.CompetitionType
  }

  export type EnumCompetitionStatusFieldUpdateOperationsInput = {
    set?: $Enums.CompetitionStatus
  }

  export type CompetitionEntryUpdateManyWithoutCompetitionNestedInput = {
    create?: XOR<CompetitionEntryCreateWithoutCompetitionInput, CompetitionEntryUncheckedCreateWithoutCompetitionInput> | CompetitionEntryCreateWithoutCompetitionInput[] | CompetitionEntryUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: CompetitionEntryCreateOrConnectWithoutCompetitionInput | CompetitionEntryCreateOrConnectWithoutCompetitionInput[]
    upsert?: CompetitionEntryUpsertWithWhereUniqueWithoutCompetitionInput | CompetitionEntryUpsertWithWhereUniqueWithoutCompetitionInput[]
    createMany?: CompetitionEntryCreateManyCompetitionInputEnvelope
    set?: CompetitionEntryWhereUniqueInput | CompetitionEntryWhereUniqueInput[]
    disconnect?: CompetitionEntryWhereUniqueInput | CompetitionEntryWhereUniqueInput[]
    delete?: CompetitionEntryWhereUniqueInput | CompetitionEntryWhereUniqueInput[]
    connect?: CompetitionEntryWhereUniqueInput | CompetitionEntryWhereUniqueInput[]
    update?: CompetitionEntryUpdateWithWhereUniqueWithoutCompetitionInput | CompetitionEntryUpdateWithWhereUniqueWithoutCompetitionInput[]
    updateMany?: CompetitionEntryUpdateManyWithWhereWithoutCompetitionInput | CompetitionEntryUpdateManyWithWhereWithoutCompetitionInput[]
    deleteMany?: CompetitionEntryScalarWhereInput | CompetitionEntryScalarWhereInput[]
  }

  export type VoteUpdateManyWithoutCompetitionNestedInput = {
    create?: XOR<VoteCreateWithoutCompetitionInput, VoteUncheckedCreateWithoutCompetitionInput> | VoteCreateWithoutCompetitionInput[] | VoteUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutCompetitionInput | VoteCreateOrConnectWithoutCompetitionInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutCompetitionInput | VoteUpsertWithWhereUniqueWithoutCompetitionInput[]
    createMany?: VoteCreateManyCompetitionInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutCompetitionInput | VoteUpdateWithWhereUniqueWithoutCompetitionInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutCompetitionInput | VoteUpdateManyWithWhereWithoutCompetitionInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type CompetitionEntryUncheckedUpdateManyWithoutCompetitionNestedInput = {
    create?: XOR<CompetitionEntryCreateWithoutCompetitionInput, CompetitionEntryUncheckedCreateWithoutCompetitionInput> | CompetitionEntryCreateWithoutCompetitionInput[] | CompetitionEntryUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: CompetitionEntryCreateOrConnectWithoutCompetitionInput | CompetitionEntryCreateOrConnectWithoutCompetitionInput[]
    upsert?: CompetitionEntryUpsertWithWhereUniqueWithoutCompetitionInput | CompetitionEntryUpsertWithWhereUniqueWithoutCompetitionInput[]
    createMany?: CompetitionEntryCreateManyCompetitionInputEnvelope
    set?: CompetitionEntryWhereUniqueInput | CompetitionEntryWhereUniqueInput[]
    disconnect?: CompetitionEntryWhereUniqueInput | CompetitionEntryWhereUniqueInput[]
    delete?: CompetitionEntryWhereUniqueInput | CompetitionEntryWhereUniqueInput[]
    connect?: CompetitionEntryWhereUniqueInput | CompetitionEntryWhereUniqueInput[]
    update?: CompetitionEntryUpdateWithWhereUniqueWithoutCompetitionInput | CompetitionEntryUpdateWithWhereUniqueWithoutCompetitionInput[]
    updateMany?: CompetitionEntryUpdateManyWithWhereWithoutCompetitionInput | CompetitionEntryUpdateManyWithWhereWithoutCompetitionInput[]
    deleteMany?: CompetitionEntryScalarWhereInput | CompetitionEntryScalarWhereInput[]
  }

  export type VoteUncheckedUpdateManyWithoutCompetitionNestedInput = {
    create?: XOR<VoteCreateWithoutCompetitionInput, VoteUncheckedCreateWithoutCompetitionInput> | VoteCreateWithoutCompetitionInput[] | VoteUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutCompetitionInput | VoteCreateOrConnectWithoutCompetitionInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutCompetitionInput | VoteUpsertWithWhereUniqueWithoutCompetitionInput[]
    createMany?: VoteCreateManyCompetitionInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutCompetitionInput | VoteUpdateWithWhereUniqueWithoutCompetitionInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutCompetitionInput | VoteUpdateManyWithWhereWithoutCompetitionInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type CompetitionCreateNestedOneWithoutEntriesInput = {
    create?: XOR<CompetitionCreateWithoutEntriesInput, CompetitionUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: CompetitionCreateOrConnectWithoutEntriesInput
    connect?: CompetitionWhereUniqueInput
  }

  export type ContestantCreateNestedOneWithoutEntriesInput = {
    create?: XOR<ContestantCreateWithoutEntriesInput, ContestantUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: ContestantCreateOrConnectWithoutEntriesInput
    connect?: ContestantWhereUniqueInput
  }

  export type ScoreResultCreateNestedOneWithoutEntryInput = {
    create?: XOR<ScoreResultCreateWithoutEntryInput, ScoreResultUncheckedCreateWithoutEntryInput>
    connectOrCreate?: ScoreResultCreateOrConnectWithoutEntryInput
    connect?: ScoreResultWhereUniqueInput
  }

  export type ScoreResultUncheckedCreateNestedOneWithoutEntryInput = {
    create?: XOR<ScoreResultCreateWithoutEntryInput, ScoreResultUncheckedCreateWithoutEntryInput>
    connectOrCreate?: ScoreResultCreateOrConnectWithoutEntryInput
    connect?: ScoreResultWhereUniqueInput
  }

  export type EnumEntryStatusFieldUpdateOperationsInput = {
    set?: $Enums.EntryStatus
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type CompetitionUpdateOneRequiredWithoutEntriesNestedInput = {
    create?: XOR<CompetitionCreateWithoutEntriesInput, CompetitionUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: CompetitionCreateOrConnectWithoutEntriesInput
    upsert?: CompetitionUpsertWithoutEntriesInput
    connect?: CompetitionWhereUniqueInput
    update?: XOR<XOR<CompetitionUpdateToOneWithWhereWithoutEntriesInput, CompetitionUpdateWithoutEntriesInput>, CompetitionUncheckedUpdateWithoutEntriesInput>
  }

  export type ContestantUpdateOneRequiredWithoutEntriesNestedInput = {
    create?: XOR<ContestantCreateWithoutEntriesInput, ContestantUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: ContestantCreateOrConnectWithoutEntriesInput
    upsert?: ContestantUpsertWithoutEntriesInput
    connect?: ContestantWhereUniqueInput
    update?: XOR<XOR<ContestantUpdateToOneWithWhereWithoutEntriesInput, ContestantUpdateWithoutEntriesInput>, ContestantUncheckedUpdateWithoutEntriesInput>
  }

  export type ScoreResultUpdateOneWithoutEntryNestedInput = {
    create?: XOR<ScoreResultCreateWithoutEntryInput, ScoreResultUncheckedCreateWithoutEntryInput>
    connectOrCreate?: ScoreResultCreateOrConnectWithoutEntryInput
    upsert?: ScoreResultUpsertWithoutEntryInput
    disconnect?: ScoreResultWhereInput | boolean
    delete?: ScoreResultWhereInput | boolean
    connect?: ScoreResultWhereUniqueInput
    update?: XOR<XOR<ScoreResultUpdateToOneWithWhereWithoutEntryInput, ScoreResultUpdateWithoutEntryInput>, ScoreResultUncheckedUpdateWithoutEntryInput>
  }

  export type ScoreResultUncheckedUpdateOneWithoutEntryNestedInput = {
    create?: XOR<ScoreResultCreateWithoutEntryInput, ScoreResultUncheckedCreateWithoutEntryInput>
    connectOrCreate?: ScoreResultCreateOrConnectWithoutEntryInput
    upsert?: ScoreResultUpsertWithoutEntryInput
    disconnect?: ScoreResultWhereInput | boolean
    delete?: ScoreResultWhereInput | boolean
    connect?: ScoreResultWhereUniqueInput
    update?: XOR<XOR<ScoreResultUpdateToOneWithWhereWithoutEntryInput, ScoreResultUpdateWithoutEntryInput>, ScoreResultUncheckedUpdateWithoutEntryInput>
  }

  export type CompetitionCreateNestedOneWithoutVotesInput = {
    create?: XOR<CompetitionCreateWithoutVotesInput, CompetitionUncheckedCreateWithoutVotesInput>
    connectOrCreate?: CompetitionCreateOrConnectWithoutVotesInput
    connect?: CompetitionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutVotesInput = {
    create?: XOR<UserCreateWithoutVotesInput, UserUncheckedCreateWithoutVotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVotesInput
    connect?: UserWhereUniqueInput
  }

  export type CompetitionUpdateOneRequiredWithoutVotesNestedInput = {
    create?: XOR<CompetitionCreateWithoutVotesInput, CompetitionUncheckedCreateWithoutVotesInput>
    connectOrCreate?: CompetitionCreateOrConnectWithoutVotesInput
    upsert?: CompetitionUpsertWithoutVotesInput
    connect?: CompetitionWhereUniqueInput
    update?: XOR<XOR<CompetitionUpdateToOneWithWhereWithoutVotesInput, CompetitionUpdateWithoutVotesInput>, CompetitionUncheckedUpdateWithoutVotesInput>
  }

  export type UserUpdateOneRequiredWithoutVotesNestedInput = {
    create?: XOR<UserCreateWithoutVotesInput, UserUncheckedCreateWithoutVotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVotesInput
    upsert?: UserUpsertWithoutVotesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVotesInput, UserUpdateWithoutVotesInput>, UserUncheckedUpdateWithoutVotesInput>
  }

  export type CompetitionEntryCreateNestedOneWithoutScoreResultInput = {
    create?: XOR<CompetitionEntryCreateWithoutScoreResultInput, CompetitionEntryUncheckedCreateWithoutScoreResultInput>
    connectOrCreate?: CompetitionEntryCreateOrConnectWithoutScoreResultInput
    connect?: CompetitionEntryWhereUniqueInput
  }

  export type CompetitionEntryUpdateOneRequiredWithoutScoreResultNestedInput = {
    create?: XOR<CompetitionEntryCreateWithoutScoreResultInput, CompetitionEntryUncheckedCreateWithoutScoreResultInput>
    connectOrCreate?: CompetitionEntryCreateOrConnectWithoutScoreResultInput
    upsert?: CompetitionEntryUpsertWithoutScoreResultInput
    connect?: CompetitionEntryWhereUniqueInput
    update?: XOR<XOR<CompetitionEntryUpdateToOneWithWhereWithoutScoreResultInput, CompetitionEntryUpdateWithoutScoreResultInput>, CompetitionEntryUncheckedUpdateWithoutScoreResultInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumImageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ImageType | EnumImageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ImageType[] | ListEnumImageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ImageType[] | ListEnumImageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumImageTypeFilter<$PrismaModel> | $Enums.ImageType
  }

  export type NestedEnumImageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ImageType | EnumImageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ImageType[] | ListEnumImageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ImageType[] | ListEnumImageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumImageTypeWithAggregatesFilter<$PrismaModel> | $Enums.ImageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumImageTypeFilter<$PrismaModel>
    _max?: NestedEnumImageTypeFilter<$PrismaModel>
  }

  export type NestedEnumCompetitionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CompetitionType | EnumCompetitionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CompetitionType[] | ListEnumCompetitionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CompetitionType[] | ListEnumCompetitionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCompetitionTypeFilter<$PrismaModel> | $Enums.CompetitionType
  }

  export type NestedEnumCompetitionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CompetitionStatus | EnumCompetitionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CompetitionStatus[] | ListEnumCompetitionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CompetitionStatus[] | ListEnumCompetitionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCompetitionStatusFilter<$PrismaModel> | $Enums.CompetitionStatus
  }

  export type NestedEnumCompetitionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CompetitionType | EnumCompetitionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CompetitionType[] | ListEnumCompetitionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CompetitionType[] | ListEnumCompetitionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCompetitionTypeWithAggregatesFilter<$PrismaModel> | $Enums.CompetitionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCompetitionTypeFilter<$PrismaModel>
    _max?: NestedEnumCompetitionTypeFilter<$PrismaModel>
  }

  export type NestedEnumCompetitionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CompetitionStatus | EnumCompetitionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CompetitionStatus[] | ListEnumCompetitionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CompetitionStatus[] | ListEnumCompetitionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCompetitionStatusWithAggregatesFilter<$PrismaModel> | $Enums.CompetitionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCompetitionStatusFilter<$PrismaModel>
    _max?: NestedEnumCompetitionStatusFilter<$PrismaModel>
  }

  export type NestedEnumEntryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EntryStatus | EnumEntryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EntryStatus[] | ListEnumEntryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EntryStatus[] | ListEnumEntryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEntryStatusFilter<$PrismaModel> | $Enums.EntryStatus
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumEntryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EntryStatus | EnumEntryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EntryStatus[] | ListEnumEntryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EntryStatus[] | ListEnumEntryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEntryStatusWithAggregatesFilter<$PrismaModel> | $Enums.EntryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEntryStatusFilter<$PrismaModel>
    _max?: NestedEnumEntryStatusFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ContestantCreateWithoutUserInput = {
    id?: string
    fullName: string
    age: number
    gender: string
    country: string
    height: Decimal | DecimalJsLike | number | string
    weight: Decimal | DecimalJsLike | number | string
    bodyType: string
    eyeColor: string
    hairColor: string
    bio: string
    instagram?: string | null
    portfolioUrl?: string | null
    profileImage?: string | null
    createdAt?: Date | string
    images?: ContestantImageCreateNestedManyWithoutContestantInput
    entries?: CompetitionEntryCreateNestedManyWithoutContestantInput
  }

  export type ContestantUncheckedCreateWithoutUserInput = {
    id?: string
    fullName: string
    age: number
    gender: string
    country: string
    height: Decimal | DecimalJsLike | number | string
    weight: Decimal | DecimalJsLike | number | string
    bodyType: string
    eyeColor: string
    hairColor: string
    bio: string
    instagram?: string | null
    portfolioUrl?: string | null
    profileImage?: string | null
    createdAt?: Date | string
    images?: ContestantImageUncheckedCreateNestedManyWithoutContestantInput
    entries?: CompetitionEntryUncheckedCreateNestedManyWithoutContestantInput
  }

  export type ContestantCreateOrConnectWithoutUserInput = {
    where: ContestantWhereUniqueInput
    create: XOR<ContestantCreateWithoutUserInput, ContestantUncheckedCreateWithoutUserInput>
  }

  export type VoteCreateWithoutVoterInput = {
    id?: string
    contestantId: string
    ipHash?: string | null
    createdAt?: Date | string
    competition: CompetitionCreateNestedOneWithoutVotesInput
  }

  export type VoteUncheckedCreateWithoutVoterInput = {
    id?: string
    competitionId: string
    contestantId: string
    ipHash?: string | null
    createdAt?: Date | string
  }

  export type VoteCreateOrConnectWithoutVoterInput = {
    where: VoteWhereUniqueInput
    create: XOR<VoteCreateWithoutVoterInput, VoteUncheckedCreateWithoutVoterInput>
  }

  export type VoteCreateManyVoterInputEnvelope = {
    data: VoteCreateManyVoterInput | VoteCreateManyVoterInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type ContestantUpsertWithoutUserInput = {
    update: XOR<ContestantUpdateWithoutUserInput, ContestantUncheckedUpdateWithoutUserInput>
    create: XOR<ContestantCreateWithoutUserInput, ContestantUncheckedCreateWithoutUserInput>
    where?: ContestantWhereInput
  }

  export type ContestantUpdateToOneWithWhereWithoutUserInput = {
    where?: ContestantWhereInput
    data: XOR<ContestantUpdateWithoutUserInput, ContestantUncheckedUpdateWithoutUserInput>
  }

  export type ContestantUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bodyType?: StringFieldUpdateOperationsInput | string
    eyeColor?: StringFieldUpdateOperationsInput | string
    hairColor?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    portfolioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ContestantImageUpdateManyWithoutContestantNestedInput
    entries?: CompetitionEntryUpdateManyWithoutContestantNestedInput
  }

  export type ContestantUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bodyType?: StringFieldUpdateOperationsInput | string
    eyeColor?: StringFieldUpdateOperationsInput | string
    hairColor?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    portfolioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ContestantImageUncheckedUpdateManyWithoutContestantNestedInput
    entries?: CompetitionEntryUncheckedUpdateManyWithoutContestantNestedInput
  }

  export type VoteUpsertWithWhereUniqueWithoutVoterInput = {
    where: VoteWhereUniqueInput
    update: XOR<VoteUpdateWithoutVoterInput, VoteUncheckedUpdateWithoutVoterInput>
    create: XOR<VoteCreateWithoutVoterInput, VoteUncheckedCreateWithoutVoterInput>
  }

  export type VoteUpdateWithWhereUniqueWithoutVoterInput = {
    where: VoteWhereUniqueInput
    data: XOR<VoteUpdateWithoutVoterInput, VoteUncheckedUpdateWithoutVoterInput>
  }

  export type VoteUpdateManyWithWhereWithoutVoterInput = {
    where: VoteScalarWhereInput
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyWithoutVoterInput>
  }

  export type VoteScalarWhereInput = {
    AND?: VoteScalarWhereInput | VoteScalarWhereInput[]
    OR?: VoteScalarWhereInput[]
    NOT?: VoteScalarWhereInput | VoteScalarWhereInput[]
    id?: StringFilter<"Vote"> | string
    competitionId?: StringFilter<"Vote"> | string
    contestantId?: StringFilter<"Vote"> | string
    voterId?: StringFilter<"Vote"> | string
    ipHash?: StringNullableFilter<"Vote"> | string | null
    createdAt?: DateTimeFilter<"Vote"> | Date | string
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    contestant?: ContestantCreateNestedOneWithoutUserInput
    votes?: VoteCreateNestedManyWithoutVoterInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    contestant?: ContestantUncheckedCreateNestedOneWithoutUserInput
    votes?: VoteUncheckedCreateNestedManyWithoutVoterInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    contestant?: ContestantUpdateOneWithoutUserNestedInput
    votes?: VoteUpdateManyWithoutVoterNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    contestant?: ContestantUncheckedUpdateOneWithoutUserNestedInput
    votes?: VoteUncheckedUpdateManyWithoutVoterNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    contestant?: ContestantCreateNestedOneWithoutUserInput
    votes?: VoteCreateNestedManyWithoutVoterInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    contestant?: ContestantUncheckedCreateNestedOneWithoutUserInput
    votes?: VoteUncheckedCreateNestedManyWithoutVoterInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    contestant?: ContestantUpdateOneWithoutUserNestedInput
    votes?: VoteUpdateManyWithoutVoterNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    contestant?: ContestantUncheckedUpdateOneWithoutUserNestedInput
    votes?: VoteUncheckedUpdateManyWithoutVoterNestedInput
  }

  export type UserCreateWithoutContestantInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    votes?: VoteCreateNestedManyWithoutVoterInput
  }

  export type UserUncheckedCreateWithoutContestantInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    votes?: VoteUncheckedCreateNestedManyWithoutVoterInput
  }

  export type UserCreateOrConnectWithoutContestantInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutContestantInput, UserUncheckedCreateWithoutContestantInput>
  }

  export type ContestantImageCreateWithoutContestantInput = {
    id?: string
    imageUrl: string
    imageType: $Enums.ImageType
    createdAt?: Date | string
  }

  export type ContestantImageUncheckedCreateWithoutContestantInput = {
    id?: string
    imageUrl: string
    imageType: $Enums.ImageType
    createdAt?: Date | string
  }

  export type ContestantImageCreateOrConnectWithoutContestantInput = {
    where: ContestantImageWhereUniqueInput
    create: XOR<ContestantImageCreateWithoutContestantInput, ContestantImageUncheckedCreateWithoutContestantInput>
  }

  export type ContestantImageCreateManyContestantInputEnvelope = {
    data: ContestantImageCreateManyContestantInput | ContestantImageCreateManyContestantInput[]
    skipDuplicates?: boolean
  }

  export type CompetitionEntryCreateWithoutContestantInput = {
    id?: string
    status?: $Enums.EntryStatus
    overallScore?: Decimal | DecimalJsLike | number | string | null
    voteCount?: number
    rank?: number | null
    createdAt?: Date | string
    competition: CompetitionCreateNestedOneWithoutEntriesInput
    scoreResult?: ScoreResultCreateNestedOneWithoutEntryInput
  }

  export type CompetitionEntryUncheckedCreateWithoutContestantInput = {
    id?: string
    competitionId: string
    status?: $Enums.EntryStatus
    overallScore?: Decimal | DecimalJsLike | number | string | null
    voteCount?: number
    rank?: number | null
    createdAt?: Date | string
    scoreResult?: ScoreResultUncheckedCreateNestedOneWithoutEntryInput
  }

  export type CompetitionEntryCreateOrConnectWithoutContestantInput = {
    where: CompetitionEntryWhereUniqueInput
    create: XOR<CompetitionEntryCreateWithoutContestantInput, CompetitionEntryUncheckedCreateWithoutContestantInput>
  }

  export type CompetitionEntryCreateManyContestantInputEnvelope = {
    data: CompetitionEntryCreateManyContestantInput | CompetitionEntryCreateManyContestantInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutContestantInput = {
    update: XOR<UserUpdateWithoutContestantInput, UserUncheckedUpdateWithoutContestantInput>
    create: XOR<UserCreateWithoutContestantInput, UserUncheckedCreateWithoutContestantInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutContestantInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutContestantInput, UserUncheckedUpdateWithoutContestantInput>
  }

  export type UserUpdateWithoutContestantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    votes?: VoteUpdateManyWithoutVoterNestedInput
  }

  export type UserUncheckedUpdateWithoutContestantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    votes?: VoteUncheckedUpdateManyWithoutVoterNestedInput
  }

  export type ContestantImageUpsertWithWhereUniqueWithoutContestantInput = {
    where: ContestantImageWhereUniqueInput
    update: XOR<ContestantImageUpdateWithoutContestantInput, ContestantImageUncheckedUpdateWithoutContestantInput>
    create: XOR<ContestantImageCreateWithoutContestantInput, ContestantImageUncheckedCreateWithoutContestantInput>
  }

  export type ContestantImageUpdateWithWhereUniqueWithoutContestantInput = {
    where: ContestantImageWhereUniqueInput
    data: XOR<ContestantImageUpdateWithoutContestantInput, ContestantImageUncheckedUpdateWithoutContestantInput>
  }

  export type ContestantImageUpdateManyWithWhereWithoutContestantInput = {
    where: ContestantImageScalarWhereInput
    data: XOR<ContestantImageUpdateManyMutationInput, ContestantImageUncheckedUpdateManyWithoutContestantInput>
  }

  export type ContestantImageScalarWhereInput = {
    AND?: ContestantImageScalarWhereInput | ContestantImageScalarWhereInput[]
    OR?: ContestantImageScalarWhereInput[]
    NOT?: ContestantImageScalarWhereInput | ContestantImageScalarWhereInput[]
    id?: StringFilter<"ContestantImage"> | string
    contestantId?: StringFilter<"ContestantImage"> | string
    imageUrl?: StringFilter<"ContestantImage"> | string
    imageType?: EnumImageTypeFilter<"ContestantImage"> | $Enums.ImageType
    createdAt?: DateTimeFilter<"ContestantImage"> | Date | string
  }

  export type CompetitionEntryUpsertWithWhereUniqueWithoutContestantInput = {
    where: CompetitionEntryWhereUniqueInput
    update: XOR<CompetitionEntryUpdateWithoutContestantInput, CompetitionEntryUncheckedUpdateWithoutContestantInput>
    create: XOR<CompetitionEntryCreateWithoutContestantInput, CompetitionEntryUncheckedCreateWithoutContestantInput>
  }

  export type CompetitionEntryUpdateWithWhereUniqueWithoutContestantInput = {
    where: CompetitionEntryWhereUniqueInput
    data: XOR<CompetitionEntryUpdateWithoutContestantInput, CompetitionEntryUncheckedUpdateWithoutContestantInput>
  }

  export type CompetitionEntryUpdateManyWithWhereWithoutContestantInput = {
    where: CompetitionEntryScalarWhereInput
    data: XOR<CompetitionEntryUpdateManyMutationInput, CompetitionEntryUncheckedUpdateManyWithoutContestantInput>
  }

  export type CompetitionEntryScalarWhereInput = {
    AND?: CompetitionEntryScalarWhereInput | CompetitionEntryScalarWhereInput[]
    OR?: CompetitionEntryScalarWhereInput[]
    NOT?: CompetitionEntryScalarWhereInput | CompetitionEntryScalarWhereInput[]
    id?: StringFilter<"CompetitionEntry"> | string
    competitionId?: StringFilter<"CompetitionEntry"> | string
    contestantId?: StringFilter<"CompetitionEntry"> | string
    status?: EnumEntryStatusFilter<"CompetitionEntry"> | $Enums.EntryStatus
    overallScore?: DecimalNullableFilter<"CompetitionEntry"> | Decimal | DecimalJsLike | number | string | null
    voteCount?: IntFilter<"CompetitionEntry"> | number
    rank?: IntNullableFilter<"CompetitionEntry"> | number | null
    createdAt?: DateTimeFilter<"CompetitionEntry"> | Date | string
  }

  export type ContestantCreateWithoutImagesInput = {
    id?: string
    fullName: string
    age: number
    gender: string
    country: string
    height: Decimal | DecimalJsLike | number | string
    weight: Decimal | DecimalJsLike | number | string
    bodyType: string
    eyeColor: string
    hairColor: string
    bio: string
    instagram?: string | null
    portfolioUrl?: string | null
    profileImage?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutContestantInput
    entries?: CompetitionEntryCreateNestedManyWithoutContestantInput
  }

  export type ContestantUncheckedCreateWithoutImagesInput = {
    id?: string
    userId: string
    fullName: string
    age: number
    gender: string
    country: string
    height: Decimal | DecimalJsLike | number | string
    weight: Decimal | DecimalJsLike | number | string
    bodyType: string
    eyeColor: string
    hairColor: string
    bio: string
    instagram?: string | null
    portfolioUrl?: string | null
    profileImage?: string | null
    createdAt?: Date | string
    entries?: CompetitionEntryUncheckedCreateNestedManyWithoutContestantInput
  }

  export type ContestantCreateOrConnectWithoutImagesInput = {
    where: ContestantWhereUniqueInput
    create: XOR<ContestantCreateWithoutImagesInput, ContestantUncheckedCreateWithoutImagesInput>
  }

  export type ContestantUpsertWithoutImagesInput = {
    update: XOR<ContestantUpdateWithoutImagesInput, ContestantUncheckedUpdateWithoutImagesInput>
    create: XOR<ContestantCreateWithoutImagesInput, ContestantUncheckedCreateWithoutImagesInput>
    where?: ContestantWhereInput
  }

  export type ContestantUpdateToOneWithWhereWithoutImagesInput = {
    where?: ContestantWhereInput
    data: XOR<ContestantUpdateWithoutImagesInput, ContestantUncheckedUpdateWithoutImagesInput>
  }

  export type ContestantUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bodyType?: StringFieldUpdateOperationsInput | string
    eyeColor?: StringFieldUpdateOperationsInput | string
    hairColor?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    portfolioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutContestantNestedInput
    entries?: CompetitionEntryUpdateManyWithoutContestantNestedInput
  }

  export type ContestantUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bodyType?: StringFieldUpdateOperationsInput | string
    eyeColor?: StringFieldUpdateOperationsInput | string
    hairColor?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    portfolioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entries?: CompetitionEntryUncheckedUpdateManyWithoutContestantNestedInput
  }

  export type CompetitionEntryCreateWithoutCompetitionInput = {
    id?: string
    status?: $Enums.EntryStatus
    overallScore?: Decimal | DecimalJsLike | number | string | null
    voteCount?: number
    rank?: number | null
    createdAt?: Date | string
    contestant: ContestantCreateNestedOneWithoutEntriesInput
    scoreResult?: ScoreResultCreateNestedOneWithoutEntryInput
  }

  export type CompetitionEntryUncheckedCreateWithoutCompetitionInput = {
    id?: string
    contestantId: string
    status?: $Enums.EntryStatus
    overallScore?: Decimal | DecimalJsLike | number | string | null
    voteCount?: number
    rank?: number | null
    createdAt?: Date | string
    scoreResult?: ScoreResultUncheckedCreateNestedOneWithoutEntryInput
  }

  export type CompetitionEntryCreateOrConnectWithoutCompetitionInput = {
    where: CompetitionEntryWhereUniqueInput
    create: XOR<CompetitionEntryCreateWithoutCompetitionInput, CompetitionEntryUncheckedCreateWithoutCompetitionInput>
  }

  export type CompetitionEntryCreateManyCompetitionInputEnvelope = {
    data: CompetitionEntryCreateManyCompetitionInput | CompetitionEntryCreateManyCompetitionInput[]
    skipDuplicates?: boolean
  }

  export type VoteCreateWithoutCompetitionInput = {
    id?: string
    contestantId: string
    ipHash?: string | null
    createdAt?: Date | string
    voter: UserCreateNestedOneWithoutVotesInput
  }

  export type VoteUncheckedCreateWithoutCompetitionInput = {
    id?: string
    contestantId: string
    voterId: string
    ipHash?: string | null
    createdAt?: Date | string
  }

  export type VoteCreateOrConnectWithoutCompetitionInput = {
    where: VoteWhereUniqueInput
    create: XOR<VoteCreateWithoutCompetitionInput, VoteUncheckedCreateWithoutCompetitionInput>
  }

  export type VoteCreateManyCompetitionInputEnvelope = {
    data: VoteCreateManyCompetitionInput | VoteCreateManyCompetitionInput[]
    skipDuplicates?: boolean
  }

  export type CompetitionEntryUpsertWithWhereUniqueWithoutCompetitionInput = {
    where: CompetitionEntryWhereUniqueInput
    update: XOR<CompetitionEntryUpdateWithoutCompetitionInput, CompetitionEntryUncheckedUpdateWithoutCompetitionInput>
    create: XOR<CompetitionEntryCreateWithoutCompetitionInput, CompetitionEntryUncheckedCreateWithoutCompetitionInput>
  }

  export type CompetitionEntryUpdateWithWhereUniqueWithoutCompetitionInput = {
    where: CompetitionEntryWhereUniqueInput
    data: XOR<CompetitionEntryUpdateWithoutCompetitionInput, CompetitionEntryUncheckedUpdateWithoutCompetitionInput>
  }

  export type CompetitionEntryUpdateManyWithWhereWithoutCompetitionInput = {
    where: CompetitionEntryScalarWhereInput
    data: XOR<CompetitionEntryUpdateManyMutationInput, CompetitionEntryUncheckedUpdateManyWithoutCompetitionInput>
  }

  export type VoteUpsertWithWhereUniqueWithoutCompetitionInput = {
    where: VoteWhereUniqueInput
    update: XOR<VoteUpdateWithoutCompetitionInput, VoteUncheckedUpdateWithoutCompetitionInput>
    create: XOR<VoteCreateWithoutCompetitionInput, VoteUncheckedCreateWithoutCompetitionInput>
  }

  export type VoteUpdateWithWhereUniqueWithoutCompetitionInput = {
    where: VoteWhereUniqueInput
    data: XOR<VoteUpdateWithoutCompetitionInput, VoteUncheckedUpdateWithoutCompetitionInput>
  }

  export type VoteUpdateManyWithWhereWithoutCompetitionInput = {
    where: VoteScalarWhereInput
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyWithoutCompetitionInput>
  }

  export type CompetitionCreateWithoutEntriesInput = {
    id?: string
    title: string
    description: string
    competitionType: $Enums.CompetitionType
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.CompetitionStatus
    createdAt?: Date | string
    votes?: VoteCreateNestedManyWithoutCompetitionInput
  }

  export type CompetitionUncheckedCreateWithoutEntriesInput = {
    id?: string
    title: string
    description: string
    competitionType: $Enums.CompetitionType
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.CompetitionStatus
    createdAt?: Date | string
    votes?: VoteUncheckedCreateNestedManyWithoutCompetitionInput
  }

  export type CompetitionCreateOrConnectWithoutEntriesInput = {
    where: CompetitionWhereUniqueInput
    create: XOR<CompetitionCreateWithoutEntriesInput, CompetitionUncheckedCreateWithoutEntriesInput>
  }

  export type ContestantCreateWithoutEntriesInput = {
    id?: string
    fullName: string
    age: number
    gender: string
    country: string
    height: Decimal | DecimalJsLike | number | string
    weight: Decimal | DecimalJsLike | number | string
    bodyType: string
    eyeColor: string
    hairColor: string
    bio: string
    instagram?: string | null
    portfolioUrl?: string | null
    profileImage?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutContestantInput
    images?: ContestantImageCreateNestedManyWithoutContestantInput
  }

  export type ContestantUncheckedCreateWithoutEntriesInput = {
    id?: string
    userId: string
    fullName: string
    age: number
    gender: string
    country: string
    height: Decimal | DecimalJsLike | number | string
    weight: Decimal | DecimalJsLike | number | string
    bodyType: string
    eyeColor: string
    hairColor: string
    bio: string
    instagram?: string | null
    portfolioUrl?: string | null
    profileImage?: string | null
    createdAt?: Date | string
    images?: ContestantImageUncheckedCreateNestedManyWithoutContestantInput
  }

  export type ContestantCreateOrConnectWithoutEntriesInput = {
    where: ContestantWhereUniqueInput
    create: XOR<ContestantCreateWithoutEntriesInput, ContestantUncheckedCreateWithoutEntriesInput>
  }

  export type ScoreResultCreateWithoutEntryInput = {
    id?: string
    presentationScore: Decimal | DecimalJsLike | number | string
    confidenceScore: Decimal | DecimalJsLike | number | string
    stylingScore: Decimal | DecimalJsLike | number | string
    profileScore: Decimal | DecimalJsLike | number | string
    professionalismScore: Decimal | DecimalJsLike | number | string
    overallScore: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type ScoreResultUncheckedCreateWithoutEntryInput = {
    id?: string
    presentationScore: Decimal | DecimalJsLike | number | string
    confidenceScore: Decimal | DecimalJsLike | number | string
    stylingScore: Decimal | DecimalJsLike | number | string
    profileScore: Decimal | DecimalJsLike | number | string
    professionalismScore: Decimal | DecimalJsLike | number | string
    overallScore: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type ScoreResultCreateOrConnectWithoutEntryInput = {
    where: ScoreResultWhereUniqueInput
    create: XOR<ScoreResultCreateWithoutEntryInput, ScoreResultUncheckedCreateWithoutEntryInput>
  }

  export type CompetitionUpsertWithoutEntriesInput = {
    update: XOR<CompetitionUpdateWithoutEntriesInput, CompetitionUncheckedUpdateWithoutEntriesInput>
    create: XOR<CompetitionCreateWithoutEntriesInput, CompetitionUncheckedCreateWithoutEntriesInput>
    where?: CompetitionWhereInput
  }

  export type CompetitionUpdateToOneWithWhereWithoutEntriesInput = {
    where?: CompetitionWhereInput
    data: XOR<CompetitionUpdateWithoutEntriesInput, CompetitionUncheckedUpdateWithoutEntriesInput>
  }

  export type CompetitionUpdateWithoutEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    competitionType?: EnumCompetitionTypeFieldUpdateOperationsInput | $Enums.CompetitionType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCompetitionStatusFieldUpdateOperationsInput | $Enums.CompetitionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: VoteUpdateManyWithoutCompetitionNestedInput
  }

  export type CompetitionUncheckedUpdateWithoutEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    competitionType?: EnumCompetitionTypeFieldUpdateOperationsInput | $Enums.CompetitionType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCompetitionStatusFieldUpdateOperationsInput | $Enums.CompetitionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: VoteUncheckedUpdateManyWithoutCompetitionNestedInput
  }

  export type ContestantUpsertWithoutEntriesInput = {
    update: XOR<ContestantUpdateWithoutEntriesInput, ContestantUncheckedUpdateWithoutEntriesInput>
    create: XOR<ContestantCreateWithoutEntriesInput, ContestantUncheckedCreateWithoutEntriesInput>
    where?: ContestantWhereInput
  }

  export type ContestantUpdateToOneWithWhereWithoutEntriesInput = {
    where?: ContestantWhereInput
    data: XOR<ContestantUpdateWithoutEntriesInput, ContestantUncheckedUpdateWithoutEntriesInput>
  }

  export type ContestantUpdateWithoutEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bodyType?: StringFieldUpdateOperationsInput | string
    eyeColor?: StringFieldUpdateOperationsInput | string
    hairColor?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    portfolioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutContestantNestedInput
    images?: ContestantImageUpdateManyWithoutContestantNestedInput
  }

  export type ContestantUncheckedUpdateWithoutEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    height?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bodyType?: StringFieldUpdateOperationsInput | string
    eyeColor?: StringFieldUpdateOperationsInput | string
    hairColor?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    portfolioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ContestantImageUncheckedUpdateManyWithoutContestantNestedInput
  }

  export type ScoreResultUpsertWithoutEntryInput = {
    update: XOR<ScoreResultUpdateWithoutEntryInput, ScoreResultUncheckedUpdateWithoutEntryInput>
    create: XOR<ScoreResultCreateWithoutEntryInput, ScoreResultUncheckedCreateWithoutEntryInput>
    where?: ScoreResultWhereInput
  }

  export type ScoreResultUpdateToOneWithWhereWithoutEntryInput = {
    where?: ScoreResultWhereInput
    data: XOR<ScoreResultUpdateWithoutEntryInput, ScoreResultUncheckedUpdateWithoutEntryInput>
  }

  export type ScoreResultUpdateWithoutEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    presentationScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    confidenceScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stylingScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    profileScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    professionalismScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    overallScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScoreResultUncheckedUpdateWithoutEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    presentationScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    confidenceScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stylingScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    profileScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    professionalismScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    overallScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitionCreateWithoutVotesInput = {
    id?: string
    title: string
    description: string
    competitionType: $Enums.CompetitionType
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.CompetitionStatus
    createdAt?: Date | string
    entries?: CompetitionEntryCreateNestedManyWithoutCompetitionInput
  }

  export type CompetitionUncheckedCreateWithoutVotesInput = {
    id?: string
    title: string
    description: string
    competitionType: $Enums.CompetitionType
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.CompetitionStatus
    createdAt?: Date | string
    entries?: CompetitionEntryUncheckedCreateNestedManyWithoutCompetitionInput
  }

  export type CompetitionCreateOrConnectWithoutVotesInput = {
    where: CompetitionWhereUniqueInput
    create: XOR<CompetitionCreateWithoutVotesInput, CompetitionUncheckedCreateWithoutVotesInput>
  }

  export type UserCreateWithoutVotesInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    contestant?: ContestantCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVotesInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    contestant?: ContestantUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVotesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVotesInput, UserUncheckedCreateWithoutVotesInput>
  }

  export type CompetitionUpsertWithoutVotesInput = {
    update: XOR<CompetitionUpdateWithoutVotesInput, CompetitionUncheckedUpdateWithoutVotesInput>
    create: XOR<CompetitionCreateWithoutVotesInput, CompetitionUncheckedCreateWithoutVotesInput>
    where?: CompetitionWhereInput
  }

  export type CompetitionUpdateToOneWithWhereWithoutVotesInput = {
    where?: CompetitionWhereInput
    data: XOR<CompetitionUpdateWithoutVotesInput, CompetitionUncheckedUpdateWithoutVotesInput>
  }

  export type CompetitionUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    competitionType?: EnumCompetitionTypeFieldUpdateOperationsInput | $Enums.CompetitionType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCompetitionStatusFieldUpdateOperationsInput | $Enums.CompetitionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entries?: CompetitionEntryUpdateManyWithoutCompetitionNestedInput
  }

  export type CompetitionUncheckedUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    competitionType?: EnumCompetitionTypeFieldUpdateOperationsInput | $Enums.CompetitionType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCompetitionStatusFieldUpdateOperationsInput | $Enums.CompetitionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entries?: CompetitionEntryUncheckedUpdateManyWithoutCompetitionNestedInput
  }

  export type UserUpsertWithoutVotesInput = {
    update: XOR<UserUpdateWithoutVotesInput, UserUncheckedUpdateWithoutVotesInput>
    create: XOR<UserCreateWithoutVotesInput, UserUncheckedCreateWithoutVotesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVotesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVotesInput, UserUncheckedUpdateWithoutVotesInput>
  }

  export type UserUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    contestant?: ContestantUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    contestant?: ContestantUncheckedUpdateOneWithoutUserNestedInput
  }

  export type CompetitionEntryCreateWithoutScoreResultInput = {
    id?: string
    status?: $Enums.EntryStatus
    overallScore?: Decimal | DecimalJsLike | number | string | null
    voteCount?: number
    rank?: number | null
    createdAt?: Date | string
    competition: CompetitionCreateNestedOneWithoutEntriesInput
    contestant: ContestantCreateNestedOneWithoutEntriesInput
  }

  export type CompetitionEntryUncheckedCreateWithoutScoreResultInput = {
    id?: string
    competitionId: string
    contestantId: string
    status?: $Enums.EntryStatus
    overallScore?: Decimal | DecimalJsLike | number | string | null
    voteCount?: number
    rank?: number | null
    createdAt?: Date | string
  }

  export type CompetitionEntryCreateOrConnectWithoutScoreResultInput = {
    where: CompetitionEntryWhereUniqueInput
    create: XOR<CompetitionEntryCreateWithoutScoreResultInput, CompetitionEntryUncheckedCreateWithoutScoreResultInput>
  }

  export type CompetitionEntryUpsertWithoutScoreResultInput = {
    update: XOR<CompetitionEntryUpdateWithoutScoreResultInput, CompetitionEntryUncheckedUpdateWithoutScoreResultInput>
    create: XOR<CompetitionEntryCreateWithoutScoreResultInput, CompetitionEntryUncheckedCreateWithoutScoreResultInput>
    where?: CompetitionEntryWhereInput
  }

  export type CompetitionEntryUpdateToOneWithWhereWithoutScoreResultInput = {
    where?: CompetitionEntryWhereInput
    data: XOR<CompetitionEntryUpdateWithoutScoreResultInput, CompetitionEntryUncheckedUpdateWithoutScoreResultInput>
  }

  export type CompetitionEntryUpdateWithoutScoreResultInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumEntryStatusFieldUpdateOperationsInput | $Enums.EntryStatus
    overallScore?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    voteCount?: IntFieldUpdateOperationsInput | number
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    competition?: CompetitionUpdateOneRequiredWithoutEntriesNestedInput
    contestant?: ContestantUpdateOneRequiredWithoutEntriesNestedInput
  }

  export type CompetitionEntryUncheckedUpdateWithoutScoreResultInput = {
    id?: StringFieldUpdateOperationsInput | string
    competitionId?: StringFieldUpdateOperationsInput | string
    contestantId?: StringFieldUpdateOperationsInput | string
    status?: EnumEntryStatusFieldUpdateOperationsInput | $Enums.EntryStatus
    overallScore?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    voteCount?: IntFieldUpdateOperationsInput | number
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type VoteCreateManyVoterInput = {
    id?: string
    competitionId: string
    contestantId: string
    ipHash?: string | null
    createdAt?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteUpdateWithoutVoterInput = {
    id?: StringFieldUpdateOperationsInput | string
    contestantId?: StringFieldUpdateOperationsInput | string
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    competition?: CompetitionUpdateOneRequiredWithoutVotesNestedInput
  }

  export type VoteUncheckedUpdateWithoutVoterInput = {
    id?: StringFieldUpdateOperationsInput | string
    competitionId?: StringFieldUpdateOperationsInput | string
    contestantId?: StringFieldUpdateOperationsInput | string
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteUncheckedUpdateManyWithoutVoterInput = {
    id?: StringFieldUpdateOperationsInput | string
    competitionId?: StringFieldUpdateOperationsInput | string
    contestantId?: StringFieldUpdateOperationsInput | string
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContestantImageCreateManyContestantInput = {
    id?: string
    imageUrl: string
    imageType: $Enums.ImageType
    createdAt?: Date | string
  }

  export type CompetitionEntryCreateManyContestantInput = {
    id?: string
    competitionId: string
    status?: $Enums.EntryStatus
    overallScore?: Decimal | DecimalJsLike | number | string | null
    voteCount?: number
    rank?: number | null
    createdAt?: Date | string
  }

  export type ContestantImageUpdateWithoutContestantInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageType?: EnumImageTypeFieldUpdateOperationsInput | $Enums.ImageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContestantImageUncheckedUpdateWithoutContestantInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageType?: EnumImageTypeFieldUpdateOperationsInput | $Enums.ImageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContestantImageUncheckedUpdateManyWithoutContestantInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageType?: EnumImageTypeFieldUpdateOperationsInput | $Enums.ImageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitionEntryUpdateWithoutContestantInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumEntryStatusFieldUpdateOperationsInput | $Enums.EntryStatus
    overallScore?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    voteCount?: IntFieldUpdateOperationsInput | number
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    competition?: CompetitionUpdateOneRequiredWithoutEntriesNestedInput
    scoreResult?: ScoreResultUpdateOneWithoutEntryNestedInput
  }

  export type CompetitionEntryUncheckedUpdateWithoutContestantInput = {
    id?: StringFieldUpdateOperationsInput | string
    competitionId?: StringFieldUpdateOperationsInput | string
    status?: EnumEntryStatusFieldUpdateOperationsInput | $Enums.EntryStatus
    overallScore?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    voteCount?: IntFieldUpdateOperationsInput | number
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scoreResult?: ScoreResultUncheckedUpdateOneWithoutEntryNestedInput
  }

  export type CompetitionEntryUncheckedUpdateManyWithoutContestantInput = {
    id?: StringFieldUpdateOperationsInput | string
    competitionId?: StringFieldUpdateOperationsInput | string
    status?: EnumEntryStatusFieldUpdateOperationsInput | $Enums.EntryStatus
    overallScore?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    voteCount?: IntFieldUpdateOperationsInput | number
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitionEntryCreateManyCompetitionInput = {
    id?: string
    contestantId: string
    status?: $Enums.EntryStatus
    overallScore?: Decimal | DecimalJsLike | number | string | null
    voteCount?: number
    rank?: number | null
    createdAt?: Date | string
  }

  export type VoteCreateManyCompetitionInput = {
    id?: string
    contestantId: string
    voterId: string
    ipHash?: string | null
    createdAt?: Date | string
  }

  export type CompetitionEntryUpdateWithoutCompetitionInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumEntryStatusFieldUpdateOperationsInput | $Enums.EntryStatus
    overallScore?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    voteCount?: IntFieldUpdateOperationsInput | number
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contestant?: ContestantUpdateOneRequiredWithoutEntriesNestedInput
    scoreResult?: ScoreResultUpdateOneWithoutEntryNestedInput
  }

  export type CompetitionEntryUncheckedUpdateWithoutCompetitionInput = {
    id?: StringFieldUpdateOperationsInput | string
    contestantId?: StringFieldUpdateOperationsInput | string
    status?: EnumEntryStatusFieldUpdateOperationsInput | $Enums.EntryStatus
    overallScore?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    voteCount?: IntFieldUpdateOperationsInput | number
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scoreResult?: ScoreResultUncheckedUpdateOneWithoutEntryNestedInput
  }

  export type CompetitionEntryUncheckedUpdateManyWithoutCompetitionInput = {
    id?: StringFieldUpdateOperationsInput | string
    contestantId?: StringFieldUpdateOperationsInput | string
    status?: EnumEntryStatusFieldUpdateOperationsInput | $Enums.EntryStatus
    overallScore?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    voteCount?: IntFieldUpdateOperationsInput | number
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteUpdateWithoutCompetitionInput = {
    id?: StringFieldUpdateOperationsInput | string
    contestantId?: StringFieldUpdateOperationsInput | string
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voter?: UserUpdateOneRequiredWithoutVotesNestedInput
  }

  export type VoteUncheckedUpdateWithoutCompetitionInput = {
    id?: StringFieldUpdateOperationsInput | string
    contestantId?: StringFieldUpdateOperationsInput | string
    voterId?: StringFieldUpdateOperationsInput | string
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteUncheckedUpdateManyWithoutCompetitionInput = {
    id?: StringFieldUpdateOperationsInput | string
    contestantId?: StringFieldUpdateOperationsInput | string
    voterId?: StringFieldUpdateOperationsInput | string
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}