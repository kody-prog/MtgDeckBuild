
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Card
 * Core card record (Oracle-level). One row per Oracle card identity.
 */
export type Card = $Result.DefaultSelection<Prisma.$CardPayload>
/**
 * Model CardPrint
 * Specific print/edition of a card (Set + collector number).
 */
export type CardPrint = $Result.DefaultSelection<Prisma.$CardPrintPayload>
/**
 * Model Price
 * Price observations (by day / source / currency) for a specific print.
 */
export type Price = $Result.DefaultSelection<Prisma.$PricePayload>
/**
 * Model Deck
 * User deck. MVP: anonymous decks; auth later.
 */
export type Deck = $Result.DefaultSelection<Prisma.$DeckPayload>
/**
 * Model DeckCard
 * Deck composition entries.
 */
export type DeckCard = $Result.DefaultSelection<Prisma.$DeckCardPayload>
/**
 * Model Tag
 * Tag catalog (e.g., archetypes, mechanics)
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model CardTag
 * Many-to-many between cards and tags
 */
export type CardTag = $Result.DefaultSelection<Prisma.$CardTagPayload>
/**
 * Model Rule
 * Rule entries: bracket limits, banlist, exclusions
 */
export type Rule = $Result.DefaultSelection<Prisma.$RulePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PriceSource: {
  scryfall_bulk: 'scryfall_bulk',
  tcgplayer: 'tcgplayer'
};

export type PriceSource = (typeof PriceSource)[keyof typeof PriceSource]


export const CardRole: {
  LAND: 'LAND',
  RAMP: 'RAMP',
  DRAW: 'DRAW',
  TARGETED_DISRUPTION: 'TARGETED_DISRUPTION',
  MASS_DISRUPTION: 'MASS_DISRUPTION',
  PLAN: 'PLAN',
  UNKNOWN: 'UNKNOWN'
};

export type CardRole = (typeof CardRole)[keyof typeof CardRole]


export const TagKind: {
  GENERIC: 'GENERIC',
  ARCHETYPE: 'ARCHETYPE',
  MECHANIC: 'MECHANIC'
};

export type TagKind = (typeof TagKind)[keyof typeof TagKind]


export const RuleKind: {
  BRACKET: 'BRACKET',
  BANLIST: 'BANLIST',
  EXCLUSION: 'EXCLUSION'
};

export type RuleKind = (typeof RuleKind)[keyof typeof RuleKind]

}

export type PriceSource = $Enums.PriceSource

export const PriceSource: typeof $Enums.PriceSource

export type CardRole = $Enums.CardRole

export const CardRole: typeof $Enums.CardRole

export type TagKind = $Enums.TagKind

export const TagKind: typeof $Enums.TagKind

export type RuleKind = $Enums.RuleKind

export const RuleKind: typeof $Enums.RuleKind

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cards
 * const cards = await prisma.card.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Cards
   * const cards = await prisma.card.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.card`: Exposes CRUD operations for the **Card** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cards
    * const cards = await prisma.card.findMany()
    * ```
    */
  get card(): Prisma.CardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cardPrint`: Exposes CRUD operations for the **CardPrint** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CardPrints
    * const cardPrints = await prisma.cardPrint.findMany()
    * ```
    */
  get cardPrint(): Prisma.CardPrintDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.price`: Exposes CRUD operations for the **Price** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prices
    * const prices = await prisma.price.findMany()
    * ```
    */
  get price(): Prisma.PriceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deck`: Exposes CRUD operations for the **Deck** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Decks
    * const decks = await prisma.deck.findMany()
    * ```
    */
  get deck(): Prisma.DeckDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deckCard`: Exposes CRUD operations for the **DeckCard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeckCards
    * const deckCards = await prisma.deckCard.findMany()
    * ```
    */
  get deckCard(): Prisma.DeckCardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cardTag`: Exposes CRUD operations for the **CardTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CardTags
    * const cardTags = await prisma.cardTag.findMany()
    * ```
    */
  get cardTag(): Prisma.CardTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rule`: Exposes CRUD operations for the **Rule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rules
    * const rules = await prisma.rule.findMany()
    * ```
    */
  get rule(): Prisma.RuleDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.16.3
   * Query Engine version: bb420e667c1820a8c05a38023385f6cc7ef8e83a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Card: 'Card',
    CardPrint: 'CardPrint',
    Price: 'Price',
    Deck: 'Deck',
    DeckCard: 'DeckCard',
    Tag: 'Tag',
    CardTag: 'CardTag',
    Rule: 'Rule'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "card" | "cardPrint" | "price" | "deck" | "deckCard" | "tag" | "cardTag" | "rule"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Card: {
        payload: Prisma.$CardPayload<ExtArgs>
        fields: Prisma.CardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          findFirst: {
            args: Prisma.CardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          findMany: {
            args: Prisma.CardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>[]
          }
          create: {
            args: Prisma.CardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          createMany: {
            args: Prisma.CardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>[]
          }
          delete: {
            args: Prisma.CardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          update: {
            args: Prisma.CardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          deleteMany: {
            args: Prisma.CardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>[]
          }
          upsert: {
            args: Prisma.CardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          aggregate: {
            args: Prisma.CardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCard>
          }
          groupBy: {
            args: Prisma.CardGroupByArgs<ExtArgs>
            result: $Utils.Optional<CardGroupByOutputType>[]
          }
          count: {
            args: Prisma.CardCountArgs<ExtArgs>
            result: $Utils.Optional<CardCountAggregateOutputType> | number
          }
        }
      }
      CardPrint: {
        payload: Prisma.$CardPrintPayload<ExtArgs>
        fields: Prisma.CardPrintFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CardPrintFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPrintPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CardPrintFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPrintPayload>
          }
          findFirst: {
            args: Prisma.CardPrintFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPrintPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CardPrintFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPrintPayload>
          }
          findMany: {
            args: Prisma.CardPrintFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPrintPayload>[]
          }
          create: {
            args: Prisma.CardPrintCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPrintPayload>
          }
          createMany: {
            args: Prisma.CardPrintCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CardPrintCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPrintPayload>[]
          }
          delete: {
            args: Prisma.CardPrintDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPrintPayload>
          }
          update: {
            args: Prisma.CardPrintUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPrintPayload>
          }
          deleteMany: {
            args: Prisma.CardPrintDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CardPrintUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CardPrintUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPrintPayload>[]
          }
          upsert: {
            args: Prisma.CardPrintUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPrintPayload>
          }
          aggregate: {
            args: Prisma.CardPrintAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCardPrint>
          }
          groupBy: {
            args: Prisma.CardPrintGroupByArgs<ExtArgs>
            result: $Utils.Optional<CardPrintGroupByOutputType>[]
          }
          count: {
            args: Prisma.CardPrintCountArgs<ExtArgs>
            result: $Utils.Optional<CardPrintCountAggregateOutputType> | number
          }
        }
      }
      Price: {
        payload: Prisma.$PricePayload<ExtArgs>
        fields: Prisma.PriceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PriceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PriceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>
          }
          findFirst: {
            args: Prisma.PriceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PriceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>
          }
          findMany: {
            args: Prisma.PriceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>[]
          }
          create: {
            args: Prisma.PriceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>
          }
          createMany: {
            args: Prisma.PriceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PriceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>[]
          }
          delete: {
            args: Prisma.PriceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>
          }
          update: {
            args: Prisma.PriceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>
          }
          deleteMany: {
            args: Prisma.PriceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PriceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PriceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>[]
          }
          upsert: {
            args: Prisma.PriceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>
          }
          aggregate: {
            args: Prisma.PriceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrice>
          }
          groupBy: {
            args: Prisma.PriceGroupByArgs<ExtArgs>
            result: $Utils.Optional<PriceGroupByOutputType>[]
          }
          count: {
            args: Prisma.PriceCountArgs<ExtArgs>
            result: $Utils.Optional<PriceCountAggregateOutputType> | number
          }
        }
      }
      Deck: {
        payload: Prisma.$DeckPayload<ExtArgs>
        fields: Prisma.DeckFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeckFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeckFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload>
          }
          findFirst: {
            args: Prisma.DeckFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeckFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload>
          }
          findMany: {
            args: Prisma.DeckFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload>[]
          }
          create: {
            args: Prisma.DeckCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload>
          }
          createMany: {
            args: Prisma.DeckCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeckCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload>[]
          }
          delete: {
            args: Prisma.DeckDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload>
          }
          update: {
            args: Prisma.DeckUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload>
          }
          deleteMany: {
            args: Prisma.DeckDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeckUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeckUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload>[]
          }
          upsert: {
            args: Prisma.DeckUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckPayload>
          }
          aggregate: {
            args: Prisma.DeckAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeck>
          }
          groupBy: {
            args: Prisma.DeckGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeckGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeckCountArgs<ExtArgs>
            result: $Utils.Optional<DeckCountAggregateOutputType> | number
          }
        }
      }
      DeckCard: {
        payload: Prisma.$DeckCardPayload<ExtArgs>
        fields: Prisma.DeckCardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeckCardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckCardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeckCardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckCardPayload>
          }
          findFirst: {
            args: Prisma.DeckCardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckCardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeckCardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckCardPayload>
          }
          findMany: {
            args: Prisma.DeckCardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckCardPayload>[]
          }
          create: {
            args: Prisma.DeckCardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckCardPayload>
          }
          createMany: {
            args: Prisma.DeckCardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeckCardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckCardPayload>[]
          }
          delete: {
            args: Prisma.DeckCardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckCardPayload>
          }
          update: {
            args: Prisma.DeckCardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckCardPayload>
          }
          deleteMany: {
            args: Prisma.DeckCardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeckCardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeckCardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckCardPayload>[]
          }
          upsert: {
            args: Prisma.DeckCardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeckCardPayload>
          }
          aggregate: {
            args: Prisma.DeckCardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeckCard>
          }
          groupBy: {
            args: Prisma.DeckCardGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeckCardGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeckCardCountArgs<ExtArgs>
            result: $Utils.Optional<DeckCardCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      CardTag: {
        payload: Prisma.$CardTagPayload<ExtArgs>
        fields: Prisma.CardTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CardTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CardTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardTagPayload>
          }
          findFirst: {
            args: Prisma.CardTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CardTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardTagPayload>
          }
          findMany: {
            args: Prisma.CardTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardTagPayload>[]
          }
          create: {
            args: Prisma.CardTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardTagPayload>
          }
          createMany: {
            args: Prisma.CardTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CardTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardTagPayload>[]
          }
          delete: {
            args: Prisma.CardTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardTagPayload>
          }
          update: {
            args: Prisma.CardTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardTagPayload>
          }
          deleteMany: {
            args: Prisma.CardTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CardTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CardTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardTagPayload>[]
          }
          upsert: {
            args: Prisma.CardTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardTagPayload>
          }
          aggregate: {
            args: Prisma.CardTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCardTag>
          }
          groupBy: {
            args: Prisma.CardTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<CardTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.CardTagCountArgs<ExtArgs>
            result: $Utils.Optional<CardTagCountAggregateOutputType> | number
          }
        }
      }
      Rule: {
        payload: Prisma.$RulePayload<ExtArgs>
        fields: Prisma.RuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>
          }
          findFirst: {
            args: Prisma.RuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>
          }
          findMany: {
            args: Prisma.RuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>[]
          }
          create: {
            args: Prisma.RuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>
          }
          createMany: {
            args: Prisma.RuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>[]
          }
          delete: {
            args: Prisma.RuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>
          }
          update: {
            args: Prisma.RuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>
          }
          deleteMany: {
            args: Prisma.RuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RuleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>[]
          }
          upsert: {
            args: Prisma.RuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>
          }
          aggregate: {
            args: Prisma.RuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRule>
          }
          groupBy: {
            args: Prisma.RuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RuleCountArgs<ExtArgs>
            result: $Utils.Optional<RuleCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
    adapter?: runtime.SqlDriverAdapterFactory | null
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
  }
  export type GlobalOmitConfig = {
    card?: CardOmit
    cardPrint?: CardPrintOmit
    price?: PriceOmit
    deck?: DeckOmit
    deckCard?: DeckCardOmit
    tag?: TagOmit
    cardTag?: CardTagOmit
    rule?: RuleOmit
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
   * Count Type CardCountOutputType
   */

  export type CardCountOutputType = {
    prints: number
    deckCards: number
    cardTags: number
  }

  export type CardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prints?: boolean | CardCountOutputTypeCountPrintsArgs
    deckCards?: boolean | CardCountOutputTypeCountDeckCardsArgs
    cardTags?: boolean | CardCountOutputTypeCountCardTagsArgs
  }

  // Custom InputTypes
  /**
   * CardCountOutputType without action
   */
  export type CardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardCountOutputType
     */
    select?: CardCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CardCountOutputType without action
   */
  export type CardCountOutputTypeCountPrintsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardPrintWhereInput
  }

  /**
   * CardCountOutputType without action
   */
  export type CardCountOutputTypeCountDeckCardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeckCardWhereInput
  }

  /**
   * CardCountOutputType without action
   */
  export type CardCountOutputTypeCountCardTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardTagWhereInput
  }


  /**
   * Count Type CardPrintCountOutputType
   */

  export type CardPrintCountOutputType = {
    prices: number
  }

  export type CardPrintCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prices?: boolean | CardPrintCountOutputTypeCountPricesArgs
  }

  // Custom InputTypes
  /**
   * CardPrintCountOutputType without action
   */
  export type CardPrintCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardPrintCountOutputType
     */
    select?: CardPrintCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CardPrintCountOutputType without action
   */
  export type CardPrintCountOutputTypeCountPricesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceWhereInput
  }


  /**
   * Count Type DeckCountOutputType
   */

  export type DeckCountOutputType = {
    cards: number
  }

  export type DeckCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cards?: boolean | DeckCountOutputTypeCountCardsArgs
  }

  // Custom InputTypes
  /**
   * DeckCountOutputType without action
   */
  export type DeckCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckCountOutputType
     */
    select?: DeckCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DeckCountOutputType without action
   */
  export type DeckCountOutputTypeCountCardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeckCardWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    cardTags: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cardTags?: boolean | TagCountOutputTypeCountCardTagsArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountCardTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardTagWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Card
   */

  export type AggregateCard = {
    _count: CardCountAggregateOutputType | null
    _avg: CardAvgAggregateOutputType | null
    _sum: CardSumAggregateOutputType | null
    _min: CardMinAggregateOutputType | null
    _max: CardMaxAggregateOutputType | null
  }

  export type CardAvgAggregateOutputType = {
    cmc: number | null
  }

  export type CardSumAggregateOutputType = {
    cmc: number | null
  }

  export type CardMinAggregateOutputType = {
    id: string | null
    oracleId: string | null
    scryfallId: string | null
    name: string | null
    oracleText: string | null
    typeLine: string | null
    manaCost: string | null
    cmc: number | null
    legalCommander: boolean | null
    banned: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CardMaxAggregateOutputType = {
    id: string | null
    oracleId: string | null
    scryfallId: string | null
    name: string | null
    oracleText: string | null
    typeLine: string | null
    manaCost: string | null
    cmc: number | null
    legalCommander: boolean | null
    banned: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CardCountAggregateOutputType = {
    id: number
    oracleId: number
    scryfallId: number
    name: number
    oracleText: number
    typeLine: number
    manaCost: number
    cmc: number
    colorIdentity: number
    keywords: number
    producedMana: number
    legalCommander: number
    banned: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CardAvgAggregateInputType = {
    cmc?: true
  }

  export type CardSumAggregateInputType = {
    cmc?: true
  }

  export type CardMinAggregateInputType = {
    id?: true
    oracleId?: true
    scryfallId?: true
    name?: true
    oracleText?: true
    typeLine?: true
    manaCost?: true
    cmc?: true
    legalCommander?: true
    banned?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CardMaxAggregateInputType = {
    id?: true
    oracleId?: true
    scryfallId?: true
    name?: true
    oracleText?: true
    typeLine?: true
    manaCost?: true
    cmc?: true
    legalCommander?: true
    banned?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CardCountAggregateInputType = {
    id?: true
    oracleId?: true
    scryfallId?: true
    name?: true
    oracleText?: true
    typeLine?: true
    manaCost?: true
    cmc?: true
    colorIdentity?: true
    keywords?: true
    producedMana?: true
    legalCommander?: true
    banned?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Card to aggregate.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cards
    **/
    _count?: true | CardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CardMaxAggregateInputType
  }

  export type GetCardAggregateType<T extends CardAggregateArgs> = {
        [P in keyof T & keyof AggregateCard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCard[P]>
      : GetScalarType<T[P], AggregateCard[P]>
  }




  export type CardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardWhereInput
    orderBy?: CardOrderByWithAggregationInput | CardOrderByWithAggregationInput[]
    by: CardScalarFieldEnum[] | CardScalarFieldEnum
    having?: CardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CardCountAggregateInputType | true
    _avg?: CardAvgAggregateInputType
    _sum?: CardSumAggregateInputType
    _min?: CardMinAggregateInputType
    _max?: CardMaxAggregateInputType
  }

  export type CardGroupByOutputType = {
    id: string
    oracleId: string
    scryfallId: string
    name: string
    oracleText: string | null
    typeLine: string | null
    manaCost: string | null
    cmc: number | null
    colorIdentity: string[]
    keywords: string[]
    producedMana: string[]
    legalCommander: boolean
    banned: boolean
    createdAt: Date
    updatedAt: Date
    _count: CardCountAggregateOutputType | null
    _avg: CardAvgAggregateOutputType | null
    _sum: CardSumAggregateOutputType | null
    _min: CardMinAggregateOutputType | null
    _max: CardMaxAggregateOutputType | null
  }

  type GetCardGroupByPayload<T extends CardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CardGroupByOutputType[P]>
            : GetScalarType<T[P], CardGroupByOutputType[P]>
        }
      >
    >


  export type CardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    oracleId?: boolean
    scryfallId?: boolean
    name?: boolean
    oracleText?: boolean
    typeLine?: boolean
    manaCost?: boolean
    cmc?: boolean
    colorIdentity?: boolean
    keywords?: boolean
    producedMana?: boolean
    legalCommander?: boolean
    banned?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    prints?: boolean | Card$printsArgs<ExtArgs>
    deckCards?: boolean | Card$deckCardsArgs<ExtArgs>
    cardTags?: boolean | Card$cardTagsArgs<ExtArgs>
    _count?: boolean | CardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["card"]>

  export type CardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    oracleId?: boolean
    scryfallId?: boolean
    name?: boolean
    oracleText?: boolean
    typeLine?: boolean
    manaCost?: boolean
    cmc?: boolean
    colorIdentity?: boolean
    keywords?: boolean
    producedMana?: boolean
    legalCommander?: boolean
    banned?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["card"]>

  export type CardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    oracleId?: boolean
    scryfallId?: boolean
    name?: boolean
    oracleText?: boolean
    typeLine?: boolean
    manaCost?: boolean
    cmc?: boolean
    colorIdentity?: boolean
    keywords?: boolean
    producedMana?: boolean
    legalCommander?: boolean
    banned?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["card"]>

  export type CardSelectScalar = {
    id?: boolean
    oracleId?: boolean
    scryfallId?: boolean
    name?: boolean
    oracleText?: boolean
    typeLine?: boolean
    manaCost?: boolean
    cmc?: boolean
    colorIdentity?: boolean
    keywords?: boolean
    producedMana?: boolean
    legalCommander?: boolean
    banned?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "oracleId" | "scryfallId" | "name" | "oracleText" | "typeLine" | "manaCost" | "cmc" | "colorIdentity" | "keywords" | "producedMana" | "legalCommander" | "banned" | "createdAt" | "updatedAt", ExtArgs["result"]["card"]>
  export type CardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prints?: boolean | Card$printsArgs<ExtArgs>
    deckCards?: boolean | Card$deckCardsArgs<ExtArgs>
    cardTags?: boolean | Card$cardTagsArgs<ExtArgs>
    _count?: boolean | CardCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Card"
    objects: {
      prints: Prisma.$CardPrintPayload<ExtArgs>[]
      deckCards: Prisma.$DeckCardPayload<ExtArgs>[]
      cardTags: Prisma.$CardTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      oracleId: string
      scryfallId: string
      name: string
      oracleText: string | null
      typeLine: string | null
      manaCost: string | null
      cmc: number | null
      colorIdentity: string[]
      keywords: string[]
      producedMana: string[]
      legalCommander: boolean
      banned: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["card"]>
    composites: {}
  }

  type CardGetPayload<S extends boolean | null | undefined | CardDefaultArgs> = $Result.GetResult<Prisma.$CardPayload, S>

  type CardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CardCountAggregateInputType | true
    }

  export interface CardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Card'], meta: { name: 'Card' } }
    /**
     * Find zero or one Card that matches the filter.
     * @param {CardFindUniqueArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CardFindUniqueArgs>(args: SelectSubset<T, CardFindUniqueArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Card that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CardFindUniqueOrThrowArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CardFindUniqueOrThrowArgs>(args: SelectSubset<T, CardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Card that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindFirstArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CardFindFirstArgs>(args?: SelectSubset<T, CardFindFirstArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Card that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindFirstOrThrowArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CardFindFirstOrThrowArgs>(args?: SelectSubset<T, CardFindFirstOrThrowArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cards
     * const cards = await prisma.card.findMany()
     * 
     * // Get first 10 Cards
     * const cards = await prisma.card.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cardWithIdOnly = await prisma.card.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CardFindManyArgs>(args?: SelectSubset<T, CardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Card.
     * @param {CardCreateArgs} args - Arguments to create a Card.
     * @example
     * // Create one Card
     * const Card = await prisma.card.create({
     *   data: {
     *     // ... data to create a Card
     *   }
     * })
     * 
     */
    create<T extends CardCreateArgs>(args: SelectSubset<T, CardCreateArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cards.
     * @param {CardCreateManyArgs} args - Arguments to create many Cards.
     * @example
     * // Create many Cards
     * const card = await prisma.card.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CardCreateManyArgs>(args?: SelectSubset<T, CardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cards and returns the data saved in the database.
     * @param {CardCreateManyAndReturnArgs} args - Arguments to create many Cards.
     * @example
     * // Create many Cards
     * const card = await prisma.card.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cards and only return the `id`
     * const cardWithIdOnly = await prisma.card.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CardCreateManyAndReturnArgs>(args?: SelectSubset<T, CardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Card.
     * @param {CardDeleteArgs} args - Arguments to delete one Card.
     * @example
     * // Delete one Card
     * const Card = await prisma.card.delete({
     *   where: {
     *     // ... filter to delete one Card
     *   }
     * })
     * 
     */
    delete<T extends CardDeleteArgs>(args: SelectSubset<T, CardDeleteArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Card.
     * @param {CardUpdateArgs} args - Arguments to update one Card.
     * @example
     * // Update one Card
     * const card = await prisma.card.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CardUpdateArgs>(args: SelectSubset<T, CardUpdateArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cards.
     * @param {CardDeleteManyArgs} args - Arguments to filter Cards to delete.
     * @example
     * // Delete a few Cards
     * const { count } = await prisma.card.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CardDeleteManyArgs>(args?: SelectSubset<T, CardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cards
     * const card = await prisma.card.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CardUpdateManyArgs>(args: SelectSubset<T, CardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cards and returns the data updated in the database.
     * @param {CardUpdateManyAndReturnArgs} args - Arguments to update many Cards.
     * @example
     * // Update many Cards
     * const card = await prisma.card.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cards and only return the `id`
     * const cardWithIdOnly = await prisma.card.updateManyAndReturn({
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
    updateManyAndReturn<T extends CardUpdateManyAndReturnArgs>(args: SelectSubset<T, CardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Card.
     * @param {CardUpsertArgs} args - Arguments to update or create a Card.
     * @example
     * // Update or create a Card
     * const card = await prisma.card.upsert({
     *   create: {
     *     // ... data to create a Card
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Card we want to update
     *   }
     * })
     */
    upsert<T extends CardUpsertArgs>(args: SelectSubset<T, CardUpsertArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardCountArgs} args - Arguments to filter Cards to count.
     * @example
     * // Count the number of Cards
     * const count = await prisma.card.count({
     *   where: {
     *     // ... the filter for the Cards we want to count
     *   }
     * })
    **/
    count<T extends CardCountArgs>(
      args?: Subset<T, CardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Card.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CardAggregateArgs>(args: Subset<T, CardAggregateArgs>): Prisma.PrismaPromise<GetCardAggregateType<T>>

    /**
     * Group by Card.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardGroupByArgs} args - Group by arguments.
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
      T extends CardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CardGroupByArgs['orderBy'] }
        : { orderBy?: CardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Card model
   */
  readonly fields: CardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Card.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prints<T extends Card$printsArgs<ExtArgs> = {}>(args?: Subset<T, Card$printsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPrintPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    deckCards<T extends Card$deckCardsArgs<ExtArgs> = {}>(args?: Subset<T, Card$deckCardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeckCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cardTags<T extends Card$cardTagsArgs<ExtArgs> = {}>(args?: Subset<T, Card$cardTagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Card model
   */
  interface CardFieldRefs {
    readonly id: FieldRef<"Card", 'String'>
    readonly oracleId: FieldRef<"Card", 'String'>
    readonly scryfallId: FieldRef<"Card", 'String'>
    readonly name: FieldRef<"Card", 'String'>
    readonly oracleText: FieldRef<"Card", 'String'>
    readonly typeLine: FieldRef<"Card", 'String'>
    readonly manaCost: FieldRef<"Card", 'String'>
    readonly cmc: FieldRef<"Card", 'Float'>
    readonly colorIdentity: FieldRef<"Card", 'String[]'>
    readonly keywords: FieldRef<"Card", 'String[]'>
    readonly producedMana: FieldRef<"Card", 'String[]'>
    readonly legalCommander: FieldRef<"Card", 'Boolean'>
    readonly banned: FieldRef<"Card", 'Boolean'>
    readonly createdAt: FieldRef<"Card", 'DateTime'>
    readonly updatedAt: FieldRef<"Card", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Card findUnique
   */
  export type CardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card findUniqueOrThrow
   */
  export type CardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card findFirst
   */
  export type CardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cards.
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cards.
     */
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Card findFirstOrThrow
   */
  export type CardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cards.
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cards.
     */
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Card findMany
   */
  export type CardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Cards to fetch.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cards.
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Card create
   */
  export type CardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * The data needed to create a Card.
     */
    data: XOR<CardCreateInput, CardUncheckedCreateInput>
  }

  /**
   * Card createMany
   */
  export type CardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cards.
     */
    data: CardCreateManyInput | CardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Card createManyAndReturn
   */
  export type CardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * The data used to create many Cards.
     */
    data: CardCreateManyInput | CardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Card update
   */
  export type CardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * The data needed to update a Card.
     */
    data: XOR<CardUpdateInput, CardUncheckedUpdateInput>
    /**
     * Choose, which Card to update.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card updateMany
   */
  export type CardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cards.
     */
    data: XOR<CardUpdateManyMutationInput, CardUncheckedUpdateManyInput>
    /**
     * Filter which Cards to update
     */
    where?: CardWhereInput
    /**
     * Limit how many Cards to update.
     */
    limit?: number
  }

  /**
   * Card updateManyAndReturn
   */
  export type CardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * The data used to update Cards.
     */
    data: XOR<CardUpdateManyMutationInput, CardUncheckedUpdateManyInput>
    /**
     * Filter which Cards to update
     */
    where?: CardWhereInput
    /**
     * Limit how many Cards to update.
     */
    limit?: number
  }

  /**
   * Card upsert
   */
  export type CardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * The filter to search for the Card to update in case it exists.
     */
    where: CardWhereUniqueInput
    /**
     * In case the Card found by the `where` argument doesn't exist, create a new Card with this data.
     */
    create: XOR<CardCreateInput, CardUncheckedCreateInput>
    /**
     * In case the Card was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CardUpdateInput, CardUncheckedUpdateInput>
  }

  /**
   * Card delete
   */
  export type CardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter which Card to delete.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card deleteMany
   */
  export type CardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cards to delete
     */
    where?: CardWhereInput
    /**
     * Limit how many Cards to delete.
     */
    limit?: number
  }

  /**
   * Card.prints
   */
  export type Card$printsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardPrint
     */
    select?: CardPrintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardPrint
     */
    omit?: CardPrintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardPrintInclude<ExtArgs> | null
    where?: CardPrintWhereInput
    orderBy?: CardPrintOrderByWithRelationInput | CardPrintOrderByWithRelationInput[]
    cursor?: CardPrintWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CardPrintScalarFieldEnum | CardPrintScalarFieldEnum[]
  }

  /**
   * Card.deckCards
   */
  export type Card$deckCardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckCard
     */
    select?: DeckCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeckCard
     */
    omit?: DeckCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckCardInclude<ExtArgs> | null
    where?: DeckCardWhereInput
    orderBy?: DeckCardOrderByWithRelationInput | DeckCardOrderByWithRelationInput[]
    cursor?: DeckCardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeckCardScalarFieldEnum | DeckCardScalarFieldEnum[]
  }

  /**
   * Card.cardTags
   */
  export type Card$cardTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardTag
     */
    select?: CardTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardTag
     */
    omit?: CardTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardTagInclude<ExtArgs> | null
    where?: CardTagWhereInput
    orderBy?: CardTagOrderByWithRelationInput | CardTagOrderByWithRelationInput[]
    cursor?: CardTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CardTagScalarFieldEnum | CardTagScalarFieldEnum[]
  }

  /**
   * Card without action
   */
  export type CardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
  }


  /**
   * Model CardPrint
   */

  export type AggregateCardPrint = {
    _count: CardPrintCountAggregateOutputType | null
    _min: CardPrintMinAggregateOutputType | null
    _max: CardPrintMaxAggregateOutputType | null
  }

  export type CardPrintMinAggregateOutputType = {
    id: string | null
    cardId: string | null
    setCode: string | null
    collectorNumber: string | null
    rarity: string | null
    scryfallUri: string | null
  }

  export type CardPrintMaxAggregateOutputType = {
    id: string | null
    cardId: string | null
    setCode: string | null
    collectorNumber: string | null
    rarity: string | null
    scryfallUri: string | null
  }

  export type CardPrintCountAggregateOutputType = {
    id: number
    cardId: number
    setCode: number
    collectorNumber: number
    rarity: number
    imageUris: number
    scryfallUri: number
    _all: number
  }


  export type CardPrintMinAggregateInputType = {
    id?: true
    cardId?: true
    setCode?: true
    collectorNumber?: true
    rarity?: true
    scryfallUri?: true
  }

  export type CardPrintMaxAggregateInputType = {
    id?: true
    cardId?: true
    setCode?: true
    collectorNumber?: true
    rarity?: true
    scryfallUri?: true
  }

  export type CardPrintCountAggregateInputType = {
    id?: true
    cardId?: true
    setCode?: true
    collectorNumber?: true
    rarity?: true
    imageUris?: true
    scryfallUri?: true
    _all?: true
  }

  export type CardPrintAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CardPrint to aggregate.
     */
    where?: CardPrintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardPrints to fetch.
     */
    orderBy?: CardPrintOrderByWithRelationInput | CardPrintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CardPrintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardPrints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardPrints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CardPrints
    **/
    _count?: true | CardPrintCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CardPrintMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CardPrintMaxAggregateInputType
  }

  export type GetCardPrintAggregateType<T extends CardPrintAggregateArgs> = {
        [P in keyof T & keyof AggregateCardPrint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCardPrint[P]>
      : GetScalarType<T[P], AggregateCardPrint[P]>
  }




  export type CardPrintGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardPrintWhereInput
    orderBy?: CardPrintOrderByWithAggregationInput | CardPrintOrderByWithAggregationInput[]
    by: CardPrintScalarFieldEnum[] | CardPrintScalarFieldEnum
    having?: CardPrintScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CardPrintCountAggregateInputType | true
    _min?: CardPrintMinAggregateInputType
    _max?: CardPrintMaxAggregateInputType
  }

  export type CardPrintGroupByOutputType = {
    id: string
    cardId: string
    setCode: string
    collectorNumber: string
    rarity: string | null
    imageUris: JsonValue | null
    scryfallUri: string | null
    _count: CardPrintCountAggregateOutputType | null
    _min: CardPrintMinAggregateOutputType | null
    _max: CardPrintMaxAggregateOutputType | null
  }

  type GetCardPrintGroupByPayload<T extends CardPrintGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CardPrintGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CardPrintGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CardPrintGroupByOutputType[P]>
            : GetScalarType<T[P], CardPrintGroupByOutputType[P]>
        }
      >
    >


  export type CardPrintSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardId?: boolean
    setCode?: boolean
    collectorNumber?: boolean
    rarity?: boolean
    imageUris?: boolean
    scryfallUri?: boolean
    prices?: boolean | CardPrint$pricesArgs<ExtArgs>
    card?: boolean | CardDefaultArgs<ExtArgs>
    _count?: boolean | CardPrintCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cardPrint"]>

  export type CardPrintSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardId?: boolean
    setCode?: boolean
    collectorNumber?: boolean
    rarity?: boolean
    imageUris?: boolean
    scryfallUri?: boolean
    card?: boolean | CardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cardPrint"]>

  export type CardPrintSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardId?: boolean
    setCode?: boolean
    collectorNumber?: boolean
    rarity?: boolean
    imageUris?: boolean
    scryfallUri?: boolean
    card?: boolean | CardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cardPrint"]>

  export type CardPrintSelectScalar = {
    id?: boolean
    cardId?: boolean
    setCode?: boolean
    collectorNumber?: boolean
    rarity?: boolean
    imageUris?: boolean
    scryfallUri?: boolean
  }

  export type CardPrintOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cardId" | "setCode" | "collectorNumber" | "rarity" | "imageUris" | "scryfallUri", ExtArgs["result"]["cardPrint"]>
  export type CardPrintInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prices?: boolean | CardPrint$pricesArgs<ExtArgs>
    card?: boolean | CardDefaultArgs<ExtArgs>
    _count?: boolean | CardPrintCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CardPrintIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | CardDefaultArgs<ExtArgs>
  }
  export type CardPrintIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | CardDefaultArgs<ExtArgs>
  }

  export type $CardPrintPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CardPrint"
    objects: {
      prices: Prisma.$PricePayload<ExtArgs>[]
      card: Prisma.$CardPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cardId: string
      setCode: string
      collectorNumber: string
      rarity: string | null
      imageUris: Prisma.JsonValue | null
      scryfallUri: string | null
    }, ExtArgs["result"]["cardPrint"]>
    composites: {}
  }

  type CardPrintGetPayload<S extends boolean | null | undefined | CardPrintDefaultArgs> = $Result.GetResult<Prisma.$CardPrintPayload, S>

  type CardPrintCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CardPrintFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CardPrintCountAggregateInputType | true
    }

  export interface CardPrintDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CardPrint'], meta: { name: 'CardPrint' } }
    /**
     * Find zero or one CardPrint that matches the filter.
     * @param {CardPrintFindUniqueArgs} args - Arguments to find a CardPrint
     * @example
     * // Get one CardPrint
     * const cardPrint = await prisma.cardPrint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CardPrintFindUniqueArgs>(args: SelectSubset<T, CardPrintFindUniqueArgs<ExtArgs>>): Prisma__CardPrintClient<$Result.GetResult<Prisma.$CardPrintPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CardPrint that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CardPrintFindUniqueOrThrowArgs} args - Arguments to find a CardPrint
     * @example
     * // Get one CardPrint
     * const cardPrint = await prisma.cardPrint.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CardPrintFindUniqueOrThrowArgs>(args: SelectSubset<T, CardPrintFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CardPrintClient<$Result.GetResult<Prisma.$CardPrintPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CardPrint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardPrintFindFirstArgs} args - Arguments to find a CardPrint
     * @example
     * // Get one CardPrint
     * const cardPrint = await prisma.cardPrint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CardPrintFindFirstArgs>(args?: SelectSubset<T, CardPrintFindFirstArgs<ExtArgs>>): Prisma__CardPrintClient<$Result.GetResult<Prisma.$CardPrintPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CardPrint that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardPrintFindFirstOrThrowArgs} args - Arguments to find a CardPrint
     * @example
     * // Get one CardPrint
     * const cardPrint = await prisma.cardPrint.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CardPrintFindFirstOrThrowArgs>(args?: SelectSubset<T, CardPrintFindFirstOrThrowArgs<ExtArgs>>): Prisma__CardPrintClient<$Result.GetResult<Prisma.$CardPrintPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CardPrints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardPrintFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CardPrints
     * const cardPrints = await prisma.cardPrint.findMany()
     * 
     * // Get first 10 CardPrints
     * const cardPrints = await prisma.cardPrint.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cardPrintWithIdOnly = await prisma.cardPrint.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CardPrintFindManyArgs>(args?: SelectSubset<T, CardPrintFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPrintPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CardPrint.
     * @param {CardPrintCreateArgs} args - Arguments to create a CardPrint.
     * @example
     * // Create one CardPrint
     * const CardPrint = await prisma.cardPrint.create({
     *   data: {
     *     // ... data to create a CardPrint
     *   }
     * })
     * 
     */
    create<T extends CardPrintCreateArgs>(args: SelectSubset<T, CardPrintCreateArgs<ExtArgs>>): Prisma__CardPrintClient<$Result.GetResult<Prisma.$CardPrintPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CardPrints.
     * @param {CardPrintCreateManyArgs} args - Arguments to create many CardPrints.
     * @example
     * // Create many CardPrints
     * const cardPrint = await prisma.cardPrint.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CardPrintCreateManyArgs>(args?: SelectSubset<T, CardPrintCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CardPrints and returns the data saved in the database.
     * @param {CardPrintCreateManyAndReturnArgs} args - Arguments to create many CardPrints.
     * @example
     * // Create many CardPrints
     * const cardPrint = await prisma.cardPrint.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CardPrints and only return the `id`
     * const cardPrintWithIdOnly = await prisma.cardPrint.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CardPrintCreateManyAndReturnArgs>(args?: SelectSubset<T, CardPrintCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPrintPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CardPrint.
     * @param {CardPrintDeleteArgs} args - Arguments to delete one CardPrint.
     * @example
     * // Delete one CardPrint
     * const CardPrint = await prisma.cardPrint.delete({
     *   where: {
     *     // ... filter to delete one CardPrint
     *   }
     * })
     * 
     */
    delete<T extends CardPrintDeleteArgs>(args: SelectSubset<T, CardPrintDeleteArgs<ExtArgs>>): Prisma__CardPrintClient<$Result.GetResult<Prisma.$CardPrintPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CardPrint.
     * @param {CardPrintUpdateArgs} args - Arguments to update one CardPrint.
     * @example
     * // Update one CardPrint
     * const cardPrint = await prisma.cardPrint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CardPrintUpdateArgs>(args: SelectSubset<T, CardPrintUpdateArgs<ExtArgs>>): Prisma__CardPrintClient<$Result.GetResult<Prisma.$CardPrintPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CardPrints.
     * @param {CardPrintDeleteManyArgs} args - Arguments to filter CardPrints to delete.
     * @example
     * // Delete a few CardPrints
     * const { count } = await prisma.cardPrint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CardPrintDeleteManyArgs>(args?: SelectSubset<T, CardPrintDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CardPrints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardPrintUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CardPrints
     * const cardPrint = await prisma.cardPrint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CardPrintUpdateManyArgs>(args: SelectSubset<T, CardPrintUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CardPrints and returns the data updated in the database.
     * @param {CardPrintUpdateManyAndReturnArgs} args - Arguments to update many CardPrints.
     * @example
     * // Update many CardPrints
     * const cardPrint = await prisma.cardPrint.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CardPrints and only return the `id`
     * const cardPrintWithIdOnly = await prisma.cardPrint.updateManyAndReturn({
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
    updateManyAndReturn<T extends CardPrintUpdateManyAndReturnArgs>(args: SelectSubset<T, CardPrintUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPrintPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CardPrint.
     * @param {CardPrintUpsertArgs} args - Arguments to update or create a CardPrint.
     * @example
     * // Update or create a CardPrint
     * const cardPrint = await prisma.cardPrint.upsert({
     *   create: {
     *     // ... data to create a CardPrint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CardPrint we want to update
     *   }
     * })
     */
    upsert<T extends CardPrintUpsertArgs>(args: SelectSubset<T, CardPrintUpsertArgs<ExtArgs>>): Prisma__CardPrintClient<$Result.GetResult<Prisma.$CardPrintPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CardPrints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardPrintCountArgs} args - Arguments to filter CardPrints to count.
     * @example
     * // Count the number of CardPrints
     * const count = await prisma.cardPrint.count({
     *   where: {
     *     // ... the filter for the CardPrints we want to count
     *   }
     * })
    **/
    count<T extends CardPrintCountArgs>(
      args?: Subset<T, CardPrintCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CardPrintCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CardPrint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardPrintAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CardPrintAggregateArgs>(args: Subset<T, CardPrintAggregateArgs>): Prisma.PrismaPromise<GetCardPrintAggregateType<T>>

    /**
     * Group by CardPrint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardPrintGroupByArgs} args - Group by arguments.
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
      T extends CardPrintGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CardPrintGroupByArgs['orderBy'] }
        : { orderBy?: CardPrintGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CardPrintGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCardPrintGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CardPrint model
   */
  readonly fields: CardPrintFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CardPrint.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CardPrintClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prices<T extends CardPrint$pricesArgs<ExtArgs> = {}>(args?: Subset<T, CardPrint$pricesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    card<T extends CardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CardDefaultArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CardPrint model
   */
  interface CardPrintFieldRefs {
    readonly id: FieldRef<"CardPrint", 'String'>
    readonly cardId: FieldRef<"CardPrint", 'String'>
    readonly setCode: FieldRef<"CardPrint", 'String'>
    readonly collectorNumber: FieldRef<"CardPrint", 'String'>
    readonly rarity: FieldRef<"CardPrint", 'String'>
    readonly imageUris: FieldRef<"CardPrint", 'Json'>
    readonly scryfallUri: FieldRef<"CardPrint", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CardPrint findUnique
   */
  export type CardPrintFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardPrint
     */
    select?: CardPrintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardPrint
     */
    omit?: CardPrintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardPrintInclude<ExtArgs> | null
    /**
     * Filter, which CardPrint to fetch.
     */
    where: CardPrintWhereUniqueInput
  }

  /**
   * CardPrint findUniqueOrThrow
   */
  export type CardPrintFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardPrint
     */
    select?: CardPrintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardPrint
     */
    omit?: CardPrintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardPrintInclude<ExtArgs> | null
    /**
     * Filter, which CardPrint to fetch.
     */
    where: CardPrintWhereUniqueInput
  }

  /**
   * CardPrint findFirst
   */
  export type CardPrintFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardPrint
     */
    select?: CardPrintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardPrint
     */
    omit?: CardPrintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardPrintInclude<ExtArgs> | null
    /**
     * Filter, which CardPrint to fetch.
     */
    where?: CardPrintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardPrints to fetch.
     */
    orderBy?: CardPrintOrderByWithRelationInput | CardPrintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CardPrints.
     */
    cursor?: CardPrintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardPrints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardPrints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CardPrints.
     */
    distinct?: CardPrintScalarFieldEnum | CardPrintScalarFieldEnum[]
  }

  /**
   * CardPrint findFirstOrThrow
   */
  export type CardPrintFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardPrint
     */
    select?: CardPrintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardPrint
     */
    omit?: CardPrintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardPrintInclude<ExtArgs> | null
    /**
     * Filter, which CardPrint to fetch.
     */
    where?: CardPrintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardPrints to fetch.
     */
    orderBy?: CardPrintOrderByWithRelationInput | CardPrintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CardPrints.
     */
    cursor?: CardPrintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardPrints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardPrints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CardPrints.
     */
    distinct?: CardPrintScalarFieldEnum | CardPrintScalarFieldEnum[]
  }

  /**
   * CardPrint findMany
   */
  export type CardPrintFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardPrint
     */
    select?: CardPrintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardPrint
     */
    omit?: CardPrintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardPrintInclude<ExtArgs> | null
    /**
     * Filter, which CardPrints to fetch.
     */
    where?: CardPrintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardPrints to fetch.
     */
    orderBy?: CardPrintOrderByWithRelationInput | CardPrintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CardPrints.
     */
    cursor?: CardPrintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardPrints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardPrints.
     */
    skip?: number
    distinct?: CardPrintScalarFieldEnum | CardPrintScalarFieldEnum[]
  }

  /**
   * CardPrint create
   */
  export type CardPrintCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardPrint
     */
    select?: CardPrintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardPrint
     */
    omit?: CardPrintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardPrintInclude<ExtArgs> | null
    /**
     * The data needed to create a CardPrint.
     */
    data: XOR<CardPrintCreateInput, CardPrintUncheckedCreateInput>
  }

  /**
   * CardPrint createMany
   */
  export type CardPrintCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CardPrints.
     */
    data: CardPrintCreateManyInput | CardPrintCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CardPrint createManyAndReturn
   */
  export type CardPrintCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardPrint
     */
    select?: CardPrintSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CardPrint
     */
    omit?: CardPrintOmit<ExtArgs> | null
    /**
     * The data used to create many CardPrints.
     */
    data: CardPrintCreateManyInput | CardPrintCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardPrintIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CardPrint update
   */
  export type CardPrintUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardPrint
     */
    select?: CardPrintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardPrint
     */
    omit?: CardPrintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardPrintInclude<ExtArgs> | null
    /**
     * The data needed to update a CardPrint.
     */
    data: XOR<CardPrintUpdateInput, CardPrintUncheckedUpdateInput>
    /**
     * Choose, which CardPrint to update.
     */
    where: CardPrintWhereUniqueInput
  }

  /**
   * CardPrint updateMany
   */
  export type CardPrintUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CardPrints.
     */
    data: XOR<CardPrintUpdateManyMutationInput, CardPrintUncheckedUpdateManyInput>
    /**
     * Filter which CardPrints to update
     */
    where?: CardPrintWhereInput
    /**
     * Limit how many CardPrints to update.
     */
    limit?: number
  }

  /**
   * CardPrint updateManyAndReturn
   */
  export type CardPrintUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardPrint
     */
    select?: CardPrintSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CardPrint
     */
    omit?: CardPrintOmit<ExtArgs> | null
    /**
     * The data used to update CardPrints.
     */
    data: XOR<CardPrintUpdateManyMutationInput, CardPrintUncheckedUpdateManyInput>
    /**
     * Filter which CardPrints to update
     */
    where?: CardPrintWhereInput
    /**
     * Limit how many CardPrints to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardPrintIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CardPrint upsert
   */
  export type CardPrintUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardPrint
     */
    select?: CardPrintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardPrint
     */
    omit?: CardPrintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardPrintInclude<ExtArgs> | null
    /**
     * The filter to search for the CardPrint to update in case it exists.
     */
    where: CardPrintWhereUniqueInput
    /**
     * In case the CardPrint found by the `where` argument doesn't exist, create a new CardPrint with this data.
     */
    create: XOR<CardPrintCreateInput, CardPrintUncheckedCreateInput>
    /**
     * In case the CardPrint was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CardPrintUpdateInput, CardPrintUncheckedUpdateInput>
  }

  /**
   * CardPrint delete
   */
  export type CardPrintDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardPrint
     */
    select?: CardPrintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardPrint
     */
    omit?: CardPrintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardPrintInclude<ExtArgs> | null
    /**
     * Filter which CardPrint to delete.
     */
    where: CardPrintWhereUniqueInput
  }

  /**
   * CardPrint deleteMany
   */
  export type CardPrintDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CardPrints to delete
     */
    where?: CardPrintWhereInput
    /**
     * Limit how many CardPrints to delete.
     */
    limit?: number
  }

  /**
   * CardPrint.prices
   */
  export type CardPrint$pricesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    where?: PriceWhereInput
    orderBy?: PriceOrderByWithRelationInput | PriceOrderByWithRelationInput[]
    cursor?: PriceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PriceScalarFieldEnum | PriceScalarFieldEnum[]
  }

  /**
   * CardPrint without action
   */
  export type CardPrintDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardPrint
     */
    select?: CardPrintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardPrint
     */
    omit?: CardPrintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardPrintInclude<ExtArgs> | null
  }


  /**
   * Model Price
   */

  export type AggregatePrice = {
    _count: PriceCountAggregateOutputType | null
    _avg: PriceAvgAggregateOutputType | null
    _sum: PriceSumAggregateOutputType | null
    _min: PriceMinAggregateOutputType | null
    _max: PriceMaxAggregateOutputType | null
  }

  export type PriceAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type PriceSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type PriceMinAggregateOutputType = {
    id: string | null
    cardPrintId: string | null
    observedAt: Date | null
    source: $Enums.PriceSource | null
    currency: string | null
    amount: Decimal | null
  }

  export type PriceMaxAggregateOutputType = {
    id: string | null
    cardPrintId: string | null
    observedAt: Date | null
    source: $Enums.PriceSource | null
    currency: string | null
    amount: Decimal | null
  }

  export type PriceCountAggregateOutputType = {
    id: number
    cardPrintId: number
    observedAt: number
    source: number
    currency: number
    amount: number
    _all: number
  }


  export type PriceAvgAggregateInputType = {
    amount?: true
  }

  export type PriceSumAggregateInputType = {
    amount?: true
  }

  export type PriceMinAggregateInputType = {
    id?: true
    cardPrintId?: true
    observedAt?: true
    source?: true
    currency?: true
    amount?: true
  }

  export type PriceMaxAggregateInputType = {
    id?: true
    cardPrintId?: true
    observedAt?: true
    source?: true
    currency?: true
    amount?: true
  }

  export type PriceCountAggregateInputType = {
    id?: true
    cardPrintId?: true
    observedAt?: true
    source?: true
    currency?: true
    amount?: true
    _all?: true
  }

  export type PriceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Price to aggregate.
     */
    where?: PriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prices to fetch.
     */
    orderBy?: PriceOrderByWithRelationInput | PriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prices
    **/
    _count?: true | PriceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PriceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PriceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PriceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PriceMaxAggregateInputType
  }

  export type GetPriceAggregateType<T extends PriceAggregateArgs> = {
        [P in keyof T & keyof AggregatePrice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrice[P]>
      : GetScalarType<T[P], AggregatePrice[P]>
  }




  export type PriceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceWhereInput
    orderBy?: PriceOrderByWithAggregationInput | PriceOrderByWithAggregationInput[]
    by: PriceScalarFieldEnum[] | PriceScalarFieldEnum
    having?: PriceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PriceCountAggregateInputType | true
    _avg?: PriceAvgAggregateInputType
    _sum?: PriceSumAggregateInputType
    _min?: PriceMinAggregateInputType
    _max?: PriceMaxAggregateInputType
  }

  export type PriceGroupByOutputType = {
    id: string
    cardPrintId: string
    observedAt: Date
    source: $Enums.PriceSource
    currency: string
    amount: Decimal
    _count: PriceCountAggregateOutputType | null
    _avg: PriceAvgAggregateOutputType | null
    _sum: PriceSumAggregateOutputType | null
    _min: PriceMinAggregateOutputType | null
    _max: PriceMaxAggregateOutputType | null
  }

  type GetPriceGroupByPayload<T extends PriceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PriceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PriceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PriceGroupByOutputType[P]>
            : GetScalarType<T[P], PriceGroupByOutputType[P]>
        }
      >
    >


  export type PriceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardPrintId?: boolean
    observedAt?: boolean
    source?: boolean
    currency?: boolean
    amount?: boolean
    cardPrint?: boolean | CardPrintDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["price"]>

  export type PriceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardPrintId?: boolean
    observedAt?: boolean
    source?: boolean
    currency?: boolean
    amount?: boolean
    cardPrint?: boolean | CardPrintDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["price"]>

  export type PriceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardPrintId?: boolean
    observedAt?: boolean
    source?: boolean
    currency?: boolean
    amount?: boolean
    cardPrint?: boolean | CardPrintDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["price"]>

  export type PriceSelectScalar = {
    id?: boolean
    cardPrintId?: boolean
    observedAt?: boolean
    source?: boolean
    currency?: boolean
    amount?: boolean
  }

  export type PriceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cardPrintId" | "observedAt" | "source" | "currency" | "amount", ExtArgs["result"]["price"]>
  export type PriceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cardPrint?: boolean | CardPrintDefaultArgs<ExtArgs>
  }
  export type PriceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cardPrint?: boolean | CardPrintDefaultArgs<ExtArgs>
  }
  export type PriceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cardPrint?: boolean | CardPrintDefaultArgs<ExtArgs>
  }

  export type $PricePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Price"
    objects: {
      cardPrint: Prisma.$CardPrintPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cardPrintId: string
      observedAt: Date
      source: $Enums.PriceSource
      currency: string
      amount: Prisma.Decimal
    }, ExtArgs["result"]["price"]>
    composites: {}
  }

  type PriceGetPayload<S extends boolean | null | undefined | PriceDefaultArgs> = $Result.GetResult<Prisma.$PricePayload, S>

  type PriceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PriceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PriceCountAggregateInputType | true
    }

  export interface PriceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Price'], meta: { name: 'Price' } }
    /**
     * Find zero or one Price that matches the filter.
     * @param {PriceFindUniqueArgs} args - Arguments to find a Price
     * @example
     * // Get one Price
     * const price = await prisma.price.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PriceFindUniqueArgs>(args: SelectSubset<T, PriceFindUniqueArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Price that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PriceFindUniqueOrThrowArgs} args - Arguments to find a Price
     * @example
     * // Get one Price
     * const price = await prisma.price.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PriceFindUniqueOrThrowArgs>(args: SelectSubset<T, PriceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Price that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceFindFirstArgs} args - Arguments to find a Price
     * @example
     * // Get one Price
     * const price = await prisma.price.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PriceFindFirstArgs>(args?: SelectSubset<T, PriceFindFirstArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Price that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceFindFirstOrThrowArgs} args - Arguments to find a Price
     * @example
     * // Get one Price
     * const price = await prisma.price.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PriceFindFirstOrThrowArgs>(args?: SelectSubset<T, PriceFindFirstOrThrowArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prices
     * const prices = await prisma.price.findMany()
     * 
     * // Get first 10 Prices
     * const prices = await prisma.price.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const priceWithIdOnly = await prisma.price.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PriceFindManyArgs>(args?: SelectSubset<T, PriceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Price.
     * @param {PriceCreateArgs} args - Arguments to create a Price.
     * @example
     * // Create one Price
     * const Price = await prisma.price.create({
     *   data: {
     *     // ... data to create a Price
     *   }
     * })
     * 
     */
    create<T extends PriceCreateArgs>(args: SelectSubset<T, PriceCreateArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prices.
     * @param {PriceCreateManyArgs} args - Arguments to create many Prices.
     * @example
     * // Create many Prices
     * const price = await prisma.price.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PriceCreateManyArgs>(args?: SelectSubset<T, PriceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prices and returns the data saved in the database.
     * @param {PriceCreateManyAndReturnArgs} args - Arguments to create many Prices.
     * @example
     * // Create many Prices
     * const price = await prisma.price.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prices and only return the `id`
     * const priceWithIdOnly = await prisma.price.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PriceCreateManyAndReturnArgs>(args?: SelectSubset<T, PriceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Price.
     * @param {PriceDeleteArgs} args - Arguments to delete one Price.
     * @example
     * // Delete one Price
     * const Price = await prisma.price.delete({
     *   where: {
     *     // ... filter to delete one Price
     *   }
     * })
     * 
     */
    delete<T extends PriceDeleteArgs>(args: SelectSubset<T, PriceDeleteArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Price.
     * @param {PriceUpdateArgs} args - Arguments to update one Price.
     * @example
     * // Update one Price
     * const price = await prisma.price.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PriceUpdateArgs>(args: SelectSubset<T, PriceUpdateArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prices.
     * @param {PriceDeleteManyArgs} args - Arguments to filter Prices to delete.
     * @example
     * // Delete a few Prices
     * const { count } = await prisma.price.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PriceDeleteManyArgs>(args?: SelectSubset<T, PriceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prices
     * const price = await prisma.price.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PriceUpdateManyArgs>(args: SelectSubset<T, PriceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prices and returns the data updated in the database.
     * @param {PriceUpdateManyAndReturnArgs} args - Arguments to update many Prices.
     * @example
     * // Update many Prices
     * const price = await prisma.price.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prices and only return the `id`
     * const priceWithIdOnly = await prisma.price.updateManyAndReturn({
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
    updateManyAndReturn<T extends PriceUpdateManyAndReturnArgs>(args: SelectSubset<T, PriceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Price.
     * @param {PriceUpsertArgs} args - Arguments to update or create a Price.
     * @example
     * // Update or create a Price
     * const price = await prisma.price.upsert({
     *   create: {
     *     // ... data to create a Price
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Price we want to update
     *   }
     * })
     */
    upsert<T extends PriceUpsertArgs>(args: SelectSubset<T, PriceUpsertArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceCountArgs} args - Arguments to filter Prices to count.
     * @example
     * // Count the number of Prices
     * const count = await prisma.price.count({
     *   where: {
     *     // ... the filter for the Prices we want to count
     *   }
     * })
    **/
    count<T extends PriceCountArgs>(
      args?: Subset<T, PriceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PriceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Price.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PriceAggregateArgs>(args: Subset<T, PriceAggregateArgs>): Prisma.PrismaPromise<GetPriceAggregateType<T>>

    /**
     * Group by Price.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceGroupByArgs} args - Group by arguments.
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
      T extends PriceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PriceGroupByArgs['orderBy'] }
        : { orderBy?: PriceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PriceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPriceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Price model
   */
  readonly fields: PriceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Price.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PriceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cardPrint<T extends CardPrintDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CardPrintDefaultArgs<ExtArgs>>): Prisma__CardPrintClient<$Result.GetResult<Prisma.$CardPrintPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Price model
   */
  interface PriceFieldRefs {
    readonly id: FieldRef<"Price", 'String'>
    readonly cardPrintId: FieldRef<"Price", 'String'>
    readonly observedAt: FieldRef<"Price", 'DateTime'>
    readonly source: FieldRef<"Price", 'PriceSource'>
    readonly currency: FieldRef<"Price", 'String'>
    readonly amount: FieldRef<"Price", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Price findUnique
   */
  export type PriceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * Filter, which Price to fetch.
     */
    where: PriceWhereUniqueInput
  }

  /**
   * Price findUniqueOrThrow
   */
  export type PriceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * Filter, which Price to fetch.
     */
    where: PriceWhereUniqueInput
  }

  /**
   * Price findFirst
   */
  export type PriceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * Filter, which Price to fetch.
     */
    where?: PriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prices to fetch.
     */
    orderBy?: PriceOrderByWithRelationInput | PriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prices.
     */
    cursor?: PriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prices.
     */
    distinct?: PriceScalarFieldEnum | PriceScalarFieldEnum[]
  }

  /**
   * Price findFirstOrThrow
   */
  export type PriceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * Filter, which Price to fetch.
     */
    where?: PriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prices to fetch.
     */
    orderBy?: PriceOrderByWithRelationInput | PriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prices.
     */
    cursor?: PriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prices.
     */
    distinct?: PriceScalarFieldEnum | PriceScalarFieldEnum[]
  }

  /**
   * Price findMany
   */
  export type PriceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * Filter, which Prices to fetch.
     */
    where?: PriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prices to fetch.
     */
    orderBy?: PriceOrderByWithRelationInput | PriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prices.
     */
    cursor?: PriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prices.
     */
    skip?: number
    distinct?: PriceScalarFieldEnum | PriceScalarFieldEnum[]
  }

  /**
   * Price create
   */
  export type PriceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * The data needed to create a Price.
     */
    data: XOR<PriceCreateInput, PriceUncheckedCreateInput>
  }

  /**
   * Price createMany
   */
  export type PriceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prices.
     */
    data: PriceCreateManyInput | PriceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Price createManyAndReturn
   */
  export type PriceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * The data used to create many Prices.
     */
    data: PriceCreateManyInput | PriceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Price update
   */
  export type PriceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * The data needed to update a Price.
     */
    data: XOR<PriceUpdateInput, PriceUncheckedUpdateInput>
    /**
     * Choose, which Price to update.
     */
    where: PriceWhereUniqueInput
  }

  /**
   * Price updateMany
   */
  export type PriceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prices.
     */
    data: XOR<PriceUpdateManyMutationInput, PriceUncheckedUpdateManyInput>
    /**
     * Filter which Prices to update
     */
    where?: PriceWhereInput
    /**
     * Limit how many Prices to update.
     */
    limit?: number
  }

  /**
   * Price updateManyAndReturn
   */
  export type PriceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * The data used to update Prices.
     */
    data: XOR<PriceUpdateManyMutationInput, PriceUncheckedUpdateManyInput>
    /**
     * Filter which Prices to update
     */
    where?: PriceWhereInput
    /**
     * Limit how many Prices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Price upsert
   */
  export type PriceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * The filter to search for the Price to update in case it exists.
     */
    where: PriceWhereUniqueInput
    /**
     * In case the Price found by the `where` argument doesn't exist, create a new Price with this data.
     */
    create: XOR<PriceCreateInput, PriceUncheckedCreateInput>
    /**
     * In case the Price was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PriceUpdateInput, PriceUncheckedUpdateInput>
  }

  /**
   * Price delete
   */
  export type PriceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * Filter which Price to delete.
     */
    where: PriceWhereUniqueInput
  }

  /**
   * Price deleteMany
   */
  export type PriceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prices to delete
     */
    where?: PriceWhereInput
    /**
     * Limit how many Prices to delete.
     */
    limit?: number
  }

  /**
   * Price without action
   */
  export type PriceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
  }


  /**
   * Model Deck
   */

  export type AggregateDeck = {
    _count: DeckCountAggregateOutputType | null
    _min: DeckMinAggregateOutputType | null
    _max: DeckMaxAggregateOutputType | null
  }

  export type DeckMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeckMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeckCountAggregateOutputType = {
    id: number
    name: number
    commanderNames: number
    colorIdentity: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DeckMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeckMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeckCountAggregateInputType = {
    id?: true
    name?: true
    commanderNames?: true
    colorIdentity?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DeckAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deck to aggregate.
     */
    where?: DeckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Decks to fetch.
     */
    orderBy?: DeckOrderByWithRelationInput | DeckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Decks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Decks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Decks
    **/
    _count?: true | DeckCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeckMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeckMaxAggregateInputType
  }

  export type GetDeckAggregateType<T extends DeckAggregateArgs> = {
        [P in keyof T & keyof AggregateDeck]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeck[P]>
      : GetScalarType<T[P], AggregateDeck[P]>
  }




  export type DeckGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeckWhereInput
    orderBy?: DeckOrderByWithAggregationInput | DeckOrderByWithAggregationInput[]
    by: DeckScalarFieldEnum[] | DeckScalarFieldEnum
    having?: DeckScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeckCountAggregateInputType | true
    _min?: DeckMinAggregateInputType
    _max?: DeckMaxAggregateInputType
  }

  export type DeckGroupByOutputType = {
    id: string
    name: string
    commanderNames: string[]
    colorIdentity: string[]
    createdAt: Date
    updatedAt: Date
    _count: DeckCountAggregateOutputType | null
    _min: DeckMinAggregateOutputType | null
    _max: DeckMaxAggregateOutputType | null
  }

  type GetDeckGroupByPayload<T extends DeckGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeckGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeckGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeckGroupByOutputType[P]>
            : GetScalarType<T[P], DeckGroupByOutputType[P]>
        }
      >
    >


  export type DeckSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    commanderNames?: boolean
    colorIdentity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cards?: boolean | Deck$cardsArgs<ExtArgs>
    _count?: boolean | DeckCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deck"]>

  export type DeckSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    commanderNames?: boolean
    colorIdentity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["deck"]>

  export type DeckSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    commanderNames?: boolean
    colorIdentity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["deck"]>

  export type DeckSelectScalar = {
    id?: boolean
    name?: boolean
    commanderNames?: boolean
    colorIdentity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DeckOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "commanderNames" | "colorIdentity" | "createdAt" | "updatedAt", ExtArgs["result"]["deck"]>
  export type DeckInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cards?: boolean | Deck$cardsArgs<ExtArgs>
    _count?: boolean | DeckCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DeckIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DeckIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DeckPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Deck"
    objects: {
      cards: Prisma.$DeckCardPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      commanderNames: string[]
      colorIdentity: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["deck"]>
    composites: {}
  }

  type DeckGetPayload<S extends boolean | null | undefined | DeckDefaultArgs> = $Result.GetResult<Prisma.$DeckPayload, S>

  type DeckCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeckFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeckCountAggregateInputType | true
    }

  export interface DeckDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Deck'], meta: { name: 'Deck' } }
    /**
     * Find zero or one Deck that matches the filter.
     * @param {DeckFindUniqueArgs} args - Arguments to find a Deck
     * @example
     * // Get one Deck
     * const deck = await prisma.deck.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeckFindUniqueArgs>(args: SelectSubset<T, DeckFindUniqueArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Deck that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeckFindUniqueOrThrowArgs} args - Arguments to find a Deck
     * @example
     * // Get one Deck
     * const deck = await prisma.deck.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeckFindUniqueOrThrowArgs>(args: SelectSubset<T, DeckFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deck that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckFindFirstArgs} args - Arguments to find a Deck
     * @example
     * // Get one Deck
     * const deck = await prisma.deck.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeckFindFirstArgs>(args?: SelectSubset<T, DeckFindFirstArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deck that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckFindFirstOrThrowArgs} args - Arguments to find a Deck
     * @example
     * // Get one Deck
     * const deck = await prisma.deck.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeckFindFirstOrThrowArgs>(args?: SelectSubset<T, DeckFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Decks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Decks
     * const decks = await prisma.deck.findMany()
     * 
     * // Get first 10 Decks
     * const decks = await prisma.deck.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deckWithIdOnly = await prisma.deck.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeckFindManyArgs>(args?: SelectSubset<T, DeckFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Deck.
     * @param {DeckCreateArgs} args - Arguments to create a Deck.
     * @example
     * // Create one Deck
     * const Deck = await prisma.deck.create({
     *   data: {
     *     // ... data to create a Deck
     *   }
     * })
     * 
     */
    create<T extends DeckCreateArgs>(args: SelectSubset<T, DeckCreateArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Decks.
     * @param {DeckCreateManyArgs} args - Arguments to create many Decks.
     * @example
     * // Create many Decks
     * const deck = await prisma.deck.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeckCreateManyArgs>(args?: SelectSubset<T, DeckCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Decks and returns the data saved in the database.
     * @param {DeckCreateManyAndReturnArgs} args - Arguments to create many Decks.
     * @example
     * // Create many Decks
     * const deck = await prisma.deck.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Decks and only return the `id`
     * const deckWithIdOnly = await prisma.deck.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeckCreateManyAndReturnArgs>(args?: SelectSubset<T, DeckCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Deck.
     * @param {DeckDeleteArgs} args - Arguments to delete one Deck.
     * @example
     * // Delete one Deck
     * const Deck = await prisma.deck.delete({
     *   where: {
     *     // ... filter to delete one Deck
     *   }
     * })
     * 
     */
    delete<T extends DeckDeleteArgs>(args: SelectSubset<T, DeckDeleteArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Deck.
     * @param {DeckUpdateArgs} args - Arguments to update one Deck.
     * @example
     * // Update one Deck
     * const deck = await prisma.deck.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeckUpdateArgs>(args: SelectSubset<T, DeckUpdateArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Decks.
     * @param {DeckDeleteManyArgs} args - Arguments to filter Decks to delete.
     * @example
     * // Delete a few Decks
     * const { count } = await prisma.deck.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeckDeleteManyArgs>(args?: SelectSubset<T, DeckDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Decks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Decks
     * const deck = await prisma.deck.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeckUpdateManyArgs>(args: SelectSubset<T, DeckUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Decks and returns the data updated in the database.
     * @param {DeckUpdateManyAndReturnArgs} args - Arguments to update many Decks.
     * @example
     * // Update many Decks
     * const deck = await prisma.deck.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Decks and only return the `id`
     * const deckWithIdOnly = await prisma.deck.updateManyAndReturn({
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
    updateManyAndReturn<T extends DeckUpdateManyAndReturnArgs>(args: SelectSubset<T, DeckUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Deck.
     * @param {DeckUpsertArgs} args - Arguments to update or create a Deck.
     * @example
     * // Update or create a Deck
     * const deck = await prisma.deck.upsert({
     *   create: {
     *     // ... data to create a Deck
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Deck we want to update
     *   }
     * })
     */
    upsert<T extends DeckUpsertArgs>(args: SelectSubset<T, DeckUpsertArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Decks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckCountArgs} args - Arguments to filter Decks to count.
     * @example
     * // Count the number of Decks
     * const count = await prisma.deck.count({
     *   where: {
     *     // ... the filter for the Decks we want to count
     *   }
     * })
    **/
    count<T extends DeckCountArgs>(
      args?: Subset<T, DeckCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeckCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Deck.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeckAggregateArgs>(args: Subset<T, DeckAggregateArgs>): Prisma.PrismaPromise<GetDeckAggregateType<T>>

    /**
     * Group by Deck.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckGroupByArgs} args - Group by arguments.
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
      T extends DeckGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeckGroupByArgs['orderBy'] }
        : { orderBy?: DeckGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DeckGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeckGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Deck model
   */
  readonly fields: DeckFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Deck.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeckClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cards<T extends Deck$cardsArgs<ExtArgs> = {}>(args?: Subset<T, Deck$cardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeckCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Deck model
   */
  interface DeckFieldRefs {
    readonly id: FieldRef<"Deck", 'String'>
    readonly name: FieldRef<"Deck", 'String'>
    readonly commanderNames: FieldRef<"Deck", 'String[]'>
    readonly colorIdentity: FieldRef<"Deck", 'String[]'>
    readonly createdAt: FieldRef<"Deck", 'DateTime'>
    readonly updatedAt: FieldRef<"Deck", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Deck findUnique
   */
  export type DeckFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * Filter, which Deck to fetch.
     */
    where: DeckWhereUniqueInput
  }

  /**
   * Deck findUniqueOrThrow
   */
  export type DeckFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * Filter, which Deck to fetch.
     */
    where: DeckWhereUniqueInput
  }

  /**
   * Deck findFirst
   */
  export type DeckFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * Filter, which Deck to fetch.
     */
    where?: DeckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Decks to fetch.
     */
    orderBy?: DeckOrderByWithRelationInput | DeckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Decks.
     */
    cursor?: DeckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Decks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Decks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Decks.
     */
    distinct?: DeckScalarFieldEnum | DeckScalarFieldEnum[]
  }

  /**
   * Deck findFirstOrThrow
   */
  export type DeckFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * Filter, which Deck to fetch.
     */
    where?: DeckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Decks to fetch.
     */
    orderBy?: DeckOrderByWithRelationInput | DeckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Decks.
     */
    cursor?: DeckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Decks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Decks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Decks.
     */
    distinct?: DeckScalarFieldEnum | DeckScalarFieldEnum[]
  }

  /**
   * Deck findMany
   */
  export type DeckFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * Filter, which Decks to fetch.
     */
    where?: DeckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Decks to fetch.
     */
    orderBy?: DeckOrderByWithRelationInput | DeckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Decks.
     */
    cursor?: DeckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Decks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Decks.
     */
    skip?: number
    distinct?: DeckScalarFieldEnum | DeckScalarFieldEnum[]
  }

  /**
   * Deck create
   */
  export type DeckCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * The data needed to create a Deck.
     */
    data: XOR<DeckCreateInput, DeckUncheckedCreateInput>
  }

  /**
   * Deck createMany
   */
  export type DeckCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Decks.
     */
    data: DeckCreateManyInput | DeckCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Deck createManyAndReturn
   */
  export type DeckCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * The data used to create many Decks.
     */
    data: DeckCreateManyInput | DeckCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Deck update
   */
  export type DeckUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * The data needed to update a Deck.
     */
    data: XOR<DeckUpdateInput, DeckUncheckedUpdateInput>
    /**
     * Choose, which Deck to update.
     */
    where: DeckWhereUniqueInput
  }

  /**
   * Deck updateMany
   */
  export type DeckUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Decks.
     */
    data: XOR<DeckUpdateManyMutationInput, DeckUncheckedUpdateManyInput>
    /**
     * Filter which Decks to update
     */
    where?: DeckWhereInput
    /**
     * Limit how many Decks to update.
     */
    limit?: number
  }

  /**
   * Deck updateManyAndReturn
   */
  export type DeckUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * The data used to update Decks.
     */
    data: XOR<DeckUpdateManyMutationInput, DeckUncheckedUpdateManyInput>
    /**
     * Filter which Decks to update
     */
    where?: DeckWhereInput
    /**
     * Limit how many Decks to update.
     */
    limit?: number
  }

  /**
   * Deck upsert
   */
  export type DeckUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * The filter to search for the Deck to update in case it exists.
     */
    where: DeckWhereUniqueInput
    /**
     * In case the Deck found by the `where` argument doesn't exist, create a new Deck with this data.
     */
    create: XOR<DeckCreateInput, DeckUncheckedCreateInput>
    /**
     * In case the Deck was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeckUpdateInput, DeckUncheckedUpdateInput>
  }

  /**
   * Deck delete
   */
  export type DeckDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
    /**
     * Filter which Deck to delete.
     */
    where: DeckWhereUniqueInput
  }

  /**
   * Deck deleteMany
   */
  export type DeckDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Decks to delete
     */
    where?: DeckWhereInput
    /**
     * Limit how many Decks to delete.
     */
    limit?: number
  }

  /**
   * Deck.cards
   */
  export type Deck$cardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckCard
     */
    select?: DeckCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeckCard
     */
    omit?: DeckCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckCardInclude<ExtArgs> | null
    where?: DeckCardWhereInput
    orderBy?: DeckCardOrderByWithRelationInput | DeckCardOrderByWithRelationInput[]
    cursor?: DeckCardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeckCardScalarFieldEnum | DeckCardScalarFieldEnum[]
  }

  /**
   * Deck without action
   */
  export type DeckDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deck
     */
    select?: DeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deck
     */
    omit?: DeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckInclude<ExtArgs> | null
  }


  /**
   * Model DeckCard
   */

  export type AggregateDeckCard = {
    _count: DeckCardCountAggregateOutputType | null
    _avg: DeckCardAvgAggregateOutputType | null
    _sum: DeckCardSumAggregateOutputType | null
    _min: DeckCardMinAggregateOutputType | null
    _max: DeckCardMaxAggregateOutputType | null
  }

  export type DeckCardAvgAggregateOutputType = {
    quantity: number | null
  }

  export type DeckCardSumAggregateOutputType = {
    quantity: number | null
  }

  export type DeckCardMinAggregateOutputType = {
    deckId: string | null
    cardId: string | null
    quantity: number | null
    isCommander: boolean | null
    isCompanion: boolean | null
    category: $Enums.CardRole | null
  }

  export type DeckCardMaxAggregateOutputType = {
    deckId: string | null
    cardId: string | null
    quantity: number | null
    isCommander: boolean | null
    isCompanion: boolean | null
    category: $Enums.CardRole | null
  }

  export type DeckCardCountAggregateOutputType = {
    deckId: number
    cardId: number
    quantity: number
    isCommander: number
    isCompanion: number
    category: number
    _all: number
  }


  export type DeckCardAvgAggregateInputType = {
    quantity?: true
  }

  export type DeckCardSumAggregateInputType = {
    quantity?: true
  }

  export type DeckCardMinAggregateInputType = {
    deckId?: true
    cardId?: true
    quantity?: true
    isCommander?: true
    isCompanion?: true
    category?: true
  }

  export type DeckCardMaxAggregateInputType = {
    deckId?: true
    cardId?: true
    quantity?: true
    isCommander?: true
    isCompanion?: true
    category?: true
  }

  export type DeckCardCountAggregateInputType = {
    deckId?: true
    cardId?: true
    quantity?: true
    isCommander?: true
    isCompanion?: true
    category?: true
    _all?: true
  }

  export type DeckCardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeckCard to aggregate.
     */
    where?: DeckCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeckCards to fetch.
     */
    orderBy?: DeckCardOrderByWithRelationInput | DeckCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeckCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeckCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeckCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeckCards
    **/
    _count?: true | DeckCardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeckCardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeckCardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeckCardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeckCardMaxAggregateInputType
  }

  export type GetDeckCardAggregateType<T extends DeckCardAggregateArgs> = {
        [P in keyof T & keyof AggregateDeckCard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeckCard[P]>
      : GetScalarType<T[P], AggregateDeckCard[P]>
  }




  export type DeckCardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeckCardWhereInput
    orderBy?: DeckCardOrderByWithAggregationInput | DeckCardOrderByWithAggregationInput[]
    by: DeckCardScalarFieldEnum[] | DeckCardScalarFieldEnum
    having?: DeckCardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeckCardCountAggregateInputType | true
    _avg?: DeckCardAvgAggregateInputType
    _sum?: DeckCardSumAggregateInputType
    _min?: DeckCardMinAggregateInputType
    _max?: DeckCardMaxAggregateInputType
  }

  export type DeckCardGroupByOutputType = {
    deckId: string
    cardId: string
    quantity: number
    isCommander: boolean
    isCompanion: boolean
    category: $Enums.CardRole
    _count: DeckCardCountAggregateOutputType | null
    _avg: DeckCardAvgAggregateOutputType | null
    _sum: DeckCardSumAggregateOutputType | null
    _min: DeckCardMinAggregateOutputType | null
    _max: DeckCardMaxAggregateOutputType | null
  }

  type GetDeckCardGroupByPayload<T extends DeckCardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeckCardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeckCardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeckCardGroupByOutputType[P]>
            : GetScalarType<T[P], DeckCardGroupByOutputType[P]>
        }
      >
    >


  export type DeckCardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    deckId?: boolean
    cardId?: boolean
    quantity?: boolean
    isCommander?: boolean
    isCompanion?: boolean
    category?: boolean
    deck?: boolean | DeckDefaultArgs<ExtArgs>
    card?: boolean | CardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deckCard"]>

  export type DeckCardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    deckId?: boolean
    cardId?: boolean
    quantity?: boolean
    isCommander?: boolean
    isCompanion?: boolean
    category?: boolean
    deck?: boolean | DeckDefaultArgs<ExtArgs>
    card?: boolean | CardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deckCard"]>

  export type DeckCardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    deckId?: boolean
    cardId?: boolean
    quantity?: boolean
    isCommander?: boolean
    isCompanion?: boolean
    category?: boolean
    deck?: boolean | DeckDefaultArgs<ExtArgs>
    card?: boolean | CardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deckCard"]>

  export type DeckCardSelectScalar = {
    deckId?: boolean
    cardId?: boolean
    quantity?: boolean
    isCommander?: boolean
    isCompanion?: boolean
    category?: boolean
  }

  export type DeckCardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"deckId" | "cardId" | "quantity" | "isCommander" | "isCompanion" | "category", ExtArgs["result"]["deckCard"]>
  export type DeckCardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deck?: boolean | DeckDefaultArgs<ExtArgs>
    card?: boolean | CardDefaultArgs<ExtArgs>
  }
  export type DeckCardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deck?: boolean | DeckDefaultArgs<ExtArgs>
    card?: boolean | CardDefaultArgs<ExtArgs>
  }
  export type DeckCardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deck?: boolean | DeckDefaultArgs<ExtArgs>
    card?: boolean | CardDefaultArgs<ExtArgs>
  }

  export type $DeckCardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeckCard"
    objects: {
      deck: Prisma.$DeckPayload<ExtArgs>
      card: Prisma.$CardPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      deckId: string
      cardId: string
      quantity: number
      isCommander: boolean
      isCompanion: boolean
      category: $Enums.CardRole
    }, ExtArgs["result"]["deckCard"]>
    composites: {}
  }

  type DeckCardGetPayload<S extends boolean | null | undefined | DeckCardDefaultArgs> = $Result.GetResult<Prisma.$DeckCardPayload, S>

  type DeckCardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeckCardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeckCardCountAggregateInputType | true
    }

  export interface DeckCardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeckCard'], meta: { name: 'DeckCard' } }
    /**
     * Find zero or one DeckCard that matches the filter.
     * @param {DeckCardFindUniqueArgs} args - Arguments to find a DeckCard
     * @example
     * // Get one DeckCard
     * const deckCard = await prisma.deckCard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeckCardFindUniqueArgs>(args: SelectSubset<T, DeckCardFindUniqueArgs<ExtArgs>>): Prisma__DeckCardClient<$Result.GetResult<Prisma.$DeckCardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DeckCard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeckCardFindUniqueOrThrowArgs} args - Arguments to find a DeckCard
     * @example
     * // Get one DeckCard
     * const deckCard = await prisma.deckCard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeckCardFindUniqueOrThrowArgs>(args: SelectSubset<T, DeckCardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeckCardClient<$Result.GetResult<Prisma.$DeckCardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeckCard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckCardFindFirstArgs} args - Arguments to find a DeckCard
     * @example
     * // Get one DeckCard
     * const deckCard = await prisma.deckCard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeckCardFindFirstArgs>(args?: SelectSubset<T, DeckCardFindFirstArgs<ExtArgs>>): Prisma__DeckCardClient<$Result.GetResult<Prisma.$DeckCardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeckCard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckCardFindFirstOrThrowArgs} args - Arguments to find a DeckCard
     * @example
     * // Get one DeckCard
     * const deckCard = await prisma.deckCard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeckCardFindFirstOrThrowArgs>(args?: SelectSubset<T, DeckCardFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeckCardClient<$Result.GetResult<Prisma.$DeckCardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DeckCards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckCardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeckCards
     * const deckCards = await prisma.deckCard.findMany()
     * 
     * // Get first 10 DeckCards
     * const deckCards = await prisma.deckCard.findMany({ take: 10 })
     * 
     * // Only select the `deckId`
     * const deckCardWithDeckIdOnly = await prisma.deckCard.findMany({ select: { deckId: true } })
     * 
     */
    findMany<T extends DeckCardFindManyArgs>(args?: SelectSubset<T, DeckCardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeckCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DeckCard.
     * @param {DeckCardCreateArgs} args - Arguments to create a DeckCard.
     * @example
     * // Create one DeckCard
     * const DeckCard = await prisma.deckCard.create({
     *   data: {
     *     // ... data to create a DeckCard
     *   }
     * })
     * 
     */
    create<T extends DeckCardCreateArgs>(args: SelectSubset<T, DeckCardCreateArgs<ExtArgs>>): Prisma__DeckCardClient<$Result.GetResult<Prisma.$DeckCardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DeckCards.
     * @param {DeckCardCreateManyArgs} args - Arguments to create many DeckCards.
     * @example
     * // Create many DeckCards
     * const deckCard = await prisma.deckCard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeckCardCreateManyArgs>(args?: SelectSubset<T, DeckCardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DeckCards and returns the data saved in the database.
     * @param {DeckCardCreateManyAndReturnArgs} args - Arguments to create many DeckCards.
     * @example
     * // Create many DeckCards
     * const deckCard = await prisma.deckCard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DeckCards and only return the `deckId`
     * const deckCardWithDeckIdOnly = await prisma.deckCard.createManyAndReturn({
     *   select: { deckId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeckCardCreateManyAndReturnArgs>(args?: SelectSubset<T, DeckCardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeckCardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DeckCard.
     * @param {DeckCardDeleteArgs} args - Arguments to delete one DeckCard.
     * @example
     * // Delete one DeckCard
     * const DeckCard = await prisma.deckCard.delete({
     *   where: {
     *     // ... filter to delete one DeckCard
     *   }
     * })
     * 
     */
    delete<T extends DeckCardDeleteArgs>(args: SelectSubset<T, DeckCardDeleteArgs<ExtArgs>>): Prisma__DeckCardClient<$Result.GetResult<Prisma.$DeckCardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DeckCard.
     * @param {DeckCardUpdateArgs} args - Arguments to update one DeckCard.
     * @example
     * // Update one DeckCard
     * const deckCard = await prisma.deckCard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeckCardUpdateArgs>(args: SelectSubset<T, DeckCardUpdateArgs<ExtArgs>>): Prisma__DeckCardClient<$Result.GetResult<Prisma.$DeckCardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DeckCards.
     * @param {DeckCardDeleteManyArgs} args - Arguments to filter DeckCards to delete.
     * @example
     * // Delete a few DeckCards
     * const { count } = await prisma.deckCard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeckCardDeleteManyArgs>(args?: SelectSubset<T, DeckCardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeckCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckCardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeckCards
     * const deckCard = await prisma.deckCard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeckCardUpdateManyArgs>(args: SelectSubset<T, DeckCardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeckCards and returns the data updated in the database.
     * @param {DeckCardUpdateManyAndReturnArgs} args - Arguments to update many DeckCards.
     * @example
     * // Update many DeckCards
     * const deckCard = await prisma.deckCard.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DeckCards and only return the `deckId`
     * const deckCardWithDeckIdOnly = await prisma.deckCard.updateManyAndReturn({
     *   select: { deckId: true },
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
    updateManyAndReturn<T extends DeckCardUpdateManyAndReturnArgs>(args: SelectSubset<T, DeckCardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeckCardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DeckCard.
     * @param {DeckCardUpsertArgs} args - Arguments to update or create a DeckCard.
     * @example
     * // Update or create a DeckCard
     * const deckCard = await prisma.deckCard.upsert({
     *   create: {
     *     // ... data to create a DeckCard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeckCard we want to update
     *   }
     * })
     */
    upsert<T extends DeckCardUpsertArgs>(args: SelectSubset<T, DeckCardUpsertArgs<ExtArgs>>): Prisma__DeckCardClient<$Result.GetResult<Prisma.$DeckCardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DeckCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckCardCountArgs} args - Arguments to filter DeckCards to count.
     * @example
     * // Count the number of DeckCards
     * const count = await prisma.deckCard.count({
     *   where: {
     *     // ... the filter for the DeckCards we want to count
     *   }
     * })
    **/
    count<T extends DeckCardCountArgs>(
      args?: Subset<T, DeckCardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeckCardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeckCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckCardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeckCardAggregateArgs>(args: Subset<T, DeckCardAggregateArgs>): Prisma.PrismaPromise<GetDeckCardAggregateType<T>>

    /**
     * Group by DeckCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeckCardGroupByArgs} args - Group by arguments.
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
      T extends DeckCardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeckCardGroupByArgs['orderBy'] }
        : { orderBy?: DeckCardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DeckCardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeckCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeckCard model
   */
  readonly fields: DeckCardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeckCard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeckCardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    deck<T extends DeckDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeckDefaultArgs<ExtArgs>>): Prisma__DeckClient<$Result.GetResult<Prisma.$DeckPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    card<T extends CardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CardDefaultArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DeckCard model
   */
  interface DeckCardFieldRefs {
    readonly deckId: FieldRef<"DeckCard", 'String'>
    readonly cardId: FieldRef<"DeckCard", 'String'>
    readonly quantity: FieldRef<"DeckCard", 'Int'>
    readonly isCommander: FieldRef<"DeckCard", 'Boolean'>
    readonly isCompanion: FieldRef<"DeckCard", 'Boolean'>
    readonly category: FieldRef<"DeckCard", 'CardRole'>
  }
    

  // Custom InputTypes
  /**
   * DeckCard findUnique
   */
  export type DeckCardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckCard
     */
    select?: DeckCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeckCard
     */
    omit?: DeckCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckCardInclude<ExtArgs> | null
    /**
     * Filter, which DeckCard to fetch.
     */
    where: DeckCardWhereUniqueInput
  }

  /**
   * DeckCard findUniqueOrThrow
   */
  export type DeckCardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckCard
     */
    select?: DeckCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeckCard
     */
    omit?: DeckCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckCardInclude<ExtArgs> | null
    /**
     * Filter, which DeckCard to fetch.
     */
    where: DeckCardWhereUniqueInput
  }

  /**
   * DeckCard findFirst
   */
  export type DeckCardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckCard
     */
    select?: DeckCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeckCard
     */
    omit?: DeckCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckCardInclude<ExtArgs> | null
    /**
     * Filter, which DeckCard to fetch.
     */
    where?: DeckCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeckCards to fetch.
     */
    orderBy?: DeckCardOrderByWithRelationInput | DeckCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeckCards.
     */
    cursor?: DeckCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeckCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeckCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeckCards.
     */
    distinct?: DeckCardScalarFieldEnum | DeckCardScalarFieldEnum[]
  }

  /**
   * DeckCard findFirstOrThrow
   */
  export type DeckCardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckCard
     */
    select?: DeckCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeckCard
     */
    omit?: DeckCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckCardInclude<ExtArgs> | null
    /**
     * Filter, which DeckCard to fetch.
     */
    where?: DeckCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeckCards to fetch.
     */
    orderBy?: DeckCardOrderByWithRelationInput | DeckCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeckCards.
     */
    cursor?: DeckCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeckCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeckCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeckCards.
     */
    distinct?: DeckCardScalarFieldEnum | DeckCardScalarFieldEnum[]
  }

  /**
   * DeckCard findMany
   */
  export type DeckCardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckCard
     */
    select?: DeckCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeckCard
     */
    omit?: DeckCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckCardInclude<ExtArgs> | null
    /**
     * Filter, which DeckCards to fetch.
     */
    where?: DeckCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeckCards to fetch.
     */
    orderBy?: DeckCardOrderByWithRelationInput | DeckCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeckCards.
     */
    cursor?: DeckCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeckCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeckCards.
     */
    skip?: number
    distinct?: DeckCardScalarFieldEnum | DeckCardScalarFieldEnum[]
  }

  /**
   * DeckCard create
   */
  export type DeckCardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckCard
     */
    select?: DeckCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeckCard
     */
    omit?: DeckCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckCardInclude<ExtArgs> | null
    /**
     * The data needed to create a DeckCard.
     */
    data: XOR<DeckCardCreateInput, DeckCardUncheckedCreateInput>
  }

  /**
   * DeckCard createMany
   */
  export type DeckCardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeckCards.
     */
    data: DeckCardCreateManyInput | DeckCardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeckCard createManyAndReturn
   */
  export type DeckCardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckCard
     */
    select?: DeckCardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeckCard
     */
    omit?: DeckCardOmit<ExtArgs> | null
    /**
     * The data used to create many DeckCards.
     */
    data: DeckCardCreateManyInput | DeckCardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckCardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DeckCard update
   */
  export type DeckCardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckCard
     */
    select?: DeckCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeckCard
     */
    omit?: DeckCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckCardInclude<ExtArgs> | null
    /**
     * The data needed to update a DeckCard.
     */
    data: XOR<DeckCardUpdateInput, DeckCardUncheckedUpdateInput>
    /**
     * Choose, which DeckCard to update.
     */
    where: DeckCardWhereUniqueInput
  }

  /**
   * DeckCard updateMany
   */
  export type DeckCardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeckCards.
     */
    data: XOR<DeckCardUpdateManyMutationInput, DeckCardUncheckedUpdateManyInput>
    /**
     * Filter which DeckCards to update
     */
    where?: DeckCardWhereInput
    /**
     * Limit how many DeckCards to update.
     */
    limit?: number
  }

  /**
   * DeckCard updateManyAndReturn
   */
  export type DeckCardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckCard
     */
    select?: DeckCardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeckCard
     */
    omit?: DeckCardOmit<ExtArgs> | null
    /**
     * The data used to update DeckCards.
     */
    data: XOR<DeckCardUpdateManyMutationInput, DeckCardUncheckedUpdateManyInput>
    /**
     * Filter which DeckCards to update
     */
    where?: DeckCardWhereInput
    /**
     * Limit how many DeckCards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckCardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DeckCard upsert
   */
  export type DeckCardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckCard
     */
    select?: DeckCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeckCard
     */
    omit?: DeckCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckCardInclude<ExtArgs> | null
    /**
     * The filter to search for the DeckCard to update in case it exists.
     */
    where: DeckCardWhereUniqueInput
    /**
     * In case the DeckCard found by the `where` argument doesn't exist, create a new DeckCard with this data.
     */
    create: XOR<DeckCardCreateInput, DeckCardUncheckedCreateInput>
    /**
     * In case the DeckCard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeckCardUpdateInput, DeckCardUncheckedUpdateInput>
  }

  /**
   * DeckCard delete
   */
  export type DeckCardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckCard
     */
    select?: DeckCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeckCard
     */
    omit?: DeckCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckCardInclude<ExtArgs> | null
    /**
     * Filter which DeckCard to delete.
     */
    where: DeckCardWhereUniqueInput
  }

  /**
   * DeckCard deleteMany
   */
  export type DeckCardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeckCards to delete
     */
    where?: DeckCardWhereInput
    /**
     * Limit how many DeckCards to delete.
     */
    limit?: number
  }

  /**
   * DeckCard without action
   */
  export type DeckCardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeckCard
     */
    select?: DeckCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeckCard
     */
    omit?: DeckCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeckCardInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagMinAggregateOutputType = {
    id: string | null
    name: string | null
    kind: $Enums.TagKind | null
    createdAt: Date | null
  }

  export type TagMaxAggregateOutputType = {
    id: string | null
    name: string | null
    kind: $Enums.TagKind | null
    createdAt: Date | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    kind: number
    createdAt: number
    _all: number
  }


  export type TagMinAggregateInputType = {
    id?: true
    name?: true
    kind?: true
    createdAt?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
    kind?: true
    createdAt?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    kind?: true
    createdAt?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: string
    name: string
    kind: $Enums.TagKind
    createdAt: Date
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    kind?: boolean
    createdAt?: boolean
    cardTags?: boolean | Tag$cardTagsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    kind?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    kind?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    name?: boolean
    kind?: boolean
    createdAt?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "kind" | "createdAt", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cardTags?: boolean | Tag$cardTagsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      cardTags: Prisma.$CardTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      kind: $Enums.TagKind
      createdAt: Date
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
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
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
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
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cardTags<T extends Tag$cardTagsArgs<ExtArgs> = {}>(args?: Subset<T, Tag$cardTagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'String'>
    readonly name: FieldRef<"Tag", 'String'>
    readonly kind: FieldRef<"Tag", 'TagKind'>
    readonly createdAt: FieldRef<"Tag", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.cardTags
   */
  export type Tag$cardTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardTag
     */
    select?: CardTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardTag
     */
    omit?: CardTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardTagInclude<ExtArgs> | null
    where?: CardTagWhereInput
    orderBy?: CardTagOrderByWithRelationInput | CardTagOrderByWithRelationInput[]
    cursor?: CardTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CardTagScalarFieldEnum | CardTagScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model CardTag
   */

  export type AggregateCardTag = {
    _count: CardTagCountAggregateOutputType | null
    _min: CardTagMinAggregateOutputType | null
    _max: CardTagMaxAggregateOutputType | null
  }

  export type CardTagMinAggregateOutputType = {
    cardId: string | null
    tagId: string | null
  }

  export type CardTagMaxAggregateOutputType = {
    cardId: string | null
    tagId: string | null
  }

  export type CardTagCountAggregateOutputType = {
    cardId: number
    tagId: number
    _all: number
  }


  export type CardTagMinAggregateInputType = {
    cardId?: true
    tagId?: true
  }

  export type CardTagMaxAggregateInputType = {
    cardId?: true
    tagId?: true
  }

  export type CardTagCountAggregateInputType = {
    cardId?: true
    tagId?: true
    _all?: true
  }

  export type CardTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CardTag to aggregate.
     */
    where?: CardTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardTags to fetch.
     */
    orderBy?: CardTagOrderByWithRelationInput | CardTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CardTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CardTags
    **/
    _count?: true | CardTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CardTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CardTagMaxAggregateInputType
  }

  export type GetCardTagAggregateType<T extends CardTagAggregateArgs> = {
        [P in keyof T & keyof AggregateCardTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCardTag[P]>
      : GetScalarType<T[P], AggregateCardTag[P]>
  }




  export type CardTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardTagWhereInput
    orderBy?: CardTagOrderByWithAggregationInput | CardTagOrderByWithAggregationInput[]
    by: CardTagScalarFieldEnum[] | CardTagScalarFieldEnum
    having?: CardTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CardTagCountAggregateInputType | true
    _min?: CardTagMinAggregateInputType
    _max?: CardTagMaxAggregateInputType
  }

  export type CardTagGroupByOutputType = {
    cardId: string
    tagId: string
    _count: CardTagCountAggregateOutputType | null
    _min: CardTagMinAggregateOutputType | null
    _max: CardTagMaxAggregateOutputType | null
  }

  type GetCardTagGroupByPayload<T extends CardTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CardTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CardTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CardTagGroupByOutputType[P]>
            : GetScalarType<T[P], CardTagGroupByOutputType[P]>
        }
      >
    >


  export type CardTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cardId?: boolean
    tagId?: boolean
    card?: boolean | CardDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cardTag"]>

  export type CardTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cardId?: boolean
    tagId?: boolean
    card?: boolean | CardDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cardTag"]>

  export type CardTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cardId?: boolean
    tagId?: boolean
    card?: boolean | CardDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cardTag"]>

  export type CardTagSelectScalar = {
    cardId?: boolean
    tagId?: boolean
  }

  export type CardTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"cardId" | "tagId", ExtArgs["result"]["cardTag"]>
  export type CardTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | CardDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type CardTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | CardDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type CardTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | CardDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }

  export type $CardTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CardTag"
    objects: {
      card: Prisma.$CardPayload<ExtArgs>
      tag: Prisma.$TagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      cardId: string
      tagId: string
    }, ExtArgs["result"]["cardTag"]>
    composites: {}
  }

  type CardTagGetPayload<S extends boolean | null | undefined | CardTagDefaultArgs> = $Result.GetResult<Prisma.$CardTagPayload, S>

  type CardTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CardTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CardTagCountAggregateInputType | true
    }

  export interface CardTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CardTag'], meta: { name: 'CardTag' } }
    /**
     * Find zero or one CardTag that matches the filter.
     * @param {CardTagFindUniqueArgs} args - Arguments to find a CardTag
     * @example
     * // Get one CardTag
     * const cardTag = await prisma.cardTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CardTagFindUniqueArgs>(args: SelectSubset<T, CardTagFindUniqueArgs<ExtArgs>>): Prisma__CardTagClient<$Result.GetResult<Prisma.$CardTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CardTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CardTagFindUniqueOrThrowArgs} args - Arguments to find a CardTag
     * @example
     * // Get one CardTag
     * const cardTag = await prisma.cardTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CardTagFindUniqueOrThrowArgs>(args: SelectSubset<T, CardTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CardTagClient<$Result.GetResult<Prisma.$CardTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CardTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardTagFindFirstArgs} args - Arguments to find a CardTag
     * @example
     * // Get one CardTag
     * const cardTag = await prisma.cardTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CardTagFindFirstArgs>(args?: SelectSubset<T, CardTagFindFirstArgs<ExtArgs>>): Prisma__CardTagClient<$Result.GetResult<Prisma.$CardTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CardTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardTagFindFirstOrThrowArgs} args - Arguments to find a CardTag
     * @example
     * // Get one CardTag
     * const cardTag = await prisma.cardTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CardTagFindFirstOrThrowArgs>(args?: SelectSubset<T, CardTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__CardTagClient<$Result.GetResult<Prisma.$CardTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CardTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CardTags
     * const cardTags = await prisma.cardTag.findMany()
     * 
     * // Get first 10 CardTags
     * const cardTags = await prisma.cardTag.findMany({ take: 10 })
     * 
     * // Only select the `cardId`
     * const cardTagWithCardIdOnly = await prisma.cardTag.findMany({ select: { cardId: true } })
     * 
     */
    findMany<T extends CardTagFindManyArgs>(args?: SelectSubset<T, CardTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CardTag.
     * @param {CardTagCreateArgs} args - Arguments to create a CardTag.
     * @example
     * // Create one CardTag
     * const CardTag = await prisma.cardTag.create({
     *   data: {
     *     // ... data to create a CardTag
     *   }
     * })
     * 
     */
    create<T extends CardTagCreateArgs>(args: SelectSubset<T, CardTagCreateArgs<ExtArgs>>): Prisma__CardTagClient<$Result.GetResult<Prisma.$CardTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CardTags.
     * @param {CardTagCreateManyArgs} args - Arguments to create many CardTags.
     * @example
     * // Create many CardTags
     * const cardTag = await prisma.cardTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CardTagCreateManyArgs>(args?: SelectSubset<T, CardTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CardTags and returns the data saved in the database.
     * @param {CardTagCreateManyAndReturnArgs} args - Arguments to create many CardTags.
     * @example
     * // Create many CardTags
     * const cardTag = await prisma.cardTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CardTags and only return the `cardId`
     * const cardTagWithCardIdOnly = await prisma.cardTag.createManyAndReturn({
     *   select: { cardId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CardTagCreateManyAndReturnArgs>(args?: SelectSubset<T, CardTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CardTag.
     * @param {CardTagDeleteArgs} args - Arguments to delete one CardTag.
     * @example
     * // Delete one CardTag
     * const CardTag = await prisma.cardTag.delete({
     *   where: {
     *     // ... filter to delete one CardTag
     *   }
     * })
     * 
     */
    delete<T extends CardTagDeleteArgs>(args: SelectSubset<T, CardTagDeleteArgs<ExtArgs>>): Prisma__CardTagClient<$Result.GetResult<Prisma.$CardTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CardTag.
     * @param {CardTagUpdateArgs} args - Arguments to update one CardTag.
     * @example
     * // Update one CardTag
     * const cardTag = await prisma.cardTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CardTagUpdateArgs>(args: SelectSubset<T, CardTagUpdateArgs<ExtArgs>>): Prisma__CardTagClient<$Result.GetResult<Prisma.$CardTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CardTags.
     * @param {CardTagDeleteManyArgs} args - Arguments to filter CardTags to delete.
     * @example
     * // Delete a few CardTags
     * const { count } = await prisma.cardTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CardTagDeleteManyArgs>(args?: SelectSubset<T, CardTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CardTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CardTags
     * const cardTag = await prisma.cardTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CardTagUpdateManyArgs>(args: SelectSubset<T, CardTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CardTags and returns the data updated in the database.
     * @param {CardTagUpdateManyAndReturnArgs} args - Arguments to update many CardTags.
     * @example
     * // Update many CardTags
     * const cardTag = await prisma.cardTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CardTags and only return the `cardId`
     * const cardTagWithCardIdOnly = await prisma.cardTag.updateManyAndReturn({
     *   select: { cardId: true },
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
    updateManyAndReturn<T extends CardTagUpdateManyAndReturnArgs>(args: SelectSubset<T, CardTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CardTag.
     * @param {CardTagUpsertArgs} args - Arguments to update or create a CardTag.
     * @example
     * // Update or create a CardTag
     * const cardTag = await prisma.cardTag.upsert({
     *   create: {
     *     // ... data to create a CardTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CardTag we want to update
     *   }
     * })
     */
    upsert<T extends CardTagUpsertArgs>(args: SelectSubset<T, CardTagUpsertArgs<ExtArgs>>): Prisma__CardTagClient<$Result.GetResult<Prisma.$CardTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CardTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardTagCountArgs} args - Arguments to filter CardTags to count.
     * @example
     * // Count the number of CardTags
     * const count = await prisma.cardTag.count({
     *   where: {
     *     // ... the filter for the CardTags we want to count
     *   }
     * })
    **/
    count<T extends CardTagCountArgs>(
      args?: Subset<T, CardTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CardTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CardTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CardTagAggregateArgs>(args: Subset<T, CardTagAggregateArgs>): Prisma.PrismaPromise<GetCardTagAggregateType<T>>

    /**
     * Group by CardTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardTagGroupByArgs} args - Group by arguments.
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
      T extends CardTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CardTagGroupByArgs['orderBy'] }
        : { orderBy?: CardTagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CardTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCardTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CardTag model
   */
  readonly fields: CardTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CardTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CardTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    card<T extends CardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CardDefaultArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CardTag model
   */
  interface CardTagFieldRefs {
    readonly cardId: FieldRef<"CardTag", 'String'>
    readonly tagId: FieldRef<"CardTag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CardTag findUnique
   */
  export type CardTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardTag
     */
    select?: CardTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardTag
     */
    omit?: CardTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardTagInclude<ExtArgs> | null
    /**
     * Filter, which CardTag to fetch.
     */
    where: CardTagWhereUniqueInput
  }

  /**
   * CardTag findUniqueOrThrow
   */
  export type CardTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardTag
     */
    select?: CardTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardTag
     */
    omit?: CardTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardTagInclude<ExtArgs> | null
    /**
     * Filter, which CardTag to fetch.
     */
    where: CardTagWhereUniqueInput
  }

  /**
   * CardTag findFirst
   */
  export type CardTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardTag
     */
    select?: CardTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardTag
     */
    omit?: CardTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardTagInclude<ExtArgs> | null
    /**
     * Filter, which CardTag to fetch.
     */
    where?: CardTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardTags to fetch.
     */
    orderBy?: CardTagOrderByWithRelationInput | CardTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CardTags.
     */
    cursor?: CardTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CardTags.
     */
    distinct?: CardTagScalarFieldEnum | CardTagScalarFieldEnum[]
  }

  /**
   * CardTag findFirstOrThrow
   */
  export type CardTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardTag
     */
    select?: CardTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardTag
     */
    omit?: CardTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardTagInclude<ExtArgs> | null
    /**
     * Filter, which CardTag to fetch.
     */
    where?: CardTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardTags to fetch.
     */
    orderBy?: CardTagOrderByWithRelationInput | CardTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CardTags.
     */
    cursor?: CardTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CardTags.
     */
    distinct?: CardTagScalarFieldEnum | CardTagScalarFieldEnum[]
  }

  /**
   * CardTag findMany
   */
  export type CardTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardTag
     */
    select?: CardTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardTag
     */
    omit?: CardTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardTagInclude<ExtArgs> | null
    /**
     * Filter, which CardTags to fetch.
     */
    where?: CardTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardTags to fetch.
     */
    orderBy?: CardTagOrderByWithRelationInput | CardTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CardTags.
     */
    cursor?: CardTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardTags.
     */
    skip?: number
    distinct?: CardTagScalarFieldEnum | CardTagScalarFieldEnum[]
  }

  /**
   * CardTag create
   */
  export type CardTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardTag
     */
    select?: CardTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardTag
     */
    omit?: CardTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardTagInclude<ExtArgs> | null
    /**
     * The data needed to create a CardTag.
     */
    data: XOR<CardTagCreateInput, CardTagUncheckedCreateInput>
  }

  /**
   * CardTag createMany
   */
  export type CardTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CardTags.
     */
    data: CardTagCreateManyInput | CardTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CardTag createManyAndReturn
   */
  export type CardTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardTag
     */
    select?: CardTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CardTag
     */
    omit?: CardTagOmit<ExtArgs> | null
    /**
     * The data used to create many CardTags.
     */
    data: CardTagCreateManyInput | CardTagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CardTag update
   */
  export type CardTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardTag
     */
    select?: CardTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardTag
     */
    omit?: CardTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardTagInclude<ExtArgs> | null
    /**
     * The data needed to update a CardTag.
     */
    data: XOR<CardTagUpdateInput, CardTagUncheckedUpdateInput>
    /**
     * Choose, which CardTag to update.
     */
    where: CardTagWhereUniqueInput
  }

  /**
   * CardTag updateMany
   */
  export type CardTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CardTags.
     */
    data: XOR<CardTagUpdateManyMutationInput, CardTagUncheckedUpdateManyInput>
    /**
     * Filter which CardTags to update
     */
    where?: CardTagWhereInput
    /**
     * Limit how many CardTags to update.
     */
    limit?: number
  }

  /**
   * CardTag updateManyAndReturn
   */
  export type CardTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardTag
     */
    select?: CardTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CardTag
     */
    omit?: CardTagOmit<ExtArgs> | null
    /**
     * The data used to update CardTags.
     */
    data: XOR<CardTagUpdateManyMutationInput, CardTagUncheckedUpdateManyInput>
    /**
     * Filter which CardTags to update
     */
    where?: CardTagWhereInput
    /**
     * Limit how many CardTags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardTagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CardTag upsert
   */
  export type CardTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardTag
     */
    select?: CardTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardTag
     */
    omit?: CardTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardTagInclude<ExtArgs> | null
    /**
     * The filter to search for the CardTag to update in case it exists.
     */
    where: CardTagWhereUniqueInput
    /**
     * In case the CardTag found by the `where` argument doesn't exist, create a new CardTag with this data.
     */
    create: XOR<CardTagCreateInput, CardTagUncheckedCreateInput>
    /**
     * In case the CardTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CardTagUpdateInput, CardTagUncheckedUpdateInput>
  }

  /**
   * CardTag delete
   */
  export type CardTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardTag
     */
    select?: CardTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardTag
     */
    omit?: CardTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardTagInclude<ExtArgs> | null
    /**
     * Filter which CardTag to delete.
     */
    where: CardTagWhereUniqueInput
  }

  /**
   * CardTag deleteMany
   */
  export type CardTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CardTags to delete
     */
    where?: CardTagWhereInput
    /**
     * Limit how many CardTags to delete.
     */
    limit?: number
  }

  /**
   * CardTag without action
   */
  export type CardTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardTag
     */
    select?: CardTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardTag
     */
    omit?: CardTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardTagInclude<ExtArgs> | null
  }


  /**
   * Model Rule
   */

  export type AggregateRule = {
    _count: RuleCountAggregateOutputType | null
    _min: RuleMinAggregateOutputType | null
    _max: RuleMaxAggregateOutputType | null
  }

  export type RuleMinAggregateOutputType = {
    id: string | null
    kind: $Enums.RuleKind | null
    name: string | null
    createdAt: Date | null
  }

  export type RuleMaxAggregateOutputType = {
    id: string | null
    kind: $Enums.RuleKind | null
    name: string | null
    createdAt: Date | null
  }

  export type RuleCountAggregateOutputType = {
    id: number
    kind: number
    name: number
    data: number
    createdAt: number
    _all: number
  }


  export type RuleMinAggregateInputType = {
    id?: true
    kind?: true
    name?: true
    createdAt?: true
  }

  export type RuleMaxAggregateInputType = {
    id?: true
    kind?: true
    name?: true
    createdAt?: true
  }

  export type RuleCountAggregateInputType = {
    id?: true
    kind?: true
    name?: true
    data?: true
    createdAt?: true
    _all?: true
  }

  export type RuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rule to aggregate.
     */
    where?: RuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rules to fetch.
     */
    orderBy?: RuleOrderByWithRelationInput | RuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rules
    **/
    _count?: true | RuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RuleMaxAggregateInputType
  }

  export type GetRuleAggregateType<T extends RuleAggregateArgs> = {
        [P in keyof T & keyof AggregateRule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRule[P]>
      : GetScalarType<T[P], AggregateRule[P]>
  }




  export type RuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RuleWhereInput
    orderBy?: RuleOrderByWithAggregationInput | RuleOrderByWithAggregationInput[]
    by: RuleScalarFieldEnum[] | RuleScalarFieldEnum
    having?: RuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RuleCountAggregateInputType | true
    _min?: RuleMinAggregateInputType
    _max?: RuleMaxAggregateInputType
  }

  export type RuleGroupByOutputType = {
    id: string
    kind: $Enums.RuleKind
    name: string
    data: JsonValue
    createdAt: Date
    _count: RuleCountAggregateOutputType | null
    _min: RuleMinAggregateOutputType | null
    _max: RuleMaxAggregateOutputType | null
  }

  type GetRuleGroupByPayload<T extends RuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RuleGroupByOutputType[P]>
            : GetScalarType<T[P], RuleGroupByOutputType[P]>
        }
      >
    >


  export type RuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kind?: boolean
    name?: boolean
    data?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["rule"]>

  export type RuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kind?: boolean
    name?: boolean
    data?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["rule"]>

  export type RuleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kind?: boolean
    name?: boolean
    data?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["rule"]>

  export type RuleSelectScalar = {
    id?: boolean
    kind?: boolean
    name?: boolean
    data?: boolean
    createdAt?: boolean
  }

  export type RuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "kind" | "name" | "data" | "createdAt", ExtArgs["result"]["rule"]>

  export type $RulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rule"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      kind: $Enums.RuleKind
      name: string
      data: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["rule"]>
    composites: {}
  }

  type RuleGetPayload<S extends boolean | null | undefined | RuleDefaultArgs> = $Result.GetResult<Prisma.$RulePayload, S>

  type RuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RuleCountAggregateInputType | true
    }

  export interface RuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rule'], meta: { name: 'Rule' } }
    /**
     * Find zero or one Rule that matches the filter.
     * @param {RuleFindUniqueArgs} args - Arguments to find a Rule
     * @example
     * // Get one Rule
     * const rule = await prisma.rule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RuleFindUniqueArgs>(args: SelectSubset<T, RuleFindUniqueArgs<ExtArgs>>): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RuleFindUniqueOrThrowArgs} args - Arguments to find a Rule
     * @example
     * // Get one Rule
     * const rule = await prisma.rule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RuleFindUniqueOrThrowArgs>(args: SelectSubset<T, RuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleFindFirstArgs} args - Arguments to find a Rule
     * @example
     * // Get one Rule
     * const rule = await prisma.rule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RuleFindFirstArgs>(args?: SelectSubset<T, RuleFindFirstArgs<ExtArgs>>): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleFindFirstOrThrowArgs} args - Arguments to find a Rule
     * @example
     * // Get one Rule
     * const rule = await prisma.rule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RuleFindFirstOrThrowArgs>(args?: SelectSubset<T, RuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rules
     * const rules = await prisma.rule.findMany()
     * 
     * // Get first 10 Rules
     * const rules = await prisma.rule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ruleWithIdOnly = await prisma.rule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RuleFindManyArgs>(args?: SelectSubset<T, RuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rule.
     * @param {RuleCreateArgs} args - Arguments to create a Rule.
     * @example
     * // Create one Rule
     * const Rule = await prisma.rule.create({
     *   data: {
     *     // ... data to create a Rule
     *   }
     * })
     * 
     */
    create<T extends RuleCreateArgs>(args: SelectSubset<T, RuleCreateArgs<ExtArgs>>): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rules.
     * @param {RuleCreateManyArgs} args - Arguments to create many Rules.
     * @example
     * // Create many Rules
     * const rule = await prisma.rule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RuleCreateManyArgs>(args?: SelectSubset<T, RuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rules and returns the data saved in the database.
     * @param {RuleCreateManyAndReturnArgs} args - Arguments to create many Rules.
     * @example
     * // Create many Rules
     * const rule = await prisma.rule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rules and only return the `id`
     * const ruleWithIdOnly = await prisma.rule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RuleCreateManyAndReturnArgs>(args?: SelectSubset<T, RuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rule.
     * @param {RuleDeleteArgs} args - Arguments to delete one Rule.
     * @example
     * // Delete one Rule
     * const Rule = await prisma.rule.delete({
     *   where: {
     *     // ... filter to delete one Rule
     *   }
     * })
     * 
     */
    delete<T extends RuleDeleteArgs>(args: SelectSubset<T, RuleDeleteArgs<ExtArgs>>): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rule.
     * @param {RuleUpdateArgs} args - Arguments to update one Rule.
     * @example
     * // Update one Rule
     * const rule = await prisma.rule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RuleUpdateArgs>(args: SelectSubset<T, RuleUpdateArgs<ExtArgs>>): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rules.
     * @param {RuleDeleteManyArgs} args - Arguments to filter Rules to delete.
     * @example
     * // Delete a few Rules
     * const { count } = await prisma.rule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RuleDeleteManyArgs>(args?: SelectSubset<T, RuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rules
     * const rule = await prisma.rule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RuleUpdateManyArgs>(args: SelectSubset<T, RuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rules and returns the data updated in the database.
     * @param {RuleUpdateManyAndReturnArgs} args - Arguments to update many Rules.
     * @example
     * // Update many Rules
     * const rule = await prisma.rule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rules and only return the `id`
     * const ruleWithIdOnly = await prisma.rule.updateManyAndReturn({
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
    updateManyAndReturn<T extends RuleUpdateManyAndReturnArgs>(args: SelectSubset<T, RuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rule.
     * @param {RuleUpsertArgs} args - Arguments to update or create a Rule.
     * @example
     * // Update or create a Rule
     * const rule = await prisma.rule.upsert({
     *   create: {
     *     // ... data to create a Rule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rule we want to update
     *   }
     * })
     */
    upsert<T extends RuleUpsertArgs>(args: SelectSubset<T, RuleUpsertArgs<ExtArgs>>): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleCountArgs} args - Arguments to filter Rules to count.
     * @example
     * // Count the number of Rules
     * const count = await prisma.rule.count({
     *   where: {
     *     // ... the filter for the Rules we want to count
     *   }
     * })
    **/
    count<T extends RuleCountArgs>(
      args?: Subset<T, RuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RuleAggregateArgs>(args: Subset<T, RuleAggregateArgs>): Prisma.PrismaPromise<GetRuleAggregateType<T>>

    /**
     * Group by Rule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleGroupByArgs} args - Group by arguments.
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
      T extends RuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RuleGroupByArgs['orderBy'] }
        : { orderBy?: RuleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rule model
   */
  readonly fields: RuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Rule model
   */
  interface RuleFieldRefs {
    readonly id: FieldRef<"Rule", 'String'>
    readonly kind: FieldRef<"Rule", 'RuleKind'>
    readonly name: FieldRef<"Rule", 'String'>
    readonly data: FieldRef<"Rule", 'Json'>
    readonly createdAt: FieldRef<"Rule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Rule findUnique
   */
  export type RuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Filter, which Rule to fetch.
     */
    where: RuleWhereUniqueInput
  }

  /**
   * Rule findUniqueOrThrow
   */
  export type RuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Filter, which Rule to fetch.
     */
    where: RuleWhereUniqueInput
  }

  /**
   * Rule findFirst
   */
  export type RuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Filter, which Rule to fetch.
     */
    where?: RuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rules to fetch.
     */
    orderBy?: RuleOrderByWithRelationInput | RuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rules.
     */
    cursor?: RuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rules.
     */
    distinct?: RuleScalarFieldEnum | RuleScalarFieldEnum[]
  }

  /**
   * Rule findFirstOrThrow
   */
  export type RuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Filter, which Rule to fetch.
     */
    where?: RuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rules to fetch.
     */
    orderBy?: RuleOrderByWithRelationInput | RuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rules.
     */
    cursor?: RuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rules.
     */
    distinct?: RuleScalarFieldEnum | RuleScalarFieldEnum[]
  }

  /**
   * Rule findMany
   */
  export type RuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Filter, which Rules to fetch.
     */
    where?: RuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rules to fetch.
     */
    orderBy?: RuleOrderByWithRelationInput | RuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rules.
     */
    cursor?: RuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rules.
     */
    skip?: number
    distinct?: RuleScalarFieldEnum | RuleScalarFieldEnum[]
  }

  /**
   * Rule create
   */
  export type RuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * The data needed to create a Rule.
     */
    data: XOR<RuleCreateInput, RuleUncheckedCreateInput>
  }

  /**
   * Rule createMany
   */
  export type RuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rules.
     */
    data: RuleCreateManyInput | RuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rule createManyAndReturn
   */
  export type RuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * The data used to create many Rules.
     */
    data: RuleCreateManyInput | RuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rule update
   */
  export type RuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * The data needed to update a Rule.
     */
    data: XOR<RuleUpdateInput, RuleUncheckedUpdateInput>
    /**
     * Choose, which Rule to update.
     */
    where: RuleWhereUniqueInput
  }

  /**
   * Rule updateMany
   */
  export type RuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rules.
     */
    data: XOR<RuleUpdateManyMutationInput, RuleUncheckedUpdateManyInput>
    /**
     * Filter which Rules to update
     */
    where?: RuleWhereInput
    /**
     * Limit how many Rules to update.
     */
    limit?: number
  }

  /**
   * Rule updateManyAndReturn
   */
  export type RuleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * The data used to update Rules.
     */
    data: XOR<RuleUpdateManyMutationInput, RuleUncheckedUpdateManyInput>
    /**
     * Filter which Rules to update
     */
    where?: RuleWhereInput
    /**
     * Limit how many Rules to update.
     */
    limit?: number
  }

  /**
   * Rule upsert
   */
  export type RuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * The filter to search for the Rule to update in case it exists.
     */
    where: RuleWhereUniqueInput
    /**
     * In case the Rule found by the `where` argument doesn't exist, create a new Rule with this data.
     */
    create: XOR<RuleCreateInput, RuleUncheckedCreateInput>
    /**
     * In case the Rule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RuleUpdateInput, RuleUncheckedUpdateInput>
  }

  /**
   * Rule delete
   */
  export type RuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Filter which Rule to delete.
     */
    where: RuleWhereUniqueInput
  }

  /**
   * Rule deleteMany
   */
  export type RuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rules to delete
     */
    where?: RuleWhereInput
    /**
     * Limit how many Rules to delete.
     */
    limit?: number
  }

  /**
   * Rule without action
   */
  export type RuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
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


  export const CardScalarFieldEnum: {
    id: 'id',
    oracleId: 'oracleId',
    scryfallId: 'scryfallId',
    name: 'name',
    oracleText: 'oracleText',
    typeLine: 'typeLine',
    manaCost: 'manaCost',
    cmc: 'cmc',
    colorIdentity: 'colorIdentity',
    keywords: 'keywords',
    producedMana: 'producedMana',
    legalCommander: 'legalCommander',
    banned: 'banned',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CardScalarFieldEnum = (typeof CardScalarFieldEnum)[keyof typeof CardScalarFieldEnum]


  export const CardPrintScalarFieldEnum: {
    id: 'id',
    cardId: 'cardId',
    setCode: 'setCode',
    collectorNumber: 'collectorNumber',
    rarity: 'rarity',
    imageUris: 'imageUris',
    scryfallUri: 'scryfallUri'
  };

  export type CardPrintScalarFieldEnum = (typeof CardPrintScalarFieldEnum)[keyof typeof CardPrintScalarFieldEnum]


  export const PriceScalarFieldEnum: {
    id: 'id',
    cardPrintId: 'cardPrintId',
    observedAt: 'observedAt',
    source: 'source',
    currency: 'currency',
    amount: 'amount'
  };

  export type PriceScalarFieldEnum = (typeof PriceScalarFieldEnum)[keyof typeof PriceScalarFieldEnum]


  export const DeckScalarFieldEnum: {
    id: 'id',
    name: 'name',
    commanderNames: 'commanderNames',
    colorIdentity: 'colorIdentity',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DeckScalarFieldEnum = (typeof DeckScalarFieldEnum)[keyof typeof DeckScalarFieldEnum]


  export const DeckCardScalarFieldEnum: {
    deckId: 'deckId',
    cardId: 'cardId',
    quantity: 'quantity',
    isCommander: 'isCommander',
    isCompanion: 'isCompanion',
    category: 'category'
  };

  export type DeckCardScalarFieldEnum = (typeof DeckCardScalarFieldEnum)[keyof typeof DeckCardScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name',
    kind: 'kind',
    createdAt: 'createdAt'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const CardTagScalarFieldEnum: {
    cardId: 'cardId',
    tagId: 'tagId'
  };

  export type CardTagScalarFieldEnum = (typeof CardTagScalarFieldEnum)[keyof typeof CardTagScalarFieldEnum]


  export const RuleScalarFieldEnum: {
    id: 'id',
    kind: 'kind',
    name: 'name',
    data: 'data',
    createdAt: 'createdAt'
  };

  export type RuleScalarFieldEnum = (typeof RuleScalarFieldEnum)[keyof typeof RuleScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'PriceSource'
   */
  export type EnumPriceSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PriceSource'>
    


  /**
   * Reference to a field of type 'PriceSource[]'
   */
  export type ListEnumPriceSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PriceSource[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'CardRole'
   */
  export type EnumCardRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CardRole'>
    


  /**
   * Reference to a field of type 'CardRole[]'
   */
  export type ListEnumCardRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CardRole[]'>
    


  /**
   * Reference to a field of type 'TagKind'
   */
  export type EnumTagKindFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TagKind'>
    


  /**
   * Reference to a field of type 'TagKind[]'
   */
  export type ListEnumTagKindFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TagKind[]'>
    


  /**
   * Reference to a field of type 'RuleKind'
   */
  export type EnumRuleKindFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RuleKind'>
    


  /**
   * Reference to a field of type 'RuleKind[]'
   */
  export type ListEnumRuleKindFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RuleKind[]'>
    
  /**
   * Deep Input Types
   */


  export type CardWhereInput = {
    AND?: CardWhereInput | CardWhereInput[]
    OR?: CardWhereInput[]
    NOT?: CardWhereInput | CardWhereInput[]
    id?: StringFilter<"Card"> | string
    oracleId?: StringFilter<"Card"> | string
    scryfallId?: StringFilter<"Card"> | string
    name?: StringFilter<"Card"> | string
    oracleText?: StringNullableFilter<"Card"> | string | null
    typeLine?: StringNullableFilter<"Card"> | string | null
    manaCost?: StringNullableFilter<"Card"> | string | null
    cmc?: FloatNullableFilter<"Card"> | number | null
    colorIdentity?: StringNullableListFilter<"Card">
    keywords?: StringNullableListFilter<"Card">
    producedMana?: StringNullableListFilter<"Card">
    legalCommander?: BoolFilter<"Card"> | boolean
    banned?: BoolFilter<"Card"> | boolean
    createdAt?: DateTimeFilter<"Card"> | Date | string
    updatedAt?: DateTimeFilter<"Card"> | Date | string
    prints?: CardPrintListRelationFilter
    deckCards?: DeckCardListRelationFilter
    cardTags?: CardTagListRelationFilter
  }

  export type CardOrderByWithRelationInput = {
    id?: SortOrder
    oracleId?: SortOrder
    scryfallId?: SortOrder
    name?: SortOrder
    oracleText?: SortOrderInput | SortOrder
    typeLine?: SortOrderInput | SortOrder
    manaCost?: SortOrderInput | SortOrder
    cmc?: SortOrderInput | SortOrder
    colorIdentity?: SortOrder
    keywords?: SortOrder
    producedMana?: SortOrder
    legalCommander?: SortOrder
    banned?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    prints?: CardPrintOrderByRelationAggregateInput
    deckCards?: DeckCardOrderByRelationAggregateInput
    cardTags?: CardTagOrderByRelationAggregateInput
  }

  export type CardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    oracleId?: string
    scryfallId?: string
    AND?: CardWhereInput | CardWhereInput[]
    OR?: CardWhereInput[]
    NOT?: CardWhereInput | CardWhereInput[]
    name?: StringFilter<"Card"> | string
    oracleText?: StringNullableFilter<"Card"> | string | null
    typeLine?: StringNullableFilter<"Card"> | string | null
    manaCost?: StringNullableFilter<"Card"> | string | null
    cmc?: FloatNullableFilter<"Card"> | number | null
    colorIdentity?: StringNullableListFilter<"Card">
    keywords?: StringNullableListFilter<"Card">
    producedMana?: StringNullableListFilter<"Card">
    legalCommander?: BoolFilter<"Card"> | boolean
    banned?: BoolFilter<"Card"> | boolean
    createdAt?: DateTimeFilter<"Card"> | Date | string
    updatedAt?: DateTimeFilter<"Card"> | Date | string
    prints?: CardPrintListRelationFilter
    deckCards?: DeckCardListRelationFilter
    cardTags?: CardTagListRelationFilter
  }, "id" | "oracleId" | "scryfallId">

  export type CardOrderByWithAggregationInput = {
    id?: SortOrder
    oracleId?: SortOrder
    scryfallId?: SortOrder
    name?: SortOrder
    oracleText?: SortOrderInput | SortOrder
    typeLine?: SortOrderInput | SortOrder
    manaCost?: SortOrderInput | SortOrder
    cmc?: SortOrderInput | SortOrder
    colorIdentity?: SortOrder
    keywords?: SortOrder
    producedMana?: SortOrder
    legalCommander?: SortOrder
    banned?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CardCountOrderByAggregateInput
    _avg?: CardAvgOrderByAggregateInput
    _max?: CardMaxOrderByAggregateInput
    _min?: CardMinOrderByAggregateInput
    _sum?: CardSumOrderByAggregateInput
  }

  export type CardScalarWhereWithAggregatesInput = {
    AND?: CardScalarWhereWithAggregatesInput | CardScalarWhereWithAggregatesInput[]
    OR?: CardScalarWhereWithAggregatesInput[]
    NOT?: CardScalarWhereWithAggregatesInput | CardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Card"> | string
    oracleId?: StringWithAggregatesFilter<"Card"> | string
    scryfallId?: StringWithAggregatesFilter<"Card"> | string
    name?: StringWithAggregatesFilter<"Card"> | string
    oracleText?: StringNullableWithAggregatesFilter<"Card"> | string | null
    typeLine?: StringNullableWithAggregatesFilter<"Card"> | string | null
    manaCost?: StringNullableWithAggregatesFilter<"Card"> | string | null
    cmc?: FloatNullableWithAggregatesFilter<"Card"> | number | null
    colorIdentity?: StringNullableListFilter<"Card">
    keywords?: StringNullableListFilter<"Card">
    producedMana?: StringNullableListFilter<"Card">
    legalCommander?: BoolWithAggregatesFilter<"Card"> | boolean
    banned?: BoolWithAggregatesFilter<"Card"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Card"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Card"> | Date | string
  }

  export type CardPrintWhereInput = {
    AND?: CardPrintWhereInput | CardPrintWhereInput[]
    OR?: CardPrintWhereInput[]
    NOT?: CardPrintWhereInput | CardPrintWhereInput[]
    id?: StringFilter<"CardPrint"> | string
    cardId?: StringFilter<"CardPrint"> | string
    setCode?: StringFilter<"CardPrint"> | string
    collectorNumber?: StringFilter<"CardPrint"> | string
    rarity?: StringNullableFilter<"CardPrint"> | string | null
    imageUris?: JsonNullableFilter<"CardPrint">
    scryfallUri?: StringNullableFilter<"CardPrint"> | string | null
    prices?: PriceListRelationFilter
    card?: XOR<CardScalarRelationFilter, CardWhereInput>
  }

  export type CardPrintOrderByWithRelationInput = {
    id?: SortOrder
    cardId?: SortOrder
    setCode?: SortOrder
    collectorNumber?: SortOrder
    rarity?: SortOrderInput | SortOrder
    imageUris?: SortOrderInput | SortOrder
    scryfallUri?: SortOrderInput | SortOrder
    prices?: PriceOrderByRelationAggregateInput
    card?: CardOrderByWithRelationInput
  }

  export type CardPrintWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    setCode_collectorNumber?: CardPrintSetCodeCollectorNumberCompoundUniqueInput
    AND?: CardPrintWhereInput | CardPrintWhereInput[]
    OR?: CardPrintWhereInput[]
    NOT?: CardPrintWhereInput | CardPrintWhereInput[]
    cardId?: StringFilter<"CardPrint"> | string
    setCode?: StringFilter<"CardPrint"> | string
    collectorNumber?: StringFilter<"CardPrint"> | string
    rarity?: StringNullableFilter<"CardPrint"> | string | null
    imageUris?: JsonNullableFilter<"CardPrint">
    scryfallUri?: StringNullableFilter<"CardPrint"> | string | null
    prices?: PriceListRelationFilter
    card?: XOR<CardScalarRelationFilter, CardWhereInput>
  }, "id" | "setCode_collectorNumber">

  export type CardPrintOrderByWithAggregationInput = {
    id?: SortOrder
    cardId?: SortOrder
    setCode?: SortOrder
    collectorNumber?: SortOrder
    rarity?: SortOrderInput | SortOrder
    imageUris?: SortOrderInput | SortOrder
    scryfallUri?: SortOrderInput | SortOrder
    _count?: CardPrintCountOrderByAggregateInput
    _max?: CardPrintMaxOrderByAggregateInput
    _min?: CardPrintMinOrderByAggregateInput
  }

  export type CardPrintScalarWhereWithAggregatesInput = {
    AND?: CardPrintScalarWhereWithAggregatesInput | CardPrintScalarWhereWithAggregatesInput[]
    OR?: CardPrintScalarWhereWithAggregatesInput[]
    NOT?: CardPrintScalarWhereWithAggregatesInput | CardPrintScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CardPrint"> | string
    cardId?: StringWithAggregatesFilter<"CardPrint"> | string
    setCode?: StringWithAggregatesFilter<"CardPrint"> | string
    collectorNumber?: StringWithAggregatesFilter<"CardPrint"> | string
    rarity?: StringNullableWithAggregatesFilter<"CardPrint"> | string | null
    imageUris?: JsonNullableWithAggregatesFilter<"CardPrint">
    scryfallUri?: StringNullableWithAggregatesFilter<"CardPrint"> | string | null
  }

  export type PriceWhereInput = {
    AND?: PriceWhereInput | PriceWhereInput[]
    OR?: PriceWhereInput[]
    NOT?: PriceWhereInput | PriceWhereInput[]
    id?: StringFilter<"Price"> | string
    cardPrintId?: StringFilter<"Price"> | string
    observedAt?: DateTimeFilter<"Price"> | Date | string
    source?: EnumPriceSourceFilter<"Price"> | $Enums.PriceSource
    currency?: StringFilter<"Price"> | string
    amount?: DecimalFilter<"Price"> | Decimal | DecimalJsLike | number | string
    cardPrint?: XOR<CardPrintScalarRelationFilter, CardPrintWhereInput>
  }

  export type PriceOrderByWithRelationInput = {
    id?: SortOrder
    cardPrintId?: SortOrder
    observedAt?: SortOrder
    source?: SortOrder
    currency?: SortOrder
    amount?: SortOrder
    cardPrint?: CardPrintOrderByWithRelationInput
  }

  export type PriceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PriceWhereInput | PriceWhereInput[]
    OR?: PriceWhereInput[]
    NOT?: PriceWhereInput | PriceWhereInput[]
    cardPrintId?: StringFilter<"Price"> | string
    observedAt?: DateTimeFilter<"Price"> | Date | string
    source?: EnumPriceSourceFilter<"Price"> | $Enums.PriceSource
    currency?: StringFilter<"Price"> | string
    amount?: DecimalFilter<"Price"> | Decimal | DecimalJsLike | number | string
    cardPrint?: XOR<CardPrintScalarRelationFilter, CardPrintWhereInput>
  }, "id">

  export type PriceOrderByWithAggregationInput = {
    id?: SortOrder
    cardPrintId?: SortOrder
    observedAt?: SortOrder
    source?: SortOrder
    currency?: SortOrder
    amount?: SortOrder
    _count?: PriceCountOrderByAggregateInput
    _avg?: PriceAvgOrderByAggregateInput
    _max?: PriceMaxOrderByAggregateInput
    _min?: PriceMinOrderByAggregateInput
    _sum?: PriceSumOrderByAggregateInput
  }

  export type PriceScalarWhereWithAggregatesInput = {
    AND?: PriceScalarWhereWithAggregatesInput | PriceScalarWhereWithAggregatesInput[]
    OR?: PriceScalarWhereWithAggregatesInput[]
    NOT?: PriceScalarWhereWithAggregatesInput | PriceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Price"> | string
    cardPrintId?: StringWithAggregatesFilter<"Price"> | string
    observedAt?: DateTimeWithAggregatesFilter<"Price"> | Date | string
    source?: EnumPriceSourceWithAggregatesFilter<"Price"> | $Enums.PriceSource
    currency?: StringWithAggregatesFilter<"Price"> | string
    amount?: DecimalWithAggregatesFilter<"Price"> | Decimal | DecimalJsLike | number | string
  }

  export type DeckWhereInput = {
    AND?: DeckWhereInput | DeckWhereInput[]
    OR?: DeckWhereInput[]
    NOT?: DeckWhereInput | DeckWhereInput[]
    id?: StringFilter<"Deck"> | string
    name?: StringFilter<"Deck"> | string
    commanderNames?: StringNullableListFilter<"Deck">
    colorIdentity?: StringNullableListFilter<"Deck">
    createdAt?: DateTimeFilter<"Deck"> | Date | string
    updatedAt?: DateTimeFilter<"Deck"> | Date | string
    cards?: DeckCardListRelationFilter
  }

  export type DeckOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    commanderNames?: SortOrder
    colorIdentity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cards?: DeckCardOrderByRelationAggregateInput
  }

  export type DeckWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DeckWhereInput | DeckWhereInput[]
    OR?: DeckWhereInput[]
    NOT?: DeckWhereInput | DeckWhereInput[]
    name?: StringFilter<"Deck"> | string
    commanderNames?: StringNullableListFilter<"Deck">
    colorIdentity?: StringNullableListFilter<"Deck">
    createdAt?: DateTimeFilter<"Deck"> | Date | string
    updatedAt?: DateTimeFilter<"Deck"> | Date | string
    cards?: DeckCardListRelationFilter
  }, "id">

  export type DeckOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    commanderNames?: SortOrder
    colorIdentity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DeckCountOrderByAggregateInput
    _max?: DeckMaxOrderByAggregateInput
    _min?: DeckMinOrderByAggregateInput
  }

  export type DeckScalarWhereWithAggregatesInput = {
    AND?: DeckScalarWhereWithAggregatesInput | DeckScalarWhereWithAggregatesInput[]
    OR?: DeckScalarWhereWithAggregatesInput[]
    NOT?: DeckScalarWhereWithAggregatesInput | DeckScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Deck"> | string
    name?: StringWithAggregatesFilter<"Deck"> | string
    commanderNames?: StringNullableListFilter<"Deck">
    colorIdentity?: StringNullableListFilter<"Deck">
    createdAt?: DateTimeWithAggregatesFilter<"Deck"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Deck"> | Date | string
  }

  export type DeckCardWhereInput = {
    AND?: DeckCardWhereInput | DeckCardWhereInput[]
    OR?: DeckCardWhereInput[]
    NOT?: DeckCardWhereInput | DeckCardWhereInput[]
    deckId?: StringFilter<"DeckCard"> | string
    cardId?: StringFilter<"DeckCard"> | string
    quantity?: IntFilter<"DeckCard"> | number
    isCommander?: BoolFilter<"DeckCard"> | boolean
    isCompanion?: BoolFilter<"DeckCard"> | boolean
    category?: EnumCardRoleFilter<"DeckCard"> | $Enums.CardRole
    deck?: XOR<DeckScalarRelationFilter, DeckWhereInput>
    card?: XOR<CardScalarRelationFilter, CardWhereInput>
  }

  export type DeckCardOrderByWithRelationInput = {
    deckId?: SortOrder
    cardId?: SortOrder
    quantity?: SortOrder
    isCommander?: SortOrder
    isCompanion?: SortOrder
    category?: SortOrder
    deck?: DeckOrderByWithRelationInput
    card?: CardOrderByWithRelationInput
  }

  export type DeckCardWhereUniqueInput = Prisma.AtLeast<{
    deckId_cardId?: DeckCardDeckIdCardIdCompoundUniqueInput
    AND?: DeckCardWhereInput | DeckCardWhereInput[]
    OR?: DeckCardWhereInput[]
    NOT?: DeckCardWhereInput | DeckCardWhereInput[]
    deckId?: StringFilter<"DeckCard"> | string
    cardId?: StringFilter<"DeckCard"> | string
    quantity?: IntFilter<"DeckCard"> | number
    isCommander?: BoolFilter<"DeckCard"> | boolean
    isCompanion?: BoolFilter<"DeckCard"> | boolean
    category?: EnumCardRoleFilter<"DeckCard"> | $Enums.CardRole
    deck?: XOR<DeckScalarRelationFilter, DeckWhereInput>
    card?: XOR<CardScalarRelationFilter, CardWhereInput>
  }, "deckId_cardId">

  export type DeckCardOrderByWithAggregationInput = {
    deckId?: SortOrder
    cardId?: SortOrder
    quantity?: SortOrder
    isCommander?: SortOrder
    isCompanion?: SortOrder
    category?: SortOrder
    _count?: DeckCardCountOrderByAggregateInput
    _avg?: DeckCardAvgOrderByAggregateInput
    _max?: DeckCardMaxOrderByAggregateInput
    _min?: DeckCardMinOrderByAggregateInput
    _sum?: DeckCardSumOrderByAggregateInput
  }

  export type DeckCardScalarWhereWithAggregatesInput = {
    AND?: DeckCardScalarWhereWithAggregatesInput | DeckCardScalarWhereWithAggregatesInput[]
    OR?: DeckCardScalarWhereWithAggregatesInput[]
    NOT?: DeckCardScalarWhereWithAggregatesInput | DeckCardScalarWhereWithAggregatesInput[]
    deckId?: StringWithAggregatesFilter<"DeckCard"> | string
    cardId?: StringWithAggregatesFilter<"DeckCard"> | string
    quantity?: IntWithAggregatesFilter<"DeckCard"> | number
    isCommander?: BoolWithAggregatesFilter<"DeckCard"> | boolean
    isCompanion?: BoolWithAggregatesFilter<"DeckCard"> | boolean
    category?: EnumCardRoleWithAggregatesFilter<"DeckCard"> | $Enums.CardRole
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    kind?: EnumTagKindFilter<"Tag"> | $Enums.TagKind
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    cardTags?: CardTagListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    kind?: SortOrder
    createdAt?: SortOrder
    cardTags?: CardTagOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    kind?: EnumTagKindFilter<"Tag"> | $Enums.TagKind
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    cardTags?: CardTagListRelationFilter
  }, "id" | "name">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    kind?: SortOrder
    createdAt?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tag"> | string
    name?: StringWithAggregatesFilter<"Tag"> | string
    kind?: EnumTagKindWithAggregatesFilter<"Tag"> | $Enums.TagKind
    createdAt?: DateTimeWithAggregatesFilter<"Tag"> | Date | string
  }

  export type CardTagWhereInput = {
    AND?: CardTagWhereInput | CardTagWhereInput[]
    OR?: CardTagWhereInput[]
    NOT?: CardTagWhereInput | CardTagWhereInput[]
    cardId?: StringFilter<"CardTag"> | string
    tagId?: StringFilter<"CardTag"> | string
    card?: XOR<CardScalarRelationFilter, CardWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }

  export type CardTagOrderByWithRelationInput = {
    cardId?: SortOrder
    tagId?: SortOrder
    card?: CardOrderByWithRelationInput
    tag?: TagOrderByWithRelationInput
  }

  export type CardTagWhereUniqueInput = Prisma.AtLeast<{
    cardId_tagId?: CardTagCardIdTagIdCompoundUniqueInput
    AND?: CardTagWhereInput | CardTagWhereInput[]
    OR?: CardTagWhereInput[]
    NOT?: CardTagWhereInput | CardTagWhereInput[]
    cardId?: StringFilter<"CardTag"> | string
    tagId?: StringFilter<"CardTag"> | string
    card?: XOR<CardScalarRelationFilter, CardWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }, "cardId_tagId">

  export type CardTagOrderByWithAggregationInput = {
    cardId?: SortOrder
    tagId?: SortOrder
    _count?: CardTagCountOrderByAggregateInput
    _max?: CardTagMaxOrderByAggregateInput
    _min?: CardTagMinOrderByAggregateInput
  }

  export type CardTagScalarWhereWithAggregatesInput = {
    AND?: CardTagScalarWhereWithAggregatesInput | CardTagScalarWhereWithAggregatesInput[]
    OR?: CardTagScalarWhereWithAggregatesInput[]
    NOT?: CardTagScalarWhereWithAggregatesInput | CardTagScalarWhereWithAggregatesInput[]
    cardId?: StringWithAggregatesFilter<"CardTag"> | string
    tagId?: StringWithAggregatesFilter<"CardTag"> | string
  }

  export type RuleWhereInput = {
    AND?: RuleWhereInput | RuleWhereInput[]
    OR?: RuleWhereInput[]
    NOT?: RuleWhereInput | RuleWhereInput[]
    id?: StringFilter<"Rule"> | string
    kind?: EnumRuleKindFilter<"Rule"> | $Enums.RuleKind
    name?: StringFilter<"Rule"> | string
    data?: JsonFilter<"Rule">
    createdAt?: DateTimeFilter<"Rule"> | Date | string
  }

  export type RuleOrderByWithRelationInput = {
    id?: SortOrder
    kind?: SortOrder
    name?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
  }

  export type RuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RuleWhereInput | RuleWhereInput[]
    OR?: RuleWhereInput[]
    NOT?: RuleWhereInput | RuleWhereInput[]
    kind?: EnumRuleKindFilter<"Rule"> | $Enums.RuleKind
    name?: StringFilter<"Rule"> | string
    data?: JsonFilter<"Rule">
    createdAt?: DateTimeFilter<"Rule"> | Date | string
  }, "id">

  export type RuleOrderByWithAggregationInput = {
    id?: SortOrder
    kind?: SortOrder
    name?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    _count?: RuleCountOrderByAggregateInput
    _max?: RuleMaxOrderByAggregateInput
    _min?: RuleMinOrderByAggregateInput
  }

  export type RuleScalarWhereWithAggregatesInput = {
    AND?: RuleScalarWhereWithAggregatesInput | RuleScalarWhereWithAggregatesInput[]
    OR?: RuleScalarWhereWithAggregatesInput[]
    NOT?: RuleScalarWhereWithAggregatesInput | RuleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Rule"> | string
    kind?: EnumRuleKindWithAggregatesFilter<"Rule"> | $Enums.RuleKind
    name?: StringWithAggregatesFilter<"Rule"> | string
    data?: JsonWithAggregatesFilter<"Rule">
    createdAt?: DateTimeWithAggregatesFilter<"Rule"> | Date | string
  }

  export type CardCreateInput = {
    id?: string
    oracleId: string
    scryfallId: string
    name: string
    oracleText?: string | null
    typeLine?: string | null
    manaCost?: string | null
    cmc?: number | null
    colorIdentity?: CardCreatecolorIdentityInput | string[]
    keywords?: CardCreatekeywordsInput | string[]
    producedMana?: CardCreateproducedManaInput | string[]
    legalCommander?: boolean
    banned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    prints?: CardPrintCreateNestedManyWithoutCardInput
    deckCards?: DeckCardCreateNestedManyWithoutCardInput
    cardTags?: CardTagCreateNestedManyWithoutCardInput
  }

  export type CardUncheckedCreateInput = {
    id?: string
    oracleId: string
    scryfallId: string
    name: string
    oracleText?: string | null
    typeLine?: string | null
    manaCost?: string | null
    cmc?: number | null
    colorIdentity?: CardCreatecolorIdentityInput | string[]
    keywords?: CardCreatekeywordsInput | string[]
    producedMana?: CardCreateproducedManaInput | string[]
    legalCommander?: boolean
    banned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    prints?: CardPrintUncheckedCreateNestedManyWithoutCardInput
    deckCards?: DeckCardUncheckedCreateNestedManyWithoutCardInput
    cardTags?: CardTagUncheckedCreateNestedManyWithoutCardInput
  }

  export type CardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    oracleId?: StringFieldUpdateOperationsInput | string
    scryfallId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    oracleText?: NullableStringFieldUpdateOperationsInput | string | null
    typeLine?: NullableStringFieldUpdateOperationsInput | string | null
    manaCost?: NullableStringFieldUpdateOperationsInput | string | null
    cmc?: NullableFloatFieldUpdateOperationsInput | number | null
    colorIdentity?: CardUpdatecolorIdentityInput | string[]
    keywords?: CardUpdatekeywordsInput | string[]
    producedMana?: CardUpdateproducedManaInput | string[]
    legalCommander?: BoolFieldUpdateOperationsInput | boolean
    banned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prints?: CardPrintUpdateManyWithoutCardNestedInput
    deckCards?: DeckCardUpdateManyWithoutCardNestedInput
    cardTags?: CardTagUpdateManyWithoutCardNestedInput
  }

  export type CardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    oracleId?: StringFieldUpdateOperationsInput | string
    scryfallId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    oracleText?: NullableStringFieldUpdateOperationsInput | string | null
    typeLine?: NullableStringFieldUpdateOperationsInput | string | null
    manaCost?: NullableStringFieldUpdateOperationsInput | string | null
    cmc?: NullableFloatFieldUpdateOperationsInput | number | null
    colorIdentity?: CardUpdatecolorIdentityInput | string[]
    keywords?: CardUpdatekeywordsInput | string[]
    producedMana?: CardUpdateproducedManaInput | string[]
    legalCommander?: BoolFieldUpdateOperationsInput | boolean
    banned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prints?: CardPrintUncheckedUpdateManyWithoutCardNestedInput
    deckCards?: DeckCardUncheckedUpdateManyWithoutCardNestedInput
    cardTags?: CardTagUncheckedUpdateManyWithoutCardNestedInput
  }

  export type CardCreateManyInput = {
    id?: string
    oracleId: string
    scryfallId: string
    name: string
    oracleText?: string | null
    typeLine?: string | null
    manaCost?: string | null
    cmc?: number | null
    colorIdentity?: CardCreatecolorIdentityInput | string[]
    keywords?: CardCreatekeywordsInput | string[]
    producedMana?: CardCreateproducedManaInput | string[]
    legalCommander?: boolean
    banned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    oracleId?: StringFieldUpdateOperationsInput | string
    scryfallId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    oracleText?: NullableStringFieldUpdateOperationsInput | string | null
    typeLine?: NullableStringFieldUpdateOperationsInput | string | null
    manaCost?: NullableStringFieldUpdateOperationsInput | string | null
    cmc?: NullableFloatFieldUpdateOperationsInput | number | null
    colorIdentity?: CardUpdatecolorIdentityInput | string[]
    keywords?: CardUpdatekeywordsInput | string[]
    producedMana?: CardUpdateproducedManaInput | string[]
    legalCommander?: BoolFieldUpdateOperationsInput | boolean
    banned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    oracleId?: StringFieldUpdateOperationsInput | string
    scryfallId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    oracleText?: NullableStringFieldUpdateOperationsInput | string | null
    typeLine?: NullableStringFieldUpdateOperationsInput | string | null
    manaCost?: NullableStringFieldUpdateOperationsInput | string | null
    cmc?: NullableFloatFieldUpdateOperationsInput | number | null
    colorIdentity?: CardUpdatecolorIdentityInput | string[]
    keywords?: CardUpdatekeywordsInput | string[]
    producedMana?: CardUpdateproducedManaInput | string[]
    legalCommander?: BoolFieldUpdateOperationsInput | boolean
    banned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardPrintCreateInput = {
    id?: string
    setCode: string
    collectorNumber: string
    rarity?: string | null
    imageUris?: NullableJsonNullValueInput | InputJsonValue
    scryfallUri?: string | null
    prices?: PriceCreateNestedManyWithoutCardPrintInput
    card: CardCreateNestedOneWithoutPrintsInput
  }

  export type CardPrintUncheckedCreateInput = {
    id?: string
    cardId: string
    setCode: string
    collectorNumber: string
    rarity?: string | null
    imageUris?: NullableJsonNullValueInput | InputJsonValue
    scryfallUri?: string | null
    prices?: PriceUncheckedCreateNestedManyWithoutCardPrintInput
  }

  export type CardPrintUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    setCode?: StringFieldUpdateOperationsInput | string
    collectorNumber?: StringFieldUpdateOperationsInput | string
    rarity?: NullableStringFieldUpdateOperationsInput | string | null
    imageUris?: NullableJsonNullValueInput | InputJsonValue
    scryfallUri?: NullableStringFieldUpdateOperationsInput | string | null
    prices?: PriceUpdateManyWithoutCardPrintNestedInput
    card?: CardUpdateOneRequiredWithoutPrintsNestedInput
  }

  export type CardPrintUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardId?: StringFieldUpdateOperationsInput | string
    setCode?: StringFieldUpdateOperationsInput | string
    collectorNumber?: StringFieldUpdateOperationsInput | string
    rarity?: NullableStringFieldUpdateOperationsInput | string | null
    imageUris?: NullableJsonNullValueInput | InputJsonValue
    scryfallUri?: NullableStringFieldUpdateOperationsInput | string | null
    prices?: PriceUncheckedUpdateManyWithoutCardPrintNestedInput
  }

  export type CardPrintCreateManyInput = {
    id?: string
    cardId: string
    setCode: string
    collectorNumber: string
    rarity?: string | null
    imageUris?: NullableJsonNullValueInput | InputJsonValue
    scryfallUri?: string | null
  }

  export type CardPrintUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    setCode?: StringFieldUpdateOperationsInput | string
    collectorNumber?: StringFieldUpdateOperationsInput | string
    rarity?: NullableStringFieldUpdateOperationsInput | string | null
    imageUris?: NullableJsonNullValueInput | InputJsonValue
    scryfallUri?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CardPrintUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardId?: StringFieldUpdateOperationsInput | string
    setCode?: StringFieldUpdateOperationsInput | string
    collectorNumber?: StringFieldUpdateOperationsInput | string
    rarity?: NullableStringFieldUpdateOperationsInput | string | null
    imageUris?: NullableJsonNullValueInput | InputJsonValue
    scryfallUri?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PriceCreateInput = {
    id?: string
    observedAt?: Date | string
    source: $Enums.PriceSource
    currency?: string
    amount: Decimal | DecimalJsLike | number | string
    cardPrint: CardPrintCreateNestedOneWithoutPricesInput
  }

  export type PriceUncheckedCreateInput = {
    id?: string
    cardPrintId: string
    observedAt?: Date | string
    source: $Enums.PriceSource
    currency?: string
    amount: Decimal | DecimalJsLike | number | string
  }

  export type PriceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    observedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumPriceSourceFieldUpdateOperationsInput | $Enums.PriceSource
    currency?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cardPrint?: CardPrintUpdateOneRequiredWithoutPricesNestedInput
  }

  export type PriceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardPrintId?: StringFieldUpdateOperationsInput | string
    observedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumPriceSourceFieldUpdateOperationsInput | $Enums.PriceSource
    currency?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PriceCreateManyInput = {
    id?: string
    cardPrintId: string
    observedAt?: Date | string
    source: $Enums.PriceSource
    currency?: string
    amount: Decimal | DecimalJsLike | number | string
  }

  export type PriceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    observedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumPriceSourceFieldUpdateOperationsInput | $Enums.PriceSource
    currency?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PriceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardPrintId?: StringFieldUpdateOperationsInput | string
    observedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumPriceSourceFieldUpdateOperationsInput | $Enums.PriceSource
    currency?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type DeckCreateInput = {
    id?: string
    name: string
    commanderNames?: DeckCreatecommanderNamesInput | string[]
    colorIdentity?: DeckCreatecolorIdentityInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    cards?: DeckCardCreateNestedManyWithoutDeckInput
  }

  export type DeckUncheckedCreateInput = {
    id?: string
    name: string
    commanderNames?: DeckCreatecommanderNamesInput | string[]
    colorIdentity?: DeckCreatecolorIdentityInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    cards?: DeckCardUncheckedCreateNestedManyWithoutDeckInput
  }

  export type DeckUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    commanderNames?: DeckUpdatecommanderNamesInput | string[]
    colorIdentity?: DeckUpdatecolorIdentityInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cards?: DeckCardUpdateManyWithoutDeckNestedInput
  }

  export type DeckUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    commanderNames?: DeckUpdatecommanderNamesInput | string[]
    colorIdentity?: DeckUpdatecolorIdentityInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cards?: DeckCardUncheckedUpdateManyWithoutDeckNestedInput
  }

  export type DeckCreateManyInput = {
    id?: string
    name: string
    commanderNames?: DeckCreatecommanderNamesInput | string[]
    colorIdentity?: DeckCreatecolorIdentityInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeckUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    commanderNames?: DeckUpdatecommanderNamesInput | string[]
    colorIdentity?: DeckUpdatecolorIdentityInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeckUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    commanderNames?: DeckUpdatecommanderNamesInput | string[]
    colorIdentity?: DeckUpdatecolorIdentityInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeckCardCreateInput = {
    quantity?: number
    isCommander?: boolean
    isCompanion?: boolean
    category?: $Enums.CardRole
    deck: DeckCreateNestedOneWithoutCardsInput
    card: CardCreateNestedOneWithoutDeckCardsInput
  }

  export type DeckCardUncheckedCreateInput = {
    deckId: string
    cardId: string
    quantity?: number
    isCommander?: boolean
    isCompanion?: boolean
    category?: $Enums.CardRole
  }

  export type DeckCardUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    isCommander?: BoolFieldUpdateOperationsInput | boolean
    isCompanion?: BoolFieldUpdateOperationsInput | boolean
    category?: EnumCardRoleFieldUpdateOperationsInput | $Enums.CardRole
    deck?: DeckUpdateOneRequiredWithoutCardsNestedInput
    card?: CardUpdateOneRequiredWithoutDeckCardsNestedInput
  }

  export type DeckCardUncheckedUpdateInput = {
    deckId?: StringFieldUpdateOperationsInput | string
    cardId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    isCommander?: BoolFieldUpdateOperationsInput | boolean
    isCompanion?: BoolFieldUpdateOperationsInput | boolean
    category?: EnumCardRoleFieldUpdateOperationsInput | $Enums.CardRole
  }

  export type DeckCardCreateManyInput = {
    deckId: string
    cardId: string
    quantity?: number
    isCommander?: boolean
    isCompanion?: boolean
    category?: $Enums.CardRole
  }

  export type DeckCardUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    isCommander?: BoolFieldUpdateOperationsInput | boolean
    isCompanion?: BoolFieldUpdateOperationsInput | boolean
    category?: EnumCardRoleFieldUpdateOperationsInput | $Enums.CardRole
  }

  export type DeckCardUncheckedUpdateManyInput = {
    deckId?: StringFieldUpdateOperationsInput | string
    cardId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    isCommander?: BoolFieldUpdateOperationsInput | boolean
    isCompanion?: BoolFieldUpdateOperationsInput | boolean
    category?: EnumCardRoleFieldUpdateOperationsInput | $Enums.CardRole
  }

  export type TagCreateInput = {
    id?: string
    name: string
    kind?: $Enums.TagKind
    createdAt?: Date | string
    cardTags?: CardTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateInput = {
    id?: string
    name: string
    kind?: $Enums.TagKind
    createdAt?: Date | string
    cardTags?: CardTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    kind?: EnumTagKindFieldUpdateOperationsInput | $Enums.TagKind
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cardTags?: CardTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    kind?: EnumTagKindFieldUpdateOperationsInput | $Enums.TagKind
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cardTags?: CardTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagCreateManyInput = {
    id?: string
    name: string
    kind?: $Enums.TagKind
    createdAt?: Date | string
  }

  export type TagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    kind?: EnumTagKindFieldUpdateOperationsInput | $Enums.TagKind
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    kind?: EnumTagKindFieldUpdateOperationsInput | $Enums.TagKind
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardTagCreateInput = {
    card: CardCreateNestedOneWithoutCardTagsInput
    tag: TagCreateNestedOneWithoutCardTagsInput
  }

  export type CardTagUncheckedCreateInput = {
    cardId: string
    tagId: string
  }

  export type CardTagUpdateInput = {
    card?: CardUpdateOneRequiredWithoutCardTagsNestedInput
    tag?: TagUpdateOneRequiredWithoutCardTagsNestedInput
  }

  export type CardTagUncheckedUpdateInput = {
    cardId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type CardTagCreateManyInput = {
    cardId: string
    tagId: string
  }

  export type CardTagUpdateManyMutationInput = {

  }

  export type CardTagUncheckedUpdateManyInput = {
    cardId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type RuleCreateInput = {
    id?: string
    kind: $Enums.RuleKind
    name: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type RuleUncheckedCreateInput = {
    id?: string
    kind: $Enums.RuleKind
    name: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type RuleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    kind?: EnumRuleKindFieldUpdateOperationsInput | $Enums.RuleKind
    name?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RuleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    kind?: EnumRuleKindFieldUpdateOperationsInput | $Enums.RuleKind
    name?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RuleCreateManyInput = {
    id?: string
    kind: $Enums.RuleKind
    name: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type RuleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    kind?: EnumRuleKindFieldUpdateOperationsInput | $Enums.RuleKind
    name?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RuleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    kind?: EnumRuleKindFieldUpdateOperationsInput | $Enums.RuleKind
    name?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type CardPrintListRelationFilter = {
    every?: CardPrintWhereInput
    some?: CardPrintWhereInput
    none?: CardPrintWhereInput
  }

  export type DeckCardListRelationFilter = {
    every?: DeckCardWhereInput
    some?: DeckCardWhereInput
    none?: DeckCardWhereInput
  }

  export type CardTagListRelationFilter = {
    every?: CardTagWhereInput
    some?: CardTagWhereInput
    none?: CardTagWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CardPrintOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeckCardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CardTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CardCountOrderByAggregateInput = {
    id?: SortOrder
    oracleId?: SortOrder
    scryfallId?: SortOrder
    name?: SortOrder
    oracleText?: SortOrder
    typeLine?: SortOrder
    manaCost?: SortOrder
    cmc?: SortOrder
    colorIdentity?: SortOrder
    keywords?: SortOrder
    producedMana?: SortOrder
    legalCommander?: SortOrder
    banned?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CardAvgOrderByAggregateInput = {
    cmc?: SortOrder
  }

  export type CardMaxOrderByAggregateInput = {
    id?: SortOrder
    oracleId?: SortOrder
    scryfallId?: SortOrder
    name?: SortOrder
    oracleText?: SortOrder
    typeLine?: SortOrder
    manaCost?: SortOrder
    cmc?: SortOrder
    legalCommander?: SortOrder
    banned?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CardMinOrderByAggregateInput = {
    id?: SortOrder
    oracleId?: SortOrder
    scryfallId?: SortOrder
    name?: SortOrder
    oracleText?: SortOrder
    typeLine?: SortOrder
    manaCost?: SortOrder
    cmc?: SortOrder
    legalCommander?: SortOrder
    banned?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CardSumOrderByAggregateInput = {
    cmc?: SortOrder
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type PriceListRelationFilter = {
    every?: PriceWhereInput
    some?: PriceWhereInput
    none?: PriceWhereInput
  }

  export type CardScalarRelationFilter = {
    is?: CardWhereInput
    isNot?: CardWhereInput
  }

  export type PriceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CardPrintSetCodeCollectorNumberCompoundUniqueInput = {
    setCode: string
    collectorNumber: string
  }

  export type CardPrintCountOrderByAggregateInput = {
    id?: SortOrder
    cardId?: SortOrder
    setCode?: SortOrder
    collectorNumber?: SortOrder
    rarity?: SortOrder
    imageUris?: SortOrder
    scryfallUri?: SortOrder
  }

  export type CardPrintMaxOrderByAggregateInput = {
    id?: SortOrder
    cardId?: SortOrder
    setCode?: SortOrder
    collectorNumber?: SortOrder
    rarity?: SortOrder
    scryfallUri?: SortOrder
  }

  export type CardPrintMinOrderByAggregateInput = {
    id?: SortOrder
    cardId?: SortOrder
    setCode?: SortOrder
    collectorNumber?: SortOrder
    rarity?: SortOrder
    scryfallUri?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumPriceSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.PriceSource | EnumPriceSourceFieldRefInput<$PrismaModel>
    in?: $Enums.PriceSource[] | ListEnumPriceSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.PriceSource[] | ListEnumPriceSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumPriceSourceFilter<$PrismaModel> | $Enums.PriceSource
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

  export type CardPrintScalarRelationFilter = {
    is?: CardPrintWhereInput
    isNot?: CardPrintWhereInput
  }

  export type PriceCountOrderByAggregateInput = {
    id?: SortOrder
    cardPrintId?: SortOrder
    observedAt?: SortOrder
    source?: SortOrder
    currency?: SortOrder
    amount?: SortOrder
  }

  export type PriceAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PriceMaxOrderByAggregateInput = {
    id?: SortOrder
    cardPrintId?: SortOrder
    observedAt?: SortOrder
    source?: SortOrder
    currency?: SortOrder
    amount?: SortOrder
  }

  export type PriceMinOrderByAggregateInput = {
    id?: SortOrder
    cardPrintId?: SortOrder
    observedAt?: SortOrder
    source?: SortOrder
    currency?: SortOrder
    amount?: SortOrder
  }

  export type PriceSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumPriceSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PriceSource | EnumPriceSourceFieldRefInput<$PrismaModel>
    in?: $Enums.PriceSource[] | ListEnumPriceSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.PriceSource[] | ListEnumPriceSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumPriceSourceWithAggregatesFilter<$PrismaModel> | $Enums.PriceSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriceSourceFilter<$PrismaModel>
    _max?: NestedEnumPriceSourceFilter<$PrismaModel>
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

  export type DeckCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    commanderNames?: SortOrder
    colorIdentity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeckMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeckMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumCardRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.CardRole | EnumCardRoleFieldRefInput<$PrismaModel>
    in?: $Enums.CardRole[] | ListEnumCardRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.CardRole[] | ListEnumCardRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumCardRoleFilter<$PrismaModel> | $Enums.CardRole
  }

  export type DeckScalarRelationFilter = {
    is?: DeckWhereInput
    isNot?: DeckWhereInput
  }

  export type DeckCardDeckIdCardIdCompoundUniqueInput = {
    deckId: string
    cardId: string
  }

  export type DeckCardCountOrderByAggregateInput = {
    deckId?: SortOrder
    cardId?: SortOrder
    quantity?: SortOrder
    isCommander?: SortOrder
    isCompanion?: SortOrder
    category?: SortOrder
  }

  export type DeckCardAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type DeckCardMaxOrderByAggregateInput = {
    deckId?: SortOrder
    cardId?: SortOrder
    quantity?: SortOrder
    isCommander?: SortOrder
    isCompanion?: SortOrder
    category?: SortOrder
  }

  export type DeckCardMinOrderByAggregateInput = {
    deckId?: SortOrder
    cardId?: SortOrder
    quantity?: SortOrder
    isCommander?: SortOrder
    isCompanion?: SortOrder
    category?: SortOrder
  }

  export type DeckCardSumOrderByAggregateInput = {
    quantity?: SortOrder
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

  export type EnumCardRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CardRole | EnumCardRoleFieldRefInput<$PrismaModel>
    in?: $Enums.CardRole[] | ListEnumCardRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.CardRole[] | ListEnumCardRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumCardRoleWithAggregatesFilter<$PrismaModel> | $Enums.CardRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCardRoleFilter<$PrismaModel>
    _max?: NestedEnumCardRoleFilter<$PrismaModel>
  }

  export type EnumTagKindFilter<$PrismaModel = never> = {
    equals?: $Enums.TagKind | EnumTagKindFieldRefInput<$PrismaModel>
    in?: $Enums.TagKind[] | ListEnumTagKindFieldRefInput<$PrismaModel>
    notIn?: $Enums.TagKind[] | ListEnumTagKindFieldRefInput<$PrismaModel>
    not?: NestedEnumTagKindFilter<$PrismaModel> | $Enums.TagKind
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    kind?: SortOrder
    createdAt?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    kind?: SortOrder
    createdAt?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    kind?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumTagKindWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TagKind | EnumTagKindFieldRefInput<$PrismaModel>
    in?: $Enums.TagKind[] | ListEnumTagKindFieldRefInput<$PrismaModel>
    notIn?: $Enums.TagKind[] | ListEnumTagKindFieldRefInput<$PrismaModel>
    not?: NestedEnumTagKindWithAggregatesFilter<$PrismaModel> | $Enums.TagKind
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTagKindFilter<$PrismaModel>
    _max?: NestedEnumTagKindFilter<$PrismaModel>
  }

  export type TagScalarRelationFilter = {
    is?: TagWhereInput
    isNot?: TagWhereInput
  }

  export type CardTagCardIdTagIdCompoundUniqueInput = {
    cardId: string
    tagId: string
  }

  export type CardTagCountOrderByAggregateInput = {
    cardId?: SortOrder
    tagId?: SortOrder
  }

  export type CardTagMaxOrderByAggregateInput = {
    cardId?: SortOrder
    tagId?: SortOrder
  }

  export type CardTagMinOrderByAggregateInput = {
    cardId?: SortOrder
    tagId?: SortOrder
  }

  export type EnumRuleKindFilter<$PrismaModel = never> = {
    equals?: $Enums.RuleKind | EnumRuleKindFieldRefInput<$PrismaModel>
    in?: $Enums.RuleKind[] | ListEnumRuleKindFieldRefInput<$PrismaModel>
    notIn?: $Enums.RuleKind[] | ListEnumRuleKindFieldRefInput<$PrismaModel>
    not?: NestedEnumRuleKindFilter<$PrismaModel> | $Enums.RuleKind
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type RuleCountOrderByAggregateInput = {
    id?: SortOrder
    kind?: SortOrder
    name?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
  }

  export type RuleMaxOrderByAggregateInput = {
    id?: SortOrder
    kind?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type RuleMinOrderByAggregateInput = {
    id?: SortOrder
    kind?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumRuleKindWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RuleKind | EnumRuleKindFieldRefInput<$PrismaModel>
    in?: $Enums.RuleKind[] | ListEnumRuleKindFieldRefInput<$PrismaModel>
    notIn?: $Enums.RuleKind[] | ListEnumRuleKindFieldRefInput<$PrismaModel>
    not?: NestedEnumRuleKindWithAggregatesFilter<$PrismaModel> | $Enums.RuleKind
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRuleKindFilter<$PrismaModel>
    _max?: NestedEnumRuleKindFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type CardCreatecolorIdentityInput = {
    set: string[]
  }

  export type CardCreatekeywordsInput = {
    set: string[]
  }

  export type CardCreateproducedManaInput = {
    set: string[]
  }

  export type CardPrintCreateNestedManyWithoutCardInput = {
    create?: XOR<CardPrintCreateWithoutCardInput, CardPrintUncheckedCreateWithoutCardInput> | CardPrintCreateWithoutCardInput[] | CardPrintUncheckedCreateWithoutCardInput[]
    connectOrCreate?: CardPrintCreateOrConnectWithoutCardInput | CardPrintCreateOrConnectWithoutCardInput[]
    createMany?: CardPrintCreateManyCardInputEnvelope
    connect?: CardPrintWhereUniqueInput | CardPrintWhereUniqueInput[]
  }

  export type DeckCardCreateNestedManyWithoutCardInput = {
    create?: XOR<DeckCardCreateWithoutCardInput, DeckCardUncheckedCreateWithoutCardInput> | DeckCardCreateWithoutCardInput[] | DeckCardUncheckedCreateWithoutCardInput[]
    connectOrCreate?: DeckCardCreateOrConnectWithoutCardInput | DeckCardCreateOrConnectWithoutCardInput[]
    createMany?: DeckCardCreateManyCardInputEnvelope
    connect?: DeckCardWhereUniqueInput | DeckCardWhereUniqueInput[]
  }

  export type CardTagCreateNestedManyWithoutCardInput = {
    create?: XOR<CardTagCreateWithoutCardInput, CardTagUncheckedCreateWithoutCardInput> | CardTagCreateWithoutCardInput[] | CardTagUncheckedCreateWithoutCardInput[]
    connectOrCreate?: CardTagCreateOrConnectWithoutCardInput | CardTagCreateOrConnectWithoutCardInput[]
    createMany?: CardTagCreateManyCardInputEnvelope
    connect?: CardTagWhereUniqueInput | CardTagWhereUniqueInput[]
  }

  export type CardPrintUncheckedCreateNestedManyWithoutCardInput = {
    create?: XOR<CardPrintCreateWithoutCardInput, CardPrintUncheckedCreateWithoutCardInput> | CardPrintCreateWithoutCardInput[] | CardPrintUncheckedCreateWithoutCardInput[]
    connectOrCreate?: CardPrintCreateOrConnectWithoutCardInput | CardPrintCreateOrConnectWithoutCardInput[]
    createMany?: CardPrintCreateManyCardInputEnvelope
    connect?: CardPrintWhereUniqueInput | CardPrintWhereUniqueInput[]
  }

  export type DeckCardUncheckedCreateNestedManyWithoutCardInput = {
    create?: XOR<DeckCardCreateWithoutCardInput, DeckCardUncheckedCreateWithoutCardInput> | DeckCardCreateWithoutCardInput[] | DeckCardUncheckedCreateWithoutCardInput[]
    connectOrCreate?: DeckCardCreateOrConnectWithoutCardInput | DeckCardCreateOrConnectWithoutCardInput[]
    createMany?: DeckCardCreateManyCardInputEnvelope
    connect?: DeckCardWhereUniqueInput | DeckCardWhereUniqueInput[]
  }

  export type CardTagUncheckedCreateNestedManyWithoutCardInput = {
    create?: XOR<CardTagCreateWithoutCardInput, CardTagUncheckedCreateWithoutCardInput> | CardTagCreateWithoutCardInput[] | CardTagUncheckedCreateWithoutCardInput[]
    connectOrCreate?: CardTagCreateOrConnectWithoutCardInput | CardTagCreateOrConnectWithoutCardInput[]
    createMany?: CardTagCreateManyCardInputEnvelope
    connect?: CardTagWhereUniqueInput | CardTagWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CardUpdatecolorIdentityInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CardUpdatekeywordsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CardUpdateproducedManaInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CardPrintUpdateManyWithoutCardNestedInput = {
    create?: XOR<CardPrintCreateWithoutCardInput, CardPrintUncheckedCreateWithoutCardInput> | CardPrintCreateWithoutCardInput[] | CardPrintUncheckedCreateWithoutCardInput[]
    connectOrCreate?: CardPrintCreateOrConnectWithoutCardInput | CardPrintCreateOrConnectWithoutCardInput[]
    upsert?: CardPrintUpsertWithWhereUniqueWithoutCardInput | CardPrintUpsertWithWhereUniqueWithoutCardInput[]
    createMany?: CardPrintCreateManyCardInputEnvelope
    set?: CardPrintWhereUniqueInput | CardPrintWhereUniqueInput[]
    disconnect?: CardPrintWhereUniqueInput | CardPrintWhereUniqueInput[]
    delete?: CardPrintWhereUniqueInput | CardPrintWhereUniqueInput[]
    connect?: CardPrintWhereUniqueInput | CardPrintWhereUniqueInput[]
    update?: CardPrintUpdateWithWhereUniqueWithoutCardInput | CardPrintUpdateWithWhereUniqueWithoutCardInput[]
    updateMany?: CardPrintUpdateManyWithWhereWithoutCardInput | CardPrintUpdateManyWithWhereWithoutCardInput[]
    deleteMany?: CardPrintScalarWhereInput | CardPrintScalarWhereInput[]
  }

  export type DeckCardUpdateManyWithoutCardNestedInput = {
    create?: XOR<DeckCardCreateWithoutCardInput, DeckCardUncheckedCreateWithoutCardInput> | DeckCardCreateWithoutCardInput[] | DeckCardUncheckedCreateWithoutCardInput[]
    connectOrCreate?: DeckCardCreateOrConnectWithoutCardInput | DeckCardCreateOrConnectWithoutCardInput[]
    upsert?: DeckCardUpsertWithWhereUniqueWithoutCardInput | DeckCardUpsertWithWhereUniqueWithoutCardInput[]
    createMany?: DeckCardCreateManyCardInputEnvelope
    set?: DeckCardWhereUniqueInput | DeckCardWhereUniqueInput[]
    disconnect?: DeckCardWhereUniqueInput | DeckCardWhereUniqueInput[]
    delete?: DeckCardWhereUniqueInput | DeckCardWhereUniqueInput[]
    connect?: DeckCardWhereUniqueInput | DeckCardWhereUniqueInput[]
    update?: DeckCardUpdateWithWhereUniqueWithoutCardInput | DeckCardUpdateWithWhereUniqueWithoutCardInput[]
    updateMany?: DeckCardUpdateManyWithWhereWithoutCardInput | DeckCardUpdateManyWithWhereWithoutCardInput[]
    deleteMany?: DeckCardScalarWhereInput | DeckCardScalarWhereInput[]
  }

  export type CardTagUpdateManyWithoutCardNestedInput = {
    create?: XOR<CardTagCreateWithoutCardInput, CardTagUncheckedCreateWithoutCardInput> | CardTagCreateWithoutCardInput[] | CardTagUncheckedCreateWithoutCardInput[]
    connectOrCreate?: CardTagCreateOrConnectWithoutCardInput | CardTagCreateOrConnectWithoutCardInput[]
    upsert?: CardTagUpsertWithWhereUniqueWithoutCardInput | CardTagUpsertWithWhereUniqueWithoutCardInput[]
    createMany?: CardTagCreateManyCardInputEnvelope
    set?: CardTagWhereUniqueInput | CardTagWhereUniqueInput[]
    disconnect?: CardTagWhereUniqueInput | CardTagWhereUniqueInput[]
    delete?: CardTagWhereUniqueInput | CardTagWhereUniqueInput[]
    connect?: CardTagWhereUniqueInput | CardTagWhereUniqueInput[]
    update?: CardTagUpdateWithWhereUniqueWithoutCardInput | CardTagUpdateWithWhereUniqueWithoutCardInput[]
    updateMany?: CardTagUpdateManyWithWhereWithoutCardInput | CardTagUpdateManyWithWhereWithoutCardInput[]
    deleteMany?: CardTagScalarWhereInput | CardTagScalarWhereInput[]
  }

  export type CardPrintUncheckedUpdateManyWithoutCardNestedInput = {
    create?: XOR<CardPrintCreateWithoutCardInput, CardPrintUncheckedCreateWithoutCardInput> | CardPrintCreateWithoutCardInput[] | CardPrintUncheckedCreateWithoutCardInput[]
    connectOrCreate?: CardPrintCreateOrConnectWithoutCardInput | CardPrintCreateOrConnectWithoutCardInput[]
    upsert?: CardPrintUpsertWithWhereUniqueWithoutCardInput | CardPrintUpsertWithWhereUniqueWithoutCardInput[]
    createMany?: CardPrintCreateManyCardInputEnvelope
    set?: CardPrintWhereUniqueInput | CardPrintWhereUniqueInput[]
    disconnect?: CardPrintWhereUniqueInput | CardPrintWhereUniqueInput[]
    delete?: CardPrintWhereUniqueInput | CardPrintWhereUniqueInput[]
    connect?: CardPrintWhereUniqueInput | CardPrintWhereUniqueInput[]
    update?: CardPrintUpdateWithWhereUniqueWithoutCardInput | CardPrintUpdateWithWhereUniqueWithoutCardInput[]
    updateMany?: CardPrintUpdateManyWithWhereWithoutCardInput | CardPrintUpdateManyWithWhereWithoutCardInput[]
    deleteMany?: CardPrintScalarWhereInput | CardPrintScalarWhereInput[]
  }

  export type DeckCardUncheckedUpdateManyWithoutCardNestedInput = {
    create?: XOR<DeckCardCreateWithoutCardInput, DeckCardUncheckedCreateWithoutCardInput> | DeckCardCreateWithoutCardInput[] | DeckCardUncheckedCreateWithoutCardInput[]
    connectOrCreate?: DeckCardCreateOrConnectWithoutCardInput | DeckCardCreateOrConnectWithoutCardInput[]
    upsert?: DeckCardUpsertWithWhereUniqueWithoutCardInput | DeckCardUpsertWithWhereUniqueWithoutCardInput[]
    createMany?: DeckCardCreateManyCardInputEnvelope
    set?: DeckCardWhereUniqueInput | DeckCardWhereUniqueInput[]
    disconnect?: DeckCardWhereUniqueInput | DeckCardWhereUniqueInput[]
    delete?: DeckCardWhereUniqueInput | DeckCardWhereUniqueInput[]
    connect?: DeckCardWhereUniqueInput | DeckCardWhereUniqueInput[]
    update?: DeckCardUpdateWithWhereUniqueWithoutCardInput | DeckCardUpdateWithWhereUniqueWithoutCardInput[]
    updateMany?: DeckCardUpdateManyWithWhereWithoutCardInput | DeckCardUpdateManyWithWhereWithoutCardInput[]
    deleteMany?: DeckCardScalarWhereInput | DeckCardScalarWhereInput[]
  }

  export type CardTagUncheckedUpdateManyWithoutCardNestedInput = {
    create?: XOR<CardTagCreateWithoutCardInput, CardTagUncheckedCreateWithoutCardInput> | CardTagCreateWithoutCardInput[] | CardTagUncheckedCreateWithoutCardInput[]
    connectOrCreate?: CardTagCreateOrConnectWithoutCardInput | CardTagCreateOrConnectWithoutCardInput[]
    upsert?: CardTagUpsertWithWhereUniqueWithoutCardInput | CardTagUpsertWithWhereUniqueWithoutCardInput[]
    createMany?: CardTagCreateManyCardInputEnvelope
    set?: CardTagWhereUniqueInput | CardTagWhereUniqueInput[]
    disconnect?: CardTagWhereUniqueInput | CardTagWhereUniqueInput[]
    delete?: CardTagWhereUniqueInput | CardTagWhereUniqueInput[]
    connect?: CardTagWhereUniqueInput | CardTagWhereUniqueInput[]
    update?: CardTagUpdateWithWhereUniqueWithoutCardInput | CardTagUpdateWithWhereUniqueWithoutCardInput[]
    updateMany?: CardTagUpdateManyWithWhereWithoutCardInput | CardTagUpdateManyWithWhereWithoutCardInput[]
    deleteMany?: CardTagScalarWhereInput | CardTagScalarWhereInput[]
  }

  export type PriceCreateNestedManyWithoutCardPrintInput = {
    create?: XOR<PriceCreateWithoutCardPrintInput, PriceUncheckedCreateWithoutCardPrintInput> | PriceCreateWithoutCardPrintInput[] | PriceUncheckedCreateWithoutCardPrintInput[]
    connectOrCreate?: PriceCreateOrConnectWithoutCardPrintInput | PriceCreateOrConnectWithoutCardPrintInput[]
    createMany?: PriceCreateManyCardPrintInputEnvelope
    connect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
  }

  export type CardCreateNestedOneWithoutPrintsInput = {
    create?: XOR<CardCreateWithoutPrintsInput, CardUncheckedCreateWithoutPrintsInput>
    connectOrCreate?: CardCreateOrConnectWithoutPrintsInput
    connect?: CardWhereUniqueInput
  }

  export type PriceUncheckedCreateNestedManyWithoutCardPrintInput = {
    create?: XOR<PriceCreateWithoutCardPrintInput, PriceUncheckedCreateWithoutCardPrintInput> | PriceCreateWithoutCardPrintInput[] | PriceUncheckedCreateWithoutCardPrintInput[]
    connectOrCreate?: PriceCreateOrConnectWithoutCardPrintInput | PriceCreateOrConnectWithoutCardPrintInput[]
    createMany?: PriceCreateManyCardPrintInputEnvelope
    connect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
  }

  export type PriceUpdateManyWithoutCardPrintNestedInput = {
    create?: XOR<PriceCreateWithoutCardPrintInput, PriceUncheckedCreateWithoutCardPrintInput> | PriceCreateWithoutCardPrintInput[] | PriceUncheckedCreateWithoutCardPrintInput[]
    connectOrCreate?: PriceCreateOrConnectWithoutCardPrintInput | PriceCreateOrConnectWithoutCardPrintInput[]
    upsert?: PriceUpsertWithWhereUniqueWithoutCardPrintInput | PriceUpsertWithWhereUniqueWithoutCardPrintInput[]
    createMany?: PriceCreateManyCardPrintInputEnvelope
    set?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    disconnect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    delete?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    connect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    update?: PriceUpdateWithWhereUniqueWithoutCardPrintInput | PriceUpdateWithWhereUniqueWithoutCardPrintInput[]
    updateMany?: PriceUpdateManyWithWhereWithoutCardPrintInput | PriceUpdateManyWithWhereWithoutCardPrintInput[]
    deleteMany?: PriceScalarWhereInput | PriceScalarWhereInput[]
  }

  export type CardUpdateOneRequiredWithoutPrintsNestedInput = {
    create?: XOR<CardCreateWithoutPrintsInput, CardUncheckedCreateWithoutPrintsInput>
    connectOrCreate?: CardCreateOrConnectWithoutPrintsInput
    upsert?: CardUpsertWithoutPrintsInput
    connect?: CardWhereUniqueInput
    update?: XOR<XOR<CardUpdateToOneWithWhereWithoutPrintsInput, CardUpdateWithoutPrintsInput>, CardUncheckedUpdateWithoutPrintsInput>
  }

  export type PriceUncheckedUpdateManyWithoutCardPrintNestedInput = {
    create?: XOR<PriceCreateWithoutCardPrintInput, PriceUncheckedCreateWithoutCardPrintInput> | PriceCreateWithoutCardPrintInput[] | PriceUncheckedCreateWithoutCardPrintInput[]
    connectOrCreate?: PriceCreateOrConnectWithoutCardPrintInput | PriceCreateOrConnectWithoutCardPrintInput[]
    upsert?: PriceUpsertWithWhereUniqueWithoutCardPrintInput | PriceUpsertWithWhereUniqueWithoutCardPrintInput[]
    createMany?: PriceCreateManyCardPrintInputEnvelope
    set?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    disconnect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    delete?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    connect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    update?: PriceUpdateWithWhereUniqueWithoutCardPrintInput | PriceUpdateWithWhereUniqueWithoutCardPrintInput[]
    updateMany?: PriceUpdateManyWithWhereWithoutCardPrintInput | PriceUpdateManyWithWhereWithoutCardPrintInput[]
    deleteMany?: PriceScalarWhereInput | PriceScalarWhereInput[]
  }

  export type CardPrintCreateNestedOneWithoutPricesInput = {
    create?: XOR<CardPrintCreateWithoutPricesInput, CardPrintUncheckedCreateWithoutPricesInput>
    connectOrCreate?: CardPrintCreateOrConnectWithoutPricesInput
    connect?: CardPrintWhereUniqueInput
  }

  export type EnumPriceSourceFieldUpdateOperationsInput = {
    set?: $Enums.PriceSource
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type CardPrintUpdateOneRequiredWithoutPricesNestedInput = {
    create?: XOR<CardPrintCreateWithoutPricesInput, CardPrintUncheckedCreateWithoutPricesInput>
    connectOrCreate?: CardPrintCreateOrConnectWithoutPricesInput
    upsert?: CardPrintUpsertWithoutPricesInput
    connect?: CardPrintWhereUniqueInput
    update?: XOR<XOR<CardPrintUpdateToOneWithWhereWithoutPricesInput, CardPrintUpdateWithoutPricesInput>, CardPrintUncheckedUpdateWithoutPricesInput>
  }

  export type DeckCreatecommanderNamesInput = {
    set: string[]
  }

  export type DeckCreatecolorIdentityInput = {
    set: string[]
  }

  export type DeckCardCreateNestedManyWithoutDeckInput = {
    create?: XOR<DeckCardCreateWithoutDeckInput, DeckCardUncheckedCreateWithoutDeckInput> | DeckCardCreateWithoutDeckInput[] | DeckCardUncheckedCreateWithoutDeckInput[]
    connectOrCreate?: DeckCardCreateOrConnectWithoutDeckInput | DeckCardCreateOrConnectWithoutDeckInput[]
    createMany?: DeckCardCreateManyDeckInputEnvelope
    connect?: DeckCardWhereUniqueInput | DeckCardWhereUniqueInput[]
  }

  export type DeckCardUncheckedCreateNestedManyWithoutDeckInput = {
    create?: XOR<DeckCardCreateWithoutDeckInput, DeckCardUncheckedCreateWithoutDeckInput> | DeckCardCreateWithoutDeckInput[] | DeckCardUncheckedCreateWithoutDeckInput[]
    connectOrCreate?: DeckCardCreateOrConnectWithoutDeckInput | DeckCardCreateOrConnectWithoutDeckInput[]
    createMany?: DeckCardCreateManyDeckInputEnvelope
    connect?: DeckCardWhereUniqueInput | DeckCardWhereUniqueInput[]
  }

  export type DeckUpdatecommanderNamesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DeckUpdatecolorIdentityInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DeckCardUpdateManyWithoutDeckNestedInput = {
    create?: XOR<DeckCardCreateWithoutDeckInput, DeckCardUncheckedCreateWithoutDeckInput> | DeckCardCreateWithoutDeckInput[] | DeckCardUncheckedCreateWithoutDeckInput[]
    connectOrCreate?: DeckCardCreateOrConnectWithoutDeckInput | DeckCardCreateOrConnectWithoutDeckInput[]
    upsert?: DeckCardUpsertWithWhereUniqueWithoutDeckInput | DeckCardUpsertWithWhereUniqueWithoutDeckInput[]
    createMany?: DeckCardCreateManyDeckInputEnvelope
    set?: DeckCardWhereUniqueInput | DeckCardWhereUniqueInput[]
    disconnect?: DeckCardWhereUniqueInput | DeckCardWhereUniqueInput[]
    delete?: DeckCardWhereUniqueInput | DeckCardWhereUniqueInput[]
    connect?: DeckCardWhereUniqueInput | DeckCardWhereUniqueInput[]
    update?: DeckCardUpdateWithWhereUniqueWithoutDeckInput | DeckCardUpdateWithWhereUniqueWithoutDeckInput[]
    updateMany?: DeckCardUpdateManyWithWhereWithoutDeckInput | DeckCardUpdateManyWithWhereWithoutDeckInput[]
    deleteMany?: DeckCardScalarWhereInput | DeckCardScalarWhereInput[]
  }

  export type DeckCardUncheckedUpdateManyWithoutDeckNestedInput = {
    create?: XOR<DeckCardCreateWithoutDeckInput, DeckCardUncheckedCreateWithoutDeckInput> | DeckCardCreateWithoutDeckInput[] | DeckCardUncheckedCreateWithoutDeckInput[]
    connectOrCreate?: DeckCardCreateOrConnectWithoutDeckInput | DeckCardCreateOrConnectWithoutDeckInput[]
    upsert?: DeckCardUpsertWithWhereUniqueWithoutDeckInput | DeckCardUpsertWithWhereUniqueWithoutDeckInput[]
    createMany?: DeckCardCreateManyDeckInputEnvelope
    set?: DeckCardWhereUniqueInput | DeckCardWhereUniqueInput[]
    disconnect?: DeckCardWhereUniqueInput | DeckCardWhereUniqueInput[]
    delete?: DeckCardWhereUniqueInput | DeckCardWhereUniqueInput[]
    connect?: DeckCardWhereUniqueInput | DeckCardWhereUniqueInput[]
    update?: DeckCardUpdateWithWhereUniqueWithoutDeckInput | DeckCardUpdateWithWhereUniqueWithoutDeckInput[]
    updateMany?: DeckCardUpdateManyWithWhereWithoutDeckInput | DeckCardUpdateManyWithWhereWithoutDeckInput[]
    deleteMany?: DeckCardScalarWhereInput | DeckCardScalarWhereInput[]
  }

  export type DeckCreateNestedOneWithoutCardsInput = {
    create?: XOR<DeckCreateWithoutCardsInput, DeckUncheckedCreateWithoutCardsInput>
    connectOrCreate?: DeckCreateOrConnectWithoutCardsInput
    connect?: DeckWhereUniqueInput
  }

  export type CardCreateNestedOneWithoutDeckCardsInput = {
    create?: XOR<CardCreateWithoutDeckCardsInput, CardUncheckedCreateWithoutDeckCardsInput>
    connectOrCreate?: CardCreateOrConnectWithoutDeckCardsInput
    connect?: CardWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumCardRoleFieldUpdateOperationsInput = {
    set?: $Enums.CardRole
  }

  export type DeckUpdateOneRequiredWithoutCardsNestedInput = {
    create?: XOR<DeckCreateWithoutCardsInput, DeckUncheckedCreateWithoutCardsInput>
    connectOrCreate?: DeckCreateOrConnectWithoutCardsInput
    upsert?: DeckUpsertWithoutCardsInput
    connect?: DeckWhereUniqueInput
    update?: XOR<XOR<DeckUpdateToOneWithWhereWithoutCardsInput, DeckUpdateWithoutCardsInput>, DeckUncheckedUpdateWithoutCardsInput>
  }

  export type CardUpdateOneRequiredWithoutDeckCardsNestedInput = {
    create?: XOR<CardCreateWithoutDeckCardsInput, CardUncheckedCreateWithoutDeckCardsInput>
    connectOrCreate?: CardCreateOrConnectWithoutDeckCardsInput
    upsert?: CardUpsertWithoutDeckCardsInput
    connect?: CardWhereUniqueInput
    update?: XOR<XOR<CardUpdateToOneWithWhereWithoutDeckCardsInput, CardUpdateWithoutDeckCardsInput>, CardUncheckedUpdateWithoutDeckCardsInput>
  }

  export type CardTagCreateNestedManyWithoutTagInput = {
    create?: XOR<CardTagCreateWithoutTagInput, CardTagUncheckedCreateWithoutTagInput> | CardTagCreateWithoutTagInput[] | CardTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: CardTagCreateOrConnectWithoutTagInput | CardTagCreateOrConnectWithoutTagInput[]
    createMany?: CardTagCreateManyTagInputEnvelope
    connect?: CardTagWhereUniqueInput | CardTagWhereUniqueInput[]
  }

  export type CardTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<CardTagCreateWithoutTagInput, CardTagUncheckedCreateWithoutTagInput> | CardTagCreateWithoutTagInput[] | CardTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: CardTagCreateOrConnectWithoutTagInput | CardTagCreateOrConnectWithoutTagInput[]
    createMany?: CardTagCreateManyTagInputEnvelope
    connect?: CardTagWhereUniqueInput | CardTagWhereUniqueInput[]
  }

  export type EnumTagKindFieldUpdateOperationsInput = {
    set?: $Enums.TagKind
  }

  export type CardTagUpdateManyWithoutTagNestedInput = {
    create?: XOR<CardTagCreateWithoutTagInput, CardTagUncheckedCreateWithoutTagInput> | CardTagCreateWithoutTagInput[] | CardTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: CardTagCreateOrConnectWithoutTagInput | CardTagCreateOrConnectWithoutTagInput[]
    upsert?: CardTagUpsertWithWhereUniqueWithoutTagInput | CardTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: CardTagCreateManyTagInputEnvelope
    set?: CardTagWhereUniqueInput | CardTagWhereUniqueInput[]
    disconnect?: CardTagWhereUniqueInput | CardTagWhereUniqueInput[]
    delete?: CardTagWhereUniqueInput | CardTagWhereUniqueInput[]
    connect?: CardTagWhereUniqueInput | CardTagWhereUniqueInput[]
    update?: CardTagUpdateWithWhereUniqueWithoutTagInput | CardTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: CardTagUpdateManyWithWhereWithoutTagInput | CardTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: CardTagScalarWhereInput | CardTagScalarWhereInput[]
  }

  export type CardTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<CardTagCreateWithoutTagInput, CardTagUncheckedCreateWithoutTagInput> | CardTagCreateWithoutTagInput[] | CardTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: CardTagCreateOrConnectWithoutTagInput | CardTagCreateOrConnectWithoutTagInput[]
    upsert?: CardTagUpsertWithWhereUniqueWithoutTagInput | CardTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: CardTagCreateManyTagInputEnvelope
    set?: CardTagWhereUniqueInput | CardTagWhereUniqueInput[]
    disconnect?: CardTagWhereUniqueInput | CardTagWhereUniqueInput[]
    delete?: CardTagWhereUniqueInput | CardTagWhereUniqueInput[]
    connect?: CardTagWhereUniqueInput | CardTagWhereUniqueInput[]
    update?: CardTagUpdateWithWhereUniqueWithoutTagInput | CardTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: CardTagUpdateManyWithWhereWithoutTagInput | CardTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: CardTagScalarWhereInput | CardTagScalarWhereInput[]
  }

  export type CardCreateNestedOneWithoutCardTagsInput = {
    create?: XOR<CardCreateWithoutCardTagsInput, CardUncheckedCreateWithoutCardTagsInput>
    connectOrCreate?: CardCreateOrConnectWithoutCardTagsInput
    connect?: CardWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutCardTagsInput = {
    create?: XOR<TagCreateWithoutCardTagsInput, TagUncheckedCreateWithoutCardTagsInput>
    connectOrCreate?: TagCreateOrConnectWithoutCardTagsInput
    connect?: TagWhereUniqueInput
  }

  export type CardUpdateOneRequiredWithoutCardTagsNestedInput = {
    create?: XOR<CardCreateWithoutCardTagsInput, CardUncheckedCreateWithoutCardTagsInput>
    connectOrCreate?: CardCreateOrConnectWithoutCardTagsInput
    upsert?: CardUpsertWithoutCardTagsInput
    connect?: CardWhereUniqueInput
    update?: XOR<XOR<CardUpdateToOneWithWhereWithoutCardTagsInput, CardUpdateWithoutCardTagsInput>, CardUncheckedUpdateWithoutCardTagsInput>
  }

  export type TagUpdateOneRequiredWithoutCardTagsNestedInput = {
    create?: XOR<TagCreateWithoutCardTagsInput, TagUncheckedCreateWithoutCardTagsInput>
    connectOrCreate?: TagCreateOrConnectWithoutCardTagsInput
    upsert?: TagUpsertWithoutCardTagsInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutCardTagsInput, TagUpdateWithoutCardTagsInput>, TagUncheckedUpdateWithoutCardTagsInput>
  }

  export type EnumRuleKindFieldUpdateOperationsInput = {
    set?: $Enums.RuleKind
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumPriceSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.PriceSource | EnumPriceSourceFieldRefInput<$PrismaModel>
    in?: $Enums.PriceSource[] | ListEnumPriceSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.PriceSource[] | ListEnumPriceSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumPriceSourceFilter<$PrismaModel> | $Enums.PriceSource
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

  export type NestedEnumPriceSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PriceSource | EnumPriceSourceFieldRefInput<$PrismaModel>
    in?: $Enums.PriceSource[] | ListEnumPriceSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.PriceSource[] | ListEnumPriceSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumPriceSourceWithAggregatesFilter<$PrismaModel> | $Enums.PriceSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriceSourceFilter<$PrismaModel>
    _max?: NestedEnumPriceSourceFilter<$PrismaModel>
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

  export type NestedEnumCardRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.CardRole | EnumCardRoleFieldRefInput<$PrismaModel>
    in?: $Enums.CardRole[] | ListEnumCardRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.CardRole[] | ListEnumCardRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumCardRoleFilter<$PrismaModel> | $Enums.CardRole
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

  export type NestedEnumCardRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CardRole | EnumCardRoleFieldRefInput<$PrismaModel>
    in?: $Enums.CardRole[] | ListEnumCardRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.CardRole[] | ListEnumCardRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumCardRoleWithAggregatesFilter<$PrismaModel> | $Enums.CardRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCardRoleFilter<$PrismaModel>
    _max?: NestedEnumCardRoleFilter<$PrismaModel>
  }

  export type NestedEnumTagKindFilter<$PrismaModel = never> = {
    equals?: $Enums.TagKind | EnumTagKindFieldRefInput<$PrismaModel>
    in?: $Enums.TagKind[] | ListEnumTagKindFieldRefInput<$PrismaModel>
    notIn?: $Enums.TagKind[] | ListEnumTagKindFieldRefInput<$PrismaModel>
    not?: NestedEnumTagKindFilter<$PrismaModel> | $Enums.TagKind
  }

  export type NestedEnumTagKindWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TagKind | EnumTagKindFieldRefInput<$PrismaModel>
    in?: $Enums.TagKind[] | ListEnumTagKindFieldRefInput<$PrismaModel>
    notIn?: $Enums.TagKind[] | ListEnumTagKindFieldRefInput<$PrismaModel>
    not?: NestedEnumTagKindWithAggregatesFilter<$PrismaModel> | $Enums.TagKind
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTagKindFilter<$PrismaModel>
    _max?: NestedEnumTagKindFilter<$PrismaModel>
  }

  export type NestedEnumRuleKindFilter<$PrismaModel = never> = {
    equals?: $Enums.RuleKind | EnumRuleKindFieldRefInput<$PrismaModel>
    in?: $Enums.RuleKind[] | ListEnumRuleKindFieldRefInput<$PrismaModel>
    notIn?: $Enums.RuleKind[] | ListEnumRuleKindFieldRefInput<$PrismaModel>
    not?: NestedEnumRuleKindFilter<$PrismaModel> | $Enums.RuleKind
  }

  export type NestedEnumRuleKindWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RuleKind | EnumRuleKindFieldRefInput<$PrismaModel>
    in?: $Enums.RuleKind[] | ListEnumRuleKindFieldRefInput<$PrismaModel>
    notIn?: $Enums.RuleKind[] | ListEnumRuleKindFieldRefInput<$PrismaModel>
    not?: NestedEnumRuleKindWithAggregatesFilter<$PrismaModel> | $Enums.RuleKind
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRuleKindFilter<$PrismaModel>
    _max?: NestedEnumRuleKindFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type CardPrintCreateWithoutCardInput = {
    id?: string
    setCode: string
    collectorNumber: string
    rarity?: string | null
    imageUris?: NullableJsonNullValueInput | InputJsonValue
    scryfallUri?: string | null
    prices?: PriceCreateNestedManyWithoutCardPrintInput
  }

  export type CardPrintUncheckedCreateWithoutCardInput = {
    id?: string
    setCode: string
    collectorNumber: string
    rarity?: string | null
    imageUris?: NullableJsonNullValueInput | InputJsonValue
    scryfallUri?: string | null
    prices?: PriceUncheckedCreateNestedManyWithoutCardPrintInput
  }

  export type CardPrintCreateOrConnectWithoutCardInput = {
    where: CardPrintWhereUniqueInput
    create: XOR<CardPrintCreateWithoutCardInput, CardPrintUncheckedCreateWithoutCardInput>
  }

  export type CardPrintCreateManyCardInputEnvelope = {
    data: CardPrintCreateManyCardInput | CardPrintCreateManyCardInput[]
    skipDuplicates?: boolean
  }

  export type DeckCardCreateWithoutCardInput = {
    quantity?: number
    isCommander?: boolean
    isCompanion?: boolean
    category?: $Enums.CardRole
    deck: DeckCreateNestedOneWithoutCardsInput
  }

  export type DeckCardUncheckedCreateWithoutCardInput = {
    deckId: string
    quantity?: number
    isCommander?: boolean
    isCompanion?: boolean
    category?: $Enums.CardRole
  }

  export type DeckCardCreateOrConnectWithoutCardInput = {
    where: DeckCardWhereUniqueInput
    create: XOR<DeckCardCreateWithoutCardInput, DeckCardUncheckedCreateWithoutCardInput>
  }

  export type DeckCardCreateManyCardInputEnvelope = {
    data: DeckCardCreateManyCardInput | DeckCardCreateManyCardInput[]
    skipDuplicates?: boolean
  }

  export type CardTagCreateWithoutCardInput = {
    tag: TagCreateNestedOneWithoutCardTagsInput
  }

  export type CardTagUncheckedCreateWithoutCardInput = {
    tagId: string
  }

  export type CardTagCreateOrConnectWithoutCardInput = {
    where: CardTagWhereUniqueInput
    create: XOR<CardTagCreateWithoutCardInput, CardTagUncheckedCreateWithoutCardInput>
  }

  export type CardTagCreateManyCardInputEnvelope = {
    data: CardTagCreateManyCardInput | CardTagCreateManyCardInput[]
    skipDuplicates?: boolean
  }

  export type CardPrintUpsertWithWhereUniqueWithoutCardInput = {
    where: CardPrintWhereUniqueInput
    update: XOR<CardPrintUpdateWithoutCardInput, CardPrintUncheckedUpdateWithoutCardInput>
    create: XOR<CardPrintCreateWithoutCardInput, CardPrintUncheckedCreateWithoutCardInput>
  }

  export type CardPrintUpdateWithWhereUniqueWithoutCardInput = {
    where: CardPrintWhereUniqueInput
    data: XOR<CardPrintUpdateWithoutCardInput, CardPrintUncheckedUpdateWithoutCardInput>
  }

  export type CardPrintUpdateManyWithWhereWithoutCardInput = {
    where: CardPrintScalarWhereInput
    data: XOR<CardPrintUpdateManyMutationInput, CardPrintUncheckedUpdateManyWithoutCardInput>
  }

  export type CardPrintScalarWhereInput = {
    AND?: CardPrintScalarWhereInput | CardPrintScalarWhereInput[]
    OR?: CardPrintScalarWhereInput[]
    NOT?: CardPrintScalarWhereInput | CardPrintScalarWhereInput[]
    id?: StringFilter<"CardPrint"> | string
    cardId?: StringFilter<"CardPrint"> | string
    setCode?: StringFilter<"CardPrint"> | string
    collectorNumber?: StringFilter<"CardPrint"> | string
    rarity?: StringNullableFilter<"CardPrint"> | string | null
    imageUris?: JsonNullableFilter<"CardPrint">
    scryfallUri?: StringNullableFilter<"CardPrint"> | string | null
  }

  export type DeckCardUpsertWithWhereUniqueWithoutCardInput = {
    where: DeckCardWhereUniqueInput
    update: XOR<DeckCardUpdateWithoutCardInput, DeckCardUncheckedUpdateWithoutCardInput>
    create: XOR<DeckCardCreateWithoutCardInput, DeckCardUncheckedCreateWithoutCardInput>
  }

  export type DeckCardUpdateWithWhereUniqueWithoutCardInput = {
    where: DeckCardWhereUniqueInput
    data: XOR<DeckCardUpdateWithoutCardInput, DeckCardUncheckedUpdateWithoutCardInput>
  }

  export type DeckCardUpdateManyWithWhereWithoutCardInput = {
    where: DeckCardScalarWhereInput
    data: XOR<DeckCardUpdateManyMutationInput, DeckCardUncheckedUpdateManyWithoutCardInput>
  }

  export type DeckCardScalarWhereInput = {
    AND?: DeckCardScalarWhereInput | DeckCardScalarWhereInput[]
    OR?: DeckCardScalarWhereInput[]
    NOT?: DeckCardScalarWhereInput | DeckCardScalarWhereInput[]
    deckId?: StringFilter<"DeckCard"> | string
    cardId?: StringFilter<"DeckCard"> | string
    quantity?: IntFilter<"DeckCard"> | number
    isCommander?: BoolFilter<"DeckCard"> | boolean
    isCompanion?: BoolFilter<"DeckCard"> | boolean
    category?: EnumCardRoleFilter<"DeckCard"> | $Enums.CardRole
  }

  export type CardTagUpsertWithWhereUniqueWithoutCardInput = {
    where: CardTagWhereUniqueInput
    update: XOR<CardTagUpdateWithoutCardInput, CardTagUncheckedUpdateWithoutCardInput>
    create: XOR<CardTagCreateWithoutCardInput, CardTagUncheckedCreateWithoutCardInput>
  }

  export type CardTagUpdateWithWhereUniqueWithoutCardInput = {
    where: CardTagWhereUniqueInput
    data: XOR<CardTagUpdateWithoutCardInput, CardTagUncheckedUpdateWithoutCardInput>
  }

  export type CardTagUpdateManyWithWhereWithoutCardInput = {
    where: CardTagScalarWhereInput
    data: XOR<CardTagUpdateManyMutationInput, CardTagUncheckedUpdateManyWithoutCardInput>
  }

  export type CardTagScalarWhereInput = {
    AND?: CardTagScalarWhereInput | CardTagScalarWhereInput[]
    OR?: CardTagScalarWhereInput[]
    NOT?: CardTagScalarWhereInput | CardTagScalarWhereInput[]
    cardId?: StringFilter<"CardTag"> | string
    tagId?: StringFilter<"CardTag"> | string
  }

  export type PriceCreateWithoutCardPrintInput = {
    id?: string
    observedAt?: Date | string
    source: $Enums.PriceSource
    currency?: string
    amount: Decimal | DecimalJsLike | number | string
  }

  export type PriceUncheckedCreateWithoutCardPrintInput = {
    id?: string
    observedAt?: Date | string
    source: $Enums.PriceSource
    currency?: string
    amount: Decimal | DecimalJsLike | number | string
  }

  export type PriceCreateOrConnectWithoutCardPrintInput = {
    where: PriceWhereUniqueInput
    create: XOR<PriceCreateWithoutCardPrintInput, PriceUncheckedCreateWithoutCardPrintInput>
  }

  export type PriceCreateManyCardPrintInputEnvelope = {
    data: PriceCreateManyCardPrintInput | PriceCreateManyCardPrintInput[]
    skipDuplicates?: boolean
  }

  export type CardCreateWithoutPrintsInput = {
    id?: string
    oracleId: string
    scryfallId: string
    name: string
    oracleText?: string | null
    typeLine?: string | null
    manaCost?: string | null
    cmc?: number | null
    colorIdentity?: CardCreatecolorIdentityInput | string[]
    keywords?: CardCreatekeywordsInput | string[]
    producedMana?: CardCreateproducedManaInput | string[]
    legalCommander?: boolean
    banned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deckCards?: DeckCardCreateNestedManyWithoutCardInput
    cardTags?: CardTagCreateNestedManyWithoutCardInput
  }

  export type CardUncheckedCreateWithoutPrintsInput = {
    id?: string
    oracleId: string
    scryfallId: string
    name: string
    oracleText?: string | null
    typeLine?: string | null
    manaCost?: string | null
    cmc?: number | null
    colorIdentity?: CardCreatecolorIdentityInput | string[]
    keywords?: CardCreatekeywordsInput | string[]
    producedMana?: CardCreateproducedManaInput | string[]
    legalCommander?: boolean
    banned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deckCards?: DeckCardUncheckedCreateNestedManyWithoutCardInput
    cardTags?: CardTagUncheckedCreateNestedManyWithoutCardInput
  }

  export type CardCreateOrConnectWithoutPrintsInput = {
    where: CardWhereUniqueInput
    create: XOR<CardCreateWithoutPrintsInput, CardUncheckedCreateWithoutPrintsInput>
  }

  export type PriceUpsertWithWhereUniqueWithoutCardPrintInput = {
    where: PriceWhereUniqueInput
    update: XOR<PriceUpdateWithoutCardPrintInput, PriceUncheckedUpdateWithoutCardPrintInput>
    create: XOR<PriceCreateWithoutCardPrintInput, PriceUncheckedCreateWithoutCardPrintInput>
  }

  export type PriceUpdateWithWhereUniqueWithoutCardPrintInput = {
    where: PriceWhereUniqueInput
    data: XOR<PriceUpdateWithoutCardPrintInput, PriceUncheckedUpdateWithoutCardPrintInput>
  }

  export type PriceUpdateManyWithWhereWithoutCardPrintInput = {
    where: PriceScalarWhereInput
    data: XOR<PriceUpdateManyMutationInput, PriceUncheckedUpdateManyWithoutCardPrintInput>
  }

  export type PriceScalarWhereInput = {
    AND?: PriceScalarWhereInput | PriceScalarWhereInput[]
    OR?: PriceScalarWhereInput[]
    NOT?: PriceScalarWhereInput | PriceScalarWhereInput[]
    id?: StringFilter<"Price"> | string
    cardPrintId?: StringFilter<"Price"> | string
    observedAt?: DateTimeFilter<"Price"> | Date | string
    source?: EnumPriceSourceFilter<"Price"> | $Enums.PriceSource
    currency?: StringFilter<"Price"> | string
    amount?: DecimalFilter<"Price"> | Decimal | DecimalJsLike | number | string
  }

  export type CardUpsertWithoutPrintsInput = {
    update: XOR<CardUpdateWithoutPrintsInput, CardUncheckedUpdateWithoutPrintsInput>
    create: XOR<CardCreateWithoutPrintsInput, CardUncheckedCreateWithoutPrintsInput>
    where?: CardWhereInput
  }

  export type CardUpdateToOneWithWhereWithoutPrintsInput = {
    where?: CardWhereInput
    data: XOR<CardUpdateWithoutPrintsInput, CardUncheckedUpdateWithoutPrintsInput>
  }

  export type CardUpdateWithoutPrintsInput = {
    id?: StringFieldUpdateOperationsInput | string
    oracleId?: StringFieldUpdateOperationsInput | string
    scryfallId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    oracleText?: NullableStringFieldUpdateOperationsInput | string | null
    typeLine?: NullableStringFieldUpdateOperationsInput | string | null
    manaCost?: NullableStringFieldUpdateOperationsInput | string | null
    cmc?: NullableFloatFieldUpdateOperationsInput | number | null
    colorIdentity?: CardUpdatecolorIdentityInput | string[]
    keywords?: CardUpdatekeywordsInput | string[]
    producedMana?: CardUpdateproducedManaInput | string[]
    legalCommander?: BoolFieldUpdateOperationsInput | boolean
    banned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deckCards?: DeckCardUpdateManyWithoutCardNestedInput
    cardTags?: CardTagUpdateManyWithoutCardNestedInput
  }

  export type CardUncheckedUpdateWithoutPrintsInput = {
    id?: StringFieldUpdateOperationsInput | string
    oracleId?: StringFieldUpdateOperationsInput | string
    scryfallId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    oracleText?: NullableStringFieldUpdateOperationsInput | string | null
    typeLine?: NullableStringFieldUpdateOperationsInput | string | null
    manaCost?: NullableStringFieldUpdateOperationsInput | string | null
    cmc?: NullableFloatFieldUpdateOperationsInput | number | null
    colorIdentity?: CardUpdatecolorIdentityInput | string[]
    keywords?: CardUpdatekeywordsInput | string[]
    producedMana?: CardUpdateproducedManaInput | string[]
    legalCommander?: BoolFieldUpdateOperationsInput | boolean
    banned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deckCards?: DeckCardUncheckedUpdateManyWithoutCardNestedInput
    cardTags?: CardTagUncheckedUpdateManyWithoutCardNestedInput
  }

  export type CardPrintCreateWithoutPricesInput = {
    id?: string
    setCode: string
    collectorNumber: string
    rarity?: string | null
    imageUris?: NullableJsonNullValueInput | InputJsonValue
    scryfallUri?: string | null
    card: CardCreateNestedOneWithoutPrintsInput
  }

  export type CardPrintUncheckedCreateWithoutPricesInput = {
    id?: string
    cardId: string
    setCode: string
    collectorNumber: string
    rarity?: string | null
    imageUris?: NullableJsonNullValueInput | InputJsonValue
    scryfallUri?: string | null
  }

  export type CardPrintCreateOrConnectWithoutPricesInput = {
    where: CardPrintWhereUniqueInput
    create: XOR<CardPrintCreateWithoutPricesInput, CardPrintUncheckedCreateWithoutPricesInput>
  }

  export type CardPrintUpsertWithoutPricesInput = {
    update: XOR<CardPrintUpdateWithoutPricesInput, CardPrintUncheckedUpdateWithoutPricesInput>
    create: XOR<CardPrintCreateWithoutPricesInput, CardPrintUncheckedCreateWithoutPricesInput>
    where?: CardPrintWhereInput
  }

  export type CardPrintUpdateToOneWithWhereWithoutPricesInput = {
    where?: CardPrintWhereInput
    data: XOR<CardPrintUpdateWithoutPricesInput, CardPrintUncheckedUpdateWithoutPricesInput>
  }

  export type CardPrintUpdateWithoutPricesInput = {
    id?: StringFieldUpdateOperationsInput | string
    setCode?: StringFieldUpdateOperationsInput | string
    collectorNumber?: StringFieldUpdateOperationsInput | string
    rarity?: NullableStringFieldUpdateOperationsInput | string | null
    imageUris?: NullableJsonNullValueInput | InputJsonValue
    scryfallUri?: NullableStringFieldUpdateOperationsInput | string | null
    card?: CardUpdateOneRequiredWithoutPrintsNestedInput
  }

  export type CardPrintUncheckedUpdateWithoutPricesInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardId?: StringFieldUpdateOperationsInput | string
    setCode?: StringFieldUpdateOperationsInput | string
    collectorNumber?: StringFieldUpdateOperationsInput | string
    rarity?: NullableStringFieldUpdateOperationsInput | string | null
    imageUris?: NullableJsonNullValueInput | InputJsonValue
    scryfallUri?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DeckCardCreateWithoutDeckInput = {
    quantity?: number
    isCommander?: boolean
    isCompanion?: boolean
    category?: $Enums.CardRole
    card: CardCreateNestedOneWithoutDeckCardsInput
  }

  export type DeckCardUncheckedCreateWithoutDeckInput = {
    cardId: string
    quantity?: number
    isCommander?: boolean
    isCompanion?: boolean
    category?: $Enums.CardRole
  }

  export type DeckCardCreateOrConnectWithoutDeckInput = {
    where: DeckCardWhereUniqueInput
    create: XOR<DeckCardCreateWithoutDeckInput, DeckCardUncheckedCreateWithoutDeckInput>
  }

  export type DeckCardCreateManyDeckInputEnvelope = {
    data: DeckCardCreateManyDeckInput | DeckCardCreateManyDeckInput[]
    skipDuplicates?: boolean
  }

  export type DeckCardUpsertWithWhereUniqueWithoutDeckInput = {
    where: DeckCardWhereUniqueInput
    update: XOR<DeckCardUpdateWithoutDeckInput, DeckCardUncheckedUpdateWithoutDeckInput>
    create: XOR<DeckCardCreateWithoutDeckInput, DeckCardUncheckedCreateWithoutDeckInput>
  }

  export type DeckCardUpdateWithWhereUniqueWithoutDeckInput = {
    where: DeckCardWhereUniqueInput
    data: XOR<DeckCardUpdateWithoutDeckInput, DeckCardUncheckedUpdateWithoutDeckInput>
  }

  export type DeckCardUpdateManyWithWhereWithoutDeckInput = {
    where: DeckCardScalarWhereInput
    data: XOR<DeckCardUpdateManyMutationInput, DeckCardUncheckedUpdateManyWithoutDeckInput>
  }

  export type DeckCreateWithoutCardsInput = {
    id?: string
    name: string
    commanderNames?: DeckCreatecommanderNamesInput | string[]
    colorIdentity?: DeckCreatecolorIdentityInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeckUncheckedCreateWithoutCardsInput = {
    id?: string
    name: string
    commanderNames?: DeckCreatecommanderNamesInput | string[]
    colorIdentity?: DeckCreatecolorIdentityInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeckCreateOrConnectWithoutCardsInput = {
    where: DeckWhereUniqueInput
    create: XOR<DeckCreateWithoutCardsInput, DeckUncheckedCreateWithoutCardsInput>
  }

  export type CardCreateWithoutDeckCardsInput = {
    id?: string
    oracleId: string
    scryfallId: string
    name: string
    oracleText?: string | null
    typeLine?: string | null
    manaCost?: string | null
    cmc?: number | null
    colorIdentity?: CardCreatecolorIdentityInput | string[]
    keywords?: CardCreatekeywordsInput | string[]
    producedMana?: CardCreateproducedManaInput | string[]
    legalCommander?: boolean
    banned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    prints?: CardPrintCreateNestedManyWithoutCardInput
    cardTags?: CardTagCreateNestedManyWithoutCardInput
  }

  export type CardUncheckedCreateWithoutDeckCardsInput = {
    id?: string
    oracleId: string
    scryfallId: string
    name: string
    oracleText?: string | null
    typeLine?: string | null
    manaCost?: string | null
    cmc?: number | null
    colorIdentity?: CardCreatecolorIdentityInput | string[]
    keywords?: CardCreatekeywordsInput | string[]
    producedMana?: CardCreateproducedManaInput | string[]
    legalCommander?: boolean
    banned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    prints?: CardPrintUncheckedCreateNestedManyWithoutCardInput
    cardTags?: CardTagUncheckedCreateNestedManyWithoutCardInput
  }

  export type CardCreateOrConnectWithoutDeckCardsInput = {
    where: CardWhereUniqueInput
    create: XOR<CardCreateWithoutDeckCardsInput, CardUncheckedCreateWithoutDeckCardsInput>
  }

  export type DeckUpsertWithoutCardsInput = {
    update: XOR<DeckUpdateWithoutCardsInput, DeckUncheckedUpdateWithoutCardsInput>
    create: XOR<DeckCreateWithoutCardsInput, DeckUncheckedCreateWithoutCardsInput>
    where?: DeckWhereInput
  }

  export type DeckUpdateToOneWithWhereWithoutCardsInput = {
    where?: DeckWhereInput
    data: XOR<DeckUpdateWithoutCardsInput, DeckUncheckedUpdateWithoutCardsInput>
  }

  export type DeckUpdateWithoutCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    commanderNames?: DeckUpdatecommanderNamesInput | string[]
    colorIdentity?: DeckUpdatecolorIdentityInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeckUncheckedUpdateWithoutCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    commanderNames?: DeckUpdatecommanderNamesInput | string[]
    colorIdentity?: DeckUpdatecolorIdentityInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardUpsertWithoutDeckCardsInput = {
    update: XOR<CardUpdateWithoutDeckCardsInput, CardUncheckedUpdateWithoutDeckCardsInput>
    create: XOR<CardCreateWithoutDeckCardsInput, CardUncheckedCreateWithoutDeckCardsInput>
    where?: CardWhereInput
  }

  export type CardUpdateToOneWithWhereWithoutDeckCardsInput = {
    where?: CardWhereInput
    data: XOR<CardUpdateWithoutDeckCardsInput, CardUncheckedUpdateWithoutDeckCardsInput>
  }

  export type CardUpdateWithoutDeckCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    oracleId?: StringFieldUpdateOperationsInput | string
    scryfallId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    oracleText?: NullableStringFieldUpdateOperationsInput | string | null
    typeLine?: NullableStringFieldUpdateOperationsInput | string | null
    manaCost?: NullableStringFieldUpdateOperationsInput | string | null
    cmc?: NullableFloatFieldUpdateOperationsInput | number | null
    colorIdentity?: CardUpdatecolorIdentityInput | string[]
    keywords?: CardUpdatekeywordsInput | string[]
    producedMana?: CardUpdateproducedManaInput | string[]
    legalCommander?: BoolFieldUpdateOperationsInput | boolean
    banned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prints?: CardPrintUpdateManyWithoutCardNestedInput
    cardTags?: CardTagUpdateManyWithoutCardNestedInput
  }

  export type CardUncheckedUpdateWithoutDeckCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    oracleId?: StringFieldUpdateOperationsInput | string
    scryfallId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    oracleText?: NullableStringFieldUpdateOperationsInput | string | null
    typeLine?: NullableStringFieldUpdateOperationsInput | string | null
    manaCost?: NullableStringFieldUpdateOperationsInput | string | null
    cmc?: NullableFloatFieldUpdateOperationsInput | number | null
    colorIdentity?: CardUpdatecolorIdentityInput | string[]
    keywords?: CardUpdatekeywordsInput | string[]
    producedMana?: CardUpdateproducedManaInput | string[]
    legalCommander?: BoolFieldUpdateOperationsInput | boolean
    banned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prints?: CardPrintUncheckedUpdateManyWithoutCardNestedInput
    cardTags?: CardTagUncheckedUpdateManyWithoutCardNestedInput
  }

  export type CardTagCreateWithoutTagInput = {
    card: CardCreateNestedOneWithoutCardTagsInput
  }

  export type CardTagUncheckedCreateWithoutTagInput = {
    cardId: string
  }

  export type CardTagCreateOrConnectWithoutTagInput = {
    where: CardTagWhereUniqueInput
    create: XOR<CardTagCreateWithoutTagInput, CardTagUncheckedCreateWithoutTagInput>
  }

  export type CardTagCreateManyTagInputEnvelope = {
    data: CardTagCreateManyTagInput | CardTagCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type CardTagUpsertWithWhereUniqueWithoutTagInput = {
    where: CardTagWhereUniqueInput
    update: XOR<CardTagUpdateWithoutTagInput, CardTagUncheckedUpdateWithoutTagInput>
    create: XOR<CardTagCreateWithoutTagInput, CardTagUncheckedCreateWithoutTagInput>
  }

  export type CardTagUpdateWithWhereUniqueWithoutTagInput = {
    where: CardTagWhereUniqueInput
    data: XOR<CardTagUpdateWithoutTagInput, CardTagUncheckedUpdateWithoutTagInput>
  }

  export type CardTagUpdateManyWithWhereWithoutTagInput = {
    where: CardTagScalarWhereInput
    data: XOR<CardTagUpdateManyMutationInput, CardTagUncheckedUpdateManyWithoutTagInput>
  }

  export type CardCreateWithoutCardTagsInput = {
    id?: string
    oracleId: string
    scryfallId: string
    name: string
    oracleText?: string | null
    typeLine?: string | null
    manaCost?: string | null
    cmc?: number | null
    colorIdentity?: CardCreatecolorIdentityInput | string[]
    keywords?: CardCreatekeywordsInput | string[]
    producedMana?: CardCreateproducedManaInput | string[]
    legalCommander?: boolean
    banned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    prints?: CardPrintCreateNestedManyWithoutCardInput
    deckCards?: DeckCardCreateNestedManyWithoutCardInput
  }

  export type CardUncheckedCreateWithoutCardTagsInput = {
    id?: string
    oracleId: string
    scryfallId: string
    name: string
    oracleText?: string | null
    typeLine?: string | null
    manaCost?: string | null
    cmc?: number | null
    colorIdentity?: CardCreatecolorIdentityInput | string[]
    keywords?: CardCreatekeywordsInput | string[]
    producedMana?: CardCreateproducedManaInput | string[]
    legalCommander?: boolean
    banned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    prints?: CardPrintUncheckedCreateNestedManyWithoutCardInput
    deckCards?: DeckCardUncheckedCreateNestedManyWithoutCardInput
  }

  export type CardCreateOrConnectWithoutCardTagsInput = {
    where: CardWhereUniqueInput
    create: XOR<CardCreateWithoutCardTagsInput, CardUncheckedCreateWithoutCardTagsInput>
  }

  export type TagCreateWithoutCardTagsInput = {
    id?: string
    name: string
    kind?: $Enums.TagKind
    createdAt?: Date | string
  }

  export type TagUncheckedCreateWithoutCardTagsInput = {
    id?: string
    name: string
    kind?: $Enums.TagKind
    createdAt?: Date | string
  }

  export type TagCreateOrConnectWithoutCardTagsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutCardTagsInput, TagUncheckedCreateWithoutCardTagsInput>
  }

  export type CardUpsertWithoutCardTagsInput = {
    update: XOR<CardUpdateWithoutCardTagsInput, CardUncheckedUpdateWithoutCardTagsInput>
    create: XOR<CardCreateWithoutCardTagsInput, CardUncheckedCreateWithoutCardTagsInput>
    where?: CardWhereInput
  }

  export type CardUpdateToOneWithWhereWithoutCardTagsInput = {
    where?: CardWhereInput
    data: XOR<CardUpdateWithoutCardTagsInput, CardUncheckedUpdateWithoutCardTagsInput>
  }

  export type CardUpdateWithoutCardTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    oracleId?: StringFieldUpdateOperationsInput | string
    scryfallId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    oracleText?: NullableStringFieldUpdateOperationsInput | string | null
    typeLine?: NullableStringFieldUpdateOperationsInput | string | null
    manaCost?: NullableStringFieldUpdateOperationsInput | string | null
    cmc?: NullableFloatFieldUpdateOperationsInput | number | null
    colorIdentity?: CardUpdatecolorIdentityInput | string[]
    keywords?: CardUpdatekeywordsInput | string[]
    producedMana?: CardUpdateproducedManaInput | string[]
    legalCommander?: BoolFieldUpdateOperationsInput | boolean
    banned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prints?: CardPrintUpdateManyWithoutCardNestedInput
    deckCards?: DeckCardUpdateManyWithoutCardNestedInput
  }

  export type CardUncheckedUpdateWithoutCardTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    oracleId?: StringFieldUpdateOperationsInput | string
    scryfallId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    oracleText?: NullableStringFieldUpdateOperationsInput | string | null
    typeLine?: NullableStringFieldUpdateOperationsInput | string | null
    manaCost?: NullableStringFieldUpdateOperationsInput | string | null
    cmc?: NullableFloatFieldUpdateOperationsInput | number | null
    colorIdentity?: CardUpdatecolorIdentityInput | string[]
    keywords?: CardUpdatekeywordsInput | string[]
    producedMana?: CardUpdateproducedManaInput | string[]
    legalCommander?: BoolFieldUpdateOperationsInput | boolean
    banned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prints?: CardPrintUncheckedUpdateManyWithoutCardNestedInput
    deckCards?: DeckCardUncheckedUpdateManyWithoutCardNestedInput
  }

  export type TagUpsertWithoutCardTagsInput = {
    update: XOR<TagUpdateWithoutCardTagsInput, TagUncheckedUpdateWithoutCardTagsInput>
    create: XOR<TagCreateWithoutCardTagsInput, TagUncheckedCreateWithoutCardTagsInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutCardTagsInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutCardTagsInput, TagUncheckedUpdateWithoutCardTagsInput>
  }

  export type TagUpdateWithoutCardTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    kind?: EnumTagKindFieldUpdateOperationsInput | $Enums.TagKind
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUncheckedUpdateWithoutCardTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    kind?: EnumTagKindFieldUpdateOperationsInput | $Enums.TagKind
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardPrintCreateManyCardInput = {
    id?: string
    setCode: string
    collectorNumber: string
    rarity?: string | null
    imageUris?: NullableJsonNullValueInput | InputJsonValue
    scryfallUri?: string | null
  }

  export type DeckCardCreateManyCardInput = {
    deckId: string
    quantity?: number
    isCommander?: boolean
    isCompanion?: boolean
    category?: $Enums.CardRole
  }

  export type CardTagCreateManyCardInput = {
    tagId: string
  }

  export type CardPrintUpdateWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    setCode?: StringFieldUpdateOperationsInput | string
    collectorNumber?: StringFieldUpdateOperationsInput | string
    rarity?: NullableStringFieldUpdateOperationsInput | string | null
    imageUris?: NullableJsonNullValueInput | InputJsonValue
    scryfallUri?: NullableStringFieldUpdateOperationsInput | string | null
    prices?: PriceUpdateManyWithoutCardPrintNestedInput
  }

  export type CardPrintUncheckedUpdateWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    setCode?: StringFieldUpdateOperationsInput | string
    collectorNumber?: StringFieldUpdateOperationsInput | string
    rarity?: NullableStringFieldUpdateOperationsInput | string | null
    imageUris?: NullableJsonNullValueInput | InputJsonValue
    scryfallUri?: NullableStringFieldUpdateOperationsInput | string | null
    prices?: PriceUncheckedUpdateManyWithoutCardPrintNestedInput
  }

  export type CardPrintUncheckedUpdateManyWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    setCode?: StringFieldUpdateOperationsInput | string
    collectorNumber?: StringFieldUpdateOperationsInput | string
    rarity?: NullableStringFieldUpdateOperationsInput | string | null
    imageUris?: NullableJsonNullValueInput | InputJsonValue
    scryfallUri?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DeckCardUpdateWithoutCardInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    isCommander?: BoolFieldUpdateOperationsInput | boolean
    isCompanion?: BoolFieldUpdateOperationsInput | boolean
    category?: EnumCardRoleFieldUpdateOperationsInput | $Enums.CardRole
    deck?: DeckUpdateOneRequiredWithoutCardsNestedInput
  }

  export type DeckCardUncheckedUpdateWithoutCardInput = {
    deckId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    isCommander?: BoolFieldUpdateOperationsInput | boolean
    isCompanion?: BoolFieldUpdateOperationsInput | boolean
    category?: EnumCardRoleFieldUpdateOperationsInput | $Enums.CardRole
  }

  export type DeckCardUncheckedUpdateManyWithoutCardInput = {
    deckId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    isCommander?: BoolFieldUpdateOperationsInput | boolean
    isCompanion?: BoolFieldUpdateOperationsInput | boolean
    category?: EnumCardRoleFieldUpdateOperationsInput | $Enums.CardRole
  }

  export type CardTagUpdateWithoutCardInput = {
    tag?: TagUpdateOneRequiredWithoutCardTagsNestedInput
  }

  export type CardTagUncheckedUpdateWithoutCardInput = {
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type CardTagUncheckedUpdateManyWithoutCardInput = {
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type PriceCreateManyCardPrintInput = {
    id?: string
    observedAt?: Date | string
    source: $Enums.PriceSource
    currency?: string
    amount: Decimal | DecimalJsLike | number | string
  }

  export type PriceUpdateWithoutCardPrintInput = {
    id?: StringFieldUpdateOperationsInput | string
    observedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumPriceSourceFieldUpdateOperationsInput | $Enums.PriceSource
    currency?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PriceUncheckedUpdateWithoutCardPrintInput = {
    id?: StringFieldUpdateOperationsInput | string
    observedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumPriceSourceFieldUpdateOperationsInput | $Enums.PriceSource
    currency?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PriceUncheckedUpdateManyWithoutCardPrintInput = {
    id?: StringFieldUpdateOperationsInput | string
    observedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumPriceSourceFieldUpdateOperationsInput | $Enums.PriceSource
    currency?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type DeckCardCreateManyDeckInput = {
    cardId: string
    quantity?: number
    isCommander?: boolean
    isCompanion?: boolean
    category?: $Enums.CardRole
  }

  export type DeckCardUpdateWithoutDeckInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    isCommander?: BoolFieldUpdateOperationsInput | boolean
    isCompanion?: BoolFieldUpdateOperationsInput | boolean
    category?: EnumCardRoleFieldUpdateOperationsInput | $Enums.CardRole
    card?: CardUpdateOneRequiredWithoutDeckCardsNestedInput
  }

  export type DeckCardUncheckedUpdateWithoutDeckInput = {
    cardId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    isCommander?: BoolFieldUpdateOperationsInput | boolean
    isCompanion?: BoolFieldUpdateOperationsInput | boolean
    category?: EnumCardRoleFieldUpdateOperationsInput | $Enums.CardRole
  }

  export type DeckCardUncheckedUpdateManyWithoutDeckInput = {
    cardId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    isCommander?: BoolFieldUpdateOperationsInput | boolean
    isCompanion?: BoolFieldUpdateOperationsInput | boolean
    category?: EnumCardRoleFieldUpdateOperationsInput | $Enums.CardRole
  }

  export type CardTagCreateManyTagInput = {
    cardId: string
  }

  export type CardTagUpdateWithoutTagInput = {
    card?: CardUpdateOneRequiredWithoutCardTagsNestedInput
  }

  export type CardTagUncheckedUpdateWithoutTagInput = {
    cardId?: StringFieldUpdateOperationsInput | string
  }

  export type CardTagUncheckedUpdateManyWithoutTagInput = {
    cardId?: StringFieldUpdateOperationsInput | string
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