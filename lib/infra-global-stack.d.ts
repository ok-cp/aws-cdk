import * as cdk from '@aws-cdk/core';
import * as route53 from '@aws-cdk/aws-route53';
export declare class InfraGlobalStack extends cdk.Stack {
    readonly route53: route53.IHostedZone;
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps);
}
