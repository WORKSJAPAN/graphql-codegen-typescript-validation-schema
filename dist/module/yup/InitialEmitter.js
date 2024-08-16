import { DeclarationBlock, indent } from '@graphql-codegen/visitor-plugin-common';
export class InitialEmitter {
    withObjectTypesSpec;
    constructor(withObjectTypesSpec) {
        this.withObjectTypesSpec = withObjectTypesSpec;
    }
    emit(enumDeclarations) {
        if (!this.withObjectTypesSpec.shouldIncludeUnion())
            return '\n' + enumDeclarations.join('\n');
        return '\n' + enumDeclarations.join('\n') + '\n' + this.unionFunctionDeclaration();
    }
    unionFunctionDeclaration() {
        return new DeclarationBlock({})
            .asKind('function')
            .withName('union<T extends {}>(schemas: Record<string, yup.ObjectSchema<T>>)')
            .withBlock([
            indent('return (yup.object<T>() as unknown as yup.ObjectSchema<T>).when('),
            indent('([value], schema) => schemas[value?.__typename] ?? schema', 2),
            indent(').defined()'), // HACK: 型を合わせるために、union は undefined を許容しないこととした。問題が出たら考える。
        ].join('\n')).string;
    }
}
