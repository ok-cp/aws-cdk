import * as cdk from '@aws-cdk/core';
import * as ec2 from '@aws-cdk/aws-ec2';
import * as eks from '@aws-cdk/aws-eks';
import * as iam from '@aws-cdk/aws-iam';

export class InfraDevelopEksStack extends cdk.Stack {
  readonly vpc: ec2.IVpc;
  readonly cluster: eks.ICluster;

  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);


  }
}
