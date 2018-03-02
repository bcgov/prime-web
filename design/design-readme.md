All commands should be executed in this design folder.  Some of the scripts try to parse the rest of the project source and fail.

## Generating JSON-Schema from TypeScript

https://github.com/YousefED/typescript-json-schema

Note: Currently the generator does not work if there are any abstract classes.  If you get an error, first try converting all "abstract" classes into regular classes.

```bash
npm install -g typescript-json-schema
typescript-json-schema "object-oriented-design.ts" Role -o schema/role.schema.json
```


## Generating UML from Typescript

We can auto-generate a .puml file (used to create a UML diagram) using tsuml-cli.  However, tsuml-cli is not without issues and the .puml has to be manually editted after the fact.

https://www.npmjs.com/package/tsuml-cli

```bash
npm install -g tsuml-cli
tsuml object-oriented-design.ts temp
```

This creates `design/temp/object-oriented-design.puml`.  Eventually you will delete this temp folder, copying the .puml to `design/object-oriented-design.puml`. However, it's best to keep both files around to compare while making your changes. As the original .puml has been significantly editted, it's probably best for you to manually copy over the relevant parts from your new file.

For some reason, tsuml-cli misses enums, so you have to manually copy the enums over to the generated .puml. I placed them right before the bottom section that starts with "Base --> guid".

Additionally, you may have to add some relationships to the .puml file. For example, I had to add these:

  Person --> Colleges
  Role --> SelfDeclaration

My theory (unconfirmed) is that it's because we use array types, e.g. `SelfDeclaration[]` causes tsuml an issue.
