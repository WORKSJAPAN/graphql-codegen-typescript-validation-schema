import { Graph } from 'graphlib';
import { DocumentNode, GraphQLSchema, ListTypeNode, NamedTypeNode, NonNullTypeNode, ObjectTypeDefinitionNode, TypeNode } from 'graphql';
export declare const isListType: (typ: TypeNode) => typ is ListTypeNode;
export declare const isNonNullType: (typ: TypeNode) => typ is NonNullTypeNode;
export declare const isNamedType: (typ: TypeNode) => typ is NamedTypeNode;
export declare const isInput: (kind: string) => boolean;
type ObjectTypeDefinitionFn = (node: ObjectTypeDefinitionNode) => any;
export declare const ObjectTypeDefinitionBuilder: (useObjectTypes: false | 'no-reserved' | 'all' | undefined, callback: ObjectTypeDefinitionFn) => ObjectTypeDefinitionFn | undefined;
export declare const topologicalSortAST: (schema: GraphQLSchema, ast: DocumentNode) => DocumentNode;
export declare const topsort: (g: Graph) => string[];
export declare const isGeneratedByIntrospection: (schema: GraphQLSchema) => boolean;
export declare const isSpecifiedScalarName: (scalarName: string) => scalarName is string;
export {};
