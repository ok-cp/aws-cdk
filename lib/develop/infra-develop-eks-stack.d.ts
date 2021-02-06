import * as cdk from '@aws-cdk/core';
import * as ec2 from '@aws-cdk/aws-ec2';
import * as eks from '@aws-cdk/aws-eks';
export declare class InfraDevelopEksStack extends cdk.Stack {
    readonly vpc: ec2.IVpc;
    readonly cluster: eks.ICluster;
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps);
}
