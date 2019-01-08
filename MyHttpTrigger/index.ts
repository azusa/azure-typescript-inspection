export async function run(context: any, req: any) {
    context.log('JavaScript HTTP trigger function processed a request.');
    context.res = {
        body: "Hello " + process.versions.node
    };
};