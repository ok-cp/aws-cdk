import * as cdk from '@aws-cdk/core';
import * as ec2 from '@aws-cdk/aws-ec2';
export declare class InfraDevelopStack extends cdk.Stack {
    readonly vpc: ec2.IVpc;
    get availabilityZones(): string[];
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps);
}
